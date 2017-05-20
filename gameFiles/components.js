CLOCKWORKRT.components.register([
    {
        name: "card",
        sprite: "card",
        events: [
            {
                name: "#setup", code: function () {
                    if (typeof window !== 'undefined') { //Skip this lines on the headless engine (the server)
                        this.var.$face = new Image();
                        this.var.$face.src = this.engine.getAnimationEngine().getWorkingFolder() + this.var.$faceSrc;
                    }
                    this.var.moving = false;
                    this.var.selected = false;
                    this.do.displayState("");
                }
            },
            {
                name: "moveHand", code: function (event) {
                    this.var.position = "hand";
                    this.var.handPosition = event.number;
                    this.setCollider("card", {
                        "x": -250, "y": -400, "w": 500, "h": 800
                    });
                    this.do.moveTo({ x: 420 + event.number * 540, y: 1390, callback: event.callback });
                }
            },
            {
                name: "tryMoveSelected", code: function (event) {
                    if (this.var.selected === true) {
                        if (event.position === "slot" && this.var.position === "hand") {
                            this.engine.do.playerAction({
                                action: "moveCard",
                                position: event.position,
                                target: event.target,
                                card: this.var.id
                            });
                        }
                    }
                }
            },
            {
                name: "moveCard", code: function (event) {
                    if (this.var.id === event.card) {
                        this.do.move(event);
                    }
                }
            },
            {
                name: "move", code: function (event) {
                    if ((event.position === "slot" || event.position === "opponentSlot") && this.var.position !== "slot") {

                        this.engine.do.removeCard(this);
                        this.var.position = event.position;
                        this.setCollider("card", {
                            "x": -125, "y": -200, "w": 250, "h": 400
                        });
                        this.do.displayState("TableAnimation");
                        this.var.slotPosition = event.target;
                        this.var.selected = false;
                        var that = this;
                        var moveCallback = event.callback;
                        this.do.moveTo({
                            x: event.position === "slot" ? 435 + (event.target - 4) * 350 : 435 + (event.target) * 350, y: event.position === "slot" ? 800 : 280, callback: function () {
                                that.var.$z = 10;
                                if (moveCallback) {
                                    moveCallback();
                                }
                            }
                        });
                    }
                }
            },
            {
                name: "moveTo", code: function (data) {
                    this.var.moving = true;
                    this.var.target = data;
                }
            },
            {
                name: "#loop", code: function (data) {
                    if (this.var.moving === true) {
                        var dx = this.var.target.x - this.var.$x;
                        var dy = this.var.target.y - this.var.$y;
                        var speed = this.var.target.v || 40;
                        distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < speed) {
                            this.var.$x = this.var.target.x;
                            this.var.$y = this.var.target.y;
                            this.var.moving = false;
                            if (this.var.target.callback) {
                                this.var.target.callback();
                            }
                        } else {
                            this.var.$x += speed * dx / distance;
                            this.var.$y += speed * dy / distance;
                        }
                    }
                }
            },
            {
                name: "#collide", code: function (data) {
                    if (data.shape2tag === "click") {
                        this.engine.do.addClickCandidate(this);
                    }
                }
            },
            {
                name: "click", code: function (data) {
                    this.engine.do.addClickCandidate(this);
                    if (this.var.position === "opponentSlot") {
                        this.engine.do.battleSelected(this);
                    } else {
                        if (this.var.selected === true) {
                            this.do.unselect();
                        } else {
                            this.do.select();
                        }
                    }
                }
            },
            {
                name: "select", code: function (data) {
                    this.engine.do.unselect();
                    this.var.selected = true;
                    if (this.var.position === "hand") {
                        this.do.displayState("Selected");
                        this.var.$z = 100;
                        this.do.moveTo({ x: 960, y: 450 });
                    }
                    if (this.var.position === "slot") {
                        this.do.displayState("SelectedTable");
                        this.var.$z = 100;
                    }
                }
            },
            {
                name: "unselect", code: function (data) {
                    if (this.var.selected === true) {
                        this.do.goToDefaultPosition();
                    }
                    this.var.selected = false;
                }
            },
            {
                name: "goToDefaultPosition", code: function (data) {
                    switch (this.var.position) {
                        case "hand":
                            this.do.displayState("");
                            this.var.$z = 100;
                            this.do.moveTo({ x: 420 + this.var.handPosition * 540, y: 1390 });
                            break;
                        case "slot":
                            this.do.displayState("Table");
                            var that = this;
                            this.do.moveTo({
                                x: 435 + (this.var.slotPosition - 4) * 350, y: 800, callback: function () {
                                    that.var.$z = 10;
                                }
                            });
                            break;
                        case "opponentSlot":
                            this.do.displayState("Table");
                            var that = this;
                            this.do.moveTo({
                                x: 435 + this.var.slotPosition * 350, y: 280, callback: function () {
                                    that.var.$z = 10;
                                }
                            });
                            break;
                    }
                }
            },
            {
                name: "battleSelected", code: function (card) {
                    if (this.var.selected === true) {
                        this.do.unselect();
                        this.engine.do.playerAction({ action: "startBattle", attacker: this, defender: card, localPlayerAttacks: true });
                    }
                }
            },
            {
                name: "displayState", code: function (state) {
                    this.var.$state = this.var.cardType + state;
                }
            },
            {
                name: "destroy", code: function (data) {
                    this.engine.deleteObjectLive(this);
                }
            },
        ],
        collision: {
            "box": [
                { "#tag": "card", "x": -250, "y": -400, "w": 500, "h": 800 }
            ]
        }
    },
    {
        name: "characterCard",
        inherits: "card",
        vars: [
            { name: "cardType", value: "character" }
        ]
    },
    {
        name: "background",
        sprite: "background"
    },
    {
        name: "slot",
        sprite: "slot",
        events: [
            {
                name: "#collide", code: function (data) {
                    if (this.var.player === "local" && data.shape2tag === "click") {
                        this.engine.do.addClickCandidate(this);
                    }
                }
            },
            {
                name: "click", code: function (data) {
                    var that = this;
                    this.engine.do.tryMoveSelected({
                        target: this.var.id, position: "slot"
                    });
                }
            }
        ],
        collision: {
            "box": [
                { "#tag": "fullSizedCard", "x": -125, "y": -200, "w": 200, "h": 400 }
            ]
        }
    },
    {
        name: "localPlayer",
        events: [
            {
                name: "#setup", code: function () {
                    this.var.hand = [];
                    this.var.board = [];
                    this.var.hasTurn = false;
                }
            },
            {
                name: "addCard", code: function (event) {
                    var card = event.card;
                    if (this.var.hand.length < 3) {
                        card.do.moveHand({ number: this.var.hand.length, callback: event.callback });
                        this.var.hand[this.var.hand.length] = card;
                    } else {
                        this.engine.debug.log("Tried to add a 4th card to a hand!");
                    }
                }
            },
            {
                name: "removeCard", code: function (card) {
                    this.var.hand = this.var.hand.filter(function (x) {
                        return x !== card;
                    });
                    this.var.hand.forEach(function (x, i) {
                        x.do.moveHand({ number: i });
                    });
                }
            },
            {
                name: "startTurn", code: function (event) {
                    this.var.hasTurn = true;
                }
            },
            {
                name: "playerAction", code: function (event) {
                    if (this.var.hasTurn === true) {
                        this.engine.do.reportPlayerAction(event);
                        var that = this;
                        this.engine.do[event.action](event);
                        this.var.hasTurn = false;
                        this.engine.do.endTurn();
                    }
                }
            }
        ]
    },
    {
        name: "remotePlayer",
        events: [
            {
                name: "#setup", code: function () {
                    this.var.i = 0;
                }
            },
            {
                name: "remotePlayerMoveCard", code: function (event) {
                    var card = this.engine.addObjectLive("card" + event.card.id, event.card.type, 960, -400, 100);
                    card.var.id = event.card.id;
                    card.do.move({
                        position: "opponentSlot",
                        target: event.target,
                        callback: this.engine.do.startTurn
                    });
                }

            }
        ]
    },
    {
        name: "dealer",
        events: [
            {
                name: "#setup", code: function () {
                    this.var.id = 0;
                    this.var.turn = 0;
                }
            },
            {
                name: "dealCard", code: function (data) {
                    var card = this.engine.addObjectLive("card" + data.cardid, data.cardType, 960, -400, 100);
                    card.var.id = data.cardid;
                    this.engine.do.addCard({ card: card });
                    //todo :     that.engine.do.startTurn(that.var.turn);
                }
            }
        ]
    },
    {
        name: "clickHandler",
        events: [
            {
                name: "#setup", code: function () {
                    this.var.clicked = [];
                }
            },
            {
                name: "addClickCandidate", code: function (object) {
                    this.var.clicked.push(object);
                }
            },
            {
                name: "#loop", code: function (event) {
                    if (this.var.clicked.length > 0) {
                        this.var.clicked.reduce(function (a, b) {
                            return a.var.z > b.var.z ? a : b;
                        }).do.click();
                        this.var.clicked = [];
                    }
                }
            }
        ]
    },
    {
        name: "battleManager",
        sprite: "battleManager",
        events: [
            {
                name: "#setup", code: function () {
                }
            },
            {
                name: "startBattle", code: function (battle) {
                    battle.attacker.do.moveTo({ x: 435, y: 550 });
                    battle.attacker.var.$z = 1000;
                    battle.defender.do.moveTo({ x: 1485, y: 550 });
                    battle.defender.var.$z = 1000;
                    battle.attacker.do.displayState("Battle");
                    battle.defender.do.displayState("Battle");
                    this.var.$state = "startBattle";
                    this.var.attacker = battle.attacker;
                    this.var.defender = battle.defender;
                    this.var.endBattleCallback = battle.callback;
                    this.var.localPlayerAttacks = battle.localPlayerAttacks;
                    this.engine.do.showBattleUI({ localPlayerAttacks: battle.localPlayerAttacks });
                }
            },
            {
                name: "selectedBattleSkill", code: function (text) {
                    var battleManager = this;
                    var attacker = this.var.attacker;
                    var defender = this.var.defender;
                    var won = attacker.var.$stats[text.toLowerCase()] >= defender.var.$stats[text.toLowerCase()];
                    this.engine.do.hideVersusText();
                    attacker.do.moveTo({ x: 860, y: 550, v: 20 });
                    defender.do.moveTo({
                        x: 1060, y: 550, v: 20, callback: function () {
                            battleManager.do.endBattle(won);
                        }
                    });
                    if (this.var.localPlayerAttacks) {
                        this.engine.do.reportPlayerAction({ action: "selectedBattleSkill", stat: text.toLowerCase() });
                    }
                }
            },
            {
                name: "endBattle", code: function (won) {
                    var attacker = this.var.attacker;
                    var defender = this.var.defender;
                    if (won) {
                        defender.do.destroy();
                        attacker.do.goToDefaultPosition();
                    } else {
                        attacker.do.destroy();
                        defender.do.goToDefaultPosition();
                    }
                    this.var.$state = "empty";
                    this.var.endBattleCallback();
                }
            }
        ]
    },
    {
        name: "versusText",
        sprite: "versusText",
        events: [
            {
                name: "showBattleUI", code: function () {
                    this.var.$state = "text";
                }
            },
            {
                name: "hideVersusText", code: function () {
                    this.var.$state = "hide";
                }
            }
        ]
    },
    {
        name: "skillButton",
        sprite: "skillButton",
        events: [
            {
                name: "#setup", code: function (data) {
                }
            },
            {
                name: "showBattleUI", code: function (data) {
                    if (data.localPlayerAttacks) {
                        this.var.$state = "idle";
                    }
                }
            },
            {
                name: "#collide", code: function (data) {
                    if (data.shape2tag === "click" && this.var.$state === "idle") {
                        this.engine.do.addClickCandidate(this);
                    }
                }
            },
            {
                name: "click", code: function (data) {
                    var that = this;
                    this.var.$state = "clicked";
                    this.engine.do.hideBattleButtons(this.var.$text);
                    setTimeout(function () {
                        that.engine.do.selectedBattleSkill(that.var.$text);
                        that.var.$state = "hidden";
                    }, 400);
                }
            },
            {
                name: "hideBattleButtons", code: function (text) {
                    if (this.var.$text !== text) {
                        this.var.$state = "hidden";
                    }
                }
            }
        ],
        collision: {
            "box": [
                { "#tag": "button", "x": -250, "y": -60, "w": 500, "h": 120 }
            ]
        }
    },
    {
        name: "battleProfile",
        sprite: "battleProfile",
        events: [
            {
                name: "setPlayerData", code: function (data) {
                    this.var.$name = data.name;
                    this.var.$image = new Image();
                    this.var.$image.src = data.image;
                    this.var.$state = "player";
                    this.var.$text = "";
                }
            },
            {
                name: "setOpponentData", code: function (data) {
                    this.var.$name = data.name;
                    this.var.$image = new Image();
                    this.var.$image.src = data.image;
                    this.var.$state = "opponent";
                    this.var.$text = "Wait for my move";
                }
            },
            {
                name: "startTurn", code: function (data) {
                    if (this.var.$state == "player") {
                        this.var.$text = "It is your turn";
                    }
                    if (this.var.$state == "opponent") {
                        this.var.$text = "";
                    }
                }
            },
            {
                name: "endTurn", code: function (data) {
                    if (this.var.$state == "player") {
                        this.var.$text = "";
                    }
                    if (this.var.$state == "opponent") {
                        this.var.$text = "Wait for my move";
                    }
                }
            }
        ]
    },
    {
        name: "networkGameLogic",
        events: [
            {
                name: "#setup", code: function () {
                    this.engine.find("playerBattleProfile").do.setPlayerData({ name: this.engine.var.playerName, image: "https://twitter.com/" + this.engine.var.playerName + "/profile_image?size=original" });
                    this.engine.find("opponentBattleProfile").do.setOpponentData({ name: this.engine.var.opponentName, image: "https://twitter.com/" + this.engine.var.opponentName + "/profile_image?size=original" });
                    this.engine.do.socketSend({ action: "startGameRequest" });
                    this.var.isPlayer2 = false;
                }
            },
            {
                name: "socketReceive", code: function (data) {
                    switch (data.action) {
                        case "drawCard":
                            this.engine.do.dealCard({ cardType: data.card.type, cardid: data.card.id });
                            break;
                        case "moveCard":
                            if (this.var.isPlayer2 === true) {
                                data.target = (data.target + 4) % 8;
                            }
                            this.engine.do.remotePlayerMoveCard(data);
                            break;
                        case "setPlayer1":
                            this.engine.do.startTurn();
                            break;
                        case "setPlayer2":
                            this.var.isPlayer2 = true;
                            break;
                        case "startBattle":
                            this.engine.do.startBattle({ attacker: this.engine.find("card" + data.attacker), defender: this.engine.find("card" + data.defender), localPlayerAttacks: false });
                            break;
                        case "selectedBattleSkill":
                            this.engine.do.selectedBattleSkill(data.stat);
                            this.engine.do.startTurn();
                            break;
                        case "win":
                            this.engine.var.gameOverReason = "win";
                            this.engine.loadLevelByID("gameOver");
                            break;
                        case "lose":
                            this.engine.var.gameOverReason = "lose";
                            this.engine.loadLevelByID("gameOver");
                            break;
                    }
                }
            },
            {
                name: "reportPlayerAction", code: function (data) {
                    switch (data.action) {
                        case "moveCard":
                            var newTarget;
                            if (this.var.isPlayer2 === true) {
                                newTarget = (data.target + 4) % 8;
                            } else {
                                newTarget = data.target;
                            }
                            this.engine.do.socketSend({
                                action: "gameAction", actionDetails: {
                                    action: "moveCard",
                                    target: newTarget,
                                    position: data.position,
                                    card: data.card
                                }
                            });
                            break;
                        case "startBattle":
                            this.engine.do.socketSend({
                                action: "gameAction", actionDetails: {
                                    action: "startBattle",
                                    attacker: data.attacker.var.id,
                                    defender: data.defender.var.id
                                }
                            });
                            break;
                        case "selectedBattleSkill":
                            this.engine.do.socketSend({
                                action: "gameAction", actionDetails: {
                                    action: "selectedBattleSkill",
                                    stat: data.stat
                                }
                            });
                            break;
                    }
                }
            }
        ]
    }
]);