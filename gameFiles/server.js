CLOCKWORKRT.components.register([
    {
        name: "serverLog",
        events: [
            {
                name: "socketConnected", code: function (id) {
                    console.log("Player " + id + " connected");
                }
            },
            {
                name: "socketReceive", code: function (data) {
                    console.log("Player " + data.id + " sent " + JSON.stringify(data.data));
                }
            },
        ]
    },
    {
        name: "gamesQueue",
        events: [
            {
                name: "#setup", code: function (id) {
                    this.var.queue = [];
                }
            },
            {
                name: "socketReceiveAuthenticated", code: function (event) {
                    if (event.data.action === "newGameRequest") {
                        var length = this.var.queue.push({
                            user: event.id
                        });
                        this.engine.do.socketSend({ id: event.id, data: { action: "newGameResponse", result: false, queuePosition: length } });
                    }
                    if (event.data.action === "joinGameRequest") {
                        if (this.var.queue.length > 0) {
                            var game = this.var.queue.shift();
                            this.engine.do.createNewGame({ player1: game.user, player2: event.id });
                            this.engine.do.socketSend({ id: event.id, data: { action: "joinGameResponse", result: true, playerName: this.engine.var.socketToUsername[event.id], opponentName: this.engine.var.socketToUsername[game.user] } });
                            this.engine.do.socketSend({ id: game.user, data: { action: "newGameResponse", result: true, opponentName: this.engine.var.socketToUsername[event.id], playerName: this.engine.var.socketToUsername[game.user] } });
                            var that = this;
                            this.var.queue.forEach(function (game, i) {
                                that.engine.do.socketSend({ id: game.user, data: { action: "newGameResponse", result: false, queuePosition: i + 1 } });
                            })
                        } else {
                            this.engine.do.socketSend({ id: event.id, data: { action: "joinGameResponse", result: false } });
                        }
                    }
                }
            }
        ]
    },
    {
        name: "gamesManager",
        events: [
            {
                name: "#setup", code: function (id) {
                    this.var.playerGame = [];
                }
            },
            {
                name: "createNewGame", code: function (event) {
                    var newGame = {
                        player1: event.player1,
                        player2: event.player2,
                        board: [],
                        player1hand: [],
                        player2hand: [],
                        player1deck: ["ArcadioGarcia", "AaronGreenberg", "ArcadioGarcia", "AaronGreenberg"],
                        player2deck: ["ArcadioGarcia", "AaronGreenberg", "ArcadioGarcia", "AaronGreenberg"],
                        player1started: false,
                        player2started: false,
                        gameStarted: false,
                        cardid: 0,
                        attacker: -1,
                        defender: -1,
                        attackingPlayer: -1
                    };
                    this.var.playerGame[event.player1] = newGame;
                    this.var.playerGame[event.player2] = newGame;
                }
            },
            {
                name: "socketReceiveAuthenticated", code: function (event) {
                    if (event.data.action === "startGameRequest") {
                        if (this.var.playerGame[event.id] && this.var.playerGame[event.id].gameStarted === false) {
                            if (this.var.playerGame[event.id].player1 === event.id) {
                                if (this.var.playerGame[event.id].player1started === false) {
                                    this.var.playerGame[event.id].player1started = true;
                                    this.do.checkGameReadyStart(this.var.playerGame[event.id]);
                                }
                            }
                            if (this.var.playerGame[event.id].player2 === event.id) {
                                if (this.var.playerGame[event.id].player2started === false) {
                                    this.var.playerGame[event.id].player2started = true;
                                    this.do.checkGameReadyStart(this.var.playerGame[event.id]);
                                }
                            }
                        }
                    } else if (event.data.action === "gameAction") {
                        if (this.var.playerGame[event.id] && this.var.playerGame[event.id].gameStarted === true) {
                            var action = event.data.actionDetails;
                            action.game = this.var.playerGame[event.id];
                            action.player = action.game.player1 == event.id ? "player1" : "player2";
                            action.otherPlayer = action.game.player1 == event.id ? "player2" : "player1";
                            this.do.tryGameAction(action);
                        }
                    }
                }
            },
            {
                name: "checkGameReadyStart", code: function (game) {
                    if (game.player1started && game.player2started) {
                        game.gameStarted = true;
                        //Every player draws 3 card at the start
                        this.engine.do.socketSend({ id: game.player1, data: { action: "setPlayer1" } });
                        this.engine.do.socketSend({ id: game.player2, data: { action: "setPlayer2" } });
                        this.do.tryGameAction({ action: "drawCard", game: game, player: "player1" });
                        this.do.tryGameAction({ action: "drawCard", game: game, player: "player1" });
                        this.do.tryGameAction({ action: "drawCard", game: game, player: "player1" });
                        this.do.tryGameAction({ action: "drawCard", game: game, player: "player2" });
                        this.do.tryGameAction({ action: "drawCard", game: game, player: "player2" });
                        this.do.tryGameAction({ action: "drawCard", game: game, player: "player2" });
                    }
                }
            },
            {
                name: "tryGameAction", code: function (action) {
                    switch (action.action) {
                        case "drawCard":
                            var deck = action.game[action.player + "deck"];
                            if (deck.length > 0) {
                                var card = { type: deck.shift(), id: action.game.cardid++ };
                                var hand = action.game[action.player + "hand"];
                                hand.push(card);
                                this.engine.do.socketSend({ id: action.game[action.player], data: { action: "drawCard", card: card } });
                            }
                            break;
                        case "moveCard":
                            var hand = action.game[action.player + "hand"];
                            var board = action.game.board;
                            var candidates = hand.filter(function (card) { return card.id == action.card; });
                            if (candidates.length == 1 && action.position == "slot" && !board[action.target]) {
                                var cardInfo = candidates[0];
                                action.game[action.player + "hand"] = hand.filter(function (card) { return card.id != action.card; });
                                var card = this.engine.addObjectLive("card" + cardInfo.id, cardInfo.type, 0, 0, 0);
                                card.var.id = cardInfo.id;
                                card.var.position = action.target;
                                board[action.target] = card;
                                this.engine.do.socketSend({ id: action.game[action.otherPlayer], data: { action: "moveCard", card: cardInfo, target: action.target, position: action.position } });
                                this.do.tryGameAction({ action: "drawCard", game: action.game, player: action.player });
                            } else {
                                this.engine.do.socketSend({ id: action.game[action.player], data: { action: "cheatingDetected" } });
                                this.engine.do.socketSend({ id: action.game[action.otherPlayer], data: { action: "cheatingDetected" } });
                            }
                            break;
                        case "startBattle":
                            var board = action.game.board;
                            var player2board = board.slice(0, 4);
                            var player1board = board.slice(4);
                            var attackerCandidates;
                            var defenderCandidate;
                            if (action.player == "player1") {
                                attackerCandidates = player1board.filter(function (card) { return card && card.var.id == action.attacker; });
                                defenderCandidates = player2board.filter(function (card) { return card && card.var.id == action.defender; });
                            } else if (action.player == "player2") {
                                attackerCandidates = player2board.filter(function (card) { return card && card.var.id == action.attacker; });
                                defenderCandidates = player1board.filter(function (card) { return card && card.var.id == action.defender; });
                            }
                            if (attackerCandidates.length == 1 && defenderCandidates.length == 1) {
                                action.game.attacker = action.attacker;
                                action.game.defender = action.defender;
                                action.game.attackingPlayer = action.player;
                                this.engine.do.socketSend({ id: action.game[action.otherPlayer], data: { action: "startBattle", attacker: action.attacker, defender: action.defender } });
                            } else {
                                this.engine.do.socketSend({ id: action.game[action.player], data: { action: "cheatingDetected" } });
                                this.engine.do.socketSend({ id: action.game[action.otherPlayer], data: { action: "cheatingDetected" } });
                            }
                            break;
                        case "selectedBattleSkill":
                            var board = action.game.board;
                            if (action.game.attacker !== -1 && action.game.defender !== -1 && action.game.attackingPlayer === action.player) {
                                var attacker = this.engine.find("card" + action.game.attacker);
                                var defender = this.engine.find("card" + action.game.defender);
                                var won = attacker.var.$stats[action.stat] >= defender.var.$stats[action.stat];
                                if (won === true) {
                                    board[defender.var.position] = null;
                                    this.engine.deleteObjectLive(defender);
                                } else {
                                    board[attacker.var.position] = null;
                                    this.engine.deleteObjectLive(attacker);
                                }
                                this.engine.do.socketSend({ id: action.game[action.otherPlayer], data: { action: "selectedBattleSkill", stat: action.stat } });
                                action.game.attacker = -1;
                                action.game.defender = -1;
                                this.do.checkGameEnded(action.game);
                            } else {
                                this.engine.do.socketSend({ id: action.game[action.player], data: { action: "cheatingDetected" } });
                                this.engine.do.socketSend({ id: action.game[action.otherPlayer], data: { action: "cheatingDetected" } });
                            }
                            break;
                    }
                }
            },
            {
                name: "checkGameEnded", code: function (game) {
                    var board = game.board;
                    var player2board = board.slice(0, 4).filter(function (c) { return c; });
                    var player1board = board.slice(4).filter(function (c) { return c; });
                    if (player1board.length == 0 && game.player1hand.length == 0) {
                        this.engine.do.socketSend({ id: game.player1, data: { action: "lose" } });
                        this.engine.do.socketSend({ id: game.player2, data: { action: "win" } });
                        var that = this;
                        board.forEach(function (c) {
                            if (c) {
                                that.engine.deleteObjectLive(c);
                            }
                        })
                    } else if (player2board.length == 0 && game.player2hand.length == 0) {
                        this.engine.do.socketSend({ id: game.player1, data: { action: "win" } });
                        this.engine.do.socketSend({ id: game.player2, data: { action: "lose" } });
                        board.forEach(function (c) {
                            if (c) {
                                that.engine.deleteObjectLive(c);
                            }
                        })
                    }
                }
            },
        ]
    }
]);