CLOCKWORKRT.components.register([
    {
        name: "minimalMessage",
        sprite: "minimalMessage"
    },
    {
        name: "blissBackground",
        sprite: "blissBackground"
    },
    {
        name: "acrylicBox",
        sprite: "acrylicBox",
        events: [
            {
                name: "#setup", code: function () {
                    var that = this;
                    setTimeout(function () {
                        that.var.loaded = true;
                        that.engine.do.addRevealBorders({ x: that.var.$x, y: that.var.$y, w: that.var.$w, h: that.var.$h });
                    }, this.var.$delay + 500);
                    this.var.$img = new Image();
                    this.var.$img.src = this.engine.getRenderingLibrary().getWorkingFolder() + this.var.src;
                    if (this.var.iconSrc) {
                        this.var.$iconImg = new Image();
                        this.var.$iconImg.src = this.engine.getRenderingLibrary().getWorkingFolder() + this.var.iconSrc;
                    }
                    this.setCollider("box", {
                        "x": 0, "y": 0, "w": this.var.$w, "h": this.var.$h
                    });
                }
            },
            {
                name: "#collide", code: function (data) {
                    if (data.shape2tag === "hover") {
                        this.var.active = true;
                        if (this.var.$mouseX !== this.var.$x + data.data.x * this.var.$w || this.var.$mouseY !== this.var.$y + data.data.y * this.var.$h) {
                            this.var.$mouseX = this.var.$x + data.data.x * this.var.$w;
                            this.var.$mouseY = this.var.$y + data.data.y * this.var.$h;
                            this.var.$dirtyGrad = true;
                        }
                    }
                    if (data.shape2tag === "click") {
                        this.var.clicked = true;
                        this.var.$mouseX = this.var.$x + data.data.x * this.var.$w;
                        this.var.$mouseY = this.var.$y + data.data.y * this.var.$h;
                        this.do.clicked();
                    }
                }
            },
            {
                name: "#loop", code: function (data) {
                    if (this.var.loaded === true) {
                        if (this.var.clicked === true) {
                            this.var.$state = "clicked";
                            var that = this;
                            this.engine.getRenderingLibrary().setEndedCallback(this.spriteholder, function () {
                                that.var.clicked = false;
                                that.var.$dirtyGrad = true;
                            });
                        } else if (this.var.active === true) {
                            this.var.$state = "active";
                            this.var.active = false;
                        } else {
                            this.var.$state = "inactive";
                        }
                    }
                }
            },
            {
                name: "fadeOut", code: function () {
                    this.var.loaded = false;
                    this.var.$state = "fadingOut";
                }
            }
        ],
        collision: {
            "box": [
                { "#tag": "box", "x": 0, "y": 0, "w": 0, "h": 0 }
            ]
        }
    },
    {
        name: "acrylicButton",
        inherits: "acrylicBox",
        events: [
            {
                name: "clicked", code: function () {
                    this.engine.do[this.var.trigger]();
                }
            }
        ]
    },
    {
        name: "fluentReveal",
        sprite: "fluentReveal",
        events: [
            {
                name: "#setup", code: function () {
                    this.var.$mouseX = -1000;
                    this.var.$mouseY = -1000;
                    this.var.$dirtyGrad = true;
                    this.var.$borders = [];
                }
            },
            {
                name: "addRevealBorders", code: function (border) {
                    this.var.$borders.push(border)
                }
            },
            {
                name: "#collide", code: function (data) {
                    if (data.shape2tag === "hover") {
                        if (this.var.$mouseX !== this.var.$mouseX || this.var.$mouseY !== data.data.y * 1080) {
                            this.var.$mouseX = data.data.x * 1920;
                            this.var.$mouseY = data.data.y * 1080;
                            this.var.$dirtyGrad = true;
                        }
                    }
                }
            },
            {
                name: "fadeOut", code: function () {
                    this.var.$borders = [];
                }
            }
        ],
        collision: {
            "box": [
                { "#tag": "screen", "x": 0, "y": 0, "w": 1920, "h": 1080 }
            ]
        }
    },
    {
        name: "mainMenuLogic",
        events: [
            {
                name: "loadLevel", code: function (level) {
                    this.engine.loadLevel(level);
                }
            },
            {
                name: "newgame", code: function () {
                    this.engine.do.fadeOut();
                    var that = this;
                    setTimeout(function () {
                        that.do.loadLevel("newGame");
                    }, 1750);
                }
            },
            {
                name: "join", code: function () {
                    this.engine.do.fadeOut();
                    var that = this;
                    setTimeout(function () {
                        that.do.loadLevel("joinGame");
                    }, 1750);
                }
            },
            {
                name: "profile", code: function () {
                    this.engine.do.fadeOut();
                    var that = this;
                    setTimeout(function () {
                        that.do.loadLevel("mainMenu");
                    }, 1750);
                }
            },
            {
                name: "about", code: function () {
                    this.engine.find("mainPane").var.$iconImg.src = this.engine.getRenderingLibrary().getWorkingFolder() + "/images/menu/about.png";
                }
            }
        ]
    },
    {
        name: "joinGameLogic",
        events: [
            {
                name: "#setup", code: function () {
                    this.engine.do.socketSend({ action: "joinGameRequest" });
                }
            },
            {
                name: "socketReceive", code: function (data) {
                    if (data.action === "joinGameResponse") {
                        if (data.result === true) {
                            this.engine.var.playerName = data.playerName;
                            this.engine.var.opponentName = data.opponentName;
                            this.engine.loadLevel("mainLevel");
                        } else {
                            this.engine.find("messagePane").var.$text = "Couldn't find games to join, please create one.";
                            var that = this;
                            setTimeout(function () {
                                that.do.goBack();
                            }, 2000);
                        }
                    }
                }
            },
            {
                name: "goBack", code: function (data) {
                    this.engine.loadLevel("mainMenu");
                }
            }
        ]
    },
    {
        name: "newGameLogic",
        events: [
            {
                name: "#setup", code: function () {
                    this.engine.do.socketSend({ action: "newGameRequest" });
                }
            },
            {
                name: "socketReceive", code: function (data) {
                    if (data.action === "newGameResponse") {
                        if (data.result === true) {
                            this.engine.var.playerName = data.playerName;
                            this.engine.var.opponentName = data.opponentName;
                            this.engine.loadLevel("mainLevel");
                        } else {
                            this.engine.find("messagePane").var.$text = "Finding an opponent! Queue position:" + data.queuePosition;
                        }
                    }
                }
            },
            {
                name: "goBack", code: function (data) {
                    this.engine.loadLevel("mainLevel");
                }
            }
        ]
    },
    {
        name: "bsod",
        sprite: "bsod",
        events: [
            {
                name: "#setup", code: function () {
                    switch (this.engine.var.gameOverReason) {
                        case "cheating":
                            this.var.$emoji = ":/";
                            this.var.$text1 = "Your game ran into a problem: cheating was detected!;We will collect some error info since this might also be caused by a bug in our backend.";
                            this.var.$text2 = "For more information about this issue and;possible fixes visit;https://twitter.com/arcadio_g_s;;If you call a support person, give them this info:\;Stop code: SOMETHING_HAPPENED";
                            this.var.$color = "#a81910";
                            break;
                        case "win":
                            this.var.$emoji = ":D";
                            this.var.$text1 = "Your game ran into a problem: you won!;We will collect some error info so your epic victory goes down in the annals of history.";
                            this.var.$text2 = "For more information about this issue and;possible fixes visit;https://twitter.com/arcadio_g_s;;If you call a support person, give them this info:\;Stop code: FBL_AWESOME_GAME";
                            this.var.$color = "#03c847";
                            break;
                        case "lose":
                            this.var.$emoji = ":(";
                            this.var.$text1 = "Your game ran into a problem: you lost!;We won't collect any error info so no one remembers your terrible performance.";
                            this.var.$text2 = "For more information about this issue and;possible fixes visit;https://twitter.com/arcadio_g_s;;If you call a support person, give them this info:\;Stop code: I_HAVE_BEEN_DEFEATED";
                            this.var.$color = "#1071a8";
                            break;
                        default:
                            this.var.$emoji = "¯\_(ツ)_/¯";
                            this.var.$text1 = "Your game ran into a problem... wait, we have no idea what happened!";
                            this.var.$text2 = "For more information about this issue and;possible fixes visit;https://twitter.com/arcadio_g_s;;If you call a support person, give them this info:\;Stop code: SOMETHING_HAPPENED";
                            this.var.$color = "#1071a8";
                            break;
                    }
                    var that = this;
                    setTimeout(function () {
                        that.var.ready = true;
                    }, 5000);
                }
            },
            {
                name: "#collide", code: function (data) {
                    if (data.shape2tag === "click" && this.var.ready === true) {
                        this.engine.loadLevel("mainMenu");
                    }
                }
            },
        ],
        collision: {
            "box": [
                { "#tag": "screen", "x": 0, "y": 0, "w": 1920, "h": 1080 }
            ]
        }
    }
]);