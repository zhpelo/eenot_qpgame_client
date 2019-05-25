require = function t(e, n, i) {
    function o(s, c) {
        if (!n[s]) {
            if (!e[s]) {
                var r = "function" == typeof require && require;
                if (!c && r) return r(s, !0);
                if (a) return a(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw l.code = "MODULE_NOT_FOUND",
                l
            }
            var h = n[s] = {
                exports: {}
            };
            e[s][0].call(h.exports,
            function(t) {
                var n = e[s][1][t];
                return o(n ? n: t)
            },
            h, h.exports, t, e, n, i)
        }
        return n[s].exports
    }
    for (var a = "function" == typeof require && require,
    s = 0; s < i.length; s++) o(i[s]);
    return o
} ({
    App: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "bc9772ZVeVM2omwSvP+kAar", "App");
        var i = {
            startGame: function() {}
        },
        o = ["Util"];
        for (var a in o) {
            var s = o[a];
            t(s)
        }
        e.exports = i,
        cc._RF.pop()
    },
    {}],
    BackBtnCp: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5439aEBU+pNfqsW7Jh5XLwV", "BackBtnCp"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onClick: function() {
                cc.director.loadScene("gameScene")
            },
            onLoad: function() {}
        }),
        cc._RF.pop()
    },
    {}],
    BdeAnimation: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "488d59uTT5E0Y8uAgP7Hg4T", "BdeAnimation"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                },
                sp_DiceFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {},
            applyToDownCallBack_Function: function() {
                this.node.parent.active = !1
            },
            applyToDownFailCallBack_Function: function() {
                this.node.parent.active = !1
            },
            betFullCallBack_Function: function() {
                this.node.parent.active = !1
            },
            shuffleCallBack_Function: function() {
                this.canvasNode.getComponent("BdeMain").shuffleRandom_Function()
            },
            shuffleFinnishCallBack_Function: function() {
                this.canvasNode.getComponent("BdeMain").com_ShuffCard.active = !1
            },
            dealCallBack_Function: function(t) {
                this.canvasNode.getComponent("BdeMain").cardArray[t].active = !0,
                this.canvasNode.getComponent("BdeMain").cardArray[t].setLocalZOrder(1),
                this.canvasNode.getComponent("BdeMain").playDealAudio_Function()
            },
            dealFinish_Function: function() {
                this.canvasNode.getComponent("BdeMain").an_DealAnimation.active = !1
            },
            rollDiceCallBack_Function: function(t) {
                this.canvasNode.getComponent("BdeMain").an_DiceAnimation.children[t].getComponent("cc.Animation").stop(),
                this.canvasNode.getComponent("BdeMain").an_DiceAnimation.children[t].getComponent("cc.Sprite").spriteFrame = this.sp_DiceFrame[this.canvasNode.getComponent("BdeMain").dicePoint[t] - 1],
                this.canvasNode.getComponent("BdeMain").playDiceAudio_Function()
            },
            rubCardBankerCallBack_Function: function() {
                this.canvasNode.getComponent("BdeMain").openAll_Function()
            },
            rubCardCallBack_Function: function() {},
            applyToDuelCallBack_Function: function() {
                this.node.parent.active = !1
            }
        }),
        cc._RF.pop()
    },
    {}],
    BdeButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "58735TorG5Fs7wgW6TMprBc", "BdeButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                CanvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            chipsSelect_Function: function() {
                this.CanvasNode.getComponent("BdeMain").an_ButtonAnimation.getComponent("cc.Animation").stop(),
                this.CanvasNode.getComponent("BdeMain").an_ButtonAnimation.setPosition(this.node.position),
                this.CanvasNode.getComponent("BdeMain").an_ButtonAnimation.getComponent("cc.Animation").play("BdeButtonEffect"),
                this.CanvasNode.getComponent("BdeMain").selectBet = this.node.bet / this.CanvasNode.getComponent("BdeMain").playerInfo.exchangeRate
            },
            betting_Function: function() {
                this.CanvasNode.getComponent("BdeMain").isBetTime && !this.CanvasNode.getComponent("BdeMain").com_Duel.active && (this.CanvasNode.getComponent("BdeMain").chipsPosition = this.node.betPosition, this.CanvasNode.getComponent("BdeMain").netWork.bdeGameSocket.emit("downCoin", {
                    chips: this.CanvasNode.getComponent("BdeMain").getbetIndex_Function(this.CanvasNode.getComponent("BdeMain").selectBet),
                    selectId: this.node.betPosition
                }))
            },
            beBankerButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").bankerList.length < 4 && (this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.active = !0, parseInt(this.CanvasNode.getComponent("BdeMain").com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) - 2 * this.CanvasNode.getComponent("BdeMain").getTotalBetted_Function() >= this.CanvasNode.getComponent("BdeMain").beBankerMin ? (this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bg1").active = !0, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bg2").active = !1, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bt_NoMoneyConfirm").active = !1, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("sl_BeBankerMoney").active = !0, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bt_BeBankerConfirm").active = !0, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bt_BeBankerCancel").active = !0, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerOwnMoney").getComponent("cc.Label").string = this.CanvasNode.getComponent("BdeMain").com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_NotEnoughMoney").active = !1, parseInt(this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerOwnMoney").getComponent("cc.Label").string) - 2 * this.CanvasNode.getComponent("BdeMain").getTotalBetted_Function() >= this.CanvasNode.getComponent("BdeMain").beBankerMax ? this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string = parseInt(this.CanvasNode.getComponent("BdeMain").beBankerMin + this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("sl_BeBankerMoney").getComponent("cc.Slider").progress.toFixed(2) * (this.CanvasNode.getComponent("BdeMain").beBankerMax - this.CanvasNode.getComponent("BdeMain").beBankerMin)) : this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string = parseInt(this.CanvasNode.getComponent("BdeMain").beBankerMin + this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("sl_BeBankerMoney").getComponent("cc.Slider").progress.toFixed(2) * (parseInt(this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerOwnMoney").getComponent("cc.Label").string - 10 * this.CanvasNode.getComponent("BdeMain").getTotalBetted_Function()) - this.CanvasNode.getComponent("BdeMain").beBankerMin))) : (this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bg1").active = !1, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bg2").active = !0, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bt_NoMoneyConfirm").active = !0, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("sl_BeBankerMoney").active = !1, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bt_BeBankerConfirm").active = !1, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("bt_BeBankerCancel").active = !1, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_NotEnoughMoney").active = !0, this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_NotEnoughMoney").getComponent("cc.Label").string = this.CanvasNode.getComponent("BdeMain").beBankerMin))
            },
            beBankerMenuConfirmButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").netWork.bdeGameSocket.emit("up", {
                    Coin: parseInt(this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string) * this.CanvasNode.getComponent("BdeMain").playerInfo.exchangeRate
                }),
                this.CanvasNode.getComponent("BdeMain").takeMoney = parseInt(this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string),
                this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.active = !1
            },
            beBankerMenuCancelButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.active = !1
            },
            beBankerMenuNoMoneyButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.active = !1
            },
            beBankerMenuSliderProccess_Function: function() {
                parseInt(this.CanvasNode.getComponent("BdeMain").com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) - 10 * this.CanvasNode.getComponent("BdeMain").getTotalBetted_Function() >= this.CanvasNode.getComponent("BdeMain").beBankerMax ? this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string = parseInt(this.CanvasNode.getComponent("BdeMain").beBankerMin + this.node.getComponent("cc.Slider").progress.toFixed(2) * (this.CanvasNode.getComponent("BdeMain").beBankerMax - this.CanvasNode.getComponent("BdeMain").beBankerMin)) : this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string = parseInt(this.CanvasNode.getComponent("BdeMain").beBankerMin + this.node.getComponent("cc.Slider").progress.toFixed(2) * (parseInt(this.CanvasNode.getComponent("BdeMain").com_BeBankerMenu.getChildByName("lb_PlayerOwnMoney").getComponent("cc.Label").string - 10 * this.CanvasNode.getComponent("BdeMain").getTotalBetted_Function()) - this.CanvasNode.getComponent("BdeMain").beBankerMin))
            },
            giveUpButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").netWork.bdeGameSocket.emit("down", {})
            },
            playerListButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").com_PlayerList.active ? this.CanvasNode.getComponent("BdeMain").com_PlayerList.active = !1 : this.CanvasNode.getComponent("BdeMain").com_PlayerList.active = !0
            },
            helpButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").bg_Black.active = !0,
                this.CanvasNode.getComponent("BdeMain").com_Help.active = !0
            },
            helpCloseButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").bg_Black.active = !1,
                this.CanvasNode.getComponent("BdeMain").com_Help.active = !1
            },
            exitButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").getCanExit_Function() ? (this.CanvasNode.getComponent("BdeMain").bg_Black.active = !0, this.CanvasNode.getComponent("BdeMain").com_Exit.active = !0) : (this.getComponent("cc.Button").interactable = !1, this.CanvasNode.getComponent("BdeMain").gameExit_Function())
            },
            duelButtonClick_Function: function() {
                if (this.CanvasNode.getComponent("BdeMain").duelId === -1) if (this.CanvasNode.getComponent("BdeMain").getTotalBetted_Function()) this.CanvasNode.getComponent("BdeMain").setSystemMessage_Function("", "您已下注，不能申请对决", 3);
                else {
                    this.CanvasNode.getComponent("BdeMain").com_Duel.active = !0,
                    this.CanvasNode.getComponent("BdeMain").com_Duel.getChildByName("lb_Tips").getComponent("cc.Label").string = "申请对决将自动压上所有金币与庄对决！\n",
                    this.CanvasNode.getComponent("BdeMain").com_Duel.getChildByName("lb_Tips").getComponent("cc.Label").string += "对决金额：" + this.CanvasNode.getComponent("BdeMain").com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string,
                    this.CanvasNode.getComponent("BdeMain").com_Duel.getChildByName("lb_Tips").getComponent("cc.Label").string += "\n请选择对决的门路",
                    this.CanvasNode.getComponent("BdeMain").com_Duel.getChildByName("bt_Confirm").active = !0,
                    this.CanvasNode.getComponent("BdeMain").com_Duel.getChildByName("bt_Confirm").setPosition( - 160, -140),
                    this.CanvasNode.getComponent("BdeMain").com_Duel.getChildByName("bt_Cancel").setPosition(160, -140),
                    this.CanvasNode.getComponent("BdeMain").duelSelect = -1;
                    for (var t = 0; t < 3; ++t) this.CanvasNode.getComponent("BdeMain").com_Duel.children[t + 2].getComponent("cc.Button").interactable = !0,
                    this.CanvasNode.getComponent("BdeMain").com_Duel.children[t + 2].active = !0
                } else this.CanvasNode.getComponent("BdeMain").setSystemMessage_Function("", "您已申请对决", 3)
            },
            duelCancelButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").com_Duel.active = !1
            },
            duelConfirmButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").duelSelect === -1 ? this.CanvasNode.getComponent("BdeMain").setSystemMessage_Function("", "请选择对决的门路", 3) : (this.CanvasNode.getComponent("BdeMain").netWork.bdeGameSocket.emit("vs", {
                    selectId: this.CanvasNode.getComponent("BdeMain").duelSelect
                }), this.CanvasNode.getComponent("BdeMain").com_Duel.active = !1)
            },
            duelSelectButtonClick_Function: function() {
                for (var t = 0; t < 3; ++t) this.node.parent.children[t + 2].getComponent("cc.Button").interactable = !0;
                "bt_Shun" === this.node.name ? this.CanvasNode.getComponent("BdeMain").duelSelect = 0 : "bt_Qian" === this.node.name ? this.CanvasNode.getComponent("BdeMain").duelSelect = 1 : "bt_Hou" === this.node.name && (this.CanvasNode.getComponent("BdeMain").duelSelect = 2),
                this.node.getComponent("cc.Button").interactable = !1
            },
            messageBoxReconnectButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").bg_Black.active = !1,
                this.CanvasNode.getComponent("BdeMain").com_MessageBox.active = !1,
                cc.audioEngine.stopAll(),
                cc.director.loadScene("LobbyMain")
            },
            exitMenuCancelButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").bg_Black.active = !1,
                this.CanvasNode.getComponent("BdeMain").com_Exit.active = !1
            },
            exitMenuConfirmButtonClick_Function: function() {
                this.CanvasNode.getComponent("BdeMain").gameExit_Function()
            }
        }),
        cc._RF.pop()
    },
    {}],
    BdeCard: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "29e13VUXQFEDKTNarZonhcy", "BdeCard"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_CardSprite: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                type: 0
            },
            onLoad: function() {},
            open_Function: function() {
                this.setFrame_Function(this.type)
            },
            setFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.sp_CardSprite[t]
            }
        }),
        cc._RF.pop()
    },
    {}],
    BdeChips: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d12ca8NDZtFL6Vswxrgrnfm", "BdeChips"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                chipsType: {
                    "default": [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {},
            setFrame_Function: function(t) {
                this.getComponent("cc.Sprite").spriteFrame = this.chipsType[t]
            },
            setLabel_Function: function(t) {
                this.node.children[0].getComponent("cc.Label").string = t
            }
        }),
        cc._RF.pop()
    },
    {}],
    BdeMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "79f99ZidzlHNY62MfAKuNOs", "BdeMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                vi_View: {
                    "default": null,
                    type: cc.Node
                },
                an_ButtonAnimation: {
                    "default": null,
                    type: cc.Node
                },
                an_StartAnimation: {
                    "default": null,
                    type: cc.Node
                },
                an_DealAnimation: {
                    "default": null,
                    type: cc.Node
                },
                an_DiceAnimation: {
                    "default": null,
                    type: cc.Node
                },
                pb_Card: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Chips: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Point: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Sign: {
                    "default": null,
                    type: cc.Prefab
                },
                com_BG: {
                    "default": null,
                    type: cc.Node
                },
                com_Buttons: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_BankerMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_BettedFrame: {
                    "default": null,
                    type: cc.Node
                },
                com_BetTimer: {
                    "default": null,
                    type: cc.Node
                },
                com_Tips: {
                    "default": null,
                    type: cc.Node
                },
                com_BankerList: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerList: {
                    "default": null,
                    type: cc.Node
                },
                com_BeBankerMenu: {
                    "default": null,
                    type: cc.Node
                },
                com_GiveUpMenu: {
                    "default": null,
                    type: cc.Node
                },
                com_Billing: {
                    "default": null,
                    type: cc.Node
                },
                com_Help: {
                    "default": null,
                    type: cc.Node
                },
                com_SignList: {
                    "default": null,
                    type: cc.Node
                },
                com_SystemMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_BankerUpAnimation: {
                    "default": null,
                    type: cc.Node
                },
                com_BankerDownAniamtion: {
                    "default": null,
                    type: cc.Node
                },
                com_CardCount: {
                    "default": null,
                    type: cc.Node
                },
                com_RubCard: {
                    "default": null,
                    type: cc.Node
                },
                com_ShuffCard: {
                    "default": null,
                    type: cc.Node
                },
                com_Duel: {
                    "default": null,
                    type: cc.Node
                },
                com_Dice: {
                    "default": null,
                    type: cc.Node
                },
                com_Exit: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox: {
                    "default": null,
                    type: cc.Node
                },
                bg_Black: {
                    "default": null,
                    type: cc.Node
                },
                sp_BigDuel: {
                    "default": null,
                    type: cc.Node
                },
                au_Bgm: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Bet: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_ShuffCard: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_RollDice: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Deal: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Win: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Lose: {
                    "default": null,
                    url: cc.AudioClip
                }
            },
            onLoad: function() {
                this.size = cc.view.getDesignResolutionSize(),
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                var e = this;
                cc.view.setResizeCallback(function() {
                    var t = cc.view.getVisibleSize(),
                    n = window.orientation;
                    e.uiResize_Function(t, n)
                }),
                this.playerInfo = t("PlayerInfo").getInstant,
                this.playerInfo.setGameObj_Function(this),
                this.bg_Black.on("touchstart",
                function(t) {
                    return ! 1
                },
                this),
                this.gameInit_Function();
                var n = window.orientation;
                this.uiInit_Function(n)
            },
            uiInit_Function: function(t) {
                var e = cc.view.getVisibleSize(),
                n = 1;
                if (e.width > 1334) n = e.width / 1334,
                this.bg_Black.scaleX = n,
                this.bg_Black.scaleY = n,
                this.com_BG.getChildByName("bg").scaleX = n,
                this.com_BG.getChildByName("bg").scaleY = n,
                this.com_BG.getChildByName("table").scaleX = n,
                this.com_BG.getChildByName("table").scaleY = n,
                this.com_BG.getChildByName("bgup").scaleX = n,
                this.com_BG.getChildByName("bgdown").scaleX = n,
                this.com_Buttons.getChildByName("bt_Exit").x = e.width / 2 - 59,
                this.com_Buttons.getChildByName("bt_PlayerList").x = -e.width / 2 - 50,
                this.com_Buttons.getChildByName("bt_PlayerList").x = -e.width / 2 + this.com_Buttons.getChildByName("bt_PlayerList").width / 2 + 10;
                else if (e.width < 1334) {
                    n = e.width / 1334,
                    this.node.scaleX = n,
                    this.node.scaleY = n;
                    var i = e.width / n;
                    e.height / n;
                    this.bg_Black.scaleX = 1 / n,
                    this.bg_Black.scaleY = 1 / n,
                    this.com_BG.getChildByName("bg").scaleX = 1 / n,
                    this.com_BG.getChildByName("bg").scaleY = 1 / n,
                    this.com_BG.getChildByName("table").scaleX = 1 / n,
                    this.com_BG.getChildByName("table").scaleY = 1 / n,
                    this.com_BG.getChildByName("bgup").y = (e.height / 2 - this.com_BG.getChildByName("bgup").height / 2) / n,
                    this.com_BG.getChildByName("bgdown").y = ( - e.height / 2 + this.com_BG.getChildByName("bgdown").height / 2) / n,
                    this.com_BG.getChildByName("sign").y = this.com_BG.getChildByName("bgdown").y,
                    this.com_SignList.y = this.com_BG.getChildByName("sign").y + 32 / n,
                    this.com_PlayerMessage.getChildByName("sp_PlayerHead").y = this.com_BG.getChildByName("bgdown").y - 6 / n,
                    this.com_PlayerMessage.getChildByName("lb_PlayerName").y = this.com_BG.getChildByName("bgdown").y + 17 / n,
                    this.com_PlayerMessage.getChildByName("lb_PlayerMoney").y = this.com_BG.getChildByName("bgdown").y - 28 / n,
                    this.com_SystemMessage.y = this.com_BG.getChildByName("bgdown").y - 6 / n,
                    this.com_Buttons.getChildByName("bt_Exit").x = i / 2 - 59 / n,
                    this.com_Buttons.getChildByName("bt_PlayerList").x = -i / 2 + this.com_Buttons.getChildByName("bt_PlayerList").width / 2 + 10 / n
                }
                this.com_Buttons.getChildByName("bt_Exit").y = this.com_BG.getChildByName("bgup").y + 4,
                this.com_Buttons.getChildByName("bt_Help").x = this.com_Buttons.getChildByName("bt_Exit").x - 99,
                this.com_Buttons.getChildByName("bt_Help").y = this.com_Buttons.getChildByName("bt_Exit").y,
                this.com_BankerMessage.y = this.com_BG.getChildByName("bgup").y + 4,
                this.com_PlayerList.x = this.com_Buttons.getChildByName("bt_PlayerList").x,
                this.com_BankerList.x = this.com_Buttons.getChildByName("bt_PlayerList").x + 40,
                this.com_Buttons.getChildByName("bt_BeBanker").x = this.com_BankerList.x + 130,
                this.com_Buttons.getChildByName("bt_GiveUp").x = this.com_Buttons.getChildByName("bt_BeBanker").x
            },
            uiResize_Function: function(t, e) {
                var n = 1;
                if (t.width > 1334) n = t.width / 1334,
                this.node.scaleX = 1,
                this.node.scaleY = 1,
                this.bg_Black.scaleX = n,
                this.bg_Black.scaleY = n,
                this.com_BG.getChildByName("bg").scaleX = n,
                this.com_BG.getChildByName("bg").scaleY = n,
                this.com_BG.getChildByName("table").scaleX = n,
                this.com_BG.getChildByName("table").scaleY = n,
                this.com_BG.getChildByName("bgup").scaleX = n,
                this.com_BG.getChildByName("bgdown").scaleX = n,
                this.com_BG.getChildByName("bgup").y = t.height / 2 - this.com_BG.getChildByName("bgup").height / 2,
                this.com_BG.getChildByName("bgdown").y = -t.height / 2 + this.com_BG.getChildByName("bgdown").height / 2,
                this.com_BG.getChildByName("sign").y = this.com_BG.getChildByName("bgdown").y,
                this.com_SignList.y = this.com_BG.getChildByName("sign").y + 32,
                this.com_PlayerMessage.getChildByName("sp_PlayerHead").y = this.com_BG.getChildByName("bgdown").y - 6,
                this.com_PlayerMessage.getChildByName("lb_PlayerName").y = this.com_BG.getChildByName("bgdown").y + 17,
                this.com_PlayerMessage.getChildByName("lb_PlayerMoney").y = this.com_BG.getChildByName("bgdown").y - 28,
                this.com_BankerMessage.y = this.com_BG.getChildByName("bgup").y + 26,
                this.com_SystemMessage.y = this.com_BG.getChildByName("bgdown").y - 6,
                this.com_Buttons.getChildByName("bt_Exit").x = t.width / 2 - 59,
                this.com_Buttons.getChildByName("bt_PlayerList").x = -t.width / 2 + this.com_Buttons.getChildByName("bt_PlayerList").width / 2 + 10;
                else if (t.width < 1334) {
                    n = t.width / 1334,
                    this.node.scaleX = n,
                    this.node.scaleY = n;
                    var i = t.width / n;
                    t.height / n;
                    this.bg_Black.scaleX = 1 / n,
                    this.bg_Black.scaleY = 1 / n,
                    this.com_BG.getChildByName("bg").scaleX = 1 / n,
                    this.com_BG.getChildByName("bg").scaleY = 1 / n,
                    this.com_BG.getChildByName("table").scaleX = 1 / n,
                    this.com_BG.getChildByName("table").scaleY = 1 / n,
                    this.com_BG.getChildByName("bgup").scaleX = 1,
                    this.com_BG.getChildByName("bgup").y = (t.height / 2 - this.com_BG.getChildByName("bgup").height / 2) / n,
                    this.com_BG.getChildByName("bgdown").y = ( - t.height / 2 + this.com_BG.getChildByName("bgdown").height / 2) / n,
                    this.com_BG.getChildByName("sign").y = this.com_BG.getChildByName("bgdown").y,
                    this.com_SignList.y = this.com_BG.getChildByName("sign").y + 32 / n,
                    this.com_PlayerMessage.getChildByName("sp_PlayerHead").y = this.com_BG.getChildByName("bgdown").y - 6 / n,
                    this.com_PlayerMessage.getChildByName("lb_PlayerName").y = this.com_BG.getChildByName("bgdown").y + 17 / n,
                    this.com_PlayerMessage.getChildByName("lb_PlayerMoney").y = this.com_BG.getChildByName("bgdown").y - 28 / n,
                    this.com_SystemMessage.y = this.com_BG.getChildByName("bgdown").y - 6 / n,
                    this.com_Buttons.getChildByName("bt_Exit").x = i / 2 - 59 / n,
                    this.com_Buttons.getChildByName("bt_PlayerList").x = -i / 2 + this.com_Buttons.getChildByName("bt_PlayerList").width / 2 + 10 / n
                }
                this.com_BankerMessage.y = this.com_BG.getChildByName("bgup").y + 4,
                this.com_Buttons.getChildByName("bt_Exit").y = this.com_BG.getChildByName("bgup").y + 4,
                this.com_Buttons.getChildByName("bt_Help").x = this.com_Buttons.getChildByName("bt_Exit").x - 99,
                this.com_Buttons.getChildByName("bt_Help").y = this.com_Buttons.getChildByName("bt_Exit").y,
                this.com_PlayerList.x = this.com_Buttons.getChildByName("bt_PlayerList").x,
                this.com_BankerList.x = this.com_Buttons.getChildByName("bt_PlayerList").x + 40,
                this.com_Buttons.getChildByName("bt_BeBanker").x = this.com_BankerList.x + 130,
                this.com_Buttons.getChildByName("bt_GiveUp").x = this.com_Buttons.getChildByName("bt_BeBanker").x
            },
            gameInit_Function: function() {
                this.netWork = t("BdeNetWork").getInstant,
                this.netWork.setBdeObj_Function(this),
                this.netWork.setBdeSocketOn_Function(),
                this.userName = this.playerInfo.playerName,
                this.playerId = this.playerInfo.playerId,
                this.playerList = this.netWork.playerList,
                this.tax = this.netWork.tax,
                this.beBankerMin = this.netWork.beBankerMin,
                this.beBankerMax = this.netWork.beBankerMax,
                this.com_PlayerMessage.getChildByName("lb_PlayerName").getComponent("cc.Label").string = this.playerInfo.playerName,
                this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = parseFloat(this.playerInfo.playerCoin).toFixed(2),
                this.netWork.playerHead,
                this.cardArray = new Array(8),
                this.isBetTime = !1,
                this.betTime = 0,
                this.selectBet = this.netWork.coinList[0] / this.playerInfo.exchangeRate,
                this.chipsPosition = -1,
                this.chipsArray = [],
                this.betPosition = [[ - 435, 80, -230, -40], [ - 105, 0, 105, -130], [230, 80, 435, -40]],
                this.totalBetted = [0, 0, 0],
                this.personalBetted = [0, 0, 0],
                this.bankerTotalWin = 0,
                this.playerTotalWin = 0,
                this.cardPositionArray = [[ - 65, 217], [65, 217], [ - 395, 15], [ - 265, 15], [ - 65, -75], [65, -75], [265, 15], [395, 15]],
                this.cardArray = new Array(8);
                for (var e = 0; e < this.cardArray.length; ++e) this.cardArray[e] = cc.instantiate(this.pb_Card),
                this.cardArray[e].setPosition(this.cardPositionArray[e][0], this.cardPositionArray[e][1]),
                this.cardArray[e].active = !1,
                this.vi_View.addChild(this.cardArray[e]);
                for (this.pointPosition = [[0, 175], [ - 330, -30], [0, -120], [330, -30]], this.pointArray = new Array(4), e = 0; e < this.pointArray.length; ++e) this.pointArray[e] = cc.instantiate(this.pb_Point),
                this.pointArray[e].setPosition(this.pointPosition[e][0], this.pointPosition[e][1]),
                this.pointArray[e].active = !1,
                this.vi_View.addChild(this.pointArray[e]);
                this.betButtonInit_Function(),
                this.resultArray = [0, 0, 0],
                this.signListPosition = [0, 0],
                this.signCount = [0, 0, 0],
                this.signArray = [],
                this.isBanker = !1,
                this.takeMoney = 0,
                this.bankerList = [],
                this.applyToDown = !1,
                this.openControl = !0,
                this.systemMessageMax = 20,
                this.systemMessageArray = [],
                this.ulPosition = [ - 88, -10],
                this.ulAppear = !1,
                this.playerList = this.netWork.playerList,
                this.setUserList_Function(),
                this.dicePoint = [0, 0],
                this.diceTimer = 0,
                this.dicePosition = [[190, 250], [ - 250, 150], [80, 60], [410, 150]],
                this.dealFinish = !1,
                this.cardCount = 0,
                this.timeCount = 0,
                this.rubCard = !1,
                this.rubCardTimer = 0,
                this.duelSelect = -1,
                this.duelId = -1,
                this.bigDuelPosition = [[ - 330, 20], [0, -60], [330, 20]],
                this.changeBankerTime = 0,
                this.netWork.bdeGameSocket.emit("getDownTime", {}),
                this.an_ButtonAnimation.getComponent("cc.Animation").play("ButtonEffect"),
                this.playerInfo.musicControl && cc.audioEngine.play(this.au_Bgm, !0, 1),
                this.gameExit = !1
            },
            betButtonInit_Function: function() {
                for (var t = 0; t < 3; ++t) this.com_Buttons.children[t].betPosition = t;
                var e = 0;
                for (t = 0; t < 4; ++t) this.com_Buttons.children[t + 4].bet = this.netWork.coinList[t],
                e = this.netWork.coinList[t] / this.playerInfo.exchangeRate,
                e >= 1e3 ? this.com_Buttons.children[t + 4].getChildByName("Label").getComponent("cc.Label").string = e / 1e3 + "K": this.com_Buttons.children[t + 4].getChildByName("Label").getComponent("cc.Label").string = e
            },
            firstTimeEntryInit_Function: function(t) {
                this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (this.playerInfo.playerCoin + this.netWork.addScore).toFixed(2),
                this.bankerList = t.upUserList,
                this.betTime = t.downTime,
                this.com_BetTimer.getChildByName("lb_Timer").getComponent("cc.Label").string = this.betTime,
                t.downTime > 0 ? this.isBetTime = !0 : (this.isBetTime = !1, t.changeBankerTime > 0 && (this.changeBankerTime = t.changeBankerTime, this.com_Tips.active = !0, this.com_Tips.getChildByName("sp_Tips00").active = !1, this.com_Tips.getChildByName("sp_Tips01").active = !1, this.com_Tips.getChildByName("sp_Tips02").active = !1, this.com_Tips.getChildByName("sp_Tips03").active = !1, this.com_Tips.getChildByName("sp_Tips04").active = !1, this.com_Tips.getChildByName("sp_Tips05").active = !0)),
                this.cardCount = t.remainCardCount,
                this.com_CardCount.getChildByName("lb_Count").getComponent("cc.Label").string = this.cardCount + " / 40",
                t.upUserList.length > 0 ? (this.isBetTime = !0, this.com_BankerMessage.getChildByName("sp_BankerTips").active = !1, this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string = t.upUserList[0].nickname, this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = (t.upUserList[0].upCoin / this.playerInfo.exchangeRate).toFixed(2), this.com_BankerMessage.getChildByName("sp_BankerHead").active = !0) : (this.com_Tips.active = !0, this.com_BankerMessage.getChildByName("sp_BankerTips").active = !0, this.com_Tips.getChildByName("sp_Tips00").active = !0, this.com_Tips.getChildByName("sp_Tips01").active = !1, this.com_Tips.getChildByName("sp_Tips02").active = !1, this.com_Tips.getChildByName("sp_Tips03").active = !1, this.com_Tips.getChildByName("sp_Tips04").active = !1, this.com_Tips.getChildByName("sp_Tips05").active = !1);
                for (var e = 0; e < t.upUserList.length; ++e) this.playerId === t.upUserList[e].userId && (this.com_Buttons.getChildByName("bt_BeBanker").active = !1, this.com_Buttons.getChildByName("bt_GiveUp").active = !0, this.isBanker = !0),
                0 !== e && (this.com_BankerList.children[e - 1].getComponent("cc.Label").string = t.upUserList[e].nickname);
                for (e = 0; e < 3; ++e) this.totalBetted[e] = t.DownCoin[e] / this.playerInfo.exchangeRate,
                this.personalBetted[e] = t.myDownCoin[e] / this.playerInfo.exchangeRate,
                this.com_BettedFrame.children[e].getChildByName("lb_TotalBetted").getComponent("cc.Label").string = "总下注: " + (t.DownCoin[e] / this.playerInfo.exchangeRate).toFixed(2),
                this.com_BettedFrame.children[e].getChildByName("lb_MyBetted").getComponent("cc.Label").string = "我的下注: " + (t.myDownCoin[e] / this.playerInfo.exchangeRate).toFixed(2)
            },
            bettedChips_Function: function(t, e, n) {
                var i = -1,
                o = cc.instantiate(this.pb_Chips),
                a = 0;
                e /= this.playerInfo.exchangeRate;
                for (var s = 0; s < this.netWork.coinList.length; ++s) if (e === this.netWork.coinList[s] / this.playerInfo.exchangeRate) {
                    a = this.netWork.coinList[s] / this.playerInfo.exchangeRate >= 1e3 ? this.netWork.coinList[s] / this.playerInfo.exchangeRate / 1e3 + "K": this.netWork.coinList[s] / this.playerInfo.exchangeRate,
                    o.getComponent("BdeChips").setLabel_Function(a),
                    i = s;
                    break
                }
                o.getComponent("BdeChips").setFrame_Function(i),
                o.tag = -10,
                this.vi_View.addChild(o),
                this.chipsArray.push(o),
                o.setPosition(this.getRandom_Function(this.betPosition[t][0], this.betPosition[t][2]), this.getRandom_Function(this.betPosition[t][1], this.betPosition[t][3])),
                n && this.setPersonalBettedString_Function(t, e),
                this.setTotalBettedString_Function(t, e),
                this.chipsPosition = -1
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            setPersonalBettedString_Function: function(t, e) {
                this.personalBetted[t] += e,
                this.com_BettedFrame.children[t].getChildByName("lb_MyBetted").getComponent("cc.Label").string = "我的下注: " + this.personalBetted[t].toFixed(2)
            },
            setTotalBettedString_Function: function(t, e) {
                this.totalBetted[t] += e,
                this.com_BettedFrame.children[t].getChildByName("lb_TotalBetted").getComponent("cc.Label").string = "总下注: " + this.totalBetted[t].toFixed(2)
            },
            setUserList_Function: function() {
                for (var t = null,
                e = 0; e < this.playerList.length; ++e) t = new cc.Node,
                t.addComponent("cc.Label"),
                t.anchorX = 0,
                t.anchorY = 1,
                t.width = 160,
                t.height = 30,
                t.getComponent("cc.Label").overflow = 3,
                t.getComponent("cc.Label").fontSize = 20,
                t.getComponent("cc.Label").lineHeight = 22,
                t.getComponent("cc.Label").string = this.playerList[e].nickname,
                t.setPosition( - 89, e * -25 + -5),
                this.com_PlayerList.getChildByName("scrollView").getComponent("cc.ScrollView").content.addChild(t);
                this.updatePlayerList_Function()
            },
            updatePlayerList_Function: function() {
                for (var t = 0; t < this.playerList.length; ++t) this.com_PlayerList.getChildByName("scrollView").getComponent("cc.ScrollView").content.children[t].setPosition( - 80, -5 + t * -25);
                this.playerList.length > 9 && (this.com_PlayerList.getChildByName("scrollView").getComponent("cc.ScrollView").content.height = 25 * this.playerList.length)
            },
            getbetIndex_Function: function(t) {
                for (var e = -1,
                n = 0; n < this.netWork.coinList.length; ++n) if (t === this.netWork.coinList[n] / this.playerInfo.exchangeRate) {
                    e = n;
                    break
                }
                return e
            },
            getTotalBetted_Function: function() {
                for (var t = 0,
                e = 0; e < this.personalBetted.length; ++e) t += this.personalBetted[e];
                return t
            },
            startGame_Function: function() {
                this.resetGame_Function(),
                this.betTime = 10,
                this.timeCount = 0,
                this.com_Tips.active = !1;
                for (var t = 0; t < this.com_Tips.children.length - 1; ++t) this.com_Tips.children[t + 1].active = !1;
                this.an_StartAnimation.active = !0,
                this.an_StartAnimation.getComponent("cc.Animation").play("BdeStartAnimation"),
                this.bankerList.length > 0 && (this.isBetTime = !0),
                this.openControl = !0
            },
            resetGame_Function: function() {
                this.sp_BigDuel.active = !1,
                this.com_BetTimer.getChildByName("sp_Timer01").active = !0,
                this.com_BetTimer.getChildByName("sp_Timer02").active = !1,
                this.com_Billing.active = !1,
                this.totalBetted = [0, 0, 0];
                for (var t = 0; t < this.chipsArray.length; ++t) this.vi_View.removeChildByTag( - 10);
                for (this.chipsArray = [], t = 0; t < 3; ++t) this.com_BettedFrame.children[t].getChildByName("lb_TotalBetted").getComponent("cc.Label").string = "总下注: 0",
                this.com_BettedFrame.children[t].getChildByName("lb_MyBetted").getComponent("cc.Label").string = "";
                for (this.personalBetted = [0, 0, 0], this.bankerTotalWin = 0, this.playerTotalWin = 0, this.duelSelect = -1, this.duelId = -1, this.signCount = [0, 0, 0], t = 0; t < this.cardArray.length; ++t) this.cardArray[t].getComponent("BdeCard").type = 0,
                this.cardArray[t].getComponent("BdeCard").open_Function(),
                this.cardArray[t].active = !1;
                for (t = 0; t < this.pointArray.length; ++t) this.pointArray[t].active = !1;
                this.resultArray = [0, 0, 0],
                this.com_Dice.active = !1
            },
            bankerUpAniamtion_Function: function(t) {
                this.com_BankerUpAnimation.getChildByName("lb_PlayerName").getComponent("cc.Label").string = t,
                this.com_BankerUpAnimation.active = !0,
                this.com_BankerUpAnimation.setPosition(0, 0),
                this.com_BankerUpAnimation.opacity = 255;
                var e = cc.moveTo(1, cc.p(0, 250)),
                n = cc.fadeOut(1),
                i = cc.spawn(e, n);
                this.com_BankerUpAnimation.runAction(i)
            },
            bankerDownAniamtion_Function: function() {
                this.com_BankerDownAniamtion.getChildByName("lb_PlayerName").getComponent("cc.Label").string = this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string,
                this.com_BankerDownAniamtion.active = !0,
                this.com_BankerDownAniamtion.setPosition(0, 250),
                this.com_BankerDownAniamtion.opacity = 255;
                var t = cc.moveTo(1, cc.p(0, 0)),
                e = cc.fadeOut(1),
                n = cc.spawn(t, e);
                this.com_BankerDownAniamtion.runAction(n)
            },
            bankerUp_Function: function(t, e) {
                this.com_BankerMessage.getChildByName("sp_BankerTips").active = !1,
                this.com_Tips.active = !1,
                this.cardCount = 40,
                this.com_CardCount.getChildByName("lb_Count").getComponent("cc.Label").string = this.cardCount + " / 40",
                this.bankerUpAniamtion_Function(t),
                this.com_BankerMessage.getChildByName("sp_BankerHead").active = !0
            },
            bankerDown_Function: function(t, e) {
                e ? this.bankerList.splice(e, 1) : (this.com_BankerMessage.getChildByName("sp_BankerTips").active = !0, this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string = "", this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = "", this.bankerList.shift(), this.bankerDownAniamtion_Function(), this.com_Buttons.getChildByName("bt_GiveUp").getComponent("cc.Button").interactable = !0),
                this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) + parseFloat(t / this.playerInfo.exchangeRate)).toFixed(2),
                this.updateBankerList_Function()
            },
            checkBankerList_Function: function(t) {
                this.bankerList.push(t),
                t.nickname === this.userName && (this.com_Buttons.getChildByName("bt_BeBanker").active = !1, this.com_Buttons.getChildByName("bt_GiveUp").active = !0, this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) - t.upCoin / this.playerInfo.exchangeRate).toFixed(2)),
                this.bankerList.length > 1 ? this.updateBankerList_Function() : (this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string = t.nickname, this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = parseFloat(t.upCoin / this.playerInfo.exchangeRate).toFixed(2), this.bankerUp_Function(t.nickname), t.nickname === this.userName && (this.isBanker = !0), this.resetGame_Function()),
                this.com_Billing.active = !1
            },
            updateBankerList_Function: function() {
                for (var t = 0; t < this.com_BankerList.children.length; ++t) this.com_BankerList.children[t].getComponent("cc.Label").string = "";
                for (var t = 0; t < this.bankerList.length; ++t) t + 1 < this.bankerList.length && (this.com_BankerList.children[t].getComponent("cc.Label").string = this.bankerList[t + 1].nickname);
                if (this.bankerList.length > 0)"" === this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string && (this.bankerUp_Function(this.bankerList[0].nickname), this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string = this.bankerList[0].nickname, this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = (this.bankerList[0].upCoin / this.playerInfo.exchangeRate).toFixed(2)),
                this.bankerList[0].nickname === this.userName && (this.isBanker = !0);
                else {
                    this.isBetTime = !1,
                    this.com_Tips.active = !0,
                    this.com_Tips.getChildByName("bg").active = !0,
                    this.com_Tips.getChildByName("sp_Tips00").active = !0,
                    this.com_Tips.getChildByName("sp_Tips01").active = !1,
                    this.com_Tips.getChildByName("sp_Tips02").active = !1,
                    this.com_Tips.getChildByName("sp_Tips03").active = !1,
                    this.com_Tips.getChildByName("sp_Tips04").active = !1,
                    this.com_Tips.getChildByName("sp_Tips05").active = !1,
                    this.com_Billing.active = !1,
                    this.com_BankerMessage.getChildByName("sp_BankerHead").active = !1,
                    this.com_BankerMessage.getChildByName("sp_BankerTips").active = !0,
                    this.totalBetted = [0, 0, 0];
                    for (var t = 0; t < this.chipsArray.length; ++t) this.vi_View.removeChildByTag( - 10);
                    for (this.chipsArray = [], t = 0; t < 3; ++t) this.com_BettedFrame.children[t].getChildByName("lb_TotalBetted").getComponent("cc.Label").string = "总下注: 0",
                    this.com_BettedFrame.children[t].getChildByName("lb_MyBetted").getComponent("cc.Label").string = "";
                    this.personalBetted = [0, 0, 0]
                }
            },
            applyToDown_Function: function() {
                this.applyToDown || (this.applyToDown = !0, this.com_Tips.active = !0, this.com_Tips.getChildByName("bg").active = !0, this.com_Tips.getChildByName("sp_Tips00").active = !1, this.com_Tips.getChildByName("sp_Tips01").active = !1, this.com_Tips.getChildByName("sp_Tips02").active = !0, this.com_Tips.getChildByName("sp_Tips03").active = !1, this.com_Tips.getChildByName("sp_Tips02").getComponent("cc.Animation").play("BdeApplyToDownAnimation"), this.com_Tips.getChildByName("sp_Tips04").active = !1, this.com_Tips.getChildByName("sp_Tips05").active = !1)
            },
            applyToDownFail_Function: function() {
                this.com_Tips.active = !0,
                this.com_Tips.getChildByName("bg").active = !0,
                this.com_Tips.getChildByName("sp_Tips00").active = !1,
                this.com_Tips.getChildByName("sp_Tips01").active = !1,
                this.com_Tips.getChildByName("sp_Tips02").active = !1,
                this.com_Tips.getChildByName("sp_Tips03").active = !0,
                this.com_Tips.getChildByName("sp_Tips03").getComponent("cc.Animation").play("BdeApplyToDownFailAnimation"),
                this.com_Tips.getChildByName("sp_Tips04").active = !1,
                this.com_Tips.getChildByName("sp_Tips05").active = !1
            },
            openPlayerCard_Function: function() {
                for (var t = 0; t < 3; ++t) this.cardArray[2 + 2 * t].getComponent("BdeCard").open_Function()
            },
            openBankerCard_Function: function() {
                this.cardArray[0].getComponent("BdeCard").open_Function(),
                this.rubCard = !0,
                this.rubCardTimer = 0
            },
            openAll_Function: function() {
                for (var t = 0; t < this.com_RubCard.children.length; ++t) this.com_RubCard.children[t].active = !1;
                for (t = 0; t < 4; ++t) this.cardArray[1 + 2 * t].getComponent("BdeCard").open_Function();
                this.checkPoint_Function(this.resultArray)
            },
            rubCard_Function: function() {
                this.com_RubCard.getChildByName("an_RubCard0").active = !0,
                this.com_RubCard.getChildByName("an_RubCard0").getChildByName("view").getChildByName("pb_BdeCard2").getComponent("BdeCard").type = this.cardArray[1].getComponent("BdeCard").type,
                this.com_RubCard.getChildByName("an_RubCard0").getChildByName("view").getChildByName("pb_BdeCard2").getComponent("BdeCard").open_Function(),
                this.com_RubCard.getChildByName("an_RubCard0").getComponent("cc.Animation").play("BdeRubCardBankerAnimation");
                for (var t = 0; t < this.personalBetted.length; ++t)(this.personalBetted[t] || this.duelId === t) && (this.com_RubCard.getChildByName("an_RubCard" + (t + 1)).active = !0, this.com_RubCard.getChildByName("an_RubCard" + (t + 1)).getChildByName("view").getChildByName("pb_BdeCard2").getComponent("BdeCard").type = this.cardArray[3 + 2 * t].getComponent("BdeCard").type, this.com_RubCard.getChildByName("an_RubCard" + (t + 1)).getChildByName("view").getChildByName("pb_BdeCard2").getComponent("BdeCard").open_Function(), this.com_RubCard.getChildByName("an_RubCard" + (t + 1)).getComponent("cc.Animation").play("BdeRubCardAnimation"))
            },
            seCardType_Function: function(t) {
                for (var e = 0; e < this.cardArray.length; ++e) this.cardArray[e].getComponent("BdeCard").type = t[e]
            },
            setResult_Function: function(t) {
                for (var e = 0; e < this.resultArray.length; ++e) this.resultArray[e] = t[e];
                this.openPlayerCard_Function(),
                this.openBankerCard_Function()
            },
            checkPoint_Function: function(t) {
                for (var e = 0; e < this.pointArray.length; ++e) {
                    if (this.cardArray[2 * e].getComponent("BdeCard").type % 13 === this.cardArray[2 * e + 1].getComponent("BdeCard").type % 13) this.pointArray[e].getComponent("BdePoint").setPoint_Function(this.cardArray[2 * e].getComponent("BdeCard").type % 13 + 9);
                    else {
                        var n = 0;
                        n = this.cardArray[2 * e].getComponent("BdeCard").type % 13 + this.cardArray[2 * e + 1].getComponent("BdeCard").type % 13 >= 10 ? (this.cardArray[2 * e].getComponent("BdeCard").type % 13 + this.cardArray[2 * e + 1].getComponent("BdeCard").type % 13) % 10 : this.cardArray[2 * e].getComponent("BdeCard").type % 13 + this.cardArray[2 * e + 1].getComponent("BdeCard").type % 13,
                        this.pointArray[e].getComponent("BdePoint").setPoint_Function(n)
                    }
                    this.pointArray[e].active = !0,
                    this.pointArray[e].setLocalZOrder(255)
                }
                this.checkWinLose_Function(t)
            },
            checkWinLose_Function: function(t) {
                for (var e = 0; e < t.length; ++e) t[e] > 0 ? this.signCount[e] = 1 : this.signCount[e] = 0;
                this.setWinLoseList_Function()
            },
            setWinLoseList_Function: function() {
                for (var t, e = 0; e < this.signCount.length; ++e) t = cc.instantiate(this.pb_Sign),
                t.getComponent("BdeSign").setSignFrame_Function(this.signCount[e]),
                this.signArray.push(t),
                this.com_SignList.addChild(t);
                if (this.signArray.length < 51) for (e = 0; e < this.signCount.length; ++e) this.signArray[this.signArray.length - 3 + e].setPosition(this.signListPosition[0] + 33 * (this.signArray.length / 3 - 1), this.signListPosition[1] + e * -32);
                else {
                    for (e = 0; e < this.signCount.length; ++e) this.com_SignList.removeChild(this.signArray[0]),
                    this.signArray.shift();
                    for (e = 0; e < this.signArray.length; ++e) this.signArray[e].setPosition(this.signListPosition[0] + 33 * parseInt(e / 3), this.signListPosition[1] + e % 3 * -32)
                }
            },
            billng_Function: function(t) {
                this.com_Billing.active = !0,
                t.winCoin >= 0 ? (this.com_Billing.getChildByName("lb_Score").color = cc.Color.YELLOW, this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Win, !1, 1)) : (this.com_Billing.getChildByName("lb_Score").color = cc.Color.CYAN, this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Lose, !1, 1)),
                this.com_Billing.getChildByName("lb_Score").getComponent("cc.Label").string = (t.winCoin / this.playerInfo.exchangeRate).toFixed(2),
                this.isBanker ? this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = (parseFloat(this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string) + t.winCoin / this.playerInfo.exchangeRate).toFixed(2) : this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (t.remainCoin / this.playerInfo.exchangeRate).toFixed(2);
                for (var e = 0; e < this.cardArray.length; ++e) this.cardArray[e].getComponent("BdeCard").open_Function();
                this.setSystemMessage_Function("", t.winCoin, 1)
            },
            updateBankerMoney_Function: function(t) {
                this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = (t / this.playerInfo.exchangeRate).toFixed(2)
            },
            shuffle_Function: function(t, e) {
                this.cardCount = 40,
                this.com_ShuffCard.active = !0,
                this.com_ShuffCard.getComponent("cc.Animation").play("BdeShuffCardAnimation"),
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_ShuffCard, !1, 1),
                this.com_CardCount.getChildByName("lb_Count").getComponent("cc.Label").string = this.cardCount + " / 40";
                for (var n = 0; n < this.pointArray.length; ++n) this.pointArray[n].active = !1;
                this.com_Dice.active = !1,
                this.totalBetted = [0, 0, 0];
                for (var n = 0; n < this.chipsArray.length; ++n) this.vi_View.removeChildByTag( - 10);
                this.chipsArray = []
            },
            shuffleRandom_Function: function() {
                this.com_Billing.active = !1,
                this.sp_BigDuel.active = !1;
                for (var t = 0; t < this.cardArray.length; ++t) this.cardArray[t].active = !1;
                for (var e = 0,
                n = 0,
                t = 0; t < this.com_ShuffCard.children.length; ++t) e = this.getRandom_Function(1, 10),
                n = 13 * this.getRandom_Function(0, 3),
                this.com_ShuffCard.children[t].getComponent("BdeCard").type = e + n,
                this.com_ShuffCard.children[t].getComponent("BdeCard").open_Function()
            },
            rollDice_Function: function(t, e) {
                this.com_Billing.active = !1;
                for (var n = 0; n < this.cardArray.length; ++n) this.cardArray[n].active = !1;
                this.an_DiceAnimation.active = !0;
                for (var n = 0; n < this.an_DiceAnimation.children.length; ++n) this.an_DiceAnimation.children[n].getComponent("cc.Animation").play("BdeDiceAnimation" + n);
                this.dicePoint[0] = t,
                this.dicePoint[1] = e,
                this.diceTimer = 0,
                this.dealFinish = !0
            },
            deal_Function: function() {
                this.dealFinish = !1,
                this.an_DiceAnimation.active = !1,
                this.an_DealAnimation.active = !0;
                var t = this.dicePoint[0] + this.dicePoint[1];
                t = parseInt(t % 4) ? parseInt(t % 4) - 1 : 3,
                this.an_DealAnimation.getComponent("cc.Animation").play("BdeDealAnimation" + t);
                for (var e = 0; e < this.com_Dice.children.length; ++e) this.com_Dice.children[e].getComponent("cc.Sprite").spriteFrame = this.com_Dice.children[e].getComponent("BdeAnimation").sp_DiceFrame[this.dicePoint[e] - 1];
                this.com_Dice.setPosition(this.dicePosition[t][0], this.dicePosition[t][1]),
                this.com_Dice.active = !0,
                this.cardCount > 0 && (this.cardCount -= 8),
                this.com_CardCount.getChildByName("lb_Count").getComponent("cc.Label").string = this.cardCount + " / 40"
            },
            playerEnterRoom_Function: function(t) {
                this.playerList.push(t);
                var e = new cc.Node;
                e.addComponent("cc.Label"),
                e.anchorX = 0,
                e.anchorY = 1,
                e.width = 160,
                e.height = 30,
                e.getComponent("cc.Label").overflow = 3,
                e.getComponent("cc.Label").fontSize = 20,
                e.getComponent("cc.Label").lineHeight = 22,
                e.getComponent("cc.Label").string = t.nickname,
                this.com_PlayerList.getChildByName("scrollView").getComponent("cc.ScrollView").content.addChild(e),
                this.updatePlayerList_Function()
            },
            playerLeaveRoom_Function: function(t) {
                for (var e = 0; e < this.playerList.length; ++e) if (t === this.playerList[e].userId) {
                    for (var n = 0; n < this.com_PlayerList.getChildByName("scrollView").getComponent("cc.ScrollView").content.children.length; ++n) if (this.playerList[e].nickname === this.com_PlayerList.getChildByName("scrollView").getComponent("cc.ScrollView").content.children[n].getComponent("cc.Label").string) {
                        this.com_PlayerList.getChildByName("scrollView").getComponent("cc.ScrollView").content.removeChild(this.com_PlayerList.getChildByName("scrollView").getComponent("cc.ScrollView").content.children[n]);
                        break
                    }
                    this.playerList.splice(e, 1)
                }
                this.updatePlayerList_Function()
            },
            setSystemMessage_Function: function(t, e, n) {
                var i = new cc.Node;
                switch (i.addComponent("cc.Label"), i.anchorX = 0, i.anchorY = 1, i.width = 330, i.height = 30, i.getComponent("cc.Label").overflow = 3, i.getComponent("cc.Label").fontSize = 18, i.getComponent("cc.Label").lineHeight = 22, n) {
                case 0:
                    t ? (i.color = cc.Color.WHITE, i.getComponent("cc.Label").string = "玩家: " + t + " 下注 " + (e / this.playerInfo.exchangeRate).toFixed(2)) : (i.color = cc.Color.YELLOW, i.getComponent("cc.Label").string = "下注 " + this.selectBet.toFixed(2));
                    break;
                case 1:
                    e > 0 ? (i.color = cc.Color.YELLOW, i.getComponent("cc.Label").string = "本局赢得 " + (e / this.playerInfo.exchangeRate).toFixed(2)) : (i.color = cc.Color.CYAN, i.getComponent("cc.Label").string = "本局输了 " + (e / this.playerInfo.exchangeRate).toFixed(2));
                    break;
                case 2:
                    t ? (i.color = cc.Color.WHITE, this.isBanker ? i.getComponent("cc.Label").string = "玩家: " + t + " 与您对决 " + (e / this.playerInfo.exchangeRate).toFixed(2) + " 金币": i.getComponent("cc.Label").string = "玩家: " + t + " 与庄家对决 " + (e / this.playerInfo.exchangeRate).toFixed(2) + " 金币") : (i.color = cc.Color.YELLOW, i.getComponent("cc.Label").string = "成功申请与庄家对决 " + (e / this.playerInfo.exchangeRate).toFixed(2) + " 金币");
                    break;
                case 3:
                    i.color = cc.Color.WHITE,
                    i.getComponent("cc.Label").string = t + e
                }
                this.systemMessageArray.push(i),
                this.systemMessageArray[this.systemMessageArray.length - 1].setPosition( - 165, (this.systemMessageArray.length - 1) * -25),
                this.com_SystemMessage.getComponent("cc.ScrollView").content.addChild(this.systemMessageArray[this.systemMessageArray.length - 1]),
                this.systemMessageArray.length > this.systemMessageMax && (this.systemMessageArray.shift(), this.com_SystemMessage.getComponent("cc.ScrollView").content.removeChild(this.systemMessageArray[0]), this.updateSystemMessagePosition_Function()),
                this.systemMessageArray.length > 3 && (this.com_SystemMessage.getComponent("cc.ScrollView").content.height = 25 * this.systemMessageArray.length, this.com_SystemMessage.getComponent("cc.ScrollView").scrollToBottom())
            },
            updateSystemMessagePosition_Function: function() {
                for (var t = 0; t < this.systemMessageArray.length; ++t) this.systemMessageArray[t].setPosition( - 165, t * -25)
            },
            gameExit_Function: function() {
                this.gameExit = !0,
                this.netWork.bdeGameSocket.disconnect(),
                cc.audioEngine.stopAll(),
                cc.director.loadScene("LobbyMain")
            },
            playBetAudio_Function: function() {
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Bet, !1, 1)
            },
            playDealAudio_Function: function() {
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Deal, !1, 1)
            },
            playDiceAudio_Function: function() {
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_RollDice, !1, 1)
            },
            betIsFull_Function: function() {
                255 === this.com_Tips.getChildByName("sp_Tips01").opacity && (this.com_Tips.active = !0, this.com_Tips.getChildByName("sp_Tips00").active = !1, this.com_Tips.getChildByName("sp_Tips01").active = !0, this.com_Tips.getChildByName("sp_Tips02").active = !1, this.com_Tips.getChildByName("sp_Tips03").active = !1, this.com_Tips.getChildByName("sp_Tips01").getComponent("cc.Animation").play("BdeBetFullAnimation"), this.com_Tips.getChildByName("sp_Tips04").active = !1, this.com_Tips.getChildByName("sp_Tips05").active = !1)
            },
            applyToDuel_Function: function(t) {
                this.com_Tips.active = !0,
                this.com_Tips.getChildByName("sp_Tips00").active = !1,
                this.com_Tips.getChildByName("sp_Tips01").active = !1,
                this.com_Tips.getChildByName("sp_Tips02").active = !1,
                this.com_Tips.getChildByName("sp_Tips03").active = !1,
                this.com_Tips.getChildByName("sp_Tips04").active = !0,
                this.com_Tips.getChildByName("sp_Tips04").getComponent("cc.Animation").play("BdeApplyToDuel"),
                this.com_Tips.getChildByName("sp_Tips05").active = !1;
                for (var e = 0; e < this.chipsArray.length; ++e) this.vi_View.removeChildByTag( - 10);
                this.chipsArray = [];
                var n = null,
                i = 0;
                for (e = 0; e < 20; ++e) {
                    switch (n = cc.instantiate(this.pb_Chips), n.tag = -10, n.setPosition(this.getRandom_Function(this.betPosition[t.data.selectId][0], this.betPosition[t.data.selectId][2]), this.getRandom_Function(this.betPosition[t.data.selectId][1], this.betPosition[t.data.selectId][3])), i = this.getRandom_Function(0, 3)) {
                    case 0:
                        n.getComponent("BdeChips").setLabel_Function("1");
                        break;
                    case 1:
                        n.getComponent("BdeChips").setLabel_Function("10");
                        break;
                    case 2:
                        n.getComponent("BdeChips").setLabel_Function("100");
                        break;
                    case 3:
                        n.getComponent("BdeChips").setLabel_Function("1K")
                    }
                    n.getComponent("BdeChips").setFrame_Function(i),
                    this.vi_View.addChild(n),
                    this.chipsArray.push(n)
                }
                for (this.sp_BigDuel.active = !0, this.sp_BigDuel.setPosition(this.bigDuelPosition[t.data.selectId][0], this.bigDuelPosition[t.data.selectId][1]), e = 0; e < this.personalBetted.length; ++e) this.personalBetted[e] = 0,
                this.totalBetted[e] = 0,
                this.com_BettedFrame.children[e].getChildByName("lb_MyBetted").getComponent("cc.Label").string = "我的下注: 0",
                this.com_BettedFrame.children[e].getChildByName("lb_TotalBetted").getComponent("cc.Label").string = "总下注: 0";
                this.userName === t.data.userNickname && (this.personalBetted[t.data.selectId] = t.data.vsCoin, this.com_BettedFrame.children[t.data.selectId].getChildByName("lb_MyBetted").getComponent("cc.Label").string = "我的下注: " + (this.personalBetted[t.data.selectId] / this.playerInfo.exchangeRate).toFixed(2)),
                this.totalBetted[t.data.selectId] = t.data.vsCoin,
                this.com_BettedFrame.children[t.data.selectId].getChildByName("lb_TotalBetted").getComponent("cc.Label").string = "总下注: " + (this.totalBetted[t.data.selectId] / this.playerInfo.exchangeRate).toFixed(2)
            },
            changeBankerTime_Function: function(t) {
                this.com_BetTimer.getChildByName("sp_Timer01").active = !1,
                this.com_BetTimer.getChildByName("sp_Timer02").active = !0,
                this.changeBankerTime = t,
                this.com_Billing.active = !1
            },
            disconnectNetWork_Function: function() {
                this.bg_Black.active = !0,
                this.gameExit && this.netWork.bdeGameSocket.disconnect(),
                this.netWork.bdeGameSocket = null,
                this.playerInfo.gameDisconnect = !0,
                this.com_MessageBox.active = !0,
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "您已断线，请重新连接"
            },
            getCanExit_Function: function() {
                return !! (this.isBanker || this.getTotalBetted_Function() > 0)
            },
            update: function(t) {
                this.betTime > 0 ? this.timeCount >= 1 ? (this.timeCount = 0, --this.betTime, this.com_BetTimer.getChildByName("lb_Timer").getComponent("cc.Label").string = this.betTime) : this.timeCount += t: this.isBetTime = !1,
                this.diceTimer < 3 ? this.diceTimer += t: this.dealFinish && this.deal_Function(),
                this.rubCard && (this.rubCardTimer <= 2 ? this.rubCardTimer += t: (this.rubCard = !1, this.rubCard_Function())),
                this.changeBankerTime > 0 && (this.timeCount >= 1 ? (this.timeCount = 0, --this.changeBankerTime, this.com_BetTimer.getChildByName("lb_Timer").getComponent("cc.Label").string = this.changeBankerTime) : this.timeCount += t)
            }
        }),
        cc._RF.pop()
    },
    {
        BdeNetWork: "BdeNetWork",
        PlayerInfo: "PlayerInfo"
    }],
    BdeNetWork: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "997e67JAzlEKbTt4DOEYXGH", "BdeNetWork");
        var i = function() {
            var e = "",
            n = function() {
                this.lobbyMain = null,
                this.bde = null,
                this.bdeGameSocket = null,
                this.tableID = -1,
                this.seatID = -1,
                this.playerHead = null,
                this.playerList = null,
                this.beBankerMin = 0,
                this.beBankerMax = 0,
                this.tax = 0,
                this.addScore = 0,
                this.coinList = [],
                this.eventOn = !1,
                this.init = function() {
                    this.playerInfo = t("PlayerInfo").getInstant
                },
                this.loginGame_Function = function(e, n, i, o) {
                    var a = this,
                    s = null;
                    cc.sys.isNative ? a.bdeGameSocket = SocketIO.connect(e + ":" + n) : (s = t("Socket.io"), a.bdeGameSocket = s(e + ":" + n)),
                    a.bdeGameSocket.on("connect_error",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("Bde")
                    }),
                    a.bdeGameSocket.on("connect_timeout",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("Bde")
                    }),
                    a.bdeGameSocket.on("connected",
                    function(t) {
                        if (t) try {
                            a.bdeGameSocket.emit("LoginGame", {
                                userid: i,
                                gametype: 4,
                                sign: o
                            })
                        } catch(e) {}
                    }),
                    a.bdeGameSocket.on("loginGameResult",
                    function(t) {
                        t = a.changeResultJSON_Function(t),
                        t.resultid ? (a.playerInfo.playerCoin = t.Obj.score / a.playerInfo.exchangeRate, a.lobbyMain.getComponent("LobbyMain").netWork.socket.disconnect(), a.bdeGameSocket.emit("LoginRoom", {
                            roomid: 1
                        }), a.loginRoom_Function()) : (a.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !1, a.lobbyMain.getComponent("LobbyMain").loadGameScene = !1, a.lobbyMain.getComponent("LobbyMain").bg_Black.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = t.msg, a.eventOn = !1)
                    })
                },
                this.loginRoom_Function = function() {
                    var t = this;
                    t.bdeGameSocket.on("LoginRoomResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && (t.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !0, t.lobbyMain.bg_Black.active = !0, t.tableID = e.ResultData.TableId, t.seatID = e.ResultData.seatId, t.playerList = e.ResultData.userList, t.beBankerMin = e.ResultData.upMin / t.playerInfo.exchangeRate, t.beBankerMax = e.ResultData.upMax / t.playerInfo.exchangeRate, t.addScore = e.ResultData.addscore / t.playerInfo.exchangeRate, t.coinList = e.ResultData.coinConfig, t.playerInfo.gameDisconnect = !1, t.playerInfo.gameName = "Bde", cc.audioEngine.stopAll(), cc.director.loadScene("BDE"))
                    })
                },
                this.setBdeSocketOn_Function = function() {
                    var t = this;
                    t.bdeGameSocket.on("downCoinBegin",
                    function(e) {
                        t.bde.startGame_Function()
                    }),
                    t.bdeGameSocket.on("downEnd",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.bde.getComponent("BdeMain").isBetTime = !1
                    }),
                    t.bdeGameSocket.on("openResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.result && (t.bde.seCardType_Function(e.card), t.bde.setResult_Function(e.jieguo))
                    }),
                    t.bdeGameSocket.on("downCoinResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        1 === e.ResultCode ? (t.bde.bettedChips_Function(e.selectId, e.downCoin, 1), t.bde.setSystemMessage_Function("", 0, 0), t.bde.playBetAudio_Function()) : e.ResultCode === -1 && t.bde.betIsFull_Function()
                    }),
                    t.bdeGameSocket.on("otherDownCoin",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && (t.bde.bettedChips_Function(e.selectId, e.downCoin, 0), t.bde.setSystemMessage_Function(e.userNickname, e.downCoin, 0), t.bde.playBetAudio_Function())
                    }),
                    t.bdeGameSocket.on("upResult",
                    function(e) {
                        if (e = t.changeResultJSON_Function(e), e.ResultCode) {
                            var n = {
                                userId: t.bde.playerID,
                                nickname: t.bde.userName,
                                upCoin: t.bde.takeMoney * t.bde.playerInfo.exchangeRate
                            };
                            t.bde.getComponent("BdeMain").isBetTime = !0,
                            t.bde.checkBankerList_Function(n)
                        }
                    }),
                    t.bdeGameSocket.on("downResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        1 === e.ResultCode ? (t.bde.com_Buttons.getChildByName("bt_BeBanker").active = !0, t.bde.com_Buttons.getChildByName("bt_GiveUp").active = !1, t.bde.isBanker = !1, t.bde.applyToDown = !1, t.bde.com_Buttons.getChildByName("bt_GiveUp").getComponent("cc.Button").interactable = !0, t.bde.bankerDown_Function(e.upCoin, e.idx)) : 2 === e.ResultCode ? (t.bde.com_Buttons.getChildByName("bt_GiveUp").getComponent("cc.Button").interactable = !1, t.bde.applyToDown_Function()) : t.bde.applyToDownFail_Function()
                    }),
                    t.bdeGameSocket.on("otherUp",
                    function(e) {
                        if (e = t.changeResultJSON_Function(e)) {
                            var n = {
                                userId: -1,
                                nickname: e.userNickname,
                                upCoin: e.upCoin
                            };
                            t.bde.getComponent("BdeMain").isBetTime = !0,
                            t.bde.checkBankerList_Function(n)
                        }
                    }),
                    t.bdeGameSocket.on("otherDown",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.bde.bankerDown_Function(0, e.idx)
                    }),
                    t.bdeGameSocket.on("winResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.bde.billng_Function(e)
                    }),
                    t.bdeGameSocket.on("getDownTimeResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && t.bde.firstTimeEntryInit_Function(e)
                    }),
                    t.bdeGameSocket.on("resetBankerCoin",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && t.bde.updateBankerMoney_Function(e.upCoin)
                    }),
                    t.bdeGameSocket.on("playEnter",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && t.bde.playerEnterRoom_Function(e.ResultData)
                    }),
                    t.bdeGameSocket.on("PlayerOut",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.bde.playerLeaveRoom_Function(e.userId)
                    }),
                    t.bdeGameSocket.on("sendCard",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.bde.rollDice_Function(e.dice1, e.dice2)
                    }),
                    t.bdeGameSocket.on("sendShuffle",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.bde.shuffle_Function()
                    }),
                    t.bdeGameSocket.on("vsResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.Result ? (e.data.userNickname === t.nickName ? (t.bde.setSystemMessage_Function("", e.data.vsCoin, 2), t.bde.duelId = e.data.selectId) : t.bde.setSystemMessage_Function(e.data.userNickname, e.data.vsCoin, 2), t.bde.applyToDuel_Function(e)) : t.bde.setSystemMessage_Function("申请对决失败,", e.msg, 3)
                    }),
                    t.bdeGameSocket.on("changeBanker",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.bde.changeBankerTime_Function(e.changeBankerTime)
                    }),
                    t.bdeGameSocket.on("disconnect",
                    function(e) {
                        t.bde.gameExit || t.bde.disconnectNetWork_Function()
                    })
                },
                this.setLobbyMainObj_Function = function(t) {
                    this.lobbyMain = t
                },
                this.setBdeObj_Function = function(t) {
                    this.bde = t
                },
                this.changeResultJSON_Function = function(t) {
                    if (cc.sys.isNative) {
                        var e = JSON.parse(t);
                        return e
                    }
                    return t
                },
                this.init()
            };
            return e ? {
                getInstant: e
            }: (e = new n, {
                getInstant: e
            })
        } ();
        e.exports = i,
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo",
        "Socket.io": "Socket.io"
    }],
    BdePoint: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "eb788EdQlVHk4vauXJGYUmC", "BdePoint"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                pointFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                point: 0,
                type: 0
            },
            onLoad: function() {},
            setPoint_Function: function(t) {
                this.point = t,
                this.setFrame_Function(t)
            },
            setFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.pointFrame[t]
            }
        }),
        cc._RF.pop()
    },
    {}],
    BdeSign: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b5324sn0u9KEq42vcMn0U3M", "BdeSign"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                signFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {},
            setSignFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.signFrame[t]
            }
        }),
        cc._RF.pop()
    },
    {}],
    BgRandomMove: [function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        cc._RF.push(e, "b4eabW2PxNH9oPZJokmg8ux", "BgRandomMove");
        var o;
        cc.Class({
            "extends": cc.Component,
            properties: (o = {},
            i(o, "X轴移动距离", 1), i(o, "y轴移动距离", 1), i(o, "移动速度(单位：像素/秒)", 20), i(o, "随机量", 10), o),
            randomMove: function() {
                var t = cc.pLength(cc.p(this["X轴移动距离"], this["y轴移动距离"])) / this["移动速度(单位：像素/秒)"],
                e = cc.pMult(cc.pNormalize(cc.p(cc.randomMinus1To1(), cc.randomMinus1To1())), this["随机量"]),
                n = cc.pAdd(cc.p(this["X轴移动距离"], this["y轴移动距离"]), e),
                i = cc.repeatForever(cc.sequence(cc.moveBy(t, n), cc.moveBy(t, cc.pMult(n, -1))));
                this.node.runAction(i)
            },
            onLoad: function() {
                this.randomMove()
            }
        }),
        cc._RF.pop()
    },
    {}],
    BillBoard: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "90034scyplFkpEtXd6Zl8r6", "BillBoard"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                this._armatureDisplay = this.getComponent("dragonBones.ArmatureDisplay"),
                this._armature = this._armatureDisplay.armature(),
                this._armatureDisplay.addEventListener(dragonBones.EventObject.START, this.startPlay_Function, this),
                this._armatureDisplay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loop_com_Function, this),
                this._armatureDisplay.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.frame_event_Function, this)
            },
            startPlay_Function: function(t) {},
            loop_com_Function: function(t) {
                this.ResetPosition_Function()
            },
            frame_event_Function: function(t, e) {},
            SetLabel_Function: function(t) {
                this.node.getChildByName("Score").getComponent("cc.Label").string = t
            },
            ResetPosition_Function: function() {
                this.node.setPosition(this.node.x, -600),
                this.node.getChildByName("Score").getComponent("cc.Animation").stop()
            }
        }),
        cc._RF.pop()
    },
    {}],
    BirdScoreLabel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "466b8byMd1DWpyqT2NZDdnu", "BirdScoreLabel"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {},
            resetScoreLabel: function() {
                var t = this.node,
                e = cc.callFunc(function() {
                    t.parent.parent.getComponent("GameMain").BirdScoreLabelPool.put(t)
                },
                this),
                n = cc.sequence(cc.scaleTo(.2, .8), cc.scaleTo(.1, .6), cc.delayTime(1), cc.fadeOut(.2), e);
                this.node.runAction(n)
            }
        }),
        cc._RF.pop()
    },
    {}],
    Bird: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2d563t8EaxKDKjD1ifMoDoo", "Bird"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                birdID: 0,
                birdType: 0,
                activity: !1,
                deaded: !0,
                time: 0,
                colorChange: !1,
                turntable: {
                    "default": null,
                    type: cc.Prefab
                },
                Pb_Halo: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_toadquan: {
                    "default": null,
                    type: cc.Prefab
                },
                pen_Label: {
                    "default": null,
                    type: cc.Prefab
                },
                existence: !1,
                Halo: !1,
                TQ: !1,
                PL: !1,
                p_Label: null
            },
            onLoad: function() {
                this.deadAnimationTimes = 0,
                this.playDeadAnimation = !1,
                this.dying = !1,
                this.name = "bird"
            },
            BirdCreat_function: function(t, e, n, i, o, a, s, c, r) {
                this.birdID = t,
                this.birdType = e,
                this.node.opacity = 255,
                this.node.scale = 1.8,
                this.positionArray = null,
                26 === e ? r += "+": r = "",
                this.node.getChildByName("id").getComponent("cc.Label").string = r,
                this.LoadPath_Function(n, i, o, a, s, c)
            },
            LoadPath_Function: function(t, e, n, i, o, a) {
                var s = cc.p(0, 0),
                c = 0;
                if (this.positionArray = new Array(n[t].length), e < 2) for (c = 0; c < this.positionArray.length; ++c) s = cc.p(0, 0),
                s.x = n[t][c][0] * a * 1.1 - i.x,
                s.y = n[t][c][1] * a * 1.1 - i.y,
                this.positionArray[c] = s;
                else for (c = 0; c < this.positionArray.length; ++c) s = cc.p(0, 0),
                s.x = n[t][c][0] * a * 1.1 - i.x,
                s.y = n[t][c][1] * a * 1.1 * -1 - i.y,
                this.positionArray[c] = s;
                this.BirdRun_Function(o)
            },
            BirdRun_Function: function(t) {
                this.node.setPosition(this.positionArray[0]),
                this.lastP = cc.p(0, 0),
                this.currentP = cc.p(0, 0);
                var e;
                e = t === !0 ? cc.cardinalSplineTo(this.node.parent.parent.getComponent("GameMain").fishWaveMoveTime, this.positionArray, -.5) : cc.cardinalSplineTo(this.node.parent.parent.getComponent("GameMain").moveTime[this.birdType], this.positionArray, -.5);
                var n = cc.sequence(e, cc.callFunc(function() {
                    this.deaded = !0,
                    this.dying = !1,
                    this.activity = !1,
                    this.existence ? (this.turn.destroy(), this.existence = !1) : this.Halo ? (this.PHalo.destroy(), this.Halo = !1) : this.TQ ? (this.toadquan.destroy(), this.TQ = !1) : this.PL && (this.p_Label.destroy(), this.PL = !1, this.node.parent.parent.getComponent("GameMain").pen = null);
                    for (var t = 0; t < this.node.parent.parent.getComponent("GameMain").birdArray.length; t++) this.node.parent.parent.getComponent("GameMain").birdArray[t] == this.node && this.node.parent.parent.getComponent("GameMain").birdArray.splice(t, 1);
                    this.node.parent.parent.getComponent("GameMain").FishPool.put(this.node)
                },
                this));
                this.node.runAction(n),
                18 === this.birdType || 19 === this.birdType || 20 === this.birdType ? (this.turn = cc.instantiate(this.turntable), this.node.parent.addChild(this.turn, -1), this.turn.setPosition(this.node.getPosition()), this.existence = !0) : 15 === this.birdType || 16 === this.birdType || 17 === this.birdType ? (this.PHalo = cc.instantiate(this.Pb_Halo), this.node.parent.addChild(this.PHalo, -1), this.PHalo.setPosition(this.node.getPosition()), this.Halo = !0) : 23 === this.birdType ? (this.p_Label = cc.instantiate(this.pen_Label), this.node.addChild(this.p_Label), this.PL = !0, this.p_Label.getComponent("cc.Label").string = this.node.parent.parent.getComponent("GameMain").pool) : 24 === this.birdType && (this.toadquan = cc.instantiate(this.pb_toadquan), this.node.parent.addChild(this.toadquan, -1), this.toadquan.setPosition(this.node.getPosition()), this.TQ = !0),
                this.getComponent("cc.Animation").play("move" + this.birdType),
                this.deaded = !1,
                this.dying = !1,
                this.activity = !0
            },
            Rotation_function: function() {
                this.currentP = this.node.getPosition();
                var t = this.currentP.sub(this.lastP),
                e = cc.pToAngle(t) / Math.PI * 180;
                if (this.node.rotation = -e, this.lastP = this.currentP, 18 === this.birdType || 19 === this.birdType || 20 === this.birdType) {
                    var n = this.node.getPosition().x + 10 * Math.cos(cc.pToAngle(t)),
                    i = this.node.getPosition().y + 10 * Math.sin(cc.pToAngle(t));
                    this.turn.setPosition(n, i)
                } else 15 === this.birdType || 16 === this.birdType || 17 === this.birdType ? this.PHalo.setPosition(this.node.getPosition()) : 23 === this.birdType || 25 === this.birdType ? this.node.rotation = 0 : 24 === this.birdType ? this.toadquan.setPosition(this.node.getPosition()) : 26 === this.birdType && (this.node.rotation = 0);
            },
            CountDeadAnimationTimes_Function: function(t) {
                this.deadAnimationTimes += t,
                this.deadAnimationTimes > 1 && (this.node.stopAllActions(), this.playDeadAnimation = !1, this.dying = !1, this.deaded = !0, this.activity = !1, this.deadAnimationTimes = 0, this.existence ? (this.turn.destroy(), this.existence = !1) : this.Halo ? (this.PHalo.destroy(), this.Halo = !1) : this.TQ ? (this.toadquan.destroy(), this.TQ = !1) : this.PL && (this.p_Label.destroy(), this.PL = !1, this.node.parent.parent.getComponent("GameMain").pen = null), this.node.getComponent("cc.Animation").stop(), this.node.parent.parent.getComponent("GameMain").FishPool.put(this.node))
            },
            playDeadAnimation_Function: function(t) {
                this.node.getComponent("cc.Animation").play("dead" + this.birdType),
                this.playDeadAnimation = !0
            },
            countColorChange_Function: function(t) {
                this.time >= .3 ? (this.time = 0, this.colorChange = !1, this.node.color = cc.Color.WHITE, this.existence ? this.turn.color = cc.Color.WHITE: this.Halo ? this.PHalo.color = cc.Color.WHITE: this.TQ && (this.toadquan.color = cc.Color.WHITE)) : this.time += t
            },
            update: function(t) { ! this.activity || this.deaded || this.dying || this.Rotation_function(),
                this.dying && this.CountDeadAnimationTimes_Function(t),
                this.colorChange && this.countColorChange_Function(t)
            }
        }),
        cc._RF.pop()
    },
    {}],
    BullAniamation: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a3c0dYlfXhCjrB7RsU9Ymgh", "BullAniamation"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            sendCardAnimationCallBack_Function: function(t) {
                this.canvasNode.getComponent("BullMain").cardArray[t].active = !0
            },
            sendCardFinishCallBack_Function: function() {
                this.canvasNode.getComponent("BullMain").openSendCard_Function()
            },
            reissueCardAnimationCallBack_Function: function(t) {
                this.canvasNode.getComponent("BullMain").cardArray[t].active = !0,
                this.canvasNode.getComponent("BullMain").openReissueCard_Function()
            },
            setBankerAnimationCallBack_Funcion: function() {},
            playerWinScoreLabelCallBack_Function: function(t) {
                this.canvasNode.getComponent("BullMain").com_PlayerMessage.getChildByName("com_Player" + t).getChildByName("lb_WinScore").active = !1,
                this.canvasNode.getComponent("BullMain").com_PlayerMessage.getChildByName("com_Player" + t).getChildByName("lb_FailScore").active = !1
            }
        }),
        cc._RF.pop()
    },
    {}],
    BullButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "afa84U8r5JIopVf5dm7GZs4", "BullButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            grapButtonClick_Function: function() {
                this.canvasNode.getComponent("BullMain").grabBanker_Function(this)
            },
            betButtonClick_Function: function() {
                this.canvasNode.getComponent("BullMain").betSelect_Function(this)
            },
            helpButtonClick_Functionf: function() {
                this.canvasNode.getComponent("BullMain").bg_Black.active = !0,
                this.canvasNode.getComponent("BullMain").com_Help.active = !0
            },
            helpMenuCloseClick_Function: function() {
                this.canvasNode.getComponent("BullMain").bg_Black.active = !1,
                this.canvasNode.getComponent("BullMain").com_Help.active = !1
            },
            exitButtonClick_Function: function() {
                this.canvasNode.getComponent("BullMain").isGaming ? (this.canvasNode.getComponent("BullMain").bg_Black.active = !0, this.canvasNode.getComponent("BullMain").com_Exit.active = !0) : this.canvasNode.getComponent("BullMain").exitGame_Function()
            },
            getBullButtonClick_Function: function() {
                this.canvasNode.getComponent("BullMain").setBullPoint_Function()
            },
            noBullButtonClick_Function: function() {
                0 === this.canvasNode.getComponent("BullMain").serverPoint && (this.canvasNode.getComponent("BullMain").netWork.bullSocket.emit("show"), this.canvasNode.getComponent("BullMain").com_GetBull.getChildByName("bt_GetBull").active = !1, this.canvasNode.getComponent("BullMain").com_GetBull.getChildByName("bt_NotBull").active = !1)
            },
            messageBoxConfirmButtonClick_Function: function() {
                switch (this.canvasNode.getComponent("BullMain").com_MessageBox.active = !1, this.canvasNode.getComponent("BullMain").netWork.grabBullSocket = null, cc.audioEngine.stopAll(), this.canvasNode.getComponent("BullMain").playerInfo.lobbySelect) {
                case 0:
                    cc.director.loadScene("LobbyMain");
                    break;
                case 1:
                    cc.director.loadScene("Lobby_Fish")
                }
            },
            messageBoxReconnectButtonClick_Function: function() {
                switch (this.canvasNode.getComponent("BullMain").com_MessageBox.active = !1, cc.audioEngine.stopAll(), this.canvasNode.getComponent("BullMain").playerInfo.lobbySelect) {
                case 0:
                    cc.director.loadScene("LobbyMain");
                    break;
                case 1:
                    cc.director.loadScene("Lobby_Fish")
                }
            },
            exitMenuCancelButtonClick_Function: function() {
                this.canvasNode.getComponent("BullMain").bg_Black.active = !1,
                this.canvasNode.getComponent("BullMain").com_Exit.active = !1
            },
            exitMenuForceExitButtonClick_Function: function() {
                this.canvasNode.getComponent("BullMain").exitGame_Function()
            }
        }),
        cc._RF.pop()
    },
    {}],
    BullCard: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "79118sa1klEAYHwM2icxx0K", "BullCard"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_CardSprite: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                canvasNode: null,
                type: 0,
                point: 0
            },
            onLoad: function() {},
            open_Function: function(t) {
                this.type = t,
                this.setFrame_Function(t),
                this.setPoint_Function(t)
            },
            setFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.sp_CardSprite[t]
            },
            setPoint_Function: function(t) {
                var e = t % 13;
                e > 10 || 0 === e ? this.point = 10 : this.point = e
            },
            clickCard_Function: function() {
                this.canvasNode.canSetBull && this.canvasNode.checkBull_Function(this.node.cardId)
            }
        }),
        cc._RF.pop()
    },
    {}],
    BullCoin: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b8223Mz80NO0aMNAQhCX+Eo", "BullCoin"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                type: 0,
                flyFinish: !1,
                timeCount: 0
            },
            onLoad: function() {},
            setFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.sp_CoinSprite[t]
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            setCoinToBanker_Function: function(t, e, n) {
                this.node.setPosition(t.x, t.y);
                var i = cc.moveTo(.3 + .01 * n, e.x + this.getRandom_Function( - 70, 70), e.y + this.getRandom_Function( - 30, 30)),
                o = cc.sequence(i, cc.callFunc(function() {
                    this.flyFinish = !0,
                    this.timeCount = 0
                },
                this));
                this.node.runAction(o)
            },
            setCoinToPlayer_Function: function(t, e, n) {
                this.node.setPosition(e.x, e.y);
                var i = cc.moveTo(.3 + .01 * n, t.x + this.getRandom_Function( - 70, 70), t.y + this.getRandom_Function( - 30, 30)),
                o = cc.sequence(i, cc.callFunc(function() {
                    this.flyFinish = !0,
                    this.timeCount = 0
                },
                this));
                this.node.runAction(o)
            },
            update: function(t) {
                this.node.active && this.flyFinish && (this.timeCount < .1 ? this.timeCount += t: (this.timeCount = 0, this.node.active = !1, this.flyFinish = !1))
            }
        }),
        cc._RF.pop()
    },
    {}],
    BullMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f42ebGZ2fZMepFxP2w/x2SX", "BullMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                com_BG: {
                    "default": null,
                    type: cc.Node
                },
                com_View: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_Button: {
                    "default": null,
                    type: cc.Node
                },
                com_GameMenu: {
                    "default": null,
                    type: cc.Node
                },
                com_GetBull: {
                    "default": null,
                    type: cc.Node
                },
                com_Timer: {
                    "default": null,
                    type: cc.Node
                },
                com_SendCardAnimation: {
                    "default": null,
                    type: cc.Node
                },
                com_Help: {
                    "default": null,
                    type: cc.Node
                },
                com_Bill: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox: {
                    "default": null,
                    type: cc.Node
                },
                com_Exit: {
                    "default": null,
                    type: cc.Node
                },
                com_Tips: {
                    "default": null,
                    type: cc.Node
                },
                pb_Card: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Point: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Coin: {
                    "default": null,
                    type: cc.Prefab
                },
                bg_Black: {
                    "default": null,
                    type: cc.Node
                },
                sp_BankerFrame: {
                    "default": null,
                    type: cc.Node
                },
                sp_GrabBull: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                sp_Bet: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                an_GetBull: {
                    "default": null,
                    type: cc.Node
                },
                an_DragonBoneAnimation: {
                    "default": null,
                    type: cc.Node
                },
                an_SetBankerAnimation: {
                    "default": null,
                    type: cc.Node
                },
                au_BullBGM: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_ButtonSound: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_SendCard: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_GameStart: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Point: {
                    "default": [],
                    url: cc.AudioClip
                },
                au_Win: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Lose: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Coin: {
                    "default": null,
                    url: cc.AudioClip
                }
            },
            onLoad: function() {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE),
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.renderer.enableDirtyRegion(!1);
                var e = this;
                cc.view.setResizeCallback(function() {
                    var t = cc.view.getVisibleSize(),
                    n = window.orientation;
                    e.uiResize_Function(t, n)
                }),
                this.playerInfo = t("PlayerInfo").getInstant,
                this.playerInfo.setGameObj_Function(this),
                this.netWork = t("BullNetWork").getInstant,
                this.netWork.setBullObj_Function(this);
                var n = window.orientation;
                this.uiInit_Function(n),
                this.gameInit_Function()
            },
            uiInit_Function: function(t) {
                var e = cc.view.getVisibleSize(),
                n = e.width / 1334;
                e.width > 1334 ? (this.com_BG.getChildByName("bg").scaleX = n, this.com_BG.getChildByName("bg").scaleY = n, this.bg_Black.scaleX = n, this.bg_Black.scaleY = n, this.com_PlayerMessage.getChildByName("com_Player0").x = -e.width / 2 + 100, this.com_Button.getChildByName("bt_Exit").x = e.width / 2 - 80) : e.width < 1334 && (this.node.scaleX = n, this.node.scaleY = n, this.com_BG.getChildByName("bg").scaleX = 1 / n, this.com_BG.getChildByName("bg").scaleY = 1 / n, this.bg_Black.scaleX = 1 / n, this.bg_Black.scaleY = 1 / n, this.com_Button.getChildByName("bt_Exit").x = e.width / n / 2 - 80),
                this.com_PlayerMessage.getChildByName("com_Player1").x = -this.com_PlayerMessage.getChildByName("com_Player0").x,
                this.com_PlayerMessage.getChildByName("com_Player4").x = this.com_PlayerMessage.getChildByName("com_Player0").x,
                this.com_Button.getChildByName("bt_Help").x = -this.com_Button.getChildByName("bt_Exit").x
            },
            uiResize_Function: function(t, e) {
                var n = t.width / 1334;
                if (t.width > 1334) this.node.scaleX = 1,
                this.node.scaleY = 1,
                this.com_BG.getChildByName("bg").scaleX = n,
                this.com_BG.getChildByName("bg").scaleY = n,
                this.bg_Black.scaleX = n,
                this.bg_Black.scaleY = n,
                this.com_PlayerMessage.getChildByName("com_Player0").x = -t.width / 2 + 100,
                this.com_Button.getChildByName("bt_Exit").x = t.width / 2 - 80;
                else if (t.width < 1334) {
                    this.node.scaleX = n,
                    this.node.scaleY = n;
                    var i = t.width / n;
                    t.height / n;
                    this.com_BG.getChildByName("bg").scaleX = 1 / n,
                    this.com_BG.getChildByName("bg").scaleY = 1 / n,
                    this.bg_Black.scaleX = 1 / n,
                    this.bg_Black.scaleY = 1 / n,
                    this.com_PlayerMessage.getChildByName("com_Player0").x = -i / 2 + 100,
                    this.com_Button.getChildByName("bt_Exit").x = i / 2 - 80
                }
                this.com_PlayerMessage.getChildByName("com_Player1").x = -this.com_PlayerMessage.getChildByName("com_Player0").x,
                this.com_PlayerMessage.getChildByName("com_Player4").x = this.com_PlayerMessage.getChildByName("com_Player0").x,
                this.com_Button.getChildByName("bt_Help").x = -this.com_Button.getChildByName("bt_Exit").x
            },
            gameInit_Function: function() {
                this.bg_Black.on("touchstart",
                function(t) {
                    return ! 1
                },
                this),
                this.netWork.setBullSocketOn_Function(),
                this.cardArray = new Array(25),
                this.cardPosition = [[ - 350, -260], [280, 10], [140, 180], [ - 260, 180], [ - 400, 10]],
                this.openCardPosition = [ - 60, -120];
                for (var t = null,
                e = 0; e < this.cardArray.length; ++e) t = cc.instantiate(this.pb_Card),
                this.cardArray[e] = t,
                this.com_View.addChild(this.cardArray[e]),
                e < 5 ? (this.cardArray[e].scaleX = 1.5, this.cardArray[e].scaleY = 1.5, this.cardArray[e].setPosition(this.cardPosition[parseInt(e / 5)][0] + 176 * parseInt(e % 5), this.cardPosition[parseInt(e / 5)][1]), this.cardArray[e].getComponent("BullCard").canvasNode = this, this.cardArray[e].getComponent("cc.Button").interactable = !0, this.cardArray[e].cardId = e) : this.cardArray[e].setPosition(this.cardPosition[parseInt(e / 5)][0] + 32 * parseInt(e % 5), this.cardPosition[parseInt(e / 5)][1]),
                this.cardArray[e].active = !1;
                for (this.resultCardArray = new Array(5), this.pointArray = new Array(5), this.pointPosition = [[0, -150], [340, -25], [200, 145], [ - 210, 145], [ - 340, -25]], t = null, e = 0; e < this.pointArray.length; ++e) t = cc.instantiate(this.pb_Point),
                this.pointArray[e] = t,
                this.com_View.addChild(this.pointArray[e]),
                this.pointArray[e].setPosition(this.pointPosition[e][0], this.pointPosition[e][1]),
                this.pointArray[e].active = !1;
                for (this.serverPoint = -1, this.coinArray = new Array(250), t = null, e = 0; e < this.coinArray.length; ++e) t = cc.instantiate(this.pb_Coin),
                this.coinArray[e] = t,
                this.com_View.addChild(this.coinArray[e]),
                this.coinArray[e].active = !1;
                this.coinFly = !1,
                this.bankerSeatId = -1,
                this.randomBankerTimer = 0,
                this.randomBanker = !1,
                this.randomBankerArray = [],
                this.randomBankerPosition = 0,
                this.sp_BankerFrame.active = !1,
                this.grabBullSelectArray = [],
                this.randomBankerCount = 0,
                this.timeRun = !1,
                this.currentTime = 0,
                this.totalTime = 0,
                this.timeCount = 0,
                this.com_Timer.active = !1,
                this.cardClick = new Array(5),
                this.playerList = null,
                this.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_PlayerName").getComponent("cc.Label").string = this.playerInfo.playerName,
                this.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (this.playerInfo.playerCoin / this.playerInfo.exchangeRate).toFixed(2),
                this.canSendCard = [0, 0, 0, 0, 0],
                this.gameState = 0,
                this.GS_GAMESTART = 1,
                this.GS_SENDCARDS = 2,
                this.GS_GRABBANKER = 3,
                this.GS_SELECTBET = 4,
                this.GS_SETBULL = 5,
                this.GS_OPENCARD = 6,
                this.GS_BILLING = 7,
                this.an_DBAnimation = this.an_DragonBoneAnimation.getComponent("dragonBones.ArmatureDisplay"),
                this.dbArmature = this.an_DBAnimation.armature(),
                this.an_DBAnimation.addEventListener(dragonBones.EventObject.START, this.startPlay_Function, this),
                this.an_DBAnimation.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loop_com_Function, this),
                this.an_DBAnimation.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.frame_event_Function, this),
                this.canSetBull = !1,
                this.db_GetBullAnimation = this.an_GetBull.getChildByName("db_GetBull").getComponent("dragonBones.ArmatureDisplay"),
                this.db_GetBullArmature = this.db_GetBullAnimation.armature(),
                this.db_GetBullAnimation.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.frame_event_Function, this),
                this.winResult = [],
                this.timeOut = [],
                this.buttonInit_Function(),
                this.isGaming = !1,
                this.gameExit = !1,
                this.netWork.bullSocket.emit("getDownTime", {}),
                this.netWork.bullSocket.emit("getTableList"),
                this.playerInfo.musicControl && cc.audioEngine.play(this.au_BullBGM, !0, .5)
            },
            playerMessageInit_Function: function(t) {
                this.playerList = t;
                for (var e = -1,
                n = 0; n < t.length; ++n) e = this.changeSeatId_Function(this.playerList[n].seatId),
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_PlayerHead").active = !0,
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("lb_PlayerName").getComponent("cc.Label").string = this.playerList[n].nickname,
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (this.playerList[n].score / this.playerInfo.exchangeRate).toFixed(2)
            },
            startPlay_Function: function(t) {},
            loop_com_Function: function(t) {},
            frame_event_Function: function(t) {
                switch (t.detail.name) {
                case "start":
                    break;
                case "win":
                    break;
                case "lose":
                    break;
                case "over":
                    this.com_GetBull.active = !1
                }
            },
            buttonInit_Function: function() {
                for (var t = 0; t < this.com_Button.getChildByName("com_GrabButton").children.length; ++t) this.com_Button.getChildByName("com_GrabButton").children[t].grab = t;
                var e = [5, 10, 20, 30];
                for (t = 0; t < this.com_Button.getChildByName("com_BetButton").children.length; ++t) this.com_Button.getChildByName("com_BetButton").children[t].bet = e[t],
                this.com_Button.getChildByName("com_BetButton").children[t].betId = t
            },
            firstTimeEntryInit_Function: function(t) {
                if (t.data.tableState[t.data.tableState.length - 1].play) switch (t.data.remainTime > 0 && (this.currentTime = t.data.remainTime, this.totalTime = t.data.remainTime, this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime, this.com_Timer.active = !0, this.timeRun = !0), t.data.state) {
                case 0:
                    this.gameState = this.GS_GAMESTART;
                    for (var e = 0; e < t.data.tableState.length - 1; ++e) t.data.tableState[e].userId && (this.canSendCard[e] = 1, t.data.tableState[e].userId === this.playerInfo.playerId && (this.com_Tips.getChildByName("sp_Tips01").active = !1, this.isGaming = !0));
                    break;
                case 1:
                    this.gameState = this.GS_GRABBANKER;
                    for (var e = 0; e < t.data.tableState.length - 1; ++e) t.data.tableState[e].userId && (t.data.tableState[e].userId === this.playerInfo.playerId && (this.com_Button.getChildByName("com_GrabButton").active = !0, this.com_Tips.getChildByName("sp_Tips01").active = !1, this.isGaming = !0), this.canSendCard[e] = 1);
                    break;
                case 2:
                    this.gameState = this.GS_SELECTBET;
                    for (var e = 0; e < t.data.tableState.length - 1; ++e) t.data.tableState[e].userId && (t.data.tableState[e].userId === this.playerInfo.playerId && (t.data.tableState[t.data.tableState.length - 1].seatId !== this.netWork.seatId && (this.com_Button.getChildByName("com_BetButton").active = !0, this.isGaming = !0), this.com_Tips.getChildByName("sp_Tips01").active = !1), this.canSendCard[e] = 1);
                    this.bankerSeatId = t.data.tableState[t.data.tableState.length - 1].seatId;
                    var n = this.changeSeatId_Function(t.data.tableState[t.data.tableState.length - 1].seatId);
                    switch (this.sp_BankerFrame.active = !0, this.sp_BankerFrame.setPosition(this.com_PlayerMessage.getChildByName("com_Player" + n).position), this.an_SetBankerAnimation.active = !0, n) {
                    case 0:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55);
                        break;
                    case 1:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 2:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 3:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 4:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55)
                    }
                    break;
                case 3:
                    this.gameState = this.GS_SETBULL;
                    for (var e = 0; e < t.data.tableState.length - 1; ++e) {
                        if (t.data.tableState[e].userId) if (t.data.tableState[e].userId === this.playerInfo.playerId) {
                            for (var i = 0; i < 5; ++i) this.cardArray[i].active = !0,
                            this.cardArray[i].getComponent("BullCard").open_Function(t.data.tableState[t.data.tableState.length - 1].cardList[this.netWork.seatId][i]);
                            t.data.tableState[e].reCallValueId === -1 && (this.com_PlayerMessage.getChildByName("com_Player0").getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_Bet[t.data.tableState[e].callValueId]),
                            this.com_Tips.getChildByName("sp_Tips01").active = !1,
                            this.com_GetBull.active = !0,
                            this.com_GetBull.getChildByName("bt_GetBull").active = !0,
                            this.com_GetBull.getChildByName("bt_NotBull").active = !0,
                            this.canSetBull = !0,
                            this.db_GetBullAnimation.playAnimation("start", 1),
                            this.serverPoint = t.data.my_point,
                            this.isGaming = !0
                        } else {
                            for (var n = this.changeSeatId_Function(e), i = 0; i < 5; ++i) this.cardArray[i + 5 * n].active = !0;
                            if (t.data.tableState[t.data.tableState.length - 1].showList[e] !== -1) {
                                for (var i = 0; i < 5; ++i) this.cardArray[i + 5 * n].getComponent("BullCard").open_Function(t.data.tableState[t.data.tableState.length - 1].cardList[e][i]);
                                this.pointArray[n].active = !0,
                                this.pointArray[n].getComponent("BullPoint").setType_Function(t.data.tableState[t.data.tableState.length - 1].showList[e])
                            }
                            this.com_PlayerMessage.getChildByName("com_Player" + n).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_Bet[t.data.tableState[e].callValueId]
                        }
                        this.canSendCard[e] = 1
                    }
                    this.bankerSeatId = t.data.tableState[t.data.tableState.length - 1].seatId;
                    var n = this.changeSeatId_Function(t.data.tableState[t.data.tableState.length - 1].seatId);
                    switch (this.sp_BankerFrame.active = !0, this.sp_BankerFrame.setPosition(this.com_PlayerMessage.getChildByName("com_Player" + n).position), this.an_SetBankerAnimation.active = !0, n) {
                    case 0:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55);
                        break;
                    case 1:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 2:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 3:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 4:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55)
                    }
                    this.com_PlayerMessage.getChildByName("com_Player" + n).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_GrabBull[t.data.tableState[t.data.tableState.length - 1].bet];
                    break;
                case 4:
                }
            },
            gameStart_Function: function(t) {
                this.gameReset_Function(),
                this.timeRun = !0,
                this.isGaming = !0,
                this.currentTime = t.remainTime,
                this.totalTime = t.remainTime,
                this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime,
                this.com_Timer.active = !0,
                this.canSendCard = [0, 0, 0, 0, 0],
                this.canSendCard = t.tableState,
                this.gameState = this.GS_GAMESTART
            },
            grabBull_Function: function(t) {
                this.timeRun = !0,
                this.currentTime = t.remainTime,
                this.totalTime = t.remainTime,
                this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime,
                this.com_Timer.active = !0,
                this.gameState = this.GS_GRABBANKER,
                this.canSendCard[this.netWork.seatId] && this.netWork.seatId !== this.bankerSeatId && (this.com_Button.getChildByName("com_GrabButton").active = !0)
            },
            sendCard_Function: function(t) {
                this.com_Button.getChildByName("com_BetButton").active = !1;
                for (var e = 0; e < this.cardArray.length; ++e) this.cardArray[e].active = !1;
                for (e = 0; e < t.card.length; ++e) this.resultCardArray[e] = t.card[e];
                var n = 0;
                for (e = 0; e < this.canSendCard.length; ++e) this.canSendCard[e] && (n = this.changeSeatId_Function(e), this.com_SendCardAnimation.getChildByName("an_SendCardAnimation" + n).active = !0, this.com_SendCardAnimation.getChildByName("an_SendCardAnimation" + n).getComponent("cc.Animation").play(), this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_SendCard, !1, 1));
                this.serverPoint = t.cowPoint,
                this.timeRun = !0,
                this.currentTime = t.remainTime,
                this.totalTime = t.remainTime,
                this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime,
                this.com_Timer.active = !0,
                this.gameState = this.GS_SETBULL
            },
            openSendCard_Function: function() {
                for (var t = 0; t < 5; ++t) this.cardArray[t].getComponent("BullCard").open_Function(this.resultCardArray[t]);
                this.com_GetBull.active = !0,
                this.com_GetBull.getChildByName("bt_GetBull").active = !0,
                this.com_GetBull.getChildByName("bt_NotBull").active = !0,
                this.db_GetBullAnimation.playAnimation("start", 1),
                this.canSetBull = !0
            },
            grabBanker_Function: function(t) {
                this.netWork.bullSocket.emit("call", JSON.stringify({
                    callValueId: t.node.grab
                })),
                this.com_Button.getChildByName("com_GrabButton").active = !1,
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_ButtonSound, !1, 1)
            },
            setXbetBankerLabel_Function: function(t) {
                for (var e = 0; e < this.playerList.length; ++e) {
                    var n = this.changeSeatId_Function(t.seatId);
                    this.com_PlayerMessage.getChildByName("com_Player" + n).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_GrabBull[t.callValueId]
                }
                this.grabBullSelectArray[t.seatId] = t.callValueId
            },
            checkBanker_Function: function(t) {
                this.timeRun = !0,
                this.currentTime = t.remainTime,
                this.totalTime = t.remainTime,
                this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime,
                this.com_Timer.active = !0,
                this.bankerSeatId = t.bankerSeatId;
                for (var e = -1,
                n = 0,
                i = 0,
                o = -1,
                a = 0; a < this.grabBullSelectArray.length; ++a) this.grabBullSelectArray[a] >= e && (e = this.grabBullSelectArray[a], ++n);
                if (this.com_Button.getChildByName("com_GrabButton").active = !1, n > 1) {
                    for (var a = 0; a < this.grabBullSelectArray.length; ++a) this.grabBullSelectArray[a] === e && (o = this.changeSeatId_Function(a), this.randomBankerArray[i] = o, ++i);
                    this.randomBanker = !0
                } else this.setBanker_Function()
            },
            betSelect_Function: function(t) {
                this.com_Button.getChildByName("com_BetButton").active = !1,
                this.netWork.bullSocket.emit("reCall", JSON.stringify({
                    reCallValueId: t.node.betId
                })),
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_ButtonSound, !1, 1)
            },
            setXBetPlayerLabel_Function: function(t) {
                for (var e = 0; e < this.playerList.length; ++e) {
                    var n = this.changeSeatId_Function(t.seatId);
                    this.com_PlayerMessage.getChildByName("com_Player" + n).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_Bet[t.reCallValueId]
                }
            },
            randomBanker_Function: function(t) {
                this.sp_BankerFrame.active = !0,
                this.randomBankerPosition >= t.length && (this.randomBankerPosition = 0),
                this.sp_BankerFrame.setPosition(this.com_PlayerMessage.children[this.randomBankerArray[this.randomBankerPosition]].position),
                ++this.randomBankerPosition
            },
            setBanker_Function: function() {
                this.sp_BankerFrame.active = !0;
                var t = this.changeSeatId_Function(this.bankerSeatId);
                switch (this.sp_BankerFrame.setPosition(this.com_PlayerMessage.children[t].position), t) {
                case 0:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55);
                    break;
                case 1:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                    break;
                case 2:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                    break;
                case 3:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y - 45);
                    break;
                case 4:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55)
                }
                this.an_SetBankerAnimation.active = !0,
                this.an_SetBankerAnimation.getComponent("cc.Animation").play();
                for (var e = 0; e < this.com_PlayerMessage.children.length; ++e) e !== t ? this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[0] && this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[1] && this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[2] && this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[3] && this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[4] || (this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = null) : this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame === this.sp_GrabBull[0] && (this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_GrabBull[1]);
                this.canSendCard[this.netWork.seatId] && this.netWork.seatId !== this.bankerSeatId && (this.com_Button.getChildByName("com_BetButton").active = !0),
                this.gameState = this.GS_SELECTBET
            },
            checkBull_Function: function(t) {
                for (var e = 0,
                n = 0; n < this.cardClick.length; ++n) this.cardClick[n] && ++e;
                e < 3 ? this.cardClick[t] ? (this.cardClick[t] = !1, this.cardArray[t].y = this.cardArray[t].y - 20, this.setGetBullLabel_Function(t, !1)) : (this.cardClick[t] = !0, this.cardArray[t].y = this.cardArray[t].y + 20, this.setGetBullLabel_Function(t, !0)) : this.cardClick[t] && (this.cardClick[t] = !1, this.cardArray[t].y = this.cardArray[t].y - 20, this.setGetBullLabel_Function(t, !1))
            },
            setGetBullLabel_Function: function(t, e) {
                if (e) {
                    for (var n = 0; n < 3; ++n) if ("" === this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string) {
                        this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string = this.cardArray[t].getComponent("BullCard").point;
                        break
                    }
                } else {
                    for (var n = 0; n < 3; ++n) if ("" !== this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string && parseInt(this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string) === this.cardArray[t].getComponent("BullCard").point) {
                        this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string = "";
                        break
                    }
                    for (var n = 0; n < 2; ++n)"" === this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string && "" !== this.com_GetBull.getChildByName("lb_GetBull" + (n + 1)).getComponent("cc.Label").string && (this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string = this.com_GetBull.getChildByName("lb_GetBull" + (n + 1)).getComponent("cc.Label").string, this.com_GetBull.getChildByName("lb_GetBull" + (n + 1)).getComponent("cc.Label").string = "")
                }
                var i = 0;
                for (n = 0; n < 3; ++n)"" !== this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string && (i += parseInt(this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string)),
                0 === i ? this.com_GetBull.getChildByName("lb_GetBull3").getComponent("cc.Label").string = "": this.com_GetBull.getChildByName("lb_GetBull3").getComponent("cc.Label").string = i
            },
            setBullPoint_Function: function() {
                for (var t = 0,
                e = 0; e < 4; ++e)"" !== this.com_GetBull.getChildByName("lb_GetBull" + e).getComponent("cc.Label").string && ++t;
                4 === t && parseInt(this.com_GetBull.getChildByName("lb_GetBull3").getComponent("cc.Label").string) % 10 === 0 && (this.com_GetBull.active = !1, this.com_GetBull.getChildByName("bt_GetBull").active = !1, this.com_GetBull.getChildByName("bt_NotBull").active = !1, this.netWork.bullSocket.emit("show"))
            },
            showBullPoint_Function: function(t, e, n) {
                var i = this;
                if (e === this.netWork.seatId) this.db_GetBullAnimation.playAnimation("over", 1),
                this.canSetBull = !1,
                this.timeOut[0] = setTimeout(function() {
                    for (var e = 0; e < 5; ++e) i.cardArray[e].scaleX = 1,
                    i.cardArray[e].scaleY = 1,
                    i.cardArray[e].setPosition(i.cardPosition[0][0] + 130 * e, i.cardPosition[0][1]),
                    i.cardArray[e].runAction(cc.moveTo(.2, i.openCardPosition[0] + 32 * e, i.openCardPosition[1]));
                    i.pointArray[0].active = !0,
                    i.pointArray[0].getComponent("BullPoint").setType_Function(t)
                },
                1e3),
                this.timeOut[1] = setTimeout(function() {
                    i.playerInfo.soundEffectControl && cc.audioEngine.play(i.au_Point[t], !1, 1)
                },
                1200);
                else {
                    for (var o = this.changeSeatId_Function(e), a = 0; a < 5; ++a) this.cardArray[a + 5 * o].getComponent("BullCard").open_Function(n[a]);
                    this.pointArray[o].active = !0,
                    this.pointArray[o].getComponent("BullPoint").setType_Function(t),
                    this.timeOut[2] = setTimeout(function() {
                        i.playerInfo.soundEffectControl && cc.audioEngine.play(i.au_Point[t], !1, 1)
                    },
                    300)
                }
            },
            billing_Function: function(t) {
                var e = this;
                this.isGaming = !1,
                this.timeOut[3] = setTimeout(function() {
                    for (var n = 0; n < t.openMsg.length; ++n) e.netWork.seatId === t.openMsg[n].seatId && (t.openMsg[n].win > 0 ? (e.playerInfo.soundEffectControl && e.an_DBAnimation.playAnimation("win", 1), cc.audioEngine.play(e.au_Win, !1, 1)) : (e.playerInfo.soundEffectControl && e.an_DBAnimation.playAnimation("lose", 1), cc.audioEngine.play(e.au_Lose, !1, 1)))
                },
                2e3),
                this.timeOut[4] = setTimeout(function() {
                    for (var n = 0; n < e.cardArray.length; ++n) e.cardArray[n].active = !1,
                    e.cardArray[n].getComponent("BullCard").open_Function(0),
                    e.cardArray[n].getComponent("BullCard").point = 0;
                    for (n = 0; n < e.pointArray.length; ++n) e.pointArray[n].active = !1;
                    e.coinFly_Function(t)
                },
                5e3),
                this.timeOut[5] = setTimeout(function() {
                    for (var n = 0; n < t.openMsg.length; ++n) if (e.netWork.seatId === t.openMsg[n].seatId) t.openMsg[n].win > 0 ? (e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_WinScore").getChildByName("lb_Score").getComponent("cc.Label").string = "+" + t.openMsg[n].win / e.playerInfo.exchangeRate, e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_WinScore").active = !0, e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_WinScore").getComponent("cc.Animation").play()) : (e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_FailScore").getChildByName("lb_Score").getComponent("cc.Label").string = t.openMsg[n].win / e.playerInfo.exchangeRate, e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_FailScore").active = !0, e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_FailScore").getComponent("cc.Animation").play()),
                    e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) + parseFloat(t.openMsg[n].win / e.playerInfo.exchangeRate)).toFixed(2);
                    else {
                        var i = e.changeSeatId_Function(t.openMsg[n].seatId);
                        t.openMsg[n].win > 0 ? (e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_WinScore").getChildByName("lb_Score").getComponent("cc.Label").string = "+" + t.openMsg[n].win / e.playerInfo.exchangeRate, e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_WinScore").active = !0, e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_WinScore").getComponent("cc.Animation").play()) : (e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_FailScore").getChildByName("lb_Score").getComponent("cc.Label").string = t.openMsg[n].win / e.playerInfo.exchangeRate, e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_FailScore").active = !0, e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_FailScore").getComponent("cc.Animation").play()),
                        e.com_PlayerMessage.children[i].getChildByName("lb_PlayerName").getComponent("cc.Label").string && (e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) + parseFloat(t.openMsg[n].win / e.playerInfo.exchangeRate)).toFixed(2));
                    }
                },
                7e3)
            },
            coinFly_Function: function(t) {
                for (var e = 0; e < t.openMsg.length; ++e) if (this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Coin, !1, 1), t.openMsg[e].seatId !== this.bankerSeatId) {
                    var n = this.changeSeatId_Function(t.openMsg[e].seatId),
                    i = this.changeSeatId_Function(this.bankerSeatId);
                    t.openMsg[e].win < 0 ? this.coinToBankerAnimation_Function(n, i) : this.coinToPlayerAnimation_Function(n, i)
                }
            },
            coinToBankerAnimation_Function: function(t, e) {
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Coin, !1, 1);
                for (var n = 0; n < this.coinArray.length / 5; ++n) for (var i = 0; i < this.coinArray.length; ++i) if (!this.coinArray[i].active) {
                    this.coinArray[i].active = !0,
                    this.coinArray[i].getComponent("BullCoin").setCoinToBanker_Function(this.com_PlayerMessage.getChildByName("com_Player" + t).position, this.com_PlayerMessage.getChildByName("com_Player" + e).position, n);
                    break
                }
            },
            coinToPlayerAnimation_Function: function(t, e) {
                var n = this;
                this.timeOut[6] = setTimeout(function() {
                    for (var i = 0; i < n.coinArray.length / 5; ++i) for (var o = 0; o < n.coinArray.length; ++o) if (!n.coinArray[o].active) {
                        n.coinArray[o].active = !0,
                        n.coinArray[o].getComponent("BullCoin").setCoinToPlayer_Function(n.com_PlayerMessage.getChildByName("com_Player" + t).position, n.com_PlayerMessage.getChildByName("com_Player" + e).position, i);
                        break
                    }
                },
                1e3)
            },
            gameReset_Function: function() {
                for (var t = 0; t < this.cardArray.length; ++t) this.cardArray[t].active = !1,
                this.cardArray[t].getComponent("BullCard").open_Function(0),
                this.cardArray[t].getComponent("BullCard").point = 0;
                for (t = 0; t < 5; ++t) this.cardArray[t].scaleX = 1.5,
                this.cardArray[t].scaleY = 1.5,
                this.cardArray[t].setPosition(this.cardPosition[0][0] + 176 * t, this.cardPosition[0][1]),
                this.cardArray[t].getComponent("cc.Button").interactable = !0;
                for (t = 0; t < 4; ++t) this.com_GetBull.getChildByName("lb_GetBull" + t).getComponent("cc.Label").string = "";
                for (t = 0; t < this.com_PlayerMessage.children.length; ++t) this.com_PlayerMessage.getChildByName("com_Player" + t).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = null;
                for (t = 0; t < this.pointArray.length; ++t) this.pointArray[t].active = !1;
                for (t = 0; t < this.cardClick.length; ++t) this.cardClick[t] = !1;
                this.randomBankerArray = [],
                this.grabBullSelectArray = [],
                this.com_Button.getChildByName("com_GrabButton").active = !1,
                this.com_Button.getChildByName("com_BetButton").active = !1,
                this.com_GetBull.active = !1,
                this.com_GetBull.getChildByName("bt_GetBull").active = !0,
                this.com_GetBull.getChildByName("bt_NotBull").active = !0,
                this.com_Timer.active = !1,
                this.com_Bill.active = !1,
                this.bankerSeatId = -1,
                this.gameState = 0,
                this.canSetBull = !1,
                this.sp_BankerFrame.active = !1,
                this.an_SetBankerAnimation.active = !1,
                this.serverPoint = -1,
                this.coinFly = !1,
                this.winResult = [],
                this.canSendCard[this.netWork.seatId] = 1,
                this.com_Tips.getChildByName("sp_Tips01").active = !1
            },
            timeCount_Function: function(t) {
                if (this.currentTime > 0) if (this.timeCount >= 1) switch (this.timeCount = 0, --this.currentTime, this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime, this.gameState) {
                case this.GS_GAMESTART:
                    2 === this.currentTime && (this.an_DBAnimation.playAnimation("start", 1), this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_GameStart, !1, 1));
                    break;
                case this.GS_SENDCARDS:
                    break;
                case this.GS_GRABBANKER:
                    break;
                case this.GS_SELECTBET:
                    break;
                case this.GS_SETBULL:
                    break;
                case this.GS_OPENCARD:
                    break;
                case this.GS_BILLING:
                } else this.timeCount += t;
                else switch (this.timeRun = !1, this.gameState) {
                case this.GS_GAMESTART:
                    this.com_Timer.active = !1;
                    break;
                case this.GS_SENDCARDS:
                    break;
                case this.GS_GRABBANKER:
                    this.com_Button.getChildByName("com_GrabButton").active = !1;
                    break;
                case this.GS_SELECTBET:
                    this.com_Button.getChildByName("com_BetButton").active = !1;
                    break;
                case this.GS_SETBULL:
                    break;
                case this.GS_OPENCARD:
                    break;
                case this.GS_BILLING:
                }
                this.com_Timer.getChildByName("sp_Time").getComponent("cc.Sprite").fillRange = (this.currentTime - this.timeCount) / this.totalTime
            },
            playerEnterRoom_Function: function(t) {
                this.playerList.push(t);
                var e = this.changeSeatId_Function(t.seatId);
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_PlayerHead").active = !0,
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("lb_PlayerName").getComponent("cc.Label").string = t.nickname,
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (t.score / this.playerInfo.exchangeRate).toFixed(2)
            },
            playerLeaveRoom_Function: function(t, e) {
                for (var n = 0,
                i = 0; i < this.playerList.length; ++i) if (this.playerList[i].userId === e) {
                    n = i;
                    break
                }
                var o = this.changeSeatId_Function(t);
                this.com_PlayerMessage.getChildByName("com_Player" + o).getChildByName("sp_PlayerHead").active = !1,
                this.com_PlayerMessage.getChildByName("com_Player" + o).getChildByName("lb_PlayerName").getComponent("cc.Label").string = "",
                this.com_PlayerMessage.getChildByName("com_Player" + o).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = "",
                this.com_PlayerMessage.getChildByName("com_Player" + o).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = null;
                for (var a = 0; a < 5; ++a) this.cardArray[a + 5 * o].active = !1;
                this.pointArray[o].active = !1,
                this.playerList.splice(n, 1),
                this.sp_BankerFrame.active = !1,
                this.an_SetBankerAnimation.active = !1
            },
            exitGame_Function: function() {
                for (var t = 0; t < this.timeOut.length; ++t) clearTimeout(this.timeOut[t]);
                switch (this.gameExit = !0, this.netWork.bullSocket.disconnect(), cc.audioEngine.stopAll(), this.playerInfo.lobbySelect) {
                case 0:
                    cc.director.loadScene("LobbyMain");
                    break;
                case 1:
                    cc.director.loadScene("Lobby_Fish")
                }
            },
            changeSeatId_Function: function(t) {
                if (this.netWork.seatId) {
                    var e = (5 - this.netWork.seatId + t) % 5;
                    return e
                }
                return t
            },
            noMoneyOut_Function: function() {
                this.gameExit = !0,
                this.com_MessageBox.active = !0,
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "您的金币不足，已被请离房间。"
            },
            disconnectNetWork_Function: function() {
                for (var t = 0; t < this.timeOut.length; ++t) clearTimeout(this.timeOut[t]);
                this.gameExit && this.netWork.bullSocket.disconnect(),
                this.netWork.bullSocket = null,
                this.playerInfo.gameDisconnect = !0,
                this.bg_Black.active = !0,
                this.com_MessageBox.active = !0,
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "您已断线，请重新连接"
            },
            update: function(t) {
                this.randomBanker && (this.randomBankerTimer < 1.5 ? (this.randomBankerCount < .08 ? this.randomBankerCount += t: (this.randomBankerCount = 0, this.randomBanker_Function(this.randomBankerArray)), this.randomBankerTimer += t) : (this.randomBanker = !1, this.randomBankerTimer = 0, this.setBanker_Function())),
                this.timeRun && this.timeCount_Function(t),
                this.coinFly && this.coinAnimation_Function()
            }
        }),
        cc._RF.pop()
    },
    {
        BullNetWork: "BullNetWork",
        PlayerInfo: "PlayerInfo"
    }],
    BullNetWork: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fb800KzzBtEo5ixhSTKJHag", "BullNetWork");
        var i = function() {
            var e = "",
            n = function() {
                this.lobbyMain = null,
                this.bull = null,
                this.bullSocket = null,
                this.playerInfo = null,
                this.tableId = -1,
                this.seatId = -1,
                this.playerHead = null,
                this.tax = -1,
                this.addScore = 0,
                this.eventOn = !1,
                this.init = function() {
                    this.playerInfo = t("PlayerInfo").getInstant
                },
                this.loginGame_Function = function(e, n, i, o) {
                    var a = this,
                    s = null;
                    cc.sys.isNative ? a.bullSocket = SocketIO.connect(e + ":" + n) : (s = t("Socket.io"), a.bullSocket = s(e + ":" + n)),
                    a.bullSocket.on("connect_error",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("Bull")
                    }),
                    a.bullSocket.on("connect_timeout",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("Bull")
                    }),
                    a.bullSocket.on("connected",
                    function(t) {
                        if (t) try {
                            a.bullSocket.emit("LoginGame", {
                                userid: i,
                                gametype: 4,
                                sign: o
                            })
                        } catch(e) {}
                    }),
                    a.bullSocket.on("loginGameResult",
                    function(t) {
                        t = a.changeResultJSON_Function(t),
                        t.resultid ? (a.playerInfo.playerCoin = t.Obj.score, a.lobbyMain.getComponent("LobbyMain").netWork.socket.disconnect(), a.bullSocket.emit("LoginRoom", {
                            roomid: 1
                        }), a.loginRoom_Function()) : (a.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !1, a.lobbyMain.getComponent("LobbyMain").loadGameScene = !1, a.lobbyMain.getComponent("LobbyMain").bg_Black.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = t.msg, a.eventOn = !1)
                    })
                },
                this.loginRoom_Function = function() {
                    var t = this;
                    t.bullSocket.on("LoginRoomResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && (t.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !0, t.lobbyMain.bg_Black.active = !0, t.tableId = e.ResultData.TableId, t.seatId = e.ResultData.seatId, t.tax = e.ResultData.tax, t.addScore = e.ResultData.addscore, t.playerInfo.gameDisconnect = !1, t.playerInfo.gameName = "Bull", cc.audioEngine.stopAll(), cc.director.loadScene("BullMain"))
                    })
                },
                this.setBullSocketOn_Function = function() {
                    var t = this;
                    t.bullSocket.on("readyPlay",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.bull.gameStart_Function(e)
                    }),
                    t.bullSocket.on("sendCard",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.bull.grabBull_Function(e)
                    }),
                    t.bullSocket.on("selectBet",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.bull.checkBanker_Function(e)
                    }),
                    t.bullSocket.on("callResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e)
                    }),
                    t.bullSocket.on("callValueId",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.bull.setXbetBankerLabel_Function(e)
                    }),
                    t.bullSocket.on("reCallResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e)
                    }),
                    t.bullSocket.on("reCallValueId",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.bull.setXBetPlayerLabel_Function(e)
                    }),
                    t.bullSocket.on("couCow",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.bull.sendCard_Function(e)
                    }),
                    t.bullSocket.on("showResult",
                    function(e) {
                        switch (e = t.changeResultJSON_Function(e), e.Result) {
                        case 0:
                            t.bull.showBullPoint_Function(e.data.cowPoint, e.data.seatId, e.data.card)
                        }
                    }),
                    t.bullSocket.on("open",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.bull.billing_Function(e)
                    }),
                    t.bullSocket.on("playEnter",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && t.bull.playerEnterRoom_Function(e.ResultData)
                    }),
                    t.bullSocket.on("PlayerOut",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.bull.playerLeaveRoom_Function(e.PlayerSeatId, e.userId)
                    }),
                    t.bullSocket.on("getDownTimeResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode || t.bull.firstTimeEntryInit_Function(e)
                    }),
                    t.bullSocket.on("getTableListResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResuleCode || t.bull.playerMessageInit_Function(e.data.tableList)
                    }),
                    t.bullSocket.on("notEnouhtScore",
                    function() {
                        t.bull.com_MessageBox.getChildByName("bt_Confirm").active = !0,
                        t.bull.com_MessageBox.getChildByName("bt_Reconnect").active = !1,
                        t.bull.noMoneyOut_Function()
                    }),
                    t.bullSocket.on("disconnect",
                    function(e) {
                        t.bull.gameExit || (t.bull.com_MessageBox.getChildByName("bt_Confirm").active = !1, t.bull.com_MessageBox.getChildByName("bt_Reconnect").active = !0, t.bull.disconnectNetWork_Function())
                    })
                },
                this.setLobbyMainObj_Function = function(t) {
                    this.lobbyMain = t
                },
                this.setBullObj_Function = function(t) {
                    this.bull = t
                },
                this.changeResultJSON_Function = function(t) {
                    if (cc.sys.isNative) {
                        var e = JSON.parse(t);
                        return e
                    }
                    return t
                },
                this.init()
            };
            return e ? {
                getInstant: e
            }: (e = new n, {
                getInstant: e
            })
        } ();
        e.exports = i,
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo",
        "Socket.io": "Socket.io"
    }],
    BullPoint: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "766c4eC+UJDb5MHN4j069p/", "BullPoint"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_PointSprite: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                type: 0
            },
            onLoad: function() {
                this.pointDisplay = this.getComponent("dragonBones.ArmatureDisplay"),
                this.pointArmature = this.pointDisplay.armature(),
                this.pointDisplay.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.frame_event_Function, this)
            },
            frame_event_Function: function() {},
            setType_Function: function(t) {
                this.type = t,
                this.setFrame_Function(t)
            },
            setFrame_Function: function(t) {
                this.pointDisplay.playAnimation("point" + t, 1)
            }
        }),
        cc._RF.pop()
    },
    {}],
    Bullet: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e3e5fdKOoZGyr19DWwRl+H0", "Bullet"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                moveX: 0,
                moveY: 0,
                id: -1,
                bulletLevel: 1,
                userID: -1,
                isRobot: 0,
                sendUser: -1
            },
            onLoad: function() {},
            BulletMove_Function: function() {
                this.size = this.node.parent.parent.getComponent("GameMain").screen,
                (this.node.x + this.moveX > this.size.width / 2 || this.node.x + this.moveX < -this.size.width / 2) && (this.moveX *= -1, this.node.rotation = 360 - this.node.rotation),
                (this.node.y + this.moveY > this.size.height / 2 || this.node.y + this.moveY < -this.size.height / 2) && (this.moveY *= -1, this.node.rotation = 180 - this.node.rotation),
                this.node.setPosition(cc.p(this.node.x + this.moveX, this.node.y + this.moveY))
            },
            SetFrame_Function: function(t) {},
            BulletExplosion_Function: function() {
                this.BulletReset_Function()
            },
            BulletReset_Function: function() {
                this.node.rotation = 0,
                this.isRobot = 0,
                this.sendUser = -1
            },
            update: function(t) {
                this.BulletMove_Function()
            }
        }),
        cc._RF.pop()
    },
    {}],
    ButtonControl: [function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        cc._RF.push(e, "c2d5bVI67ZPAq8U5jXlmGwC", "ButtonControl"),
        cc.Class({
            "extends": cc.Component,
            properties: i({},
            "音效", {
                "default": null,
                url: cc.AudioClip
            }),
            onClick: function() {
                cc.audioEngine.playEffect(this["音效"])
            },
            onLoad: function() {}
        }),
        cc._RF.pop()
    },
    {}],
    ButtonScaler: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2bb046XMj5O64F7wBN4eOyZ", "ButtonScaler"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                pressedScale: .85,
                transDuration: .1
            },
            onLoad: function() {
                function t(t) {
                    this.node.runAction(n.scaleDownAction)
                }
                function e(t) {
                    this.node.runAction(n.scaleUpAction)
                }
                var n = this;
                n.initScale = this.node.scale,
                n.button = n.getComponent(cc.Button),
                n.scaleDownAction = cc.scaleTo(n.transDuration, n.pressedScale),
                n.scaleUpAction = cc.scaleTo(n.transDuration, n.initScale),
                this.node.on("touchstart", t, this),
                this.node.on("touchend", e, this),
                this.node.on("touchcancel", e, this)
            }
        }),
        cc._RF.pop()
    },
    {}],
    Canon: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5dec5KzvglLTrSkkD+rk+mk", "Canon"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                MuzzleX: 0,
                MuzzleY: 0,
                CanonOffsetScreenX: 0,
                CanonOffsetScreenY: 0,
                CanonOffsetCanvasX: 0,
                CanonOffsetCanvasY: 0,
                Level: 1,
                MaxLevel: 10
            },
            onLoad: function() {},
            SetOffsetScreen_Function: function(t, e) {
                this.CanonOffsetScreenX = t,
                this.CanonOffsetScreenY = e
            },
            SetOffsetCanvas_Function: function(t, e) {
                this.CanonOffsetCanvasX = t,
                this.CanonOffsetCanvasY = e
            }
        }),
        cc._RF.pop()
    },
    {}],
    Coin: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "78b45opeE9NLpKAVX7rSbSL", "Coin"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_CoinSpite: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                coin: {
                    "default": null,
                    type: cc.Prefab
                },
                runtime1: 50,
                runtime2: 50,
                runtime3: 50,
                runtime4: 50,
                groupArr1: [],
                groupArr2: [],
                groupArr3: [],
                groupArr4: [],
                group1: [],
                old: 0,
                CurrentFrame: 0
            },
            onLoad: function() {
                this.SleepTime = 0,
                this.groupArr = []
            },
            NextFrame_function: function() {
                this.CurrentFrame < 5 ? ++this.CurrentFrame: this.CurrentFrame = 0
            },
            SetFrame_function: function() {
                this.getComponent(cc.Sprite).spriteFrame = this.sp_CoinSpite[this.CurrentFrame]
            },
            Rotation_function: function() {
                this.NextFrame_function(),
                this.SetFrame_function()
            },
            MoveAction_Function: function(t, e, n, i) {
                this.userSeatLocal = n,
                this.node.setPosition(t);
                var o = cc.moveTo(.3, e.x, e.y + 100),
                a = cc.moveTo(.3, cc.p(n)),
                s = cc.sequence(o, a, cc.callFunc(function() {
                    this.node.parent.parent.getComponent("GameMain").coinPool.put(this.node)
                },
                this));
                this.node.runAction(s)
            },
            update: function(t) {
                this.SleepTime < .02 ? this.SleepTime += t: (this.SleepTime = 0, this.Rotation_function())
            }
        }),
        cc._RF.pop()
    },
    {}],
    Colors: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "aee13XlkPdLcaiTxc6RHVhe", "Colors"),
        e.exports = {
            startBg: new cc.color(89, 69, 61, 255),
            overBg: new cc.color(89, 69, 61, 255),
            gameBg: new cc.color(89, 69, 61, 255),
            topBg: new cc.color(166, 137, 124, 255),
            tileBg: new cc.color(166, 137, 124, 255),
            powerBarBg: new cc.color(166, 137, 124, 255),
            power: new cc.color(100, 107, 48, 255),
            num1: new cc.color(217, 202, 184, 255),
            num2: new cc.color(191, 177, 159, 255),
            num3: new cc.color(166, 133, 104, 255),
            num4: new cc.color(115, 86, 69, 255),
            num5: new cc.color(64, 40, 32, 255),
            num6: new cc.color(115, 100, 56, 255),
            num7: new cc.color(140, 89, 70, 255),
            num8: new cc.color(115, 56, 50, 255),
            num9: new cc.color(115, 32, 32, 255),
            num10: new cc.color(115, 103, 88, 255),
            num11: new cc.color(140, 121, 97, 255),
            num12: new cc.color(191, 146, 107, 255),
            num13: new cc.color(191, 140, 11, 255),
            num14: new cc.color(213, 185, 112, 255),
            num15: new cc.color(174, 122, 98, 255),
            num16: new cc.color(181, 91, 82, 255),
            num17: new cc.color(107, 86, 85, 255),
            num18: new cc.color(73, 58, 61, 255),
            num19: new cc.color(176, 125, 98, 255),
            num20: new cc.color(232, 171, 127, 255),
            nums: new cc.color(222, 153, 36, 255)
        },
        cc._RF.pop()
    },
    {}],
    Destroy: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d68e5xWIKRMQ7L4pNW1wmgm", "Destroy"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {},
            BoomDestroy: function() {
                this.node.parent.parent.getComponent("GameMain").BoomPool.put(this.node)
            }
        }),
        cc._RF.pop()
    },
    {}],
    Explosion: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "22610a/QINPRIIj+Ui8s4Xw", "Explosion"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                this._armatureDisplay = this.getComponent("dragonBones.ArmatureDisplay"),
                this._armature = this._armatureDisplay.armature(),
                this._armatureDisplay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loop_com_Function, this)
            },
            startPlay_Function: function(t) {},
            loop_com_Function: function(t) {
                this.resetExplosion_Function()
            },
            frame_event_Function: function(t, e) {},
            Explosion_Function: function() {},
            resetExplosion_Function: function() {
                this.node.parent.parent.getComponent("GameMain").explosionPool.put(this.node)
            }
        }),
        cc._RF.pop()
    },
    {}],
    FindDifferentButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "485b00K0pdHe6y34DOoah7d", "FindDifferentButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            fishPrefabButtonClick_Function: function() {
                this.canvasNode.checkFish_Function(this)
            },
            startButtonClick_Function: function() {
                this.canvasNode.getComponent("FindDifferentMain").gameStart_Function()
            },
            nextLevelButtonClick_Function: function() {
                this.canvasNode.getComponent("FindDifferentMain").nextLevel_Function()
            }
        }),
        cc._RF.pop()
    },
    {}],
    FindDifferentFish: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "35fde1hCm1Go7ldk1TAzXiT", "FindDifferentFish"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_FishFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {
                this.currentFrame = 0,
                this.isCorrect = !1
            },
            setRandomSpriteFrame_Function: function() {
                var t = this.getRandom_Function(0, 8);
                this.setSpriteFrame_Function(t)
            },
            setDesignationSpriteFrame_Function: function(t) {
                this.setSpriteFrame_Function(t)
            },
            setSpriteFrame_Function: function(t) {
                this.currentFrame = t,
                this.setCurrentFrame_Function(t)
            },
            setCurrentFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.sp_FishFrame[t]
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            }
        }),
        cc._RF.pop()
    },
    {}],
    FindDifferentMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d79a1aMJy9D5oe0YF2ZPTUr", "FindDifferentMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                pb_Fish: {
                    "default": null,
                    type: cc.Prefab
                },
                vi_View: {
                    "default": null,
                    type: cc.Node
                },
                lb_Score: {
                    "default": null,
                    type: cc.Label
                },
                lb_Time: {
                    "default": null,
                    type: cc.Label
                },
                lb_GameOver: {
                    "default": null,
                    type: cc.Label
                },
                lb_Congratulation: {
                    "default": null,
                    type: cc.Label
                },
                bt_Start: {
                    "default": null,
                    type: cc.Button
                },
                bt_NextLevel: {
                    "default": null,
                    type: cc.Button
                }
            },
            onLoad: function() {
                this.gameTime = 0,
                this.gameTimeArray = [30, 25, 20, 15, 10],
                this.levelTarget = [1e3, 2e3, 4e3, 8e3, 15e3],
                this.level = 0,
                this.score = 0,
                this.gameRun = !1,
                this.fishArray = new Array(40),
                this.fishNum = [5, 10, 20, 30, 40];
                for (var t = null,
                e = 0; e < this.fishArray.length; ++e) t = cc.instantiate(this.pb_Fish),
                this.vi_View.addChild(t),
                t.active = !1,
                t.getComponent("FindDifferentButtonClick").canvasNode = this;
                this.showNum = 0
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            gameStart_Function: function() {
                this.lb_GameOver.node.active = !1,
                this.lb_Congratulation.node.active = !1,
                this.bt_Start.node.active = !1,
                this.bt_NextLevel.node.active = !1,
                this.score = 0,
                this.level = 0,
                this.gameTime = this.gameTimeArray[this.level],
                this.gameRun = !0,
                this.lb_Score.string = "Score:",
                this.setFishPosition_Function(),
                this.showFish_Function()
            },
            setFishPosition_Function: function() {
                var t;
                switch (this.level) {
                case 0:
                    t = cc.p( - 240, 0),
                    this.showNum = 5;
                    break;
                case 1:
                    t = cc.p( - 240, -60),
                    this.showNum = 5;
                    break;
                case 2:
                    t = cc.p( - 240, -120),
                    this.showNum = 5;
                    break;
                case 3:
                    t = cc.p( - 300, -240),
                    this.showNum = 6;
                    break;
                case 4:
                    t = cc.p( - 420, -260),
                    this.showNum = 8
                }
                for (var e = 0; e < this.fishNum[this.level]; ++e) this.vi_View.children[e].setPosition(t.x + e % this.showNum * 120, t.y + 120 * parseInt(e / this.showNum))
            },
            showFish_Function: function() {
                var t, e = this.getRandom_Function(0, this.fishNum[this.level] - 1),
                n = this.getRandom_Function(0, 7);
                switch (n) {
                case 0:
                    t = 2;
                    break;
                case 1:
                    t = 7;
                    break;
                case 2:
                    t = 0;
                    break;
                case 3:
                    t = 4;
                    break;
                case 4:
                    t = 3;
                    break;
                case 5:
                    t = 6;
                    break;
                case 6:
                    t = 5;
                    break;
                case 7:
                    t = 1
                }
                for (var i = 0; i < this.fishNum[this.level]; ++i) this.vi_View.children[i].active = !0,
                i === e ? (this.vi_View.children[i].getComponent("FindDifferentFish").setDesignationSpriteFrame_Function(t), this.vi_View.children[i].getComponent("FindDifferentFish").isCorrect = !0) : this.vi_View.children[i].getComponent("FindDifferentFish").setDesignationSpriteFrame_Function(n)
            },
            hideFish_Function: function() {
                for (var t = 0; t < this.fishNum[this.level]; ++t) this.vi_View.children[t].active = !1,
                this.vi_View.children[t].getComponent("FindDifferentFish").isCorrect = !1;
                this.addScore_Function(),
                this.showFish_Function()
            },
            addScore_Function: function() {
                this.score += 50 * (this.level + 1),
                this.lb_Score.string = "Score: " + this.score
            },
            checkFish_Function: function(t) {
                t.getComponent("FindDifferentFish").isCorrect ? this.hideFish_Function() : this.gameOver_Function()
            },
            gameOver_Function: function() {
                this.lb_Congratulation.node.active = !1,
                this.gameRun = !1,
                this.lb_GameOver.node.active = !0;
                for (var t = 0; t < this.fishArray.length; ++t) this.vi_View.children[t].active = !1;
                this.bt_Start.node.active = !0
            },
            gameCheck_Function: function() {
                if (this.score >= this.levelTarget[this.level] && this.level < this.levelTarget.length - 1) {
                    this.bt_NextLevel.node.active = !0;
                    for (var t = 0; t < this.fishNum[this.level]; ++t) this.vi_View.children[t].active = !1;
                    this.lb_Congratulation.node.active = !0
                } else this.gameOver_Function()
            },
            nextLevel_Function: function() {
                this.lb_Congratulation.node.active = !1,
                this.level < this.levelTarget.length && (++this.level, this.gameTime = this.gameTimeArray[this.level], this.lb_Time.string = "Time: " + parseInt(this.gameTime), this.setFishPosition_Function(), this.showFish_Function(), this.bt_NextLevel.node.active = !1, this.gameRun = !0)
            },
            update: function(t) {
                this.gameRun && (this.gameTime > 0 ? (this.gameTime -= t, this.lb_Time.string = "Time: " + parseInt(this.gameTime)) : (this.gameRun = !1, this.gameCheck_Function()))
            }
        }),
        cc._RF.pop()
    },
    {}],
    FishButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4bb0aeSUwNLJJR5R8QzjcyX", "FishButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                CanvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            billCloseButtonClick_function: function() {
                this.CanvasNode.getComponent("GameMain").billing && (this.CanvasNode.getComponent("GameMain").billing = !1, this.CanvasNode.getChildByName("Bill").active = !1),
                this.CanvasNode.getComponent("GameMain").autoShooting = !1
            },
            billExitButtonClick_function: function() {
                this.getComponent("cc.Button").interactable = !1,
                this.CanvasNode.getComponent("GameMain").GameExit_Function(),
                this.CanvasNode.getComponent("GameMain").netWork.gameExit = !1
            },
            recordButtonClick_function: function() {
                this.CanvasNode.getComponent("GameMain").billing || (this.CanvasNode.getComponent("GameMain").billing = !0, this.CanvasNode.getComponent("GameMain").com_Bill.active = !0),
                this.CanvasNode.getComponent("GameMain").autoShooting = !1
            },
            messageBoxReconnectButtonClick_Function: function() {
                this.CanvasNode.getComponent("GameMain").com_MessageBox.active = !1,
                cc.audioEngine.stopAll(),
                cc.director.loadScene("LobbyMain")
            },
            messageBoxConfirmButtonClick_Function: function() {
                this.CanvasNode.getComponent("GameMain").com_MessageBox.active = !1,
                this.CanvasNode.getComponent("GameMain").exitGame_Function()
            },
            billAgainButtonClick_function: function() {
                this.CanvasNode.getComponent("GameMain").againGame()
            }
        }),
        cc._RF.pop()
    },
    {}],
    FishNetWork: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1f26alZDltEsa7vgKbiZf73", "FishNetWork");
        var i = function() {
            var e = "",
            n = function() {
                this.lobbyMain = null,
                this.fish = null,
                this.fishSocket = null,
                this.playerInfo = null,
                this.tableId = -1,
                this.seatId = -1,
                this.playerHead = null,
                this.playerList = null,
                this.roomBet = 1,
                this.disconnected = !1,
                this.FishData = null,
                this.gameExit = !1,
                this.count = 0,
                this.eventOn = !1,
                this.init = function() {
                    this.playerInfo = t("PlayerInfo").getInstant
                },
                this.loginGame_Function = function(e, n, i, o) {
                    var a = this,
                    s = null;
                    cc.sys.isNative ? a.fishSocket = SocketIO.connect(e + ":" + n) : (s = t("Socket.io"), a.fishSocket = s(e + ":" + n)),
                    a.fishSocket.on("connect_error",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("Fish")
                    }),
                    a.fishSocket.on("connect_timeout",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("Fish")
                    }),
                    a.fishSocket.on("connected",
                    function(t) {
                        if (t) try {
                            a.fishSocket.emit("LoginGame", {
                                userid: i,
                                gametype: 1,
                                sign: o
                            })
                        } catch(e) {}
                    }),
                    a.fishSocket.on("loginGameResult",
                    function(t) {
                        t = a.changeResultJSON_Function(t),
                        t.resultid ? (a.playerInfo.playerCoin = t.Obj.score, a.roomBet = t.Obj.bet, a.lobbyMain.getComponent("LobbyMain").netWork.socket.disconnect(), a.fishSocket.emit("LoginRoom", {
                            roomid: 1
                        }), a.loginRoom_Function()) : (a.lobbyMain.getComponent("LobbyMain").loadGameScene = !1, a.lobbyMain.getComponent("LobbyMain").bg_Black.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = t.msg, a.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !1, a.eventOn = !0)
                    })
                },
                this.loginRoom_Function = function() {
                    var t = this;
                    t.fishSocket.on("LoginRoomResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && (t.playerInfo.gameName = "Fish", t.playerInfo.gameDisconnect = !1, t.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !0, t.lobbyMain.bg_Black.active = !0, t.tableId = e.ResultData.TableId, t.seatId = e.ResultData.seatId, t.playerList = e.ResultData.userList, t.tax = e.ResultData.tax, t.addScore = e.ResultData.addscore, t.FishData = e.ResultData.fishData, cc.audioEngine.stopAll(), cc.director.loadScene("Fish"))
                    })
                },
                this.setfishSocketOn_Function = function() {
                    var t = this;
                    t.fishSocket.on("HitResult",
                    function(e) {
                        if (e = t.changeResultJSON_Function(e), e.ResultData.hitSocre || e.ResultData.propCount) {
                            var n = !1;
                            t.fish.getComponent("GameMain").BirdDead_Function(e.ResultData.userId, e.ResultData.fishId, e.ResultData.propId, n, e.ResultData.hitSocre)
                        }
                    }),
                    t.fishSocket.on("FishOut",
                    function(e) {
                        if (e = t.changeResultJSON_Function(e), !t.disconnected) try {
                            t.fish.getComponent("GameMain").BirdCreat_Function(e.fishId, e.fishType, e.fishPath, e.fishCount, e.fishLineup, e.lineup, e.propCount)
                        } catch(n) {}
                    }),
                    t.fishSocket.on("getDownTimeResult",
                    function(e) {
                        if (e = t.changeResultJSON_Function(e), e.ResultCode) for (var n = 0; n < e.tableUserList.length; n++) for (var i = 0; i < t.playerList.length && e.tableUserList[n].userId !== t.playerList.userId; i++) i === t.playerList.length - 1 && t.fish.SetEnterPlayerInfo_Function(e.tableUserList[n].userId, e.tableUserList[n].seatId, e.tableUserList[n].nickname, e.tableUserList[n].score, e.tableUserList[n].headimgurl)
                    });
                    try {
                        t.fishSocket.emit("getDownTime")
                    } catch(e) {}
                    t.fishSocket.on("fishShoot",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.fish.getComponent("GameMain").BulletShooting_Function(e.userid, e.bet, e.position, e.score, e.sendUser, e.robot, e.bulletId)
                    }),
                    t.fishSocket.on("playEnter",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && t.fish.SetEnterPlayerInfo_Function(e.ResultData.UserId, e.ResultData.seatId, e.ResultData.nickname, e.ResultData.score, e.ResultData.headimgurl)
                    }),
                    t.fishSocket.on("PlayerOut",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.fish.PlayerLeaveTable_Function(e.PlayerSeatId)
                    }),
                    t.fishSocket.on("userGoldUpdate",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.fish.getComponent("GameMain").UpdatePlayerGold_Function(e.userId, e.updateSocre)
                    }),
                    t.fishSocket.on("pool",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.fish.getComponent("GameMain").pen_Label(e.pool)
                    }),
                    t.fishSocket.on("fishSceneChange",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.fish.getComponent("GameMain").changeScene(e.change_scene_type, e.change_fishOut_type)
                    }),
                    t.fishSocket.on("getFishListResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.fish.getComponent("GameMain").Fishinit(e.data.fishList, e.data.SceneType)
                    }),
                    t.fishSocket.on("getMoguiCountResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        0 === e.ResultCode && t.fish.getComponent("GameMain").MoGuiCount(e.count)
                    }),
                    t.fishSocket.on("boomFishHitResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.fish.getComponent("GameMain").BoomFish(e.ResultData.fishList, e.ResultData.hitSocre, e.ResultData.userId)
                    }),
                    t.fishSocket.on("disconnect",
                    function(e) {
                        if (!t.gameExit) {
                            var n = "disconnect";
                            t.fishSocket = null,
                            t.fish.com_MessageBox.getChildByName("bt_Confirm").active = !1,
                            t.fish.com_MessageBox.getChildByName("bt_Reconnect").active = !0,
                            t.fish.disconnectNetWork_Function(n)
                        }
                    });
                    try {
                        t.fishSocket.emit("getFishList"),
                        t.fishSocket.emit("getMoguiCount")
                    } catch(e) {}
                },
                this.setLobbyMainObj_Function = function(t) {
                    this.lobbyMain = t
                },
                this.setFishObj_Function = function(t) {
                    this.fish = t
                },
                this.changeResultJSON_Function = function(t) {
                    if (cc.sys.isNative) {
                        var e = JSON.parse(t);
                        return e
                    }
                    return t
                },
                this.init()
            };
            return e ? {
                getInstant: e
            }: (e = new n, {
                getInstant: e
            })
        } ();
        e.exports = i,
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo",
        "Socket.io": "Socket.io"
    }],
    GameData: [function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        cc._RF.push(e, "4581eOdUBtEYJvHnDxm4cfi", "GameData"),
        cc.Class({
            "extends": cc.Component,
            properties: i({},
            "分数", 0),
            onLoad: function() {}
        }),
        cc._RF.pop()
    },
    {}],
    GameMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "08c77paKCJMcJGQ8ZJxqPH4", "GameMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_BG: {
                    "default": null,
                    type: cc.Sprite
                },
                pb_PlayerCanon: {
                    "default": null,
                    type: cc.Prefab
                },
                pt_PlayerCanon: {
                    "default": [],
                    type: cc.Node
                },
                pb_Bullet: {
                    "default": [],
                    type: cc.Prefab
                },
                pb_Bird: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Coin: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_BirdScoreLabel: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Explosion: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Billboard: {
                    "default": null,
                    type: cc.Prefab
                },
                vi_View: {
                    "default": null,
                    type: cc.Node
                },
                com_GameMenu: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerFrame: {
                    "default": null,
                    type: cc.Node
                },
                com_Base: {
                    "default": null,
                    type: cc.Node
                },
                com_Bill: {
                    "default": null,
                    type: cc.Node
                },
                com_Rank: {
                    "default": null,
                    type: cc.Node
                },
                com_MatchTime: {
                    "default": null,
                    type: cc.Node
                },
                com_Wave: {
                    "default": null,
                    type: cc.Node
                },
                sp_Cursor: {
                    "default": null,
                    type: cc.Node
                },
                lb_PlayerName: {
                    "default": [],
                    type: cc.Label
                },
                sp_PlayerHead: {
                    "default": [],
                    type: cc.Sprite
                },
                lb_PlayerMoney: {
                    "default": [],
                    type: cc.Label
                },
                sp_ExitGame: {
                    "default": null,
                    type: cc.Sprite
                },
                sp_NoMoney: {
                    "default": null,
                    type: cc.Sprite
                },
                sp_NotShooting: {
                    "default": null,
                    type: cc.Sprite
                },
                lb_NotShooting: {
                    "default": null,
                    type: cc.Label
                },
                bt_Record: {
                    "default": null,
                    type: cc.Button
                },
                au_Coin: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Canon: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Explosion: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_BgMusic: {
                    "default": null,
                    url: cc.AudioClip
                },
                net: {
                    "default": null,
                    type: cc.Prefab
                },
                playerCanon: {
                    "default": null,
                    type: cc.Node
                },
                Wave: {
                    "default": null,
                    type: cc.Node
                },
                PlayerMessage: {
                    "default": null,
                    type: cc.Node
                },
                turntabel: {
                    "default": null,
                    type: cc.Prefab
                },
                quan: {
                    "default": null,
                    type: cc.Prefab
                },
                wins: {
                    "default": [],
                    type: cc.Node
                },
                playerFrame: {
                    "default": [],
                    type: cc.Node
                },
                coin: {
                    "default": null,
                    type: cc.Prefab
                },
                coin_voice: {
                    "default": null,
                    url: cc.AudioClip
                },
                coinNUM: {
                    "default": null,
                    type: cc.Prefab
                },
                solt_hui: {
                    "default": null,
                    type: cc.Prefab
                },
                solt_hong: {
                    "default": null,
                    type: cc.Prefab
                },
                solt_lv: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_scene: {
                    "default": [],
                    type: cc.Node
                },
                SeaWave: {
                    "default": null,
                    type: cc.Node
                },
                Me_Here: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Here: {
                    "default": [],
                    type: cc.Node
                },
                com_MessageBox: {
                    "default": null,
                    type: cc.Node
                },
                solt_coin: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                playerHeadPiture: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                MoGuiTask: {
                    "default": null,
                    type: cc.Node
                },
                BoomB: {
                    "default": null,
                    type: cc.Prefab
                },
                MoGuiTaskTips: {
                    "default": null,
                    type: cc.Node
                },
                MoGuiTaskLabel: {
                    "default": null,
                    type: cc.Node
                },
                pb_black: {
                    "default": null,
                    type: cc.Node
                },
                pb_Sw: {
                    "default": null,
                    type: cc.Node
                },
                heartBeat: 0,
                pool: 0,
                pen: null,
                now_Scene: null,
                old_Scene: null,
                sceneNum: 0,
                shaking: !1,
                MoGuiNum: -1,
                TaskMoGui: !0,
                MoGuiTaskScore: 0,
                runtime1: 50,
                runtime2: 50,
                runtime3: 50,
                runtime4: 50,
                groupArr1: [],
                groupArr2: [],
                groupArr3: [],
                groupArr4: [],
                coin1: [],
                coin2: [],
                coin3: [],
                soin4: [],
                MoGuiLight: 0,
                user: [],
                miao: 0,
                yuNum: 0
            },
            onLoad: function() {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE),
                this.GameInit_Function()
            },
            GameInit_Function: function() {
                if (this.screen = cc.view.getVisibleSize(), this.proportion = this.screen.width / 1334, this.proportion > 1) {
                    this.pb_Sw.scale = this.proportion;
                    for (var e = 0; e < this.pb_scene.length; e++) this.pb_scene[e].setPosition(cc.p(1400 * this.proportion, 0)),
                    this.pb_scene[e].scale = this.proportion
                }
                this.netWork = t("FishNetWork").getInstant,
                this.netWork.setFishObj_Function(this),
                this.pInfo = t("PlayerInfo").getInstant,
                this.pInfo.setGameObj_Function(this),
                this.netWork.disconnected = !1,
                this.roomBet = this.netWork.roomBet,
                this.playerCanonLevel = 1,
                this.playerTouchX = 0,
                this.playerTouchY = 0,
                this.playerTouchLocation = cc.p(0, 0),
                this.playerID = this.pInfo.playerId,
                this.pInfo.musicControl && (this.bgm = cc.audioEngine.play(this.au_BgMusic, !0)),
                this.maxPlayer = 4,
                this.playerInfo = new Array(this.maxPlayer);
                for (var e = 0; e < this.playerInfo.length; ++e) this.playerInfo[e] = {};
                for (e = 0; e < this.netWork.playerList.length; ++e) this.playerInfo[this.netWork.playerList[e].seatId].seatID = this.netWork.playerList[e].seatId,
                this.playerInfo[this.netWork.playerList[e].seatId].playerName = this.netWork.playerList[e].nickname,
                this.playerInfo[this.netWork.playerList[e].seatId].score = this.netWork.playerList[e].score / this.pInfo.exchangeRate,
                this.playerInfo[this.netWork.playerList[e].seatId].userID = this.netWork.playerList[e].userId;
                for (e = 0; e < this.maxPlayer; e++) this.user[e] = !1;
                this.MoGuiPosition = cc.p( - 120, -340),
                this.birdArray = [];
                var n = 100,
                i = null;
                this.FishPool = new cc.NodePool("bird");
                for (var e = 0; e < n; ++e) i = cc.instantiate(this.pb_Bird),
                this.FishPool.put(i);
                this.bulletMoveDistance = 20,
                this.bulletShootingInterval = 0,
                this.bulletShooting = !1,
                this.bulletID = 1,
                this.autoShooting = !1,
                this.autoShootingTime = 0,
                this.bulletArray = [];
                var o = 10;
                for (this.bulletLanPool = new cc.NodePool("bullet_Lan"), e = 0; e < o; e++) {
                    var a = cc.instantiate(this.pb_Bullet[0]);
                    a.name = "bullet_Lan",
                    this.bulletLanPool.put(a)
                }
                for (this.bulletLvPool = new cc.NodePool("bullet_Lv"), e = 0; e < o; e++) {
                    var a = cc.instantiate(this.pb_Bullet[1]);
                    a.name = "bullet_Lv",
                    this.bulletLvPool.put(a)
                }
                for (this.bulletHuangPool = new cc.NodePool("bullet_Huang"), e = 0; e < o; e++) {
                    var a = cc.instantiate(this.pb_Bullet[2]);
                    a.name = "bullet_Huang",
                    this.bulletHuangPool.put(a)
                }
                for (this.bulletFenPool = new cc.NodePool("bullet_Fen"), e = 0; e < o; e++) {
                    var a = cc.instantiate(this.pb_Bullet[3]);
                    a.name = "bullet_Fen",
                    this.bulletFenPool.put(a)
                }
                for (this.fishW = [62.4, 80, 73.2, 74, 62.4, 72, 117.6, 112.8, 100, 120, 225, 180, 180, 235.2, 237.6, 160, 160, 160, 160, 160, 160, 350, 350, 350, 350, 350, 350], this.labelPosition = new Array(this.maxPlayer), e = 0; e < this.labelPosition.length; ++e) this.labelPosition[e] = cc.p(0, 0);
                cc.p(0, 0);
                this.distanceEdge = this.screen.width / 2 - 197,
                this.labelPosition[0] = cc.p( - this.distanceEdge, -296),
                this.labelPosition[1] = cc.p(this.distanceEdge, -296),
                this.labelPosition[2] = cc.p( - this.distanceEdge, 296),
                this.labelPosition[3] = cc.p(this.distanceEdge, 296);
                var s = 60;
                this.coinArray = new Array(60);
                var c = null;
                for (this.coinPool = new cc.NodePool("coin"), e = 0; e < s; ++e) c = cc.instantiate(this.pb_Coin),
                this.coinPool.put(c);
                var r = 21,
                l = null;
                for (this.BoomPool = new cc.NodePool("BoomShow"), e = 0; e < r; ++e) l = cc.instantiate(this.BoomB),
                this.BoomPool.put(l);
                this.birdScore = [2, 3, 5, 7, 10, 15, 20, 25, 30, 35, 40, 70, 120, 200, 388, 20, 40, 60, 20, 30, 50, 80, 400, 400, 300, 100, 0],
                this.birdCoin = [2, 3, 5, 7, 10, 12, 15, 17, 18, 19, 19, 20, 20, 20, 21, 15, 20, 21, 15, 12, 20, 21, 23, 23, 22, 21, 0],
                this.awardType = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                this.moveTime = [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 18, 18, 18, 18, 18, 18, 18, 25, 25, 25, 25, 25, 20],
                this.collideWidthModify = [57, 76, 76, 76, 72, 72, 96, 108, 96, 96, 108, 128, 128, 150, 400, 133, 133, 133, 200, 200, 200, 200, 520, 200, 160, 160, 200],
                this.collideHeightModify = [38, 48, 48, 57, 38, 38, 57, 57, 67, 96, 120, 100, 100, 120, 150, 133, 133, 133, 200, 200, 200, 200, 200, 200, 160, 160, 200],
                this.fishWaveMoveTime = 18,
                this.explosionArray = [];
                var h = 6;
                for (this.explosionPool = new cc.NodePool("explosion"), e = 0; e < h; e++) {
                    var m = cc.instantiate(this.pb_Explosion);
                    this.explosionPool.put(m)
                }
                this.netPool = new cc.NodePool("net");
                var u = 60;
                for (e = 0; e < u; ++e) {
                    var d = cc.instantiate(this.net);
                    this.netPool.put(d)
                }
                this.coinSoltPool = new cc.NodePool("coinSoltPool");
                var p = 200;
                for (e = 0; e < p; e++) {
                    var g = cc.instantiate(this.coin);
                    this.coinSoltPool.put(g)
                }
                this.BirdScoreLabelPool = new cc.NodePool("birdscorelabel");
                var y = 30;
                for (e = 0; e < y; ++e) {
                    var _ = cc.instantiate(this.pb_BirdScoreLabel);
                    this.BirdScoreLabelPool.put(_)
                }
                for (this.CoinRunAction(), this.schedule(this.CoinRunAction, 2), this.billBoardArray = new Array(this.maxPlayer), e = 0; e < this.billBoardArray.length; ++e) this.billBoardArray[e] = cc.instantiate(this.pb_Billboard),
                this.vi_View.addChild(this.billBoardArray[e], 5);
                this.billBoardArray[0].setPosition( - this.distanceEdge, -600),
                this.billBoardArray[1].setPosition(this.distanceEdge, -600),
                this.billBoardArray[2].setPosition( - this.distanceEdge, -600),
                this.billBoardArray[3].setPosition(this.distanceEdge, -600),
                this.sp_NoMoney.enabled = !1,
                this.notShootingTime = 0,
                this.sp_NotShooting.enabled = !1,
                this.lb_NotShooting.getComponent("cc.Label").enabled = !1,
                this.logoutRoom = !1,
                this.sp_ExitGame.enabled = !1,
                this.billing = !1,
                this.TouchSceen_Function(),
                this.netWork.setfishSocketOn_Function(),
                this.SetPlayerInfoFunction();
                var C = this;
                cc.view.setResizeCallback(function() {
                    if (C.screen = cc.view.getVisibleSize(), C.proportion = C.screen.width / 1334, C.screen.width > 1334 || C.screen.height > 750) {
                        for (var t = 0; t < C.groupArr1.length; t++) for (var e = 0; e < C.groupArr1[t].length; e++) C.groupArr1[t][e].opacity = 0;
                        for (var t = 0; t < C.groupArr2.length; t++) for (var e = 0; e < C.groupArr2[t].length; e++) C.groupArr2[t][e].opacity = 0;
                        for (var t = 0; t < C.groupArr3.length; t++) for (var e = 0; e < C.groupArr3[t].length; e++) C.groupArr3[t][e].opacity = 0;
                        for (var t = 0; t < C.groupArr4.length; t++) for (var e = 0; e < C.groupArr4[t].length; e++) C.groupArr4[t][e].opacity = 0;
                        C.pb_Sw.scale = C.proportion;
                        for (var t = 0; t < C.pb_scene.length; t++) C.pb_scene[t] != C.now_Scene ? (C.pb_scene[t].setPosition(cc.p(1400 * C.proportion, 0)), C.pb_scene[t].scale = C.proportion) : C.pb_scene[t].scale = C.proportion;
                        C.pb_Sw.scale = C.proportion,
                        C.SeaWave.scale = C.proportion,
                        C.distanceEdge = C.screen.width / 2 - 197,
                        C.labelPosition[0] = cc.p( - C.distanceEdge, -296),
                        C.labelPosition[1] = cc.p(C.distanceEdge, -296),
                        C.labelPosition[2] = cc.p( - C.distanceEdge, 296),
                        C.labelPosition[3] = cc.p(C.distanceEdge, 296),
                        C.billBoardArray[0].setPosition( - C.distanceEdge, -600),
                        C.billBoardArray[1].setPosition(C.distanceEdge, -600),
                        C.billBoardArray[2].setPosition( - C.distanceEdge, -600),
                        C.billBoardArray[3].setPosition(C.distanceEdge, -600)
                    }
                })
            },
            TouchSceen_Function: function() {
                var t = this;
                t.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    t.autoShooting = !1,
                    t.bulletShooting = !0,
                    t.autoShootingTime = 0,
                    t.bulletShootingInterval = .25,
                    t.playerTouchLocation = e.getLocation()
                }),
                t.node.on(cc.Node.EventType.TOUCH_END,
                function(e) {
                    t.bulletShooting = !1,
                    t.bulletShootingInterval = .2
                }),
                t.node.on(cc.Node.EventType.TOUCH_MOVE,
                function(e) {
                    t.playerTouchLocation = e.getLocation()
                })
            },
            CanonRotate_Function: function(t, e, n) {
                var i = cc.p(0, 1),
                o = i.angle(e) / Math.PI * 180,
                a = this.node.convertToWorldSpaceAR(this.pt_PlayerCanon[n].position);
                t.x > a.x ? this.pt_PlayerCanon[n].rotation = o: this.pt_PlayerCanon[n].rotation = -o
            },
            GetRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            BirdCreat_Function: function(t, e, n, i, o, a, s) {
                if (27 === e && (e = 26), this.heartBeat = 0, !this.logoutRoom) {
                    var c = this,
                    r = [];
                    if (t.length != i) return;
                    var l = this.fishW[e];
                    switch (o) {
                    case 0:
                        var h = cc.p(0, 0),
                        m = null,
                        u = function() {
                            c.FishPool.size() > 0 && (m = c.FishPool.get(), 23 == e && (c.pen = m), m.parent = c.vi_View, m.getComponent("Bird").BirdCreat_function(t[0], e, n, c.netWork.seatId, c.getComponent("Path").birdPath, h, a, this.proportion, s), t.shift(), c.birdArray.push(m))
                        };
                        return void this.schedule(u, 1, i - 1);
                    case 1:
                        for (var d = (i - 1) / 2 * l, p = 0; p < i; p++) r.push(cc.p(0, -d + l * p));
                        break;
                    case 2:
                        r = [cc.p(l / 2, l / 2), cc.p( - l / 2, l / 2), cc.p(l / 2, -l / 2), cc.p( - l / 2, -l / 2)];
                        break;
                    case 3:
                        r = [cc.p(0, l / 1.3), cc.p( - l, l / 9), cc.p(l, l / 9), cc.p( - l / 1.7, -l), cc.p(l / 1.7, -l)];
                        break;
                    case 4:
                        r = [cc.p( - l, l / 2), cc.p(0, l / 2), cc.p(l, l / 2), cc.p( - l, -l / 2), cc.p(0, -l / 2), cc.p(l, -l / 2)]
                    }
                    for (var g = 0; g < i; ++g) {
                        var m = null;
                        if (! (c.FishPool.size() > 0)) return;
                        m = c.FishPool.get(),
                        23 == e && (this.pen = m),
                        m.parent = this.vi_View,
                        m.getComponent("Bird").BirdCreat_function(t[g], e, n, c.netWork.seatId, c.getComponent("Path").birdPath, r[g], a, this.proportion, s),
                        this.birdArray.push(m)
                    }
                }
            },
            BulletShooting_Function: function(t, e, n, i, o, a, s) {
                for (var i = i / this.pInfo.exchangeRate,
                c = cc.view.getVisibleSize(), r = -1, l = 0; l < this.maxPlayer; ++l) if (this.playerInfo[l].userID === t) {
                    r = this.playerInfo[l].seatID;
                    break
                }
                r < 2 && this.netWork.seatId < 2 || r > 1 && this.netWork.seatId > 1 || (n.y = c.height - n.y),
                this.netWork.seatId > 1 && r > 1 ? r -= 2 : this.netWork.seatId > 1 && r < 2 && (r += 2);
                var h = this.node.convertToWorldSpaceAR(this.pt_PlayerCanon[r].position),
                m = n.x - h.x,
                u = n.y - h.y,
                d = cc.p(m, u);
                cc.v2(m, u);
                if (this.CanonRotate_Function(n, d, r), !this.logoutRoom && parseFloat(this.lb_PlayerMoney[r].getComponent("cc.Label").string).toFixed(2) >= this.roomBet / this.pInfo.exchangeRate) {
                    var p;
                    if (0 === r) {
                        if (! (this.bulletHuangPool.size() > 0)) return;
                        p = this.bulletHuangPool.get()
                    } else if (1 === r) {
                        if (! (this.bulletLvPool.size() > 0)) return;
                        p = this.bulletLvPool.get()
                    } else if (2 === r) {
                        if (! (this.bulletLanPool.size() > 0)) return;
                        p = this.bulletLanPool.get()
                    } else {
                        if (! (this.bulletFenPool.size() > 0)) return;
                        p = this.bulletFenPool.get()
                    }
                    p.parent = this.vi_View,
                    this.bulletArray.push(p),
                    p.getComponent("Bullet").moveX = d.normalize().x * this.bulletMoveDistance,
                    p.getComponent("Bullet").moveY = d.normalize().y * this.bulletMoveDistance,
                    this.pt_PlayerCanon[r].getComponent("cc.Animation").play("pt_Canon"),
                    p.rotation = this.pt_PlayerCanon[r].rotation;
                    var g = this.pt_PlayerCanon[r].position.x + 100 * Math.sin(this.pt_PlayerCanon[r].rotation / 180 * Math.PI),
                    y = this.pt_PlayerCanon[r].position.y + 100 * Math.cos(this.pt_PlayerCanon[r].rotation / 180 * Math.PI);
                    if (p.setPosition(cc.p(g, y)), p.getComponent("Bullet").userID = this.playerInfo[r].userID, p.getComponent("Bullet").id = s, this.playerID === t) {
                        p.getComponent("Bullet").id = this.bulletID,
                        this.pInfo.soundEffectControl && cc.audioEngine.play(this.au_Canon, !1, .4),
                        this.bulletID > 1e4 ? this.bulletID = 1 : ++this.bulletID,
                        this.com_Bill.children[26].getComponent("cc.Label").string = (parseFloat(this.com_Bill.children[26].getComponent("cc.Label").string) + this.roomBet / this.pInfo.exchangeRate).toFixed(2);
                        try {
                            this.netWork.fishSocket.emit("fishShoot", {
                                userid: this.playerID,
                                bet: 1,
                                position: n,
                                bulletId: p.getComponent("Bullet").id
                            })
                        } catch(_) {}
                        this.notShootingTime = 0,
                        this.sp_NotShooting.enabled = !1,
                        this.lb_NotShooting.getComponent("cc.Label").enabled = !1,
                        this.lb_PlayerMoney[r].string = parseFloat(this.lb_PlayerMoney[r].string - this.roomBet / this.pInfo.exchangeRate).toFixed(2)
                    } else this.UpdateGold_Function(r, i);
                    p.getComponent("Bullet").userID = t,
                    o && (p.getComponent("Bullet").sendUser = o),
                    a && (p.getComponent("Bullet").isRobot = a)
                } (this.netWork.seatId > 1 && this.netWork.seatId === r + 2 || this.netWork.seatId < 2 && this.netWork.seatId === r) && this.sp_Cursor.setPosition(this.node.convertToNodeSpaceAR(n))
            },
            BulletCollide_Function: function() {
                for (var t = 0; t < this.bulletArray.length; ++t) for (var e = 0; e < this.birdArray.length; ++e) if (this.bulletArray[t].x > this.birdArray[e].x - this.collideWidthModify[this.birdArray[e].getComponent("Bird").birdType] / 2 && this.bulletArray[t].x < this.birdArray[e].x + this.collideWidthModify[this.birdArray[e].getComponent("Bird").birdType] / 2 && this.bulletArray[t].y > this.birdArray[e].y - this.collideHeightModify[this.birdArray[e].getComponent("Bird").birdType] / 2 && this.bulletArray[t].y < this.birdArray[e].y + this.collideHeightModify[this.birdArray[e].getComponent("Bird").birdType] / 2) {
                    var n;
                    n = this.netPool.size() > 0 ? this.netPool.get() : cc.instantiate(this.net),
                    n.parent = this.vi_View,
                    n.setLocalZOrder(3),
                    n.getComponent("dragonBones.ArmatureDisplay").armature().animation.play("yw", 1);
                    n.setPosition(this.bulletArray[t].position);
                    try {
                        this.bulletArray[t].getComponent("Bullet").userID === this.playerID ? this.netWork.fishSocket.emit("fishHit", {
                            fishId: this.birdArray[e].getComponent("Bird").birdID,
                            bulletId: this.bulletArray[t].getComponent("Bullet").id
                        }) : this.bulletArray[t].getComponent("Bullet").isRobot && this.bulletArray[t].getComponent("Bullet").sendUser == this.playerID && this.netWork.fishSocket.emit("fishHit", {
                            fishId: this.birdArray[e].getComponent("Bird").birdID,
                            bulletId: this.bulletArray[t].getComponent("Bullet").id,
                            sendId: this.bulletArray[t].getComponent("Bullet").userID
                        })
                    } catch(i) {}
                    this.bulletArray[t].getComponent("Bullet").BulletExplosion_Function(),
                    "bullet_Lan" == this.bulletArray[t].name ? this.bulletLanPool.put(this.bulletArray[t]) : "bullet_Lv" == this.bulletArray[t].name ? this.bulletLvPool.put(this.bulletArray[t]) : "bullet_Huang" == this.bulletArray[t].name ? this.bulletHuangPool.put(this.bulletArray[t]) : this.bulletFenPool.put(this.bulletArray[t]),
                    this.bulletArray.splice(t, 1),
                    this.birdArray[e].color = new cc.Color(255, 134, 134),
                    this.birdArray[e].getComponent("Bird").existence ? this.birdArray[e].getComponent("Bird").turn.color = new cc.Color(255, 134, 134) : this.birdArray[e].getComponent("Bird").Halo ? this.birdArray[e].getComponent("Bird").PHalo.color = new cc.Color(255, 134, 134) : this.birdArray[e].getComponent("Bird").TQ && (this.birdArray[e].getComponent("Bird").toadquan.color = new cc.Color(255, 134, 134)),
                    this.birdArray[e].getComponent("Bird").colorChange = !0,
                    this.birdArray[e].getComponent("Bird").time = 0;
                    break
                }
            },
            BirdDead_Function: function(t, e, n, i, o) {
                for (var a = 0; a < this.birdArray.length; ++a) if (this.birdArray[a].getComponent("Bird").birdID === e) {
                    if (this.birdArray[a].stopAllActions(), this.birdArray[a].getComponent("Bird").dying = !0, this.birdArray[a].getComponent("Bird").playDeadAnimation_Function(), 25 === this.birdArray[a].getComponent("Bird").birdType && i === !1) {
                        for (var s, c, r, l, h = [], m = 0; m < this.birdArray.length; m++) 21 !== this.birdArray[m].getComponent("Bird").birdType && 23 !== this.birdArray[m].getComponent("Bird").birdType && 25 !== this.birdArray[m].getComponent("Bird").birdType && (s = this.birdArray[m].position.x, c = this.birdArray[m].position.y, r = this.node.getContentSize().width, l = this.node.getContentSize().height, s > -r / 2 - 50 && s < r / 2 + 50 && c > -l / 2 - 50 && c < l / 2 + 50 && h.push(this.birdArray[m].getComponent("Bird").birdID));
                        if (this.BoomShow(), this.scheduleOnce(function() {
                            try {
                                this.netWork.fishSocket.emit("boomFishHit", {
                                    fishId: e,
                                    fishIdList: h,
                                    sendId: t
                                })
                            } catch(n) {}
                        },
                        .6), !this.shaking) {
                            this.now_Scene.stopAllActions();
                            var u = cc.sequence(cc.moveTo(.05, cc.p(15, 15)), cc.moveTo(.1, cc.p( - 15, -15)), cc.moveTo(.05, cc.p(0, 0)), cc.moveTo(.05, cc.p( - 15, 0)), cc.moveTo(.1, cc.p(0, -15)), cc.moveTo(.05, cc.p(0, 0))),
                            d = cc.repeat(u, 3);
                            this.now_Scene.runAction(d)
                        }
                    } else if (21 === this.birdArray[a].getComponent("Bird").birdType) {
                        if (this.playerID === t && (this.MoGuiAnticipation++, this.birdArray[a].runAction(cc.sequence(cc.spawn(cc.scaleTo(.7, .3), cc.moveTo(.7, this.MoGuiPosition)), cc.callFunc(function() {
                            if (this.MoGuiNum++, this.MoGuiNum < 4 && (this.MoGuiTaskTips.opacity = 255, this.scheduleOnce(function() {
                                this.MoGuiTaskTips.runAction(cc.fadeOut(.5))
                            },
                            4)), this.TaskMoGui && (this.MoGuiTask.children[this.MoGuiNum].active = !0, this.MoGuiNum > 3)) {
                                this.MoGuiTaskScore = o * this.roomBet,
                                this.DrawCoin_Score_Function(cc.p(0, 0), this.MoGuiTaskScore, 60, this.playerID, !0);
                                for (var t = 0; t < this.MoGuiTask.children.length; t++) this.MoGuiTask.children[t].runAction(cc.sequence(cc.delayTime(4), cc.spawn(cc.fadeOut(1.5), cc.scaleTo(1.5, 10)), cc.callFunc(function() {
                                    this.MoGuiInit()
                                },
                                this)));
                                this.MoGuiNum = -1,
                                this.TaskMoGui = !1
                            }
                        },
                        this))), this.MoGuiAnticipation > 3)) return this.MoGuiAnticipation = -1,
                        void this.birdArray.splice(a, 1)
                    } else if (26 === this.birdArray[a].getComponent("Bird").birdType || 27 === this.birdArray[a].getComponent("Bird").birdType) {
                        for (var p = -1,
                        m = 0; m < this.maxPlayer; ++m) if (this.playerInfo[m].userID === t) {
                            p = this.playerInfo[m].seatID;
                            break
                        }
                        this.netWork.seatId > 1 && p > 1 ? p -= 2 : this.netWork.seatId > 1 && p < 2 && (p += 2);
                        var g = cc.spawn(cc.moveTo(.5, this.labelPosition[p]), cc.scaleTo(.5, .8));
                        this.birdArray[a].runAction(g)
                    }
                    if (21 === this.birdArray[a].getComponent("Bird").birdType || 23 === this.birdArray[a].getComponent("Bird").birdType) {
                        var y = 0;
                        y = o < 10 ? 10 : o >= 10 && o < 25 ? 12 : 21
                    } else {
                        var y = this.birdCoin[this.birdArray[a].getComponent("Bird").birdType];
                        o = this.birdScore[this.birdArray[a].getComponent("Bird").birdType]
                    }
                    0 === this.awardType[this.birdArray[a].getComponent("Bird").birdType] && this.DrawCoin_Score_Function(this.birdArray[a].position, o * this.roomBet, y, t, !1),
                    this.playerID === t && (this.birdArray[a].getComponent("Bird").birdType < 16 ? this.com_Bill.children[this.birdArray[a].getComponent("Bird").birdType + 6].getComponent("cc.Label").string = (parseFloat(this.com_Bill.children[this.birdArray[a].getComponent("Bird").birdType + 6].getComponent("cc.Label").string) + this.birdScore[this.birdArray[a].getComponent("Bird").birdType] * this.roomBet / this.pInfo.exchangeRate).toFixed(2) : this.birdArray[a].getComponent("Bird").birdType > 17 && this.birdArray[a].getComponent("Bird").birdType < 21 ? this.com_Bill.children[this.birdArray[a].getComponent("Bird").birdType + 4].getComponent("cc.Label").string = (parseFloat(this.com_Bill.children[this.birdArray[a].getComponent("Bird").birdType + 4].getComponent("cc.Label").string) + this.birdScore[this.birdArray[a].getComponent("Bird").birdType] * this.roomBet / this.pInfo.exchangeRate).toFixed(2) : 24 === this.birdArray[a].getComponent("Bird").birdType && (this.com_Bill.children[this.birdArray[a].getComponent("Bird").birdType + 1].getComponent("cc.Label").string = (parseFloat(this.com_Bill.children[this.birdArray[a].getComponent("Bird").birdType + 1].getComponent("cc.Label").string) + this.birdScore[this.birdArray[a].getComponent("Bird").birdType] * this.roomBet / this.pInfo.exchangeRate).toFixed(2)), this.com_Bill.children[this.com_Bill.children.length - 2].getComponent("cc.Label").string = (parseFloat(this.com_Bill.children[this.com_Bill.children.length - 2].getComponent("cc.Label").string) + this.birdScore[this.birdArray[a].getComponent("Bird").birdType] * this.roomBet / this.pInfo.exchangeRate).toFixed(2)),
                    this.birdArray.splice(a, 1);
                    break
                }
            },
            MoGuiInit: function() {
                for (var t = 0; t < this.MoGuiTask.children.length; t++) this.MoGuiTask.children[t].runAction(cc.spawn(cc.fadeIn(0), cc.scaleTo(0, 1)));
                var e;
                for (e = this.MoGuiTask.children.length - 1; e > this.MoGuiNum; e--) this.MoGuiTask.children[e].active = !1;
                this.TaskMoGui = !0
            },
            BoomFish: function(t, e, n) {
                for (var i = !0,
                o = 0; o < t.length; o++) this.BirdDead_Function(n, t[o], 0, i)
            },
            DrawCoin_Score_Function: function(t, e, n, i, o) {
                var e = parseFloat(e / this.pInfo.exchangeRate).toFixed(2),
                a = null;
                a = this.BirdScoreLabelPool.size() > 0 ? this.BirdScoreLabelPool.get() : cc.instantiate(this.pb_BirdScoreLabel),
                o ? this.rollScoreLabel(e, n) : (a.parent = this.Wave, a.setLocalZOrder(2), a.getComponent("cc.Label").string = "+" + e, a.opacity = 255, a.setPosition(t.x, t.y - 50), a.getComponent("BirdScoreLabel").resetScoreLabel());
                for (var s = -1,
                c = 0; c < this.maxPlayer; ++c) if (this.playerInfo[c].userID === i) {
                    s = this.playerInfo[c].seatID;
                    break
                }
                if (this.netWork.seatId > 1 && s > 1 ? s -= 2 : this.netWork.seatId > 1 && s < 2 && (s += 2), this.lb_PlayerMoney[s].getComponent("cc.Label").string = (parseFloat(this.lb_PlayerMoney[s].getComponent("cc.Label").string) + parseFloat(e)).toFixed(2), o) {
                    var r, l, h, m = 0,
                    u = [];
                    this.schedule(function() {
                        if (this.coinPool.size() > 0) var t = this.coinPool.get();
                        else var t = cc.instantiate(this.pb_Coin);
                        t.parent = this.MoGuiTask,
                        t.setPosition(0, 0),
                        r = this.GetRandom_Function( - 250, 250),
                        l = this.GetRandom_Function(0, 500),
                        h = this.GetRandom_Function(0, 250),
                        t.runAction(cc.jumpBy(.6, r, h, l, 1)),
                        this.pInfo.soundEffectControl && cc.audioEngine.playEffect(this.au_Coin, !1),
                        u.push(t),
                        m++;
                        var i = this;
                        if (m == n) {
                            var o = this.MoGuiTask.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(this.labelPosition[s]));
                            this.scheduleOnce(function() {
                                for (var t = 0; t < u.length; t++) u[t].runAction(cc.sequence(cc.moveTo(.3, o), cc.callFunc(function() {
                                    i.coinPool.put(this)
                                },
                                u[t])))
                            },
                            .7),
                            this.scheduleOnce(function() {
                                this.CreateCoin(21, this.labelPosition[s], e)
                            },
                            1)
                        }
                    },
                    .05, n - 1)
                } else {
                    if (1 === n) {
                        if (this.coinPool.size() > 0) var d = this.coinPool.get();
                        else var d = cc.instantiate(this.pb_Coin);
                        d.parent = this.PlayerMessage,
                        d.getComponent("Coin").MoveAction_Function(t, t, this.labelPosition[s], e),
                        this.pInfo.soundEffectControl && cc.audioEngine.playEffect(this.au_Coin, !1)
                    } else if (2 === n) for (var p = 0; p < n; ++p) {
                        if (this.coinPool.size() > 0) var d = this.coinPool.get();
                        else var d = cc.instantiate(this.pb_Coin);
                        d.parent = this.PlayerMessage,
                        d.getComponent("Coin").MoveAction_Function(t, t, this.labelPosition[s], e),
                        this.pInfo.soundEffectControl && cc.audioEngine.playEffect(this.au_Coin, !1)
                    } else for (var p = 0,
                    g = parseInt(360 / n), y = 120, r = 0, l = 0; p < n; p++) {
                        if (r = t.x + y * Math.cos(g * p * Math.PI / 180), l = t.y + y * Math.sin(g * p * Math.PI / 180), this.coinPool.size() > 0) var d = this.coinPool.get();
                        else var d = cc.instantiate(this.pb_Coin);
                        d.parent = this.PlayerMessage,
                        d.getComponent("Coin").MoveAction_Function(t, cc.p(r, l), this.labelPosition[s], e),
                        this.pInfo.soundEffectControl && cc.audioEngine.playEffect(this.au_Coin, !1)
                    }
                    this.scheduleOnce(function() {
                        this.CreateCoin(n, this.labelPosition[s], e)
                    },
                    .6, 0)
                }
                if (e / (this.roomBet / this.pInfo.exchangeRate) > 20 && !o) {
                    this.pInfo.soundEffectControl && cc.audioEngine.play(this.au_Explosion, !1, 10);
                    var _ = cc.sequence(cc.delayTime(3), cc.callFunc(function() {},
                    this));
                    this.node.runAction(_);
                    var C;
                    if (C = this.explosionPool.size() > 0 ? this.explosionPool.get() : cc.instantiate(this.pb_Explosion), C.parent = this.vi_View, C.setPosition(t), C.getComponent("Explosion")._armatureDisplay.playAnimation("newAnimation", 1), s < 2 ? this.billBoardArray[s].setPosition(this.billBoardArray[s].x, -160) : this.billBoardArray[s].setPosition(this.billBoardArray[s].x, 160), this.billBoardArray[s].getComponent("BillBoard").SetLabel_Function(e), !this.shaking) {
                        this.now_Scene.stopAllActions();
                        var b = cc.sequence(cc.moveTo(.05, cc.p(15, 15)), cc.moveTo(.1, cc.p( - 15, -15)), cc.moveTo(.05, cc.p(0, 0)), cc.moveTo(.05, cc.p( - 15, 0)), cc.moveTo(.1, cc.p(0, -15)), cc.moveTo(.05, cc.p(0, 0))),
                        f = cc.repeat(b, 3);
                        this.now_Scene.runAction(f)
                    }
                    this.billBoardArray[s].getComponent("BillBoard")._armatureDisplay.playAnimation("newAnimation", 1),
                    this.billBoardArray[s].getChildByName("Score").getComponent("cc.Animation").play("BillBoard")
                }
            },
            rollScoreLabel: function(t, e) {
                this.MoGuiTaskLabel.active = !0,
                this.MoGuiTaskLabel.getComponent("cc.Label").string = 0,
                this.MoGuiTaskLabel.opacity = 255;
                var n = parseFloat(t) / e,
                i = 0;
                this.schedule(function() {
                    if (i === e - 1) {
                        this.MoGuiTaskLabel.getComponent("cc.Label").string = parseFloat(t).toFixed(2);
                        var o = cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.1, 1), cc.delayTime(1), cc.fadeOut(.2), cc.callFunc(function() {
                            this.MoGuiTaskLabel.active = !1
                        },
                        this));
                        this.MoGuiTaskLabel.runAction(o)
                    } else i++,
                    this.MoGuiTaskLabel.getComponent("cc.Label").string = (parseFloat(this.MoGuiTaskLabel.getComponent("cc.Label").string) + n).toFixed(2)
                },
                .05, e - 1)
            },
            pen_Label: function(t) {
                this.pool = parseFloat(t * this.roomBet / this.pInfo.exchangeRate).toFixed(2),
                null !== this.pen && (this.pen.getComponent("Bird").p_Label.getComponent("cc.Label").string = this.pool)
            },
            DrawItem_Function: function(t, e, n) {
                for (var i = -1,
                o = 0; o < this.maxPlayer; ++o) if (this.playerInfo[o].userID === n) {
                    i = this.playerInfo[o].seatID;
                    break
                }
                this.netWork.seatId > 1 && i > 1 ? i -= 2 : this.netWork.seatId > 1 && i < 2 && (i += 2);
                var a = null;
                a = this.itemPool.size() > 0 ? this.itemPool.get() : this.instantiate(this.pb_Item),
                a.parent = this.vi_View,
                a.getComponent("Item").MoveAction_Function(t, this.labelPosition[i], e),
                a.getComponent("Item").DrawAnimation = !0,
                this.pInfo.soundEffectControl && cc.audioEngine.playEffect(this.au_Coin, !1)
            },
            Fishinit: function(t, e) {
                var n, i, o = null,
                a = 0;
                this.now_Scene = this.pb_scene[e],
                this.old_Scene = null,
                this.now_Scene.setPosition(cc.p(0, 0));
                for (var s = 0; s < t.length && (n = s + 31, !(n > 40)); ++s) {
                    if (i = t[s].fishId, a = t[s].fishType, 23 === a) return;
                    if (! (this.FishPool.size() > 0)) return;
                    o = this.FishPool.get(),
                    23 == a && (this.pen = o),
                    o.parent = this.vi_View;
                    o.getComponent("Bird").BirdCreat_function(i, a, n, this.netWork.seatID, this.getComponent("Path").birdPath, cc.p(0, 0), null, this.proportion, t[s].propCount),
                    this.birdArray.push(o)
                }
            },
            MoGuiCount: function(t) {
                this.MoGuiNum = t - 1,
                this.MoGuiAnticipation = t - 1;
                for (var e = 0; e <= this.MoGuiNum; e++) this.MoGuiTask.children[e].active = !0
            },
            SetPlayerInfoFunction: function() {
                for (var t = 0; t < this.maxPlayer; ++t) if (this.playerInfo[t].userID) {
                    var e = 0;
                    e = this.netWork.seatId > 1 ? 0 === t ? 2 : 1 === t ? 3 : 2 === t ? 0 : 1 : t,
                    this.user[e] = !0,
                    this.wins[e].active = !1,
                    this.playerFrame[e].active = !0,
                    this.pt_PlayerCanon[e].active = !0,
                    this.sp_PlayerHead[e].spriteFrame = this.playerHeadPiture[1],
                    this.lb_PlayerName[e].getComponent("cc.Label").string = this.playerInfo[t].playerName,
                    this.lb_PlayerMoney[e].getComponent("cc.Label").string = this.playerInfo[t].score.toFixed(2),
                    this.pt_PlayerCanon[e].children[1].getComponent("cc.Label").string = this.netWork.roomBet
                }
                var n = null;
                0 === this.netWork.seatId || 2 === this.netWork.seatId ? (this.pb_Here[0].active = !0, n = this.pb_Here[0]) : 1 !== this.netWork.seatId && 3 !== this.netWork.seatId || (this.pb_Here[1].active = !0, n = this.pb_Here[1]),
                this.scheduleOnce(function() {
                    n.active = !1
                },
                5)
            },
            SetEnterPlayerInfo_Function: function(t, e, n, i, o) {
                var a = e,
                s = 0;
                s = this.netWork.seatId > 1 ? 0 === e ? 2 : 1 === e ? 3 : 2 === e ? 0 : 1 : a,
                this.user[s] = !0,
                this.wins[s].active = !1,
                this.playerFrame[s].active = !0,
                this.pt_PlayerCanon[s].active = !0,
                this.sp_PlayerHead[s].spriteFrame = this.playerHeadPiture[1],
                this.lb_PlayerName[s].getComponent("cc.Label").string = n,
                this.lb_PlayerMoney[s].getComponent("cc.Label").string = (i / this.pInfo.exchangeRate).toFixed(2),
                this.playerInfo[e].seatID = e,
                this.playerInfo[e].playerName = n,
                this.playerInfo[e].score = i / this.pInfo.exchangeRate,
                this.playerInfo[e].userID = t,
                this.pt_PlayerCanon[s].children[1].getComponent("cc.Label").string = this.netWork.roomBet
            },
            PlayerLeaveTable_Function: function(t) {
                var e = 0;
                if (this.netWork.seatId < 2 ? (e = t, e < 2 ? this.pt_PlayerCanon[e].rotation = 0 : this.pt_PlayerCanon[e].rotation = 180) : (e = 0 === t ? 2 : 1 === t ? 3 : 2 === t ? 0 : 1, e < 2 ? this.pt_PlayerCanon[e].rotation = 0 : this.pt_PlayerCanon[e].rotation = 180), this.user[e] = !1, this.pt_PlayerCanon[e].active = !1, this.playerFrame[e].active = !1, this.wins[e].active = !0, this.sp_PlayerHead[e].spriteFram = null, this.playerInfo[t].seatID = -1, this.playerInfo[t].playerName = "", this.playerInfo[t].score = 0, this.playerInfo[t].userID = -1, this.lb_PlayerName[e].getComponent("cc.Label").string = " ", this.lb_PlayerMoney[e].getComponent("cc.Label").string = " ", this.sp_PlayerHead[e].getComponent("cc.Sprite").spriteFrame = null, 0 === e) {
                    this.group1 = !1;
                    for (var n = 0; n < this.groupArr1.length; n++) for (var i = 0; i < this.groupArr1[n].length; i++) this.groupArr1[n][i].opacity = 0
                } else if (1 === e) {
                    this.group2 = !1;
                    for (var n = 0; n < this.groupArr2.length; n++) for (var i = 0; i < this.groupArr2[n].length; i++) this.groupArr2[n][i].opacity = 0
                } else if (2 === e) {
                    this.group3 = !1;
                    for (var n = 0; n < this.groupArr3.length; n++) for (var i = 0; i < this.groupArr3[n].length; i++) this.groupArr3[n][i].opacity = 0
                } else {
                    this.group4 = !1;
                    for (var n = 0; n < this.groupArr4.length; n++) for (var i = 0; i < this.groupArr4[n].length; i++) this.groupArr4[n][i].opacity = 0
                }
            },
            UpdateGold_Function: function(t, e) {
                this.lb_PlayerMoney[t].getComponent("cc.Label").string = e.toFixed(2)
            },
            UpdatePlayerGold_Function: function(t, e) {
                for (var n = -1,
                i = 0; i < this.maxPlayer; ++i) if (this.playerInfo[i].userID === t) {
                    n = this.playerInfo[i].seatID;
                    break
                }
                this.netWork.seatId > 1 && n > 1 ? n -= 2 : this.netWork.seatId > 1 && n < 2 && (n += 2),
                this.playerInfo[n].score = e,
                this.lb_PlayerMoney[n].getComponent("cc.Label").string = e.toFixed(2)
            },
            UpdateMatchRank_Function: function(t) {
                for (var e = 0; e < t.length; ++e) this.com_Rank.children[e + 11].getComponent("cc.Label").string = t[e].nickname,
                this.com_Rank.children[e + 21].getComponent("cc.Label").string = t[e]._score
            },
            UpdateMatchTime_Function: function(t) {
                this.matchTime = t
            },
            changeScene: function(t, e) {
                if (cc.log("鱼潮"), this.now_Scene.name != this.pb_scene[t].name && this.shaking !== !0) {
                    this.now_Scene.stopAllActions();
                    var n = this;
                    this.SeaWave.active = !0,
                    this.sceneNum = t,
                    this.shaking = !0,
                    null !== this.old_Scene && this.old_Scene.setPosition(cc.p(1400 * this.proportion, 0));
                    var i = cc.sequence(cc.moveTo(2.5, cc.p( - 1400 * this.proportion, 0)), cc.callFunc(function() {
                        n.old_Scene = n.now_Scene
                    },
                    this));
                    this.now_Scene.runAction(i);
                    var o = cc.sequence(cc.moveTo(2.5, cc.p(0, 0)), cc.callFunc(function() {
                        n.now_Scene = this.pb_scene[t];
                        for (var e, i = 0; i < this.birdArray.length; i++) e = this.birdArray[i].getComponent("Bird"),
                        n.birdArray[i].stopAllActions(),
                        e.deaded = !0,
                        e.dying = !1,
                        e.activity = !1,
                        e.existence ? (e.turn.destroy(), e.existence = !1) : e.Halo ? (e.PHalo.destroy(), e.Halo = !1) : e.TQ ? (e.toadquan.destroy(), e.TQ = !1) : e.PL && (e.p_Label.destroy(), e.PL = !1, n.pen = null),
                        n.FishPool.put(n.birdArray[i]);
                        n.birdArray = [],
                        n.SeaWave.active = !1,
                        n.shaking = !1
                    },
                    this));
                    this.pb_scene[t].runAction(o)
                }
            },
            FishDiSize: function(t) {
                var e;
                return t < 6 ? e = 1 : t >= 6 && t < 8 ? e = 1.2 : t >= 8 && t < 11 ? e = 1.4 : t >= 11 && t < 13 ? e = 1.6 : 14 === t ? e = 3 : t >= 15 && t < 18 ? e = 1.4 : t >= 18 && t < 21 ? e = 1 : t >= 21 && (e = 2),
                e
            },
            BoomShow: function() {
                var t = 0,
                e = 7;
                this.scheduleOnce(function() {
                    for (t = 0; t < e; t++) {
                        if (this.BoomPool.size() > 0) var n = this.BoomPool.get();
                        else var n = cc.instantiate(this.BoomB);
                        this.vi_View.addChild(n, 5);
                        var i = this.node.getContentSize().width * Math.random() - this.node.getContentSize().width / 2,
                        o = this.node.getContentSize().height * Math.random() - this.node.getContentSize().height / 2;
                        n.setPosition(i, o),
                        n.getComponent("cc.Animation").play()
                    }
                },
                .2),
                this.scheduleOnce(function() {
                    for (t = 0; t < e; t++) {
                        if (this.BoomPool.size() > 0) var n = this.BoomPool.get();
                        else var n = cc.instantiate(this.BoomB);
                        this.vi_View.addChild(n, 5);
                        var i = this.node.getContentSize().width * Math.random() - this.node.getContentSize().width / 2,
                        o = this.node.getContentSize().height * Math.random() - this.node.getContentSize().height / 2;
                        n.setPosition(i, o),
                        n.getComponent("cc.Animation").play()
                    }
                },
                .4),
                this.scheduleOnce(function() {
                    for (t = 0; t < e; t++) {
                        if (this.BoomPool.size() > 0) var n = this.BoomPool.get();
                        else var n = cc.instantiate(this.BoomB);
                        this.vi_View.addChild(n, 5);
                        var i = this.node.getContentSize().width * Math.random() - this.node.getContentSize().width / 2,
                        o = this.node.getContentSize().height * Math.random() - this.node.getContentSize().height / 2;
                        n.setPosition(i, o),
                        n.getComponent("cc.Animation").play()
                    }
                },
                .6)
            },
            GameExit_Function: function() {
                switch (this.netWork.gameExit = !0, this.netWork.disconnected = !0, this.netWork.fishSocket.disconnect(), cc.audioEngine.stopAll(), this.pInfo.lobbySelect) {
                case 0:
                    cc.director.loadScene("LobbyMain");
                    break;
                case 1:
                    cc.director.loadScene("Lobby_Fish")
                }
            },
            CreateCoin: function(t, e, n) {
                n = parseFloat(n);
                var i = this.roomBet / this.pInfo.exchangeRate,
                o = 0;
                if (e.x < 0 && e.y < 0 && this.user[0] === !0) {
                    var a = this.groupArr1[this.groupArr1.length - 1].length - 1;
                    " " != this.groupArr1[this.groupArr1.length - 1][a].getComponent("cc.Label").string ? this.groupArr1[this.groupArr1.length - 1][a].getComponent("cc.Label").string = (n + parseFloat(this.groupArr1[this.groupArr1.length - 1][a].getComponent("cc.Label").string)).toFixed(2) : this.groupArr1[this.groupArr1.length - 1][a].getComponent("cc.Label").string = n.toFixed(2),
                    a > 10 && n < 20 * i ? t = 1 : a > 20 && n >= 20 * i && (t = 1);
                    for (var s = 0; s < t; s++) {
                        this.pInfo.soundEffectControl && cc.audioEngine.play(this.coin_voice),
                        o = 5 * (this.groupArr1[this.groupArr1.length - 1].length - 2);
                        var c;
                        c = this.coinSoltPool.size() > 0 ? this.coinSoltPool.get() : cc.instantiate(this.coin),
                        this.groupArr1[this.groupArr1.length - 1].splice( - 3, 0, c),
                        c.opacity = 255,
                        c.rotation = 0,
                        c.parent = this.com_PlayerFrame,
                        c.setLocalZOrder = 0,
                        c.setPosition( - this.distanceEdge, -296 + o)
                    }
                    a = this.groupArr1[this.groupArr1.length - 1].length - 1;
                    var r = parseFloat(this.groupArr1[this.groupArr1.length - 1][a].getComponent("cc.Label").string);
                    this.groupArr1[this.groupArr1.length - 1][a - 1].setPosition( - this.distanceEdge, -296 + o + 5),
                    this.groupArr1[this.groupArr1.length - 1][a].setPosition( - this.distanceEdge, -296 + o + 20),
                    0 === this.groupArr1[this.groupArr1.length - 1][a - 1].opacity && (this.groupArr1[this.groupArr1.length - 1][a - 1].opacity = 255),
                    r / (this.roomBet / this.pInfo.exchangeRate) > 10 && r / (this.roomBet / this.pInfo.exchangeRate) <= 20 ? this.groupArr1[this.groupArr1.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[1] : r / (this.roomBet / this.pInfo.exchangeRate) > 20 ? this.groupArr1[this.groupArr1.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[2] : this.groupArr1[this.groupArr1.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[0]
                } else if (e.x > 0 && e.y < 0 && this.user[1] === !0) {
                    var a = this.groupArr2[this.groupArr2.length - 1].length - 1;
                    " " != this.groupArr2[this.groupArr2.length - 1][a].getComponent("cc.Label").string ? this.groupArr2[this.groupArr2.length - 1][a].getComponent("cc.Label").string = (n + parseFloat(this.groupArr2[this.groupArr2.length - 1][a].getComponent("cc.Label").string)).toFixed(2) : this.groupArr2[this.groupArr2.length - 1][a].getComponent("cc.Label").string = n.toFixed(2),
                    a > 10 && n < 20 * i ? t = 1 : a > 20 && n >= 20 * i && (t = 1);
                    for (var s = 0; s < t; s++) {
                        this.pInfo.soundEffectControl && cc.audioEngine.play(this.coin_voice),
                        o = 5 * (this.groupArr2[this.groupArr2.length - 1].length - 2);
                        var c;
                        c = this.coinSoltPool.size() > 0 ? this.coinSoltPool.get() : cc.instantiate(this.coin),
                        c.opacity = 255,
                        c.rotation = 0,
                        c.setLocalZOrder = 0,
                        c.parent = this.com_PlayerFrame,
                        c.setPosition(this.distanceEdge, -296 + o),
                        this.groupArr2[this.groupArr2.length - 1].splice( - 3, 0, c)
                    }
                    a = this.groupArr2[this.groupArr2.length - 1].length - 1;
                    var r = parseFloat(this.groupArr2[this.groupArr2.length - 1][a].getComponent("cc.Label").string);
                    this.groupArr2[this.groupArr2.length - 1][a - 1].setPosition(this.distanceEdge, -296 + o + 5),
                    this.groupArr2[this.groupArr2.length - 1][a].setPosition(this.distanceEdge, -296 + o + 20),
                    0 === this.groupArr2[this.groupArr2.length - 1][a - 1].opacity && (this.groupArr2[this.groupArr2.length - 1][a - 1].opacity = 255),
                    r / (this.roomBet / this.pInfo.exchangeRate) > 10 && r / (this.roomBet / this.pInfo.exchangeRate) <= 20 ? this.groupArr2[this.groupArr2.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[1] : r / (this.roomBet / this.pInfo.exchangeRate) > 20 ? this.groupArr2[this.groupArr2.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[2] : this.groupArr2[this.groupArr2.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[0]
                } else if (e.x < 0 && e.y > 0 && this.user[2] === !0) {
                    var a = this.groupArr3[this.groupArr3.length - 1].length - 1;
                    " " != this.groupArr3[this.groupArr3.length - 1][a].getComponent("cc.Label").string ? this.groupArr3[this.groupArr3.length - 1][a].getComponent("cc.Label").string = (n + parseFloat(this.groupArr3[this.groupArr3.length - 1][a].getComponent("cc.Label").string)).toFixed(2) : this.groupArr3[this.groupArr3.length - 1][a].getComponent("cc.Label").string = n.toFixed(2),
                    a > 10 && n < 20 * i ? t = 1 : a > 20 && n >= 20 * i && (t = 1);
                    for (var s = 0; s < t; s++) {
                        this.pInfo.soundEffectControl && cc.audioEngine.play(this.coin_voice),
                        o = 5 * (this.groupArr3[this.groupArr3.length - 1].length - 2);
                        var c;
                        c = this.coinSoltPool.size() > 0 ? this.coinSoltPool.get() : cc.instantiate(this.coin),
                        c.opacity = 255,
                        c.rotation = 180,
                        c.setLocalZOrder = 0,
                        c.parent = this.com_PlayerFrame,
                        c.setPosition( - this.distanceEdge, 296 - o),
                        this.groupArr3[this.groupArr3.length - 1].splice( - 3, 0, c)
                    }
                    a = this.groupArr3[this.groupArr3.length - 1].length - 1;
                    var r = parseFloat(this.groupArr3[this.groupArr3.length - 1][a].getComponent("cc.Label").string);
                    this.groupArr3[this.groupArr3.length - 1][a - 1].setPosition( - this.distanceEdge, 296 - o - 5),
                    this.groupArr3[this.groupArr3.length - 1][a].setPosition( - this.distanceEdge, 296 - o - 20),
                    0 === this.groupArr3[this.groupArr3.length - 1][a - 1].opacity && (this.groupArr3[this.groupArr3.length - 1][a - 1].opacity = 255),
                    r / (this.roomBet / this.pInfo.exchangeRate) > 10 && r / (this.roomBet / this.pInfo.exchangeRate) <= 20 ? this.groupArr3[this.groupArr3.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[1] : r / (this.roomBet / this.pInfo.exchangeRate) > 20 ? this.groupArr3[this.groupArr3.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[2] : this.groupArr3[this.groupArr3.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[0]
                } else if (e.x > 0 && e.y > 0 && this.user[3] === !0) {
                    var a = this.groupArr4[this.groupArr4.length - 1].length - 1;
                    " " != this.groupArr4[this.groupArr4.length - 1][a].getComponent("cc.Label").string ? this.groupArr4[this.groupArr4.length - 1][a].getComponent("cc.Label").string = (n + parseFloat(this.groupArr4[this.groupArr4.length - 1][a].getComponent("cc.Label").string)).toFixed(2) : this.groupArr4[this.groupArr4.length - 1][a].getComponent("cc.Label").string = n.toFixed(2),
                    a > 10 && n < 20 * i ? t = 1 : a > 20 && n >= 20 * i && (t = 1);
                    for (var s = 0; s < t; s++) {
                        this.pInfo.soundEffectControl && cc.audioEngine.play(this.coin_voice),
                        o = 5 * (this.groupArr4[this.groupArr4.length - 1].length - 2);
                        var c;
                        c = this.coinSoltPool.size() > 0 ? this.coinSoltPool.get() : cc.instantiate(this.coin),
                        c.opacity = 255,
                        c.rotation = 180,
                        c.setLocalZOrder = 0,
                        c.parent = this.com_PlayerFrame,
                        c.setPosition(this.distanceEdge, 296 - o),
                        this.groupArr4[this.groupArr4.length - 1].splice( - 3, 0, c)
                    }
                    a = this.groupArr4[this.groupArr4.length - 1].length - 1;
                    var r = parseFloat(this.groupArr4[this.groupArr4.length - 1][a].getComponent("cc.Label").string);
                    this.groupArr4[this.groupArr4.length - 1][a - 1].setPosition(this.distanceEdge, 296 - o - 5),
                    this.groupArr4[this.groupArr4.length - 1][a].setPosition(this.distanceEdge, 296 - o - 20),
                    0 === this.groupArr4[this.groupArr4.length - 1][a - 1].opacity && (this.groupArr4[this.groupArr4.length - 1][a - 1].opacity = 255),
                    r / (this.roomBet / this.pInfo.exchangeRate) > 10 && r / (this.roomBet / this.pInfo.exchangeRate) <= 20 ? this.groupArr4[this.groupArr4.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[1] : r / (this.roomBet / this.pInfo.exchangeRate) > 20 ? this.groupArr4[this.groupArr4.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[2] : this.groupArr4[this.groupArr4.length - 1][a - 1].getComponent("cc.Sprite").spriteFrame = this.solt_coin[0]
                }
            },
            CoinRunAction: function() {
                for (var t = 1; t < 5; t++) if (1 === t) {
                    if (this.groupArr1.length > 0) for (var e = parseInt(this.groupArr1[this.groupArr1.length - 1].length), n = 0; n < e; n++) {
                        var i = cc.spawn(cc.moveTo(.5, cc.p( - this.distanceEdge - 113.6, -357.5)), cc.fadeOut(.5)),
                        o = cc.sequence(cc.moveBy(.2, cc.p( - 29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p( - 29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p( - 29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p( - 29, 0)), i);
                        this.groupArr1[this.groupArr1.length - 1][n].runAction(o)
                    }
                    this.scheduleOnce(function() {
                        if (0 !== this.groupArr1.length) {
                            for (var t = 0; t < this.groupArr1[0].length; t++) t == this.groupArr1[0].length - 1 || t == this.groupArr1[0].length - 2 ? this.groupArr1[0][t].destroy() : this.coinSoltPool.put(this.groupArr1[0][t]);
                            this.groupArr1.shift()
                        }
                    },
                    15),
                    this.groupArr1[this.groupArr1.length] = [];
                    var a;
                    a = cc.instantiate(this.solt_hui),
                    this.com_PlayerFrame.addChild(a, 1),
                    a.setPosition( - this.distanceEdge, -296),
                    a.opacity = 0,
                    a.rotation = 0,
                    this.groupArr1[this.groupArr1.length - 1].push(a);
                    var s = cc.instantiate(this.coinNUM);
                    this.com_PlayerFrame.addChild(s, 1),
                    s.setPosition( - this.distanceEdge, -296),
                    this.groupArr1[this.groupArr1.length - 1].push(s),
                    this.runtime1 = 0
                } else if (2 === t) {
                    if (this.groupArr2.length > 0) for (var c = this.groupArr2[this.groupArr2.length - 1].length, n = 0; n < c; n++) {
                        var r = cc.spawn(cc.moveTo(.5, cc.p(this.distanceEdge + 113.6, -358)), cc.fadeOut(.5)),
                        l = cc.sequence(cc.moveBy(.2, cc.p(29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p(29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p(29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p(29, 0)), r);
                        this.groupArr2[this.groupArr2.length - 1][n].runAction(l)
                    }
                    this.scheduleOnce(function() {
                        if (0 !== this.groupArr2.length) {
                            for (var t = 0; t < this.groupArr2[0].length; t++) t == this.groupArr2[0].length - 1 || t == this.groupArr2[0].length - 2 ? this.groupArr2[0][t].destroy() : this.coinSoltPool.put(this.groupArr2[0][t]);
                            this.groupArr2.shift()
                        }
                    },
                    15),
                    this.groupArr2[this.groupArr2.length] = [];
                    var a;
                    a = cc.instantiate(this.solt_hui),
                    this.com_PlayerFrame.addChild(a, 1),
                    a.setPosition( - this.distanceEdge, -296),
                    a.opacity = 0,
                    a.rotation = 0,
                    this.groupArr2[this.groupArr2.length - 1].push(a);
                    var s = cc.instantiate(this.coinNUM);
                    this.com_PlayerFrame.addChild(s, 1),
                    s.setPosition(this.distanceEdge, -296),
                    this.groupArr2[this.groupArr2.length - 1].push(s),
                    this.runtime2 = 0
                } else if (3 === t) {
                    if (this.groupArr3.length > 0) for (var h = this.groupArr3[this.groupArr3.length - 1].length, n = 0; n < h; n++) {
                        var m = cc.spawn(cc.moveTo(.5, cc.p( - this.distanceEdge - 113.6, 359.2)), cc.fadeOut(.5)),
                        u = cc.sequence(cc.moveBy(.2, cc.p( - 29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p( - 29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p( - 29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p( - 29, 0)), m);
                        this.groupArr3[this.groupArr3.length - 1][n].runAction(u)
                    }
                    this.scheduleOnce(function() {
                        if (0 !== this.groupArr3.length) {
                            for (var t = 0; t < this.groupArr3[0].length; t++) t == this.groupArr3[0].length - 1 || t == this.groupArr3[0].length - 2 ? this.groupArr3[0][t].destroy() : this.coinSoltPool.put(this.groupArr3[0][t]);
                            this.groupArr3.shift()
                        }
                    },
                    15),
                    this.groupArr3[this.groupArr3.length] = [];
                    var a;
                    a = cc.instantiate(this.solt_hui),
                    this.com_PlayerFrame.addChild(a, 1),
                    a.setPosition( - this.distanceEdge, -296),
                    a.opacity = 0,
                    a.rotation = 180,
                    this.groupArr3[this.groupArr3.length - 1].push(a);
                    var s = cc.instantiate(this.coinNUM);
                    this.com_PlayerFrame.addChild(s, 1),
                    s.setPosition( - this.distanceEdge, 296),
                    this.groupArr3[this.groupArr3.length - 1].push(s),
                    this.runtime3 = 0
                } else {
                    if (this.groupArr4.length > 0) for (var d = this.groupArr4[this.groupArr4.length - 1].length, n = 0; n < d; n++) {
                        var p = cc.spawn(cc.moveTo(.5, cc.p(this.distanceEdge + 113.6, 358.5)), cc.fadeOut(.5)),
                        g = cc.sequence(cc.moveBy(.2, cc.p(29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p(29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p(29, 0)), cc.delayTime(1.8), cc.moveBy(.2, cc.p(29, 0)), p);
                        this.groupArr4[this.groupArr4.length - 1][n].runAction(g)
                    }
                    this.scheduleOnce(function() {
                        if (0 !== this.groupArr4.length) {
                            for (var t = 0; t < this.groupArr4[0].length; t++) t == this.groupArr4[0].length - 1 || t == this.groupArr4[0].length - 2 ? this.groupArr4[0][t].destroy() : this.coinSoltPool.put(this.groupArr4[0][t]);
                            this.groupArr4.shift()
                        }
                    },
                    15),
                    this.groupArr4[this.groupArr4.length] = [];
                    var a;
                    a = cc.instantiate(this.solt_hui),
                    this.com_PlayerFrame.addChild(a, 1),
                    a.setPosition( - this.distanceEdge, -296),
                    a.opacity = 0,
                    a.rotation = 180,
                    this.groupArr4[this.groupArr4.length - 1].push(a);
                    var s = cc.instantiate(this.coinNUM);
                    this.com_PlayerFrame.addChild(s, 1),
                    s.setPosition(this.distanceEdge, 296),
                    this.groupArr4[this.groupArr4.length - 1].push(s),
                    this.runtime4 = 0
                }
            },
            disconnectNetWork_Function: function(t) {
                if ("disconnect" != t) try {
                    this.netWork.fishSocket.disconnect()
                } catch(e) {}
                this.pInfo.gameDisconnect = !0,
                this.com_MessageBox.active = !0,
                this.pb_black.active = !0,
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "您已断线，请重新连接"
            },
            againGame: function() {
                this.sp_ExitGame.enabled = !1,
                this.logoutRoom = !1,
                this.com_Bill.active = !1,
                this.billing = !1,
                this.autoShooting = !1,
                this.notShootingTime = 0
            },
            update: function(t) {
                if ((this.bulletShooting && !this.billing || this.autoShooting) && (this.bulletShootingInterval >= .25 ? (this.bulletShootingInterval = 0, this.BulletShooting_Function(this.playerID, this.playerCanonLevel, this.playerTouchLocation), this.autoShootingTime += t, this.autoShootingTime > .3 && (this.autoShooting = !0)) : this.bulletShootingInterval += t), this.BulletCollide_Function(), this.notShootingTime < 45 ? (this.notShootingTime += t, this.notShootingTime > 14 && (this.lb_NotShooting.getComponent("cc.Label").string = parseInt(45 - this.notShootingTime), this.lb_NotShooting.getComponent("cc.Label").enabled = !0, this.sp_NotShooting.enabled = !0)) : this.logoutRoom || (this.sp_ExitGame.enabled = !0, this.lb_NotShooting.getComponent("cc.Label").enabled = !1, this.sp_NotShooting.enabled = !1, this.logoutRoom = !0, this.com_Bill.active = !0, this.billing = !0, this.autoShooting = !1), this.SeaWave.active) {
                    this.SeaWave.setPosition(this.pb_scene[this.sceneNum].position.x - 495, 0);
                    for (var e, n = 0; n < this.birdArray.length; n++) this.birdArray[n].position.x > this.SeaWave.position.x - this.SeaWave.getContentSize().width / 2 && (e = this.birdArray[n].getComponent("Bird"), this.birdArray[n].stopAllActions(), e.deaded = !0, e.dying = !1, e.activity = !1, e.existence ? (e.turn.destroy(), e.existence = !1) : e.Halo ? (e.PHalo.destroy(), e.Halo = !1) : e.TQ ? (e.toadquan.destroy(), e.TQ = !1) : e.PL && (e.p_Label.destroy(), e.PL = !1, this.pen = null), this.FishPool.put(this.birdArray[n]), this.birdArray.splice(n, 1), n--)
                }
                this.netWork.gameExit || (this.heartBeat < 10 ? this.heartBeat += t: (cc.log("heartBeat10"), this.com_MessageBox.getChildByName("bt_Confirm").active = !1, this.com_MessageBox.getChildByName("bt_Reconnect").active = !0, this.disconnectNetWork_Function()))
            }
        }),
        cc._RF.pop()
    },
    {
        FishNetWork: "FishNetWork",
        PlayerInfo: "PlayerInfo"
    }],
    GameUpdate: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4816dXTzTRNnKJ8aSFuY8V/", "GameUpdate"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                manifestUrl: {
                    "default": [],
                    url: cc.RawAsset
                },
                _updating: !1,
                _canRetry: !1
            },
            checkCb: function(t) {
                switch (cc.log("Code: " + t.getEventCode()), t.getEventCode()) {
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    break;
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    break;
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    cc.log("++++++++++++++++dddd++++++++++++++++");
                    var e = 1;
                    switch (this.gameName) {
                    case "GrabBull":
                        this.gameArray[0] = 1,
                        e = 1;
                        break;
                    case "Fish":
                        this.gameArray[1] = 1,
                        e = 2;
                        break;
                    case "Bull":
                        this.gameArray[2] = 1,
                        e = 3;
                        break;
                    case "Bde":
                        this.gameArray[3] = 1,
                        e = 4;
                        break;
                    case "TwoEight":
                        this.gameArray[4] = 1,
                        e = 5;
                        break;
                    case "LineGame":
                        this.gameArray[5] = 1,
                        e = 6
                    }
                    this.playerInfo.localVersion[e] = this.serverVersion,
                    cc.log(this.serverVersion),
                    cc.log(this.playerInfo.localVersion),
                    this.writeGameVersion_Function(this.playerInfo.localVersion,
                    function() {
                        cc.game.restart()
                    }),
                    this._updating = !1;
                    break;
                case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.active = !0,
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("pb_Loading").getComponent("cc.ProgressBar").progress = 0,
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("pb_Loading").active = !0,
                    this.node.getComponent("LobbyMain").bg_Black.active = !0,
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "游戏需要更新到 " + this.serverVersion + " 版本";
                    break;
                default:
                    return
                }
                cc.eventManager.removeListener(this._checkListener),
                this._checkListener = null,
                this._updating = !1,
                this.hotUpdate()
            },
            updateCb: function(t) {
                cc.log("----------------------------ooooooooooooo--------------------------------");
                var e = !1,
                n = !1;
                switch (t.getEventCode()) {
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    n = !0;
                    break;
                case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                    this.node.getComponent("LobbyMain").checkUpdateTime = 20,
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("pb_Loading").active = !0,
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("pb_Loading").getComponent("cc.ProgressBar").progress = t.getDownloadedBytes() / t.getTotalBytes();
                    t.getMessage();
                    break;
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    n = !0;
                    break;
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    cc.log("已是最新版本"),
                    this._updating = !1,
                    n = !0;
                    break;
                case jsb.EventAssetsManager.UPDATE_FINISHED:
                    cc.log("更新完成"),
                    this.node.getComponent("LobbyMain").checkUpdateTimeOut = !1,
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("pb_Loading").active = !0,
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("pb_Loading").getComponent("cc.ProgressBar").progress = 1,
                    e = !0;
                    break;
                case jsb.EventAssetsManager.UPDATE_FAILED:
                    this._updating = !1,
                    this._canRetry = !0;
                    break;
                case jsb.EventAssetsManager.ERROR_UPDATING:
                    break;
                case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                }
                if (n && (cc.eventManager.removeListener(this._updateListener), this._updateListener = null, this._updating = !1), e) {
                    cc.eventManager.removeListener(this._updateListener),
                    this._updateListener = null;
                    var i = jsb.fileUtils.getSearchPaths(),
                    o = this._am.getLocalManifest().getSearchPaths();
                    console.log(JSON.stringify(o)),
                    Array.prototype.unshift(i, o),
                    cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(i)),
                    jsb.fileUtils.setSearchPaths(i),
                    cc.audioEngine.stopAll();
                    var a = 0;
                    switch (this.gameName) {
                    case "GrabBull":
                        this.gameArray[0] = 1,
                        a = 1;
                        break;
                    case "Fish":
                        this.gameArray[1] = 1,
                        a = 2;
                        break;
                    case "Bull":
                        this.gameArray[2] = 1,
                        a = 3;
                        break;
                    case "Bde":
                        this.gameArray[3] = 1,
                        a = 4;
                        break;
                    case "TwoEight":
                        this.gameArray[4] = 1,
                        a = 5;
                        break;
                    case "LineGame":
                        this.gameArray[5] = 1,
                        a = 6
                    }
                    var s = JSON.parse(cc.sys.localStorage.getItem("gameVersion"));
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("pb_Loading").active = !0,
                    this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("pb_Loading").getComponent("cc.ProgressBar").progress = 1,
                    null !== s && (cc.log("******************************aaa***************************************"), cc.log(this.playerInfo.localVersion), cc.log("******************************bbb***************************************"), this.playerInfo.localVersion[a] = this.serverVersion, cc.log(this.playerInfo.localVersion), cc.log("******************************ccc***************************************"), this.writeGameVersion_Function(this.playerInfo.localVersion,
                    function() {
                        cc.game.restart()
                    }))
                }
            },
            retry: function() { ! this._updating && this._canRetry && (this._canRetry = !1, this._am.downloadFailedAssets())
            },
            checkUpdate: function() {
                this._updating || this._am.getLocalManifest().isLoaded() && (this._checkListener = new jsb.EventListenerAssetsManager(this._am, this.checkCb.bind(this)), cc.eventManager.addListener(this._checkListener, 1), this._am.checkUpdate(), this._updating = !0, cc.log("checked end"))
            },
            hotUpdate: function() {
                this._updateListener = new jsb.EventListenerAssetsManager(this._am, this.updateCb.bind(this)),
                cc.eventManager.addListener(this._updateListener, 1),
                this._failCount = 0,
                this._am.update(),
                this.versionA === this.versionB ? this._updating = !1 : this._updating = !0,
                cc.log("-------------------------------iiiiiiiiii-------------------------------------")
            },
            onLoad: function() {
                this.gameArray = [0, 0, 0, 0, 0, 0],
                this.gameName = "",
                this.isChecking = !1,
                this.playerInfo = t("PlayerInfo").getInstant
            },
            checkGameUpdate_Function: function(t) {
                if (cc.log("--------------------------------" + t + "--------------------------------"), cc.log(this.playerInfo.localVersion), cc.sys.isNative) {
                    var e = 0;
                    switch (t) {
                    case "GrabBull":
                        e = 0;
                        break;
                    case "Fish":
                        e = 1;
                        break;
                    case "Bull":
                        e = 2;
                        break;
                    case "Bde":
                        e = 3;
                        break;
                    case "TwoEight":
                        e = 4;
                        break;
                    case "LineGame":
                        e = 5
                    }
                    if (this.gameName = t, this.gameArray[e])"LineGame" === this.gameName ? this.node.getComponent("LobbyMain").loginGameRoom_Function(this.node.getComponent("LobbyMain").com_GameMenu.getChildByName("LineGame").getComponent("LobbyButtonClick"), "LineGame") : (this.node.getComponent("LobbyMain").gameMenuButtonClick_Function("com_" + this.gameName), this.node.getComponent("LobbyMain").bg_Black.active = !1, this.node.getComponent("LobbyMain").com_UpdateMessageBox.active = !1, this.node.getComponent("LobbyMain").com_UpdateMessageBox.getChildByName("pb_Loading").getComponent("cc.ProgressBar").progress = 1);
                    else {
                        var n = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + t;
                        cc.log(n),
                        this._am = new jsb.AssetsManager(this.manifestUrl[e], n),
                        cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS || this._am.retain(),
                        cc.log(e);
                        var i = this;
                        this.serverVersion = 0,
                        this._am.setVersionCompareHandle(function(t, e) {
                            i.serverVersion = e,
                            cc.log("JS Custom Version Compare: version A is " + t + ", version B is " + e),
                            i.node.getComponent("LobbyMain").checkUpdateTimeOut = !0;
                            for (var n = t.split("."), o = e.split("."), a = 0; a < n.length; ++a) {
                                var s = parseInt(n[a]),
                                c = parseInt(o[a] || 0);
                                if (s !== c) return - 1
                            }
                            return o.length != n.length ? -1 : (i._updating = !1, 0)
                        }),
                        this.size = 0,
                        this._am.setVerifyCallback(function(t, e) {
                            e.compressed,
                            e.md5,
                            e.path;
                            return i.size = e.size,
                            !0
                        }),
                        cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(1),
                        this.checkUpdate()
                    }
                }
            },
            writeGameVersion_Function: function(t, e) {
                var n = null;
                n = {
                    gameVersion: t
                },
                cc.sys.localStorage.setItem("gameVersion", JSON.stringify(n)),
                cc.log("******************************eee***************************************"),
                e()
            },
            onDestroy: function() {
                this._updateListener && (cc.eventManager.removeListener(this._updateListener), this._updateListener = null),
                this._am && !cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS && this._am.release()
            }
        }),
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo"
    }],
    Game: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2f4d95juolBqaxFdCGsqJ7u", "Game");
        var i = t("Global"),
        o = t("Colors");
        cc.Class({
            "extends": cc.Component,
            properties: {
                tilePre: {
                    "default": null,
                    type: cc.Prefab
                },
                powerPre: {
                    "default": null,
                    type: cc.Prefab
                },
                bg: {
                    "default": null,
                    type: cc.Node
                },
                topBg: {
                    "default": null,
                    type: cc.Node
                },
                tiles: {
                    "default": null,
                    type: Array
                },
                powers: {
                    "default": null,
                    type: Array
                },
                scoreLabel: {
                    "default": null,
                    type: cc.Label
                },
                scoreNum: {
                    "default": null,
                    type: cc.Label
                },
                tileBg: {
                    "default": null,
                    type: cc.Node
                },
                powerBarBg: {
                    "default": null,
                    type: cc.Node
                },
                star1: cc.AudioClip,
                star2: cc.AudioClip,
                star3: cc.AudioClip,
                star4: cc.AudioClip,
                star5: cc.AudioClip,
                star6: cc.AudioClip,
                star7: cc.AudioClip,
                bgMusic: cc.AudioClip,
                maxNum: 0,
                isCal: !1
            },
            onDestroy: function() {
                cc.audioEngine.stopMusic(this.bgMusic)
            },
            onLoad: function() {
                cc.audioEngine.playMusic(this.bgMusic, !0),
                this.tiles = [[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]],
                this.powers = [null, null, null, null, null],
                this.bg.color = o.gameBg,
                this.powerBarBg.color = o.powerBarBg,
                this.tileBg.color = o.tileBg;
                for (var t = 0; t < 5; t++) {
                    var e = cc.instantiate(this.powerPre);
                    e.width = (this.powerBarBg.width - 30) / 5,
                    e.height = this.powerBarBg.height - 10,
                    this.powerBarBg.addChild(e),
                    e.setPosition(5 + (5 + e.width) * t + e.width / 2, 5 + e.height / 2),
                    e.color = o.power,
                    this.powers[t] = e
                }
                var n = new Array;
                this.maxNum = 8;
                for (var i = 0; i < this.maxNum - 3; i++) n[i] = this.maxNum - 3 - i;
                for (var a = 0,
                i = 0; i < n.length; i++) a += n[i];
                for (var s = 0; s < 5; s++) for (var c = 0; c < 5; c++) {
                    var r = cc.instantiate(this.tilePre);
                    r.getComponent("Tile").game = this,
                    r.width = (this.tileBg.width - 30) / 5,
                    r.height = (this.tileBg.height - 30) / 5;
                    for (var l = 0,
                    h = 0;;) {
                        l++;
                        var m = new Array,
                        u = new Array;
                        h = Math.random() * a;
                        for (var d = 0,
                        p = 0,
                        i = 0; i < n.length; i++) {
                            if (h >= p && h <= p + n[i]) {
                                d = i + 1;
                                break
                            }
                            p += n[i]
                        }
                        if (r.getComponent("Tile").setNum(d, !1, !1), r.setPosition(5 + (5 + r.width) * c + r.width / 2, 5 + (5 + r.height) * s + r.height / 2), this.tiles[s][c] = r, this.scanAround(s, c, -1, -1, d, m, u), m.length < 3) break
                    }
                    r.getComponent("Tile").setArrPosition(s, c),
                    this.tileBg.addChild(r)
                }
            },
            scanAround: function(t, e, n, i, o, a, s) {
                if (null != this.tiles[t][e]) {
                    var c = !1;
                    if (void 0 == s && (s = new Array), s.indexOf(t + "#" + e) == -1) {
                        if (s.push(t + "#" + e), t < 4 && (n != t + 1 || i != e) && null != this.tiles[t + 1][e]) {
                            var r = parseInt(this.tiles[t + 1][e].getComponent("Tile").numLabel.string);
                            r == o && (a.indexOf(t + "#" + e) == -1 && a.push(t + "#" + e), this.scanAround(t + 1, e, t, e, o, a, s), c = !0)
                        }
                        if (t > 0 && (n != t - 1 || i != e) && null != this.tiles[t - 1][e]) {
                            var r = parseInt(this.tiles[t - 1][e].getComponent("Tile").numLabel.string);
                            r == o && (a.indexOf(t + "#" + e) == -1 && a.push(t + "#" + e), this.scanAround(t - 1, e, t, e, o, a, s), c = !0)
                        }
                        if (e > 0 && (n != t || i != e - 1) && null != this.tiles[t][e - 1]) {
                            var r = parseInt(this.tiles[t][e - 1].getComponent("Tile").numLabel.string);
                            r == o && (a.indexOf(t + "#" + e) == -1 && a.push(t + "#" + e), this.scanAround(t, e - 1, t, e, o, a, s), c = !0)
                        }
                        if (e < 4 && (n != t || i != e + 1) && null != this.tiles[t][e + 1]) {
                            var r = parseInt(this.tiles[t][e + 1].getComponent("Tile").numLabel.string);
                            r == o && (a.indexOf(t + "#" + e) == -1 && a.push(t + "#" + e), this.scanAround(t, e + 1, t, e, o, a, s), c = !0)
                        }
                        if (!c && n != -1 && i != -1) {
                            var l = parseInt(this.tiles[t][e].getComponent("Tile").numLabel.string);
                            l == o && a.indexOf(t + "#" + e) == -1 && a.push(t + "#" + e)
                        }
                    }
                }
            },
            operateLogic: function(t, e, n, a) {
                var s = new Array,
                c = new Array;
                if (this.scanAround(t, e, -1, -1, n, s, c), s.length >= 3) {
                    var r = 0;
                    for (var l in s) {
                        var h = s[l].split("#")[0],
                        m = s[l].split("#")[1];
                        r += parseInt(10 * this.tiles[h][m].getComponent("Tile").numLabel.string),
                        h != t || m != e ? (this.tiles[h][m].getComponent("Tile").destoryTile(), this.tiles[h][m] = null) : (this.tiles[h][m].getComponent("Tile").setNum(n + 1, !1, !0), this.maxNum = n + 1 > this.maxNum ? n + 1 : this.maxNum)
                    }
                    if (this.scoreNum.string = parseInt(this.scoreNum.string) + r, this.scheduleOnce(function() {
                        this.moveAllTileDown()
                    },
                    .1), !a) for (var u = 0; u < 5; u++) if (null == this.powers[u]) {
                        var d = cc.instantiate(this.powerPre);
                        d.width = (this.powerBarBg.width - 30) / 5,
                        d.height = this.powerBarBg.height - 10,
                        this.powerBarBg.addChild(d),
                        d.setPosition(5 + (5 + d.width) * u + d.width / 2, 5 + d.height / 2),
                        d.color = o.power,
                        d.setScale(0),
                        d.runAction(cc.scaleTo(.1, 1)),
                        this.powers[u] = d;
                        break
                    }
                    switch (i.combo++, i.combo) {
                    case 1:
                        cc.audioEngine.playEffect(this.star1);
                        break;
                    case 2:
                        cc.audioEngine.playEffect(this.star2);
                        break;
                    case 3:
                        cc.audioEngine.playEffect(this.star3);
                        break;
                    case 4:
                        cc.audioEngine.playEffect(this.star4);
                        break;
                    case 5:
                        cc.audioEngine.playEffect(this.star5);
                        break;
                    case 6:
                        cc.audioEngine.playEffect(this.star6);
                        break;
                    case 7:
                        cc.audioEngine.playEffect(this.star7);
                        break;
                    default:
                        cc.audioEngine.playEffect(this.star7)
                    }
                    return ! 0
                }
                return this.isCal = !1,
                !1
            },
            moveAllTileDown: function() {
                for (var t = 0; t < 5; t++) for (var e = 0; e < 5; e++) if (null != this.tiles[e][t]) for (var n = e; n > 0; n--) null == this.tiles[n - 1][t] && (this.tiles[n - 1][t] = this.tiles[n][t], this.tiles[n][t] = null, this.tiles[n - 1][t].getComponent("Tile").moveTo(n - 1, t));
                this.scheduleOnce(function() {
                    for (var t = new Array,
                    e = 0; e < this.maxNum - 3; e++) t[e] = this.maxNum - 3 - e;
                    for (var n = 0,
                    e = 0; e < t.length; e++) n += t[e];
                    for (var i = 0; i < 5; i++) for (var o = 0; o < 5; o++) if (null == this.tiles[o][i]) {
                        var a = cc.instantiate(this.tilePre);
                        a.getComponent("Tile").game = this,
                        a.width = (this.tileBg.width - 30) / 5,
                        a.height = (this.tileBg.height - 30) / 5;
                        for (var s = Math.random() * n, c = 0, r = 0, e = 0; e < t.length; e++) {
                            if (s >= r && s <= r + t[e]) {
                                c = e + 1;
                                break
                            }
                            r += t[e]
                        }
                        a.getComponent("Tile").setNum(c, !1, !1),
                        a.getComponent("Tile").newTile(o, i),
                        this.tiles[o][i] = a,
                        this.tileBg.addChild(a)
                    }
                    this.scheduleOnce(function() {
                        for (var t = !1,
                        e = 0; e < 5; e++) for (var n = 0; n < 5; n++) t || (t = null != this.tiles[n][e] && this.operateLogic(n, e, parseInt(this.tiles[n][e].getComponent("Tile").numLabel.string), !1))
                    },
                    .5)
                },
                .3)
            }
        }),
        cc._RF.pop()
    },
    {
        Colors: "Colors",
        Global: "Global"
    }],
    Global: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b5f5fSaZFRMpoy2fwiz06+K", "Global"),
        e.exports = {
            score: 0,
            combo: 0
        },
        cc._RF.pop()
    },
    {}],
    GrabBullAniamation: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "69c1bEAIAZIobl9OfZcV9Vf", "GrabBullAniamation"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            sendCardAnimationCallBack_Function: function(t) {
                this.canvasNode.getComponent("GrabBullMain").cardArray[t].active = !0
            },
            sendCardFinishCallBack_Function: function() {
                this.canvasNode.getComponent("GrabBullMain").openSendCard_Function()
            },
            reissueCardAnimationCallBack_Function: function(t) {
                this.canvasNode.getComponent("GrabBullMain").cardArray[t].active = !0,
                this.canvasNode.getComponent("GrabBullMain").openReissueCard_Function()
            },
            setBankerAnimationCallBack_Funcion: function() {},
            playerWinScoreLabelCallBack_Function: function(t) {
                this.canvasNode.getComponent("GrabBullMain").com_PlayerMessage.getChildByName("com_Player" + t).getChildByName("lb_WinScore").active = !1,
                this.canvasNode.getComponent("GrabBullMain").com_PlayerMessage.getChildByName("com_Player" + t).getChildByName("lb_FailScore").active = !1
            }
        }),
        cc._RF.pop()
    },
    {}],
    GrabBullButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "62f61V/VK5PcbiSv+UlKJWD", "GrabBullButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            grapButtonClick_Function: function() {
                this.canvasNode.getComponent("GrabBullMain").grabBanker_Function(this)
            },
            betButtonClick_Function: function() {
                this.canvasNode.getComponent("GrabBullMain").betSelect_Function(this)
            },
            helpButtonClick_Functionf: function() {
                this.canvasNode.getComponent("GrabBullMain").bg_Black.active = !0,
                this.canvasNode.getComponent("GrabBullMain").com_Help.active = !0
            },
            helpMenuCloseClick_Function: function() {
                this.canvasNode.getComponent("GrabBullMain").bg_Black.active = !1,
                this.canvasNode.getComponent("GrabBullMain").com_Help.active = !1
            },
            exitButtonClick_Function: function() {
                this.canvasNode.getComponent("GrabBullMain").isGaming ? (this.canvasNode.getComponent("GrabBullMain").bg_Black.active = !0, this.canvasNode.getComponent("GrabBullMain").com_Exit.active = !0) : this.canvasNode.getComponent("GrabBullMain").exitGame_Function()
            },
            getBullButtonClick_Function: function() {
                this.canvasNode.getComponent("GrabBullMain").setBullPoint_Function()
            },
            noBullButtonClick_Function: function() {
                0 === this.canvasNode.getComponent("GrabBullMain").serverPoint && (this.canvasNode.getComponent("GrabBullMain").netWork.grabBullSocket.emit("show"), this.canvasNode.getComponent("GrabBullMain").com_GetBull.getChildByName("bt_GetBull").active = !1, this.canvasNode.getComponent("GrabBullMain").com_GetBull.getChildByName("bt_NotBull").active = !1)
            },
            messageBoxConfirmButtonClick_Function: function() {
                switch (this.canvasNode.getComponent("GrabBullMain").com_MessageBox.active = !1, cc.audioEngine.stopAll(), this.canvasNode.getComponent("GrabBullMain").playerInfo.lobbySelect) {
                case 0:
                    cc.director.loadScene("LobbyMain");
                    break;
                case 1:
                    cc.director.loadScene("Lobby_Fish")
                }
            },
            messageBoxReconnectButtonClick_Function: function() {
                switch (this.canvasNode.getComponent("GrabBullMain").com_MessageBox.active = !1, cc.audioEngine.stopAll(), this.canvasNode.getComponent("GrabBullMain").playerInfo.lobbySelect) {
                case 0:
                    cc.director.loadScene("LobbyMain");
                    break;
                case 1:
                    cc.director.loadScene("Lobby_Fish")
                }
            },
            exitMenuCancelButtonClick_Function: function() {
                this.canvasNode.getComponent("GrabBullMain").bg_Black.active = !1,
                this.canvasNode.getComponent("GrabBullMain").com_Exit.active = !1
            },
            exitMenuForceExitButtonClick_Function: function() {
                this.canvasNode.getComponent("GrabBullMain").exitGame_Function()
            }
        }),
        cc._RF.pop()
    },
    {}],
    GrabBullCard: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e9ef1lBci1BHoHJu3Gc8SbA", "GrabBullCard"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_CardSprite: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                canvasNode: null,
                type: 0,
                point: 0
            },
            onLoad: function() {},
            open_Function: function(t) {
                this.type = t,
                this.setFrame_Function(t),
                this.setPoint_Function(t)
            },
            setFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.sp_CardSprite[t]
            },
            setPoint_Function: function(t) {
                var e = t % 13;
                e > 10 || 0 === e ? this.point = 10 : this.point = e
            },
            clickCard_Function: function() {
                this.canvasNode.canSetBull && this.canvasNode.checkBull_Function(this.node.cardId)
            }
        }),
        cc._RF.pop()
    },
    {}],
    GrabBullCoin: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "00886zlD4RKupFjM4XMC1tf", "GrabBullCoin"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                type: 0,
                flyFinish: !1,
                timeCount: 0
            },
            onLoad: function() {},
            setFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.sp_CoinSprite[t]
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            setCoinToBanker_Function: function(t, e, n) {
                this.node.setPosition(t.x, t.y);
                var i = cc.moveTo(.05 + .01 * n, e.x + this.getRandom_Function( - 30, 30), e.y + this.getRandom_Function( - 30, 30)),
                o = cc.sequence(i, cc.callFunc(function() {
                    this.flyFinish = !0,
                    this.timeCount = 0
                },
                this));
                this.node.runAction(o)
            },
            setCoinToPlayer_Function: function(t, e, n) {
                this.node.setPosition(e.x, e.y);
                var i = cc.moveTo(.05 + .01 * n, t.x + this.getRandom_Function( - 30, 30), t.y + this.getRandom_Function( - 30, 30)),
                o = cc.sequence(i, cc.callFunc(function() {
                    this.flyFinish = !0,
                    this.timeCount = 0
                },
                this));
                this.node.runAction(o)
            },
            update: function(t) {
                this.node.active && this.flyFinish && (this.timeCount < .4 ? this.timeCount += t: (this.timeCount = 0, this.node.active = !1, this.flyFinish = !1))
            }
        }),
        cc._RF.pop()
    },
    {}],
    GrabBullMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "caf9fj/k01A1bpHbcD16cGL", "GrabBullMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                com_BG: {
                    "default": null,
                    type: cc.Node
                },
                com_View: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_Button: {
                    "default": null,
                    type: cc.Node
                },
                com_GameMenu: {
                    "default": null,
                    type: cc.Node
                },
                com_GetBull: {
                    "default": null,
                    type: cc.Node
                },
                com_Timer: {
                    "default": null,
                    type: cc.Node
                },
                com_SendCardAnimation: {
                    "default": null,
                    type: cc.Node
                },
                com_ReissueCardAniamtion: {
                    "default": null,
                    type: cc.Node
                },
                com_Help: {
                    "default": null,
                    type: cc.Node
                },
                com_Bill: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox: {
                    "default": null,
                    type: cc.Node
                },
                com_Exit: {
                    "default": null,
                    type: cc.Node
                },
                com_Tips: {
                    "default": null,
                    type: cc.Node
                },
                pb_Card: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Point: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Coin: {
                    "default": null,
                    type: cc.Prefab
                },
                bg_Black: {
                    "default": null,
                    type: cc.Node
                },
                sp_BankerFrame: {
                    "default": null,
                    type: cc.Node
                },
                sp_GrabBull: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                sp_Bet: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                an_GetBull: {
                    "default": null,
                    type: cc.Node
                },
                an_DragonBoneAnimation: {
                    "default": null,
                    type: cc.Node
                },
                an_SetBankerAnimation: {
                    "default": null,
                    type: cc.Node
                },
                au_GrabBullBGM: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_ButtonSound: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_SendCard: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_GameStart: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Point: {
                    "default": [],
                    url: cc.AudioClip
                },
                au_Win: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Lose: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Coin: {
                    "default": null,
                    url: cc.AudioClip
                }
            },
            onLoad: function() {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE),
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.renderer.enableDirtyRegion(!1);
                var e = this;
                cc.view.setResizeCallback(function() {
                    var t = cc.view.getVisibleSize(),
                    n = window.orientation;
                    e.uiResize_Function(t, n)
                }),
                this.playerInfo = t("PlayerInfo").getInstant,
                this.playerInfo.setGameObj_Function(this),
                this.netWork = t("GrabBullNetWork").getInstant,
                this.netWork.setGrabBullObj_Function(this);
                var n = window.orientation;
                this.uiInit_Function(n),
                this.gameInit_Function()
            },
            uiInit_Function: function(t) {
                var e = cc.view.getVisibleSize(),
                n = e.width / 1334;
                e.width > 1334 ? (this.com_BG.getChildByName("bg").scaleX = n, this.com_BG.getChildByName("bg").scaleY = n, this.bg_Black.scaleX = n, this.bg_Black.scaleY = n, this.com_PlayerMessage.getChildByName("com_Player0").x = -e.width / 2 + 100, this.com_Button.getChildByName("bt_Exit").x = e.width / 2 - 80) : e.width < 1334 && (this.node.scaleX = n, this.node.scaleY = n, this.com_BG.getChildByName("bg").scaleX = 1 / n, this.com_BG.getChildByName("bg").scaleY = 1 / n, this.bg_Black.scaleX = 1 / n, this.bg_Black.scaleY = 1 / n, this.com_Button.getChildByName("bt_Exit").x = e.width / n / 2 - 80),
                this.com_PlayerMessage.getChildByName("com_Player1").x = -this.com_PlayerMessage.getChildByName("com_Player0").x,
                this.com_PlayerMessage.getChildByName("com_Player4").x = this.com_PlayerMessage.getChildByName("com_Player0").x,
                this.com_Button.getChildByName("bt_Help").x = -this.com_Button.getChildByName("bt_Exit").x
            },
            uiResize_Function: function(t, e) {
                var n = t.width / 1334;
                if (t.width > 1334) this.node.scaleX = 1,
                this.node.scaleY = 1,
                this.com_BG.getChildByName("bg").scaleX = n,
                this.com_BG.getChildByName("bg").scaleY = n,
                this.bg_Black.scaleX = n,
                this.bg_Black.scaleY = n,
                this.com_PlayerMessage.getChildByName("com_Player0").x = -t.width / 2 + 100,
                this.com_Button.getChildByName("bt_Exit").x = t.width / 2 - 80;
                else if (t.width < 1334) {
                    this.node.scaleX = n,
                    this.node.scaleY = n;
                    var i = t.width / n;
                    t.height / n;
                    this.com_BG.getChildByName("bg").scaleX = 1 / n,
                    this.com_BG.getChildByName("bg").scaleY = 1 / n,
                    this.bg_Black.scaleX = 1 / n,
                    this.bg_Black.scaleY = 1 / n,
                    this.com_PlayerMessage.getChildByName("com_Player0").x = -i / 2 + 100,
                    this.com_Button.getChildByName("bt_Exit").x = i / 2 - 80
                }
                this.com_PlayerMessage.getChildByName("com_Player1").x = -this.com_PlayerMessage.getChildByName("com_Player0").x,
                this.com_PlayerMessage.getChildByName("com_Player4").x = this.com_PlayerMessage.getChildByName("com_Player0").x,
                this.com_Button.getChildByName("bt_Help").x = -this.com_Button.getChildByName("bt_Exit").x
            },
            gameInit_Function: function() {
                this.bg_Black.on("touchstart",
                function(t) {
                    return ! 1
                },
                this),
                this.netWork.setGrabBullSocketOn_Function(),
                this.cardArray = new Array(25),
                this.cardPosition = [[ - 350, -260], [280, 10], [140, 180], [ - 260, 180], [ - 400, 10]],
                this.openCardPosition = [ - 60, -120];
                for (var t = null,
                e = 0; e < this.cardArray.length; ++e) t = cc.instantiate(this.pb_Card),
                this.cardArray[e] = t,
                this.com_View.addChild(this.cardArray[e]),
                e < 5 ? (this.cardArray[e].scaleX = 1.5, this.cardArray[e].scaleY = 1.5, this.cardArray[e].setPosition(this.cardPosition[parseInt(e / 5)][0] + 175 * parseInt(e % 5), this.cardPosition[parseInt(e / 5)][1]), this.cardArray[e].getComponent("GrabBullCard").canvasNode = this, this.cardArray[e].getComponent("cc.Button").interactable = !0, this.cardArray[e].cardId = e) : this.cardArray[e].setPosition(this.cardPosition[parseInt(e / 5)][0] + 30 * parseInt(e % 5), this.cardPosition[parseInt(e / 5)][1]),
                this.cardArray[e].active = !1;
                for (this.resultCardArray = new Array(5), this.pointArray = new Array(5), this.pointPosition = [[0, -150], [340, -25], [200, 145], [ - 210, 145], [ - 340, -25]], t = null, e = 0; e < this.pointArray.length; ++e) t = cc.instantiate(this.pb_Point),
                this.pointArray[e] = t,
                this.com_View.addChild(this.pointArray[e]),
                this.pointArray[e].setPosition(this.pointPosition[e][0], this.pointPosition[e][1]),
                this.pointArray[e].active = !1;
                for (this.serverPoint = -1, this.coinArray = new Array(250), t = null, e = 0; e < this.coinArray.length; ++e) t = cc.instantiate(this.pb_Coin),
                this.coinArray[e] = t,
                this.com_View.addChild(this.coinArray[e]),
                this.coinArray[e].active = !1;
                this.coinFly = !1,
                this.bankerSeatId = -1,
                this.randomBankerTimer = 0,
                this.randomBanker = !1,
                this.randomBankerArray = [],
                this.randomBankerPosition = 0,
                this.sp_BankerFrame.active = !1,
                this.grabBullSelectArray = [],
                this.randomBankerCount = 0,
                this.timeRun = !1,
                this.currentTime = 0,
                this.totalTime = 0,
                this.timeCount = 0,
                this.com_Timer.active = !1,
                this.cardClick = new Array(5),
                this.playerList = null,
                this.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_PlayerName").getComponent("cc.Label").string = this.playerInfo.playerName,
                this.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (this.playerInfo.playerCoin / this.playerInfo.exchangeRate).toFixed(2),
                this.canSendCard = [0, 0, 0, 0, 0],
                this.gameState = 0,
                this.GS_GAMESTART = 1,
                this.GS_SENDCARDS = 2,
                this.GS_GRABBANKER = 3,
                this.GS_SELECTBET = 4,
                this.GS_SETBULL = 5,
                this.GS_OPENCARD = 6,
                this.GS_BILLING = 7,
                this.an_DBSAnimation = this.an_DragonBoneAnimation.getComponent("dragonBones.ArmatureDisplay"),
                this.dbArmature = this.an_DBSAnimation.armature(),
                this.canSetBull = !1,
                this.db_GetBullAnimation = this.an_GetBull.getChildByName("db_GetBull").getComponent("dragonBones.ArmatureDisplay"),
                this.db_GetBullArmature = this.db_GetBullAnimation.armature(),
                this.db_GetBullAnimation.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.frame_event_Function, this),
                this.winResult = [],
                this.timeOut = [],
                this.buttonInit_Function(),
                this.playerInfo.musicControl && cc.audioEngine.play(this.au_GrabBullBGM, !0, .5),
                this.isGaming = !1,
                this.gameExit = !1,
                this.netWork.grabBullSocket.emit("getDownTime", {}),
                this.netWork.grabBullSocket.emit("getTableList")
            },
            playerMessageInit_Function: function(t) {
                this.playerList = t;
                for (var e = -1,
                n = 0; n < t.length; ++n) e = this.changeSeatId_Function(this.playerList[n].seatId),
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_PlayerHead").active = !0,
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("lb_PlayerName").getComponent("cc.Label").string = this.playerList[n].nickname,
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (this.playerList[n].score / this.playerInfo.exchangeRate).toFixed(2)
            },
            startPlay_Function: function(t) {},
            loop_com_Function: function(t) {},
            frame_event_Function: function(t) {
                switch (t.detail.name) {
                case "start":
                    break;
                case "win":
                    break;
                case "lose":
                    break;
                case "over":
                    this.com_GetBull.active = !1
                }
            },
            buttonInit_Function: function() {
                for (var t = 0; t < this.com_Button.getChildByName("com_GrabButton").children.length; ++t) this.com_Button.getChildByName("com_GrabButton").children[t].grab = t;
                var e = [5, 10, 20, 30];
                for (t = 0; t < this.com_Button.getChildByName("com_BetButton").children.length; ++t) this.com_Button.getChildByName("com_BetButton").children[t].bet = e[t],
                this.com_Button.getChildByName("com_BetButton").children[t].betId = t
            },
            firstTimeEntryInit_Function: function(t) {
                if (t.data.tableState[t.data.tableState.length - 1].play) switch (t.data.remainTime > 0 && (this.currentTime = t.data.remainTime, this.totalTime = t.data.remainTime, this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime, this.com_Timer.active = !0, this.timeRun = !0), t.data.state) {
                case 0:
                    this.gameState = this.GS_GAMESTART;
                    for (var e = 0; e < t.data.tableState.length - 1; ++e) t.data.tableState[e].userId && (this.canSendCard[e] = 1, t.data.tableState[e].userId === this.playerInfo.playerId && (this.com_Tips.getChildByName("sp_Tips01").active = !1, this.isGaming = !0));
                    break;
                case 1:
                    this.gameState = this.GS_GRABBANKER;
                    for (var e = 0; e < t.data.tableState.length - 1; ++e) if (t.data.tableState[e].userId) {
                        if (t.data.tableState[e].userId === this.playerInfo.playerId) {
                            for (var n = 0; n < 4; ++n) this.cardArray[n].active = !0,
                            this.cardArray[n].getComponent("GrabBullCard").open_Function(t.data.tableState[t.data.tableState.length - 1].cardList[this.netWork.seatId][n]);
                            this.com_Button.getChildByName("com_GrabButton").active = !0,
                            this.com_Tips.getChildByName("sp_Tips01").active = !1,
                            this.isGaming = !0
                        } else for (var i = this.changeSeatId_Function(e), n = 0; n < 4; ++n) this.cardArray[n + 5 * i].active = !0;
                        this.canSendCard[e] = 1
                    }
                    break;
                case 2:
                    this.gameState = this.GS_SELECTBET;
                    for (var e = 0; e < t.data.tableState.length - 1; ++e) if (t.data.tableState[e].userId) {
                        if (t.data.tableState[e].userId === this.playerInfo.playerId) {
                            for (var n = 0; n < 4; ++n) this.cardArray[n].active = !0,
                            this.cardArray[n].getComponent("GrabBullCard").open_Function(t.data.tableState[t.data.tableState.length - 1].cardList[this.netWork.seatId][n]);
                            t.data.tableState[t.data.tableState.length - 1].seatId !== this.netWork.seatId && (this.com_Button.getChildByName("com_BetButton").active = !0),
                            this.com_Tips.getChildByName("sp_Tips01").active = !1,
                            this.isGaming = !0
                        } else for (var i = this.changeSeatId_Function(e), n = 0; n < 4; ++n) this.cardArray[n + 5 * i].active = !0;
                        this.canSendCard[e] = 1
                    }
                    this.bankerSeatId = t.data.tableState[t.data.tableState.length - 1].seatId;
                    var i = this.changeSeatId_Function(t.data.tableState[t.data.tableState.length - 1].seatId);
                    switch (this.sp_BankerFrame.active = !0, this.sp_BankerFrame.setPosition(this.com_PlayerMessage.getChildByName("com_Player" + i).position), this.an_SetBankerAnimation.active = !0, i) {
                    case 0:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55);
                        break;
                    case 1:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 2:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 3:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 4:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55)
                    }
                    break;
                case 3:
                    this.gameState = this.GS_SETBULL;
                    for (var e = 0; e < t.data.tableState.length - 1; ++e) {
                        if (t.data.tableState[e].userId) if (t.data.tableState[e].userId === this.playerInfo.playerId) {
                            for (var n = 0; n < 5; ++n) this.cardArray[n].active = !0,
                            this.cardArray[n].getComponent("GrabBullCard").open_Function(t.data.tableState[t.data.tableState.length - 1].cardList[this.netWork.seatId][n]);
                            t.data.tableState[e].reCallValueId === -1 && (this.com_PlayerMessage.getChildByName("com_Player0").getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_Bet[t.data.tableState[e].callValueId]),
                            this.com_Tips.getChildByName("sp_Tips01").active = !1,
                            this.com_GetBull.active = !0,
                            this.com_GetBull.getChildByName("bt_GetBull").active = !0,
                            this.com_GetBull.getChildByName("bt_NotBull").active = !0,
                            this.canSetBull = !0,
                            this.db_GetBullAnimation.playAnimation("start", 1),
                            this.serverPoint = t.data.my_point,
                            this.isGaming = !0
                        } else {
                            for (var i = this.changeSeatId_Function(e), n = 0; n < 5; ++n) this.cardArray[n + 5 * i].active = !0;
                            if (t.data.tableState[t.data.tableState.length - 1].showList[e] !== -1) {
                                for (var n = 0; n < 5; ++n) this.cardArray[n + 5 * i].getComponent("GrabBullCard").open_Function(t.data.tableState[t.data.tableState.length - 1].cardList[e][n]);
                                this.pointArray[i].active = !0,
                                this.pointArray[i].getComponent("GrabBullPoint").setType_Function(t.data.tableState[t.data.tableState.length - 1].showList[e])
                            }
                            this.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_Bet[t.data.tableState[e].callValueId]
                        }
                        this.canSendCard[e] = 1
                    }
                    this.bankerSeatId = t.data.tableState[t.data.tableState.length - 1].seatId;
                    var i = this.changeSeatId_Function(t.data.tableState[t.data.tableState.length - 1].seatId);
                    switch (this.sp_BankerFrame.active = !0, this.sp_BankerFrame.setPosition(this.com_PlayerMessage.getChildByName("com_Player" + i).position), this.an_SetBankerAnimation.active = !0, i) {
                    case 0:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55);
                        break;
                    case 1:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 2:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 3:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y - 45);
                        break;
                    case 4:
                        this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55)
                    }
                    this.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_GrabBull[t.data.tableState[t.data.tableState.length - 1].bet];
                    break;
                case 4:
                }
            },
            gameStart_Function: function(t) {
                this.gameReset_Function(),
                this.timeRun = !0,
                this.currentTime = t.remainTime,
                this.totalTime = t.remainTime,
                this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime,
                this.com_Timer.active = !0,
                this.canSendCard = [0, 0, 0, 0, 0],
                this.canSendCard = t.tableState,
                this.isGaming = !0,
                this.gameState = this.GS_GAMESTART
            },
            sendCard_Function: function(t) {
                for (var e = 0; e < this.cardArray.length; ++e) this.cardArray[e].active = !1;
                var n = 0;
                for (e = 0; e < this.canSendCard.length; ++e) this.canSendCard[e] && (n = this.changeSeatId_Function(e), this.com_SendCardAnimation.getChildByName("an_SendCardAnimation" + n).active = !0, this.com_SendCardAnimation.getChildByName("an_SendCardAnimation" + n).getComponent("cc.Animation").play());
                for (this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_SendCard, !1, 1), e = 0; e < t.card.length; ++e) this.resultCardArray[e] = t.card[e];
                this.timeRun = !0,
                this.currentTime = t.remainTime,
                this.totalTime = t.remainTime,
                this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime,
                this.com_Timer.active = !0,
                this.gameState = this.GS_GRABBANKER
            },
            openSendCard_Function: function() {
                for (var t = 0; t < 4; ++t) this.cardArray[t].getComponent("GrabBullCard").open_Function(this.resultCardArray[t]);
                this.com_Button.getChildByName("com_GrabButton").active = !0
            },
            reissueCard_Function: function(t) {
                t.cowPoint != -1 && (this.serverPoint = t.cowPoint, this.com_Button.getChildByName("com_BetButton").active = !1, this.com_GetBull.active = !0, this.com_GetBull.getChildByName("bt_GetBull").active = !0, this.com_GetBull.getChildByName("bt_NotBull").active = !0, this.db_GetBullAnimation.playAnimation("start", 1), this.canSetBull = !0, this.resultCardArray[4] = t.card[0]);
                for (var e = 0,
                n = 0; n < this.canSendCard.length; ++n) this.canSendCard[n] && (e = this.changeSeatId_Function(n), this.com_ReissueCardAniamtion.getChildByName("an_ReissueCardAniamtion" + e).active = !0, this.com_ReissueCardAniamtion.getChildByName("an_ReissueCardAniamtion" + e).getComponent("cc.Animation").play());
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_SendCard, !1, 1),
                this.timeRun = !0,
                this.currentTime = t.remainTime,
                this.totalTime = t.remainTime,
                this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime,
                this.com_Timer.active = !0,
                this.gameState = this.GS_SETBULL
            },
            openReissueCard_Function: function() {
                this.cardArray[4].getComponent("GrabBullCard").open_Function(this.resultCardArray[4])
            },
            grabBanker_Function: function(t) {
                this.netWork.grabBullSocket.emit("call", JSON.stringify({
                    callValueId: t.node.grab
                })),
                this.com_Button.getChildByName("com_GrabButton").active = !1,
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_ButtonSound, !1, 1)
            },
            setXbetBankerLabel_Function: function(t) {
                for (var e = 0; e < this.playerList.length; ++e) {
                    var n = this.changeSeatId_Function(t.seatId);
                    this.com_PlayerMessage.getChildByName("com_Player" + n).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_GrabBull[t.callValueId]
                }
                this.grabBullSelectArray[t.seatId] = t.callValueId
            },
            checkBanker_Function: function(t) {
                this.timeRun = !0,
                this.currentTime = t.remainTime,
                this.totalTime = t.remainTime,
                this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime,
                this.com_Timer.active = !0,
                this.bankerSeatId = t.bankerSeatId;
                for (var e = -1,
                n = 0,
                i = 0,
                o = -1,
                a = 0; a < this.grabBullSelectArray.length; ++a) this.grabBullSelectArray[a] >= e && (e = this.grabBullSelectArray[a], ++n);
                if (this.com_Button.getChildByName("com_GrabButton").active = !1, n > 1) {
                    for (var a = 0; a < this.grabBullSelectArray.length; ++a) this.grabBullSelectArray[a] === e && (o = this.changeSeatId_Function(a), this.randomBankerArray[i] = o, ++i);
                    this.randomBanker = !0
                } else this.setBanker_Function()
            },
            betSelect_Function: function(t) {
                this.com_Button.getChildByName("com_BetButton").active = !1,
                this.netWork.grabBullSocket.emit("reCall", JSON.stringify({
                    reCallValueId: t.node.betId
                })),
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_ButtonSound, !1, 1)
            },
            setXBetPlayerLabel_Function: function(t) {
                for (var e = 0; e < this.playerList.length; ++e) {
                    var n = this.changeSeatId_Function(t.seatId);
                    this.com_PlayerMessage.getChildByName("com_Player" + n).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_Bet[t.reCallValueId]
                }
            },
            randomBanker_Function: function(t) {
                this.sp_BankerFrame.active = !0,
                this.randomBankerPosition >= t.length && (this.randomBankerPosition = 0),
                this.sp_BankerFrame.setPosition(this.com_PlayerMessage.children[this.randomBankerArray[this.randomBankerPosition]].position),
                ++this.randomBankerPosition
            },
            setBanker_Function: function() {
                this.sp_BankerFrame.active = !0;
                var t = this.changeSeatId_Function(this.bankerSeatId);
                switch (this.sp_BankerFrame.setPosition(this.com_PlayerMessage.children[t].position), t) {
                case 0:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55);
                    break;
                case 1:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                    break;
                case 2:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x - 90, this.sp_BankerFrame.y - 45);
                    break;
                case 3:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y - 45);
                    break;
                case 4:
                    this.an_SetBankerAnimation.setPosition(this.sp_BankerFrame.position.x + 90, this.sp_BankerFrame.y + 55)
                }
                this.an_SetBankerAnimation.active = !0,
                this.an_SetBankerAnimation.getComponent("cc.Animation").play();
                for (var e = 0; e < this.com_PlayerMessage.children.length; ++e) e !== t ? this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[0] && this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[1] && this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[2] && this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[3] && this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame !== this.sp_GrabBull[4] || (this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = null) : this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame === this.sp_GrabBull[0] && (this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = this.sp_GrabBull[1]);
                this.canSendCard[this.netWork.seatId] && this.netWork.seatId !== this.bankerSeatId && (this.com_Button.getChildByName("com_BetButton").active = !0)
            },
            checkBull_Function: function(t) {
                for (var e = 0,
                n = 0; n < this.cardClick.length; ++n) this.cardClick[n] && ++e;
                e < 3 ? this.cardClick[t] ? (this.cardClick[t] = !1, this.cardArray[t].y = this.cardArray[t].y - 20, this.setGetBullLabel_Function(t, !1)) : (this.cardClick[t] = !0, this.cardArray[t].y = this.cardArray[t].y + 20, this.setGetBullLabel_Function(t, !0)) : this.cardClick[t] && (this.cardClick[t] = !1, this.cardArray[t].y = this.cardArray[t].y - 20, this.setGetBullLabel_Function(t, !1))
            },
            setGetBullLabel_Function: function(t, e) {
                if (e) {
                    for (var n = 0; n < 3; ++n) if ("" === this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string) {
                        this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string = this.cardArray[t].getComponent("GrabBullCard").point;
                        break
                    }
                } else {
                    for (var n = 0; n < 3; ++n) if ("" !== this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string && parseInt(this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string) === this.cardArray[t].getComponent("GrabBullCard").point) {
                        this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string = "";
                        break
                    }
                    for (var n = 0; n < 2; ++n)"" === this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string && "" !== this.com_GetBull.getChildByName("lb_GetBull" + (n + 1)).getComponent("cc.Label").string && (this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string = this.com_GetBull.getChildByName("lb_GetBull" + (n + 1)).getComponent("cc.Label").string, this.com_GetBull.getChildByName("lb_GetBull" + (n + 1)).getComponent("cc.Label").string = "")
                }
                var i = 0;
                for (n = 0; n < 3; ++n)"" !== this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string && (i += parseInt(this.com_GetBull.getChildByName("lb_GetBull" + n).getComponent("cc.Label").string)),
                0 === i ? this.com_GetBull.getChildByName("lb_GetBull3").getComponent("cc.Label").string = "": this.com_GetBull.getChildByName("lb_GetBull3").getComponent("cc.Label").string = i
            },
            setBullPoint_Function: function() {
                for (var t = 0,
                e = 0; e < 4; ++e)"" !== this.com_GetBull.getChildByName("lb_GetBull" + e).getComponent("cc.Label").string && ++t;
                4 === t && parseInt(this.com_GetBull.getChildByName("lb_GetBull3").getComponent("cc.Label").string) % 10 === 0 && (this.com_GetBull.active = !1, this.com_GetBull.getChildByName("bt_GetBull").active = !1, this.com_GetBull.getChildByName("bt_NotBull").active = !1, this.netWork.grabBullSocket.emit("show"))
            },
            showBullPoint_Function: function(t, e, n) {
                var i = this;
                if (e === this.netWork.seatId) this.db_GetBullAnimation.playAnimation("over", 1),
                this.canSetBull = !1,
                this.scheduleOnce(function() {
                    for (var e = 0; e < 5; ++e) this.cardArray[e].scaleX = 1,
                    this.cardArray[e].scaleY = 1,
                    this.cardArray[e].setPosition(this.cardPosition[0][0] + 120 * e, this.cardPosition[0][1]),
                    this.cardArray[e].runAction(cc.moveTo(.2, i.openCardPosition[0] + 30 * e, i.openCardPosition[1]));
                    this.pointArray[0].active = !0,
                    this.pointArray[0].getComponent("GrabBullPoint").setType_Function(t),
                    this.playerInfo.soundEffectControl && cc.audioEngine.play(i.au_Point[t], !1, 1)
                },
                1, 0);
                else {
                    for (var o = this.changeSeatId_Function(e), a = 0; a < 5; ++a) this.cardArray[a + 5 * o].getComponent("GrabBullCard").open_Function(n[a]);
                    this.pointArray[o].active = !0,
                    this.pointArray[o].getComponent("GrabBullPoint").setType_Function(t),
                    this.scheduleOnce(function() {
                        this.playerInfo.soundEffectControl && cc.audioEngine.play(i.au_Point[t], !1, 1)
                    },
                    .3)
                }
            },
            billing_Function: function(t) {
                this.isGaming = !1;
                var e = this;
                this.scheduleOnce(function() {
                    for (var n = 0; n < t.openMsg.length; ++n) if (e.netWork.seatId === t.openMsg[n].seatId) {
                        t.openMsg[n].win > 0 ? (e.an_DBSAnimation.playAnimation("win", 1), this.playerInfo.soundEffectControl && cc.audioEngine.play(e.au_Win, !1, 1)) : (e.an_DBSAnimation.playAnimation("lose", 1), this.playerInfo.soundEffectControl && cc.audioEngine.play(e.au_Lose, !1, 1));
                        break
                    }
                },
                2),
                this.scheduleOnce(function() {
                    for (var n = 0; n < e.cardArray.length; ++n) e.cardArray[n].active = !1,
                    e.cardArray[n].getComponent("GrabBullCard").open_Function(0),
                    e.cardArray[n].getComponent("GrabBullCard").point = 0;
                    for (n = 0; n < e.pointArray.length; ++n) e.pointArray[n].active = !1;
                    for (n = 0; n < e.com_PlayerMessage.children.length; ++n) e.com_PlayerMessage.getChildByName("com_Player" + n).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = null;
                    e.coinFly_Function(t),
                    this.playerInfo.soundEffectControl && cc.audioEngine.play(e.au_Coin, !1, 1)
                },
                4),
                this.scheduleOnce(function() {
                    for (var n = 0; n < t.openMsg.length; ++n) if (e.netWork.seatId === t.openMsg[n].seatId) t.openMsg[n].win > 0 ? (e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_WinScore").getChildByName("lb_Score").getComponent("cc.Label").string = "+" + t.openMsg[n].win / e.playerInfo.exchangeRate, e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_WinScore").active = !0, e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_WinScore").getComponent("cc.Animation").play()) : (e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_FailScore").getChildByName("lb_Score").getComponent("cc.Label").string = t.openMsg[n].win / e.playerInfo.exchangeRate, e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_FailScore").active = !0, e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_FailScore").getComponent("cc.Animation").play()),
                    e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(e.com_PlayerMessage.getChildByName("com_Player0").getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) + parseFloat(t.openMsg[n].win / e.playerInfo.exchangeRate)).toFixed(2);
                    else {
                        var i = e.changeSeatId_Function(t.openMsg[n].seatId);
                        t.openMsg[n].win > 0 ? (e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_WinScore").getChildByName("lb_Score").getComponent("cc.Label").string = "+" + t.openMsg[n].win / e.playerInfo.exchangeRate, e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_WinScore").active = !0, e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_WinScore").getComponent("cc.Animation").play()) : (e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_FailScore").getChildByName("lb_Score").getComponent("cc.Label").string = t.openMsg[n].win / e.playerInfo.exchangeRate, e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_FailScore").active = !0, e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_FailScore").getComponent("cc.Animation").play()),
                        e.com_PlayerMessage.children[i].getChildByName("lb_PlayerName").getComponent("cc.Label").string && (e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(e.com_PlayerMessage.getChildByName("com_Player" + i).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) + parseFloat(t.openMsg[n].win / e.playerInfo.exchangeRate)).toFixed(2))
                    }
                },
                7)
            },
            coinFly_Function: function(t) {
                for (var e = 0; e < t.openMsg.length; ++e) if (t.openMsg[e].seatId !== this.bankerSeatId) {
                    var n = this.changeSeatId_Function(t.openMsg[e].seatId),
                    i = this.changeSeatId_Function(this.bankerSeatId);
                    t.openMsg[e].win < 0 ? this.coinToBankerAnimation_Function(n, i) : this.coinToPlayerAnimation_Function(n, i)
                }
            },
            coinToBankerAnimation_Function: function(t, e) {
                for (var n = 0; n < this.coinArray.length / 5; ++n) for (var i = 0; i < this.coinArray.length; ++i) if (!this.coinArray[i].active) {
                    this.coinArray[i].active = !0,
                    this.coinArray[i].getComponent("GrabBullCoin").setCoinToBanker_Function(this.com_PlayerMessage.getChildByName("com_Player" + t).position, this.com_PlayerMessage.getChildByName("com_Player" + e).position, n);
                    break
                }
            },
            coinToPlayerAnimation_Function: function(t, e) {
                var n = this;
                this.scheduleOnce(function() {
                    for (var i = 0; i < n.coinArray.length / 5; ++i) for (var o = 0; o < n.coinArray.length; ++o) if (!n.coinArray[o].active) {
                        n.coinArray[o].active = !0,
                        n.coinArray[o].getComponent("GrabBullCoin").setCoinToPlayer_Function(n.com_PlayerMessage.getChildByName("com_Player" + t).position, n.com_PlayerMessage.getChildByName("com_Player" + e).position, i);
                        break
                    }
                },
                1)
            },
            gameReset_Function: function() {
                for (var t = 0; t < this.cardArray.length; ++t) this.cardArray[t].active = !1,
                this.cardArray[t].getComponent("GrabBullCard").open_Function(0),
                this.cardArray[t].getComponent("GrabBullCard").point = 0;
                for (t = 0; t < 5; ++t) this.cardArray[t].scaleX = 1.5,
                this.cardArray[t].scaleY = 1.5,
                this.cardArray[t].setPosition(this.cardPosition[0][0] + 175 * t, this.cardPosition[0][1]),
                this.cardArray[t].getComponent("cc.Button").interactable = !0;
                for (t = 0; t < 4; ++t) this.com_GetBull.getChildByName("lb_GetBull" + t).getComponent("cc.Label").string = "";
                for (t = 0; t < this.com_PlayerMessage.children.length; ++t) this.com_PlayerMessage.getChildByName("com_Player" + t).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = null;
                for (t = 0; t < this.pointArray.length; ++t) this.pointArray[t].active = !1;
                for (t = 0; t < this.cardClick.length; ++t) this.cardClick[t] = !1;
                this.randomBankerArray = [],
                this.grabBullSelectArray = [],
                this.com_Button.getChildByName("com_GrabButton").active = !1,
                this.com_Button.getChildByName("com_BetButton").active = !1,
                this.com_GetBull.active = !1,
                this.com_GetBull.getChildByName("bt_GetBull").active = !0,
                this.com_GetBull.getChildByName("bt_NotBull").active = !0,
                this.com_Timer.active = !1,
                this.com_Bill.active = !1,
                this.bankerSeatId = -1,
                this.gameState = 0,
                this.canSetBull = !1,
                this.sp_BankerFrame.active = !1,
                this.an_SetBankerAnimation.active = !1,
                this.serverPoint = -1,
                this.coinFly = !1,
                this.winResult = [],
                this.com_Tips.getChildByName("sp_Tips01").active = !1
            },
            timeCount_Function: function(t) {
                if (this.currentTime > 0) if (this.timeCount >= 1) switch (this.timeCount = 0, --this.currentTime, this.com_Timer.getChildByName("lb_Time").getComponent("cc.Label").string = this.currentTime, this.gameState) {
                case this.GS_GAMESTART:
                    2 === this.currentTime && (this.an_DBSAnimation.playAnimation("start", 1), this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_GameStart, !1, 1));
                    break;
                case this.GS_SENDCARDS:
                    break;
                case this.GS_GRABBANKER:
                    break;
                case this.GS_SELECTBET:
                    break;
                case this.GS_SETBULL:
                    break;
                case this.GS_OPENCARD:
                    break;
                case this.GS_BILLING:
                } else this.timeCount += t;
                else switch (this.timeRun = !1, this.gameState) {
                case this.GS_GAMESTART:
                    this.com_Timer.active = !1;
                    break;
                case this.GS_SENDCARDS:
                    break;
                case this.GS_GRABBANKER:
                    this.com_Button.getChildByName("com_GrabButton").active = !1;
                    break;
                case this.GS_SELECTBET:
                    break;
                case this.GS_SETBULL:
                    break;
                case this.GS_OPENCARD:
                    break;
                case this.GS_BILLING:
                }
                this.com_Timer.getChildByName("sp_Time").getComponent("cc.Sprite").fillRange = (this.currentTime - this.timeCount) / this.totalTime
            },
            playerEnterRoom_Function: function(t) {
                this.playerList.push(t);
                var e = this.changeSeatId_Function(t.seatId);
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("sp_PlayerHead").active = !0,
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("lb_PlayerName").getComponent("cc.Label").string = t.nickname,
                this.com_PlayerMessage.getChildByName("com_Player" + e).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (t.score / this.playerInfo.exchangeRate).toFixed(2)
            },
            playerLeaveRoom_Function: function(t, e) {
                for (var n = 0,
                i = 0; i < this.playerList.length; ++i) if (this.playerList[i].userId === e) {
                    n = i;
                    break
                }
                var o = this.changeSeatId_Function(t);
                this.com_PlayerMessage.getChildByName("com_Player" + o).getChildByName("sp_PlayerHead").active = !1,
                this.com_PlayerMessage.getChildByName("com_Player" + o).getChildByName("lb_PlayerName").getComponent("cc.Label").string = "",
                this.com_PlayerMessage.getChildByName("com_Player" + o).getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = "",
                this.com_PlayerMessage.getChildByName("com_Player" + o).getChildByName("sp_Xbet").getComponent("cc.Sprite").spriteFrame = null;
                for (var a = 0; a < 5; ++a) this.cardArray[a + 5 * o].active = !1;
                this.pointArray[o].active = !1,
                this.playerList.splice(n, 1),
                this.sp_BankerFrame.active = !1,
                this.an_SetBankerAnimation.active = !1
            },
            exitGame_Function: function() {
                switch (this.gameExit = !0, this.netWork.grabBullSocket.disconnect(), this.netWork.grabBullSocket = null, cc.audioEngine.stopAll(), this.playerInfo.lobbySelect) {
                case 0:
                    cc.director.loadScene("LobbyMain");
                    break;
                case 1:
                    cc.director.loadScene("Lobby_Fish")
                }
            },
            changeSeatId_Function: function(t) {
                if (this.netWork.seatId) {
                    var e = (5 - this.netWork.seatId + t) % 5;
                    return e
                }
                return t
            },
            noMoneyOut_Function: function() {
                this.gameExit = !0,
                this.com_MessageBox.getChildByName("bt_Confirm").active = !0,
                this.com_MessageBox.getChildByName("bt_Reconnect").active = !1,
                this.com_MessageBox.active = !0,
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "您的金币不足，已被请离房间。"
            },
            disconnectNetWork_Function: function() {
                this.bg_Black.active = !0,
                this.gameExit && this.netWork.grabBullSocket.disconnect(),
                this.netWork.grabBullSocket = null,
                this.playerInfo.gameDisconnect = !0,
                this.com_MessageBox.active = !0,
                this.com_MessageBox.getChildByName("bt_Confirm").active = !1,
                this.com_MessageBox.getChildByName("bt_Reconnect").active = !0,
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "您已断线，请重新连接"
            },
            update: function(t) {
                this.randomBanker && (this.randomBankerTimer < 1.5 ? (this.randomBankerCount < .08 ? this.randomBankerCount += t: (this.randomBankerCount = 0, this.randomBanker_Function(this.randomBankerArray)), this.randomBankerTimer += t) : (this.randomBanker = !1, this.randomBankerTimer = 0, this.setBanker_Function())),
                this.timeRun && this.timeCount_Function(t),
                this.coinFly && this.coinAnimation_Function()
            }
        }),
        cc._RF.pop()
    },
    {
        GrabBullNetWork: "GrabBullNetWork",
        PlayerInfo: "PlayerInfo"
    }],
    GrabBullNetWork: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "656336R45hNUJFKTWtr07kX", "GrabBullNetWork");
        var i = function() {
            var e = "",
            n = function() {
                this.lobbyMain = null,
                this.grabBull = null,
                this.grabBullSocket = null,
                this.playerInfo = null,
                this.tableId = -1,
                this.seatId = -1,
                this.playerHead = null,
                this.tax = -1,
                this.addScore = 0,
                this.eventOn = !1,
                this.init = function() {
                    this.playerInfo = t("PlayerInfo").getInstant
                },
                this.loginGame_Function = function(e, n, i, o) {
                    var a = this,
                    s = null;
                    cc.sys.isNative ? a.grabBullSocket = SocketIO.connect(e + ":" + n) : (s = t("Socket.io"), a.grabBullSocket = s(e + ":" + n)),
                    this.connectServer_Function(i, o),
                    this.grabBullSocket.on("connect_error",
                    function() {
                        a.grabBullSocket = null,
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("GrabBull")
                    }),
                    this.grabBullSocket.on("connect_timeout",
                    function() {
                        a.grabBullSocket = null,
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("GrabBull")
                    }),
                    a.grabBullSocket.on("connected",
                    function(t) {
                        if (t) try {
                            a.grabBullSocket.emit("LoginGame", {
                                userid: i,
                                gametype: 4,
                                sign: o
                            })
                        } catch(e) {}
                    })
                },
                this.connectServer_Function = function(t, e) {
                    var n = this;
                    this.grabBullSocket && this.grabBullSocket.on("loginGameResult",
                    function(t) {
                        t = n.changeResultJSON_Function(t),
                        t.resultid ? (n.playerInfo.playerCoin = t.Obj.score, n.lobbyMain.getComponent("LobbyMain").netWork.socket.disconnect(), n.grabBullSocket.emit("LoginRoom", {
                            roomid: 1
                        }), n.loginRoom_Function()) : (n.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !1, n.lobbyMain.getComponent("LobbyMain").loadGameScene = !1, n.lobbyMain.getComponent("LobbyMain").bg_Black.active = !0, n.lobbyMain.getComponent("LobbyMain").com_MessageBox.active = !0, n.lobbyMain.getComponent("LobbyMain").com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = t.msg, n.eventOn = !0)
                    })
                },
                this.loginRoom_Function = function() {
                    var t = this;
                    t.grabBullSocket.on("LoginRoomResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && (t.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !0, t.lobbyMain.bg_Black.active = !0, t.tableId = e.ResultData.TableId, t.seatId = e.ResultData.seatId, t.tax = e.ResultData.tax, t.addScore = e.ResultData.addscore, t.playerInfo.gameDisconnect = !1, t.playerInfo.gameName = "GrabBull", cc.audioEngine.stopAll(), cc.director.loadScene("GrabBullMain"))
                    })
                },
                this.setGrabBullSocketOn_Function = function() {
                    var t = this;
                    t.grabBullSocket.on("readyPlay",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.grabBull.gameStart_Function(e)
                    }),
                    t.grabBullSocket.on("sendCard",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.grabBull.sendCard_Function(e)
                    }),
                    t.grabBullSocket.on("selectBet",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.grabBull.checkBanker_Function(e)
                    }),
                    t.grabBullSocket.on("callResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e)
                    }),
                    t.grabBullSocket.on("callValueId",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.grabBull.setXbetBankerLabel_Function(e)
                    }),
                    t.grabBullSocket.on("reCallResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e)
                    }),
                    t.grabBullSocket.on("reCallValueId",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.grabBull.setXBetPlayerLabel_Function(e)
                    }),
                    t.grabBullSocket.on("couCow",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.grabBull.reissueCard_Function(e)
                    }),
                    t.grabBullSocket.on("showResult",
                    function(e) {
                        switch (e = t.changeResultJSON_Function(e), e.Result) {
                        case 0:
                            t.grabBull.showBullPoint_Function(e.data.cowPoint, e.data.seatId, e.data.card)
                        }
                    }),
                    t.grabBullSocket.on("open",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.grabBull.billing_Function(e)
                    }),
                    t.grabBullSocket.on("playEnter",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && t.grabBull.playerEnterRoom_Function(e.ResultData)
                    }),
                    t.grabBullSocket.on("PlayerOut",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.grabBull.playerLeaveRoom_Function(e.PlayerSeatId, e.userId)
                    }),
                    t.grabBullSocket.on("getDownTimeResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode || t.grabBull.firstTimeEntryInit_Function(e)
                    }),
                    t.grabBullSocket.on("getTableListResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResuleCode || t.grabBull.playerMessageInit_Function(e.data.tableList)
                    }),
                    t.grabBullSocket.on("notEnouhtScore",
                    function() {
                        t.grabBull.noMoneyOut_Function()
                    }),
                    t.grabBullSocket.on("disconnect",
                    function(e) {
                        t.grabBull.gameExit || t.grabBull.disconnectNetWork_Function()
                    })
                },
                this.setLobbyMainObj_Function = function(t) {
                    this.lobbyMain = t
                },
                this.setGrabBullObj_Function = function(t) {
                    this.grabBull = t
                },
                this.changeResultJSON_Function = function(t) {
                    if (cc.sys.isNative) {
                        var e = JSON.parse(t);
                        return e
                    }
                    return t
                },
                this.init()
            };
            return e ? {
                getInstant: e
            }: (e = new n, {
                getInstant: e
            })
        } ();
        e.exports = i,
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo",
        "Socket.io": "Socket.io"
    }],
    GrabBullPoint: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f665fvvh99AaoeW4z+mkZul", "GrabBullPoint"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_PointSprite: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                type: 0
            },
            onLoad: function() {
                this.pointDisplay = this.getComponent("dragonBones.ArmatureDisplay"),
                this.pointArmature = this.pointDisplay.armature(),
                this.pointDisplay.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.frame_event_Function, this)
            },
            frame_event_Function: function() {},
            setType_Function: function(t) {
                this.type = t,
                this.setFrame_Function(t)
            },
            setFrame_Function: function(t) {
                this.pointDisplay.playAnimation("point" + t, 1)
            }
        }),
        cc._RF.pop()
    },
    {}],
    HitFishButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "943a1LAlCNBgaHy3s+QuOLi", "HitFishButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            startButtonClick_Function: function() {
                this.canvasNode.getComponent("HitFishMain").gameStart_Function()
            },
            shootButtonClick_Function: function() {
                this.canvasNode.getComponent("HitFishMain").shootFish_Function(this.node.shootId)
            },
            nextLevelButtonClick_Function: function() {
                this.canvasNode.getComponent("HitFishMain").nextLevel_Function()
            }
        }),
        cc._RF.pop()
    },
    {}],
    HitFishMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a6d35ZBNA1DZY4ceE074zCv", "HitFishMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                com_GameButtos: {
                    "default": null,
                    type: cc.Node
                },
                pb_Fish: {
                    "default": null,
                    type: cc.Prefab
                },
                vi_View: {
                    "default": null,
                    type: cc.Node
                },
                lb_Time: {
                    "default": null,
                    type: cc.Label
                },
                lb_Target: {
                    "default": null,
                    type: cc.Label
                },
                lb_Score: {
                    "default": null,
                    type: cc.Label
                },
                lb_GameTitle: {
                    "default": null,
                    type: cc.Label
                },
                lb_GameOver: {
                    "default": null,
                    type: cc.Label
                },
                lb_Congratulation: {
                    "default": null,
                    type: cc.Label
                },
                bt_Start: {
                    "default": null,
                    type: cc.Button
                },
                bt_NextLevel: {
                    "default": null,
                    type: cc.Button
                },
                au_bgm: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_right: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_wrong: {
                    "default": null,
                    url: cc.AudioClip
                }
            },
            onLoad: function() {
                this.score = 0,
                this.fishArray = [],
                this.gameTime = 0,
                this.gameTimeArray = [30, 30, 25, 20, 18],
                this.creatFishCount = 1,
                this.line = 0,
                this.level = 0,
                this.targetArray = [1e3, 2e3, 4e3, 8e3, 1e4],
                this.gameStart = !1;
                for (var t = 0; t < this.com_GameButtos.children.length; ++t) this.com_GameButtos.children[t].shootId = t;
                cc.audioEngine.play(this.au_bgm, !0, .5)
            },
            gameStart_Function: function() {
                this.gameStart = !0,
                this.gameTime = this.gameTimeArray[this.level],
                this.score = 0,
                this.lb_Score.string = "Score : " + this.score,
                this.creatFishCount = 1,
                this.bt_Start.node.active = !1,
                this.bt_NextLevel.node.active = !1,
                this.com_GameButtos.active = !0,
                this.line = 0,
                this.level = 0,
                this.lb_Target.string = "Target : " + this.targetArray[this.level];
                for (var t = 0,
                e = 0; e < 25; ++e) this.fishArray[e] = cc.instantiate(this.pb_Fish),
                this.vi_View.addChild(this.fishArray[e]),
                this.fishArray[e].setPosition(e % 5 * 110 - 220, 110 * parseInt(e / 5) - 180),
                e % 5 === 0 && (t = this.getRandom_Function(0, 4)),
                parseInt(e % 5) === t ? this.fishArray[e].getComponent("HitFishPb").setRandomSpriteFrame_Function() : this.fishArray[e].getComponent("HitFishPb").setDesignationSpriteFrame_Function(9);
                this.lb_GameTitle.node.active = !1,
                this.lb_GameOver.node.active = !1
            },
            addScore_Function: function(t) {
                var e = 0;
                switch (t) {
                case 0:
                    e = 1;
                    break;
                case 1:
                    e = 2;
                    break;
                case 2:
                    e = 3;
                    break;
                case 3:
                    e = 5;
                    break;
                case 4:
                    e = 7;
                    break;
                case 5:
                    e = 10;
                    break;
                case 6:
                    e = 20;
                    break;
                case 7:
                    e = 50;
                    break;
                case 8:
                    e = 100;
                    break;
                case 9:
                    e = -5 - 5 * parseInt(this.gameTimeArray[this.level] * (this.level + 1) - this.gameTime)
                }
                9 !== t ? cc.audioEngine.play(this.au_right, !1, .5) : cc.audioEngine.play(this.au_wrong, !1, .5),
                this.score += e,
                this.lb_Score.string = "Score : " + this.score
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            fishMove_Function: function() {
                var t, e;
                this.creatFishCount > 1 ? (t = this.getRandom_Function(0, 4), e = this.getRandom_Function(0, 4), t === e && (e = 4 === e ? 0 : ++e)) : t = this.getRandom_Function(0, 4);
                for (var n = 0; n < 5; ++n) this.vi_View.children[5 * this.line + n].setPosition(n % 5 * 110 - 220, 370),
                this.creatFishCount > 1 ? n === t || n === e ? this.fishArray[5 * this.line + n].getComponent("HitFishPb").setRandomSpriteFrame_Function() : this.fishArray[5 * this.line + n].getComponent("HitFishPb").setDesignationSpriteFrame_Function(9) : n === t ? this.fishArray[5 * this.line + n].getComponent("HitFishPb").setRandomSpriteFrame_Function() : this.fishArray[5 * this.line + n].getComponent("HitFishPb").setDesignationSpriteFrame_Function(9);
                for (n = 0; n < this.fishArray.length; ++n) {
                    var i = cc.moveBy(.1, 0, -110);
                    this.fishArray[n].runAction(i)
                }
            },
            shootFish_Function: function(t) {
                this.addScore_Function(this.vi_View.children[5 * this.line + t].getComponent("HitFishPb").currentFrame),
                this.fishMove_Function(),
                this.line = this.line < 4 ? ++this.line: 0
            },
            checkTarget_Function: function() {
                this.gameStart = !1,
                this.score >= this.targetArray[this.level] && this.level < this.targetArray.length ? (this.lb_Congratulation.node.active = !0, this.com_GameButtos.active = !1, this.bt_NextLevel.node.active = !0, this.vi_View.removeAllChildren()) : this.gameOver_Function()
            },
            nextLevel_Function: function() {
                this.bt_NextLevel.node.active = !1,
                this.lb_Congratulation.node.active = !1,
                this.gameStart = !0,
                ++this.level,
                this.gameTime = this.gameTimeArray[this.level],
                this.line = 0,
                this.lb_Target.string = "Target : " + this.targetArray[this.level],
                this.com_GameButtos.active = !0;
                for (var t = 0,
                e = 0; e < 25; ++e) this.fishArray[e] = cc.instantiate(this.pb_Fish),
                this.vi_View.addChild(this.fishArray[e]),
                this.fishArray[e].setPosition(e % 5 * 110 - 220, 110 * parseInt(e / 5) - 180),
                e % 5 === 0 && (t = this.getRandom_Function(0, 4)),
                parseInt(e % 5) === t ? this.fishArray[e].getComponent("HitFishPb").setRandomSpriteFrame_Function() : this.fishArray[e].getComponent("HitFishPb").setDesignationSpriteFrame_Function(9)
            },
            gameOver_Function: function() {
                this.com_GameButtos.active = !1,
                this.vi_View.removeAllChildren(),
                this.level < this.targetArray.length ? this.lb_GameOver.node.active = !0 : this.lb_Congratulation.node.active = !0,
                this.bt_Start.node.active = !0
            },
            update: function(t) {
                this.gameStart && (this.gameTime > 0 ? (this.gameTime -= t, this.lb_Time.string = "Time : " + parseInt(this.gameTime), this.gameTime < this.gameTimeArray[this.level] / 2 && (this.creatFishCount = 2)) : this.checkTarget_Function())
            }
        }),
        cc._RF.pop()
    },
    {}],
    HitFishPb: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1951fjNwapAB7p7UiZiQWXC", "HitFishPb"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_FishFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {
                this.currentFrame = 0
            },
            setRandomSpriteFrame_Function: function() {
                var t = this.getRandom_Function(0, 8);
                this.setSpriteFrame_Function(t)
            },
            setDesignationSpriteFrame_Function: function(t) {
                this.setSpriteFrame_Function(t)
            },
            setSpriteFrame_Function: function(t) {
                this.currentFrame = t,
                this.setCurrentFrame_Function(t)
            },
            setCurrentFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.sp_FishFrame[t]
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            }
        }),
        cc._RF.pop()
    },
    {}],
    HorseButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e723786/HRDNrcnff9bUnlc", "HorseButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {}
        }),
        cc._RF.pop()
    },
    {}],
    HorseMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0967f5zQVRMCI7DO7wmOvMl", "HorseMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                com_BG: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_Buttons: {
                    "default": null,
                    type: cc.Node
                },
                com_Commenter: {
                    "default": null,
                    type: cc.Node
                },
                com_MatchEnvironment: {
                    "default": null,
                    type: cc.Node
                },
                com_Help: {
                    "default": null,
                    type: cc.Node
                },
                com_Exit: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox: {
                    "default": null,
                    type: cc.Node
                },
                bg_Black: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            uiInit_Function: function() {},
            uiResize_Function: function() {},
            update: function(t) {}
        }),
        cc._RF.pop()
    },
    {}],
    HotUpdateButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1362ayRVMhNQZgzBZ97gFRi", "HotUpdateButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            messageBoxConfirmButtonClick_Function: function() {
                this.canvasNode.getComponent("HotUpdateMain").com_MessageBox.active = !1,
                this.canvasNode.getComponent("HotUpdateMain").getIp_Function(this.canvasNode.getComponent("HotUpdateMain").configData)
            },
            openURL: function() {
                this.node.parent.active = !1,
                cc.sys.openURL("https://itunes.apple.com/cn/app/%E9%BE%99%E6%B5%A9%E7%9F%BF%E5%B7%A5/id1256343442?mt=8")
            }
        }),
        cc._RF.pop()
    },
    {}],
    HotUpdateMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "51d69fiUVpCq7qGn7em1rTZ", "HotUpdateMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                panel: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox: {
                    "default": null,
                    type: cc.Node
                },
                manifestUrl: cc.RawAsset,
                sp_BG: {
                    "default": null,
                    type: cc.Sprite
                },
                sp_BGArray: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                pb_Loading: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox_Update: {
                    "default": null,
                    type: cc.Node
                },
                _updating: !1,
                _canRetry: !1
            },
            checkCb: function(t) {
                switch (t.getEventCode()) {
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    this.panel.getComponent(cc.Label).string = "没找到本地更新文件";
                    break;
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    this.panel.getComponent(cc.Label).string = "更新文件下载失败";
                    break;
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    this.panel.getComponent(cc.Label).string = "开始更新";
                    break;
                case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                    this.panel.getComponent(cc.Label).string = "游戏新版本查找失败";
                    break;
                default:
                    return
                }
                cc.eventManager.removeListener(this._checkListener),
                this._checkListener = null,
                this._updating = !1
            },
            updateCb: function(t) {
                cc.log("***************************yyy*****************************");
                var e = !1,
                n = !1;
                switch (t.getEventCode()) {
                case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                    this.panel.getComponent("cc.Label").string = "没找到本地更新文件",
                    n = !0;
                    break;
                case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                    this.pb_Loading.getComponent("cc.ProgressBar").progress = t.getDownloadedBytes() / t.getTotalBytes();
                    var i = t.getMessage();
                    i && (this.panel.getComponent("cc.Label").string = "更新中..." + i);
                    break;
                case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                    this.panel.getComponent("cc.Label").string = "更新文件下载失败",
                    n = !0;
                    break;
                case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                    this.panel.getComponent("cc.Label").string = "已是最新版本",
                    this.playerInfo.localVersion[0] = this.serverVersion,
                    this.writeGameVersion_Function(this.playerInfo.localVersion,
                    function() {
                        cc.log("***************************vvv*****************************"),
                        cc.game.restart()
                    }),
                    n = !0;
                    break;
                case jsb.EventAssetsManager.UPDATE_FINISHED:
                    this.panel.getComponent("cc.Label").string = "更新完成" + t.getMessage(),
                    e = !0,
                    cc.log("***************************uuu*****************************");
                    break;
                case jsb.EventAssetsManager.UPDATE_FAILED:
                    this.panel.getComponent("cc.Label").string = "更新失败" + t.getMessage(),
                    this._updating = !1,
                    this._canRetry = !0;
                    break;
                case jsb.EventAssetsManager.ERROR_UPDATING:
                    this.panel.getComponent("cc.Label").string = "资源更新错误: " + t.getAssetId() + ", " + t.getMessage();
                    break;
                case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                    this.panel.getComponent("cc.Label").string = t.getMessage()
                }
                if (n && (cc.eventManager.removeListener(this._updateListener), this._updateListener = null, this._updating = !1), e) {
                    cc.eventManager.removeListener(this._updateListener),
                    this._updateListener = null;
                    var o = jsb.fileUtils.getSearchPaths(),
                    a = this._am.getLocalManifest().getSearchPaths();
                    Array.prototype.unshift(o, a),
                    cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(o)),
                    jsb.fileUtils.setSearchPaths(o),
                    cc.audioEngine.stopAll(),
                    this.playerInfo.localVersion[0] = this.serverVersion,
                    this.writeGameVersion_Function(this.playerInfo.localVersion,
                    function() {
                        cc.game.restart()
                    })
                }
            },
            retry: function() { ! this._updating && this._canRetry && (this._canRetry = !1, this.panel.getComponent("cc.Label").string = "尝试重新下载资源", this._am.downloadFailedAssets())
            },
            checkUpdate: function() {
                return this._updating ? void(this.panel.getComponent("cc.Label").string = "检测更新中 ...") : this._am.getLocalManifest().isLoaded() ? (this._checkListener = new jsb.EventListenerAssetsManager(this._am, this.checkCb.bind(this)), cc.eventManager.addListener(this._checkListener, 1), this._am.checkUpdate(), this._updating = !0, void(this.panel.getComponent("cc.Label").string = "检测完成")) : void(this.panel.getComponent("cc.Label").string = "加载本地更新文件失败 ...")
            },
            hotUpdate: function() {
                this.panel.getComponent(cc.Label).string = "更新中",
                this._updateListener = new jsb.EventListenerAssetsManager(this._am, this.updateCb.bind(this)),
                cc.eventManager.addListener(this._updateListener, 1),
                this._failCount = 0,
                this._am.update(),
                this._updating = !0
            },
            onLoad: function() {
                function e(t, e) {
                    n.configData = e,
                    n.playerInfo.loginIp = e.loginIp,
                    n.playerInfo.guest = e.guest,
                    n.playerInfo.shareUrl = e.shareUrl,
                    n.playerInfo.exchangeRate = e.exchangeRate,
                    n.playerInfo.withdraw = e.withdraw,
                    e.lobbySelect && (n.playerInfo.lobbySelect = e.lobbySelect),
                    n.getIp_Function(e)
                }
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE),
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.renderer.enableDirtyRegion(!1);
                var n = this;
                this.playerInfo = t("PlayerInfo").getInstant,
                cc.view.setResizeCallback(function() {
                    var t = cc.view.getVisibleSize(),
                    e = window.orientation;
                    n.uiResize_Function(t, e)
                });
                var i = window.orientation;
                this.uiInit_Function(i),
                cc.loader.load("res/raw-assets/Texture/Configuration/Configuration.json", e)
            },
            uiInit_Function: function(t) {
                var e = cc.view.getVisibleSize(),
                n = e.width / 1334;
                e.width > 1334 ? (this.sp_BG.node.scaleX = n, this.sp_BG.node.scaleY = n) : e.width < 1334 && (this.sp_BG.node.scaleX = 1 / n, this.sp_BG.node.scaleY = 1 / n)
            },
            uiResize_Function: function(t, e) {
                var n = t.width / 1334;
                t.width > 1334 ? (this.sp_BG.node.scaleX = n, this.sp_BG.node.scaleY = n) : t.width < 1334 && (this.sp_BG.node.scaleX = 1 / n, this.sp_BG.node.scaleY = 1 / n)
            },
            getIp_Function: function(t) {
                if (cc.sys.isNative) {
                    var e = this;
                    cc.log(t.loginIp);
                    var n = t.loginIp + "/logitech",
                    i = new XMLHttpRequest;
                    i.onreadystatechange = function() {
                        if (4 === i.readyState && 200 === i.status) {
                            var n = i.response;
                            if (null !== i.response) try {
                                cc.log("*********************************************************************"),
                                n = JSON.parse(n),
                                e.checkGameVersion_Function(t, n)
                            } catch(o) {}
                        }
                    },
                    i.onerror = function() {
                        e.com_MessageBox.active = !0,
                        e.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "连接服务器出错，请检测网络"
                    },
                    i.open("get", n),
                    i.send()
                } else switch (this.playerInfo.lobbySelect) {
                case 0:
                    cc.director.loadScene("LobbyMain");
                    break;
                case 1:
                    cc.director.loadScene("Lobby_Fish")
                }
            },
            checkGameVersion_Function: function(t, e) {
                var n = JSON.parse(cc.sys.localStorage.getItem("gameVersion"));
                if (cc.sys.os === cc.sys.OS_IOS) if (null === n) {
                    if (parseInt(e.lobby.toString().charAt(0)) > parseInt(t.versionArray.toString().charAt(0))) return void(this.com_MessageBox_Update.active = !0)
                } else if (parseInt(e.lobby.toString().charAt(0)) > parseInt(n.gameVersion.toString().charAt(0))) return void(this.com_MessageBox_Update.active = !0);
                cc.log("******************************ggg***************************************"),
                "undefined" == typeof t.showGame && (t.showGame = 0);
                for (var i = 0; i < e.showgame.length; ++i) if (t.showGame === e.showgame[i]) return cc.director.loadScene("FindDifferent"),
                void cc.log("******************************kkk***************************************");
                this.playerInfo.lobbySelect ? (this.sp_BG.getComponent("cc.Sprite").spriteFrame = this.sp_BGArray[1], cc.log("******************************mmm***************************************")) : this.sp_BG.getComponent("cc.Sprite").spriteFrame = this.sp_BGArray[0];
                for (var i = 0; i < 4; ++i) this.node.children[i].active = !0;
                if (cc.log("******************************jjj***************************************"), t.isUpdate) {
                    if (this.playerInfo.serverVersion[0] = e.lobby, this.playerInfo.serverVersion[1] = e.cowgame_qiang, this.playerInfo.serverVersion[2] = e.fish, this.playerInfo.serverVersion[3] = e.cowgame_jindian, this.playerInfo.serverVersion[4] = e.game82, this.playerInfo.serverVersion[5] = e.game28, this.playerInfo.serverVersion[6] = e.linegame, null !== n ? (cc.log("******************************aaa***************************************"), cc.log(n.gameVersion), this.playerInfo.localVersion = n.gameVersion) : (cc.log("******************************bbb***************************************"), this.playerInfo.localVersion = t.versionArray), this.playerInfo.localVersion.length === this.playerInfo.serverVersion.length) for (var i = 0; i < this.playerInfo.serverVersion.length; ++i) this.playerInfo.serverVersion[i] !== this.playerInfo.localVersion[i] && (this.playerInfo.needToUpdate[i] = 1);
                    else this.playerInfo.needToUpdate[0] = 1;
                    if (cc.log("******************************xxx***************************************"), cc.log(this.playerInfo.localVersion), cc.log(this.playerInfo.serverVersion), cc.log(this.playerInfo.needToUpdate), this.playerInfo.needToUpdate[0]) cc.log("******************************ccc***************************************"),
                    this.gameUpdate_Function();
                    else switch (cc.log("******************************ddd***************************************"), this.node.getChildByName("pb_Loading").getComponent("cc.ProgressBar").progress = 1, this.playerInfo.lobbySelect) {
                    case 0:
                        cc.director.loadScene("LobbyMain");
                        break;
                    case 1:
                        cc.director.loadScene("Lobby_Fish")
                    }
                } else switch (this.playerInfo.lobbySelect) {
                case 0:
                    cc.director.loadScene("LobbyMain");
                    break;
                case 1:
                    cc.director.loadScene("Lobby_Fish")
                }
            },
            writeGameVersion_Function: function(t, e) {
                var n = null;
                n = {
                    gameVersion: t
                },
                cc.log(t),
                cc.sys.localStorage.setItem("gameVersion", JSON.stringify(n)),
                e()
            },
            gameUpdate_Function: function() {
                var t = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "lobby";
                cc.log(t),
                this._am = new jsb.AssetsManager(this.manifestUrl, t),
                cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS || this._am.retain();
                var e = this;
                this._am.setVersionCompareHandle(function(t, n) {
                    e.serverVersion = n,
                    cc.log("JS Custom Version Compare: version A is " + t + ", version B is " + n);
                    for (var i = t.split("."), o = n.split("."), a = 0; a < i.length; ++a) {
                        var s = parseInt(i[a]),
                        c = parseInt(o[a] || 0);
                        if (s !== c) return - 1
                    }
                    return o.length != i.length ? -1 : 0
                });
                var n = this.panel;
                this._am.setVerifyCallback(function(t, e) {
                    var i = e.compressed,
                    o = e.md5,
                    a = e.path;
                    e.size;
                    return i ? (n.getComponent("cc.Label").string = "Verification passed : " + a, !0) : (n.getComponent("cc.Label").string = "Verification passed : " + a + " (" + o + ")", !0)
                }),
                this.panel.getComponent("cc.Label").string = "Hot update is ready, please check or directly update.",
                cc.sys.os === cc.sys.OS_ANDROID && (this._am.setMaxConcurrentTask(1), this.panel.getComponent("cc.Label").string = "Max concurrent tasks count have been limited to 1"),
                this.hotUpdate()
            },
            onDestroy: function() {
                this._updateListener && (cc.eventManager.removeListener(this._updateListener), this._updateListener = null),
                this._am && !cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS && this._am.release()
            }
        }),
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo"
    }],
    InitLBXFrame: [function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        cc._RF.push(e, "73810un/L9B+7ptubQfLvHy", "InitLBXFrame");
        var o, a = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23, 24, 25], [26, 27, 28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41, 42], [43, 44, 45, 46, 47, 48, 49], [50, 51, 52, 53, 54, 55], [56, 57, 58, 59, 60], [26, 35, 43, 50, 56], [18, 27, 36, 44, 51, 57], [11, 19, 28, 37, 45, 52, 58], [5, 12, 20, 29, 38, 46, 53, 59], [0, 6, 13, 21, 30, 39, 47, 54, 60], [1, 7, 14, 22, 31, 40, 48, 55], [2, 8, 15, 23, 32, 41, 49], [3, 9, 16, 24, 33, 42], [4, 10, 17, 25, 34], [0, 5, 11, 18, 26], [1, 6, 12, 19, 27, 35], [2, 7, 13, 20, 28, 36, 43], [3, 8, 14, 21, 29, 37, 44, 50], [4, 9, 15, 22, 30, 38, 45, 51, 56], [10, 16, 23, 31, 39, 46, 52, 57], [17, 24, 32, 40, 47, 53, 58], [25, 33, 41, 48, 54, 59], [34, 42, 49, 55, 60]],
        s = t("Util"),
        c = 0;
        cc.Class({
            "extends": cc.Component,
            properties: (o = {},
            i(o, "bianchanggezishu", 5), i(o, "liubianxingH", 0), i(o, "liubianxingA", 0), i(o, "framePic", {
                "default": null,
                type: cc.SpriteFrame
            }), i(o, "bian", {
                "default": null,
                type: cc.SpriteFrame
            }), i(o, "xiaochuSound", {
                "default": null,
                url: cc.AudioClip
            }), i(o, "shuPrefab", {
                "default": null,
                type: cc.Prefab
            }), i(o, "boomEffPrefab", {
                "default": null,
                type: cc.Prefab
            }), i(o, "tipPrefab", {
                "default": null,
                type: cc.Prefab
            }), o),
            checkXC: function(t) {
                s.testCode1("消除逻辑"),
                this.addScore(this.curFKLen, !0);
                var e = cc.instantiate(this.tipPrefab);
                e.color = cc.color(211, 70, 50, 255);
                var n = e.getComponent(cc.Label);
                n.string = "+" + this.getAddScoreCal(this.curFKLen, !0),
                this.node.addChild(e);
                for (var i = [], o = 0; o < this.frameList.length; o++) this.frameList[o].isHaveFK && i.push(this.frameList[o].FKIndex);
                i.sort(function(t, e) {
                    return t - e
                });
                for (var c = [], o = 0; o < a.length; o++) {
                    var r = a[o],
                    l = this.get2AryIntersect(i, r);
                    if (l.length > 0) {
                        var h = this.check2AryIsEqual(r, l);
                        h && (c.push(r), cc.audioEngine.playEffect(this.xiaochuSound))
                    }
                }
                for (var m = [], u = 0, o = 0; o < c.length; o++) for (var d = c[o], p = 0; p < d.length; p++) {
                    var g = d[p];
                    m.push(cc.callFunc(function() {
                        var t = arguments[1][0],
                        e = arguments[1][1],
                        n = cc.instantiate(this.boomEffPrefab);
                        this.frameList[t].addChild(n);
                        var i = cc.instantiate(this.tipPrefab),
                        o = i.getComponent(cc.Label);
                        o.string = "+" + this.getAddScoreCal(e),
                        this.frameList[t].addChild(i)
                    },
                    this, [g, u])),
                    m.push(cc.callFunc(function() {
                        var t = arguments[1];
                        this.frameList[t].isHaveFK = null;
                        var e = this.frameList[t].getChildByName("colorSpr");
                        e && (e.cascadeOpacity = !0, e.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 2), cc.fadeOut(.5)), cc.removeSelf(!0))))
                    },
                    this, g)),
                    m.push(cc.delayTime(.1)),
                    u++
                }
                if (m.length > 0) {
                    m.push(cc.callFunc(function() {
                        this.isDeleting = !1,
                        this.checkIsLose()
                    },
                    this)),
                    this.isDeleting = !0;
                    var y = cc.sequence(m);
                    this.node.runAction(y),
                    this.addScore(u)
                }
                s.testCode2("消除逻辑")
            },
            checkIsLose: function() {
                if (!this.isDeleting) {
                    for (var t = 0,
                    e = 0; e < 3; e++) {
                        var n = cc.find("Canvas/getNewFK" + (e + 1)),
                        i = n.getComponent("NewLBXKuai");
                        i.checkIsLose() ? (t++, n.opacity = 125) : n.opacity = 255
                    }
                    if (3 == t) {
                        var o = cc.instantiate(this.shuPrefab);
                        this.node.parent.addChild(o);
                        var a = cc.sys.localStorage.getItem("score");
                        a < c && cc.sys.localStorage.setItem("score", c)
                    }
                }
            },
            addScore: function(t, e) {
                var n = this.getAddScoreCal(t, e),
                i = cc.find("Canvas/score/scoreLabel"),
                o = i.getComponent(cc.Label);
                o.string = n + Number(o.string),
                c = Number(o.string)
            },
            getAddScoreCal: function(t, e) {
                var n = t + 1,
                i = e ? n: 2 * n * n;
                return i
            },
            get2AryIntersect: function(t, e) {
                for (var n = [], i = 0; i < t.length; i++) for (var o = 0; o < e.length; o++) e[o] == t[i] && n.push(e[o]);
                return n
            },
            check2AryIsEqual: function(t, e) {
                for (var n = 0; n < t.length; n++) if (e[n] != t[n]) return ! 1;
                return ! 0
            },
            onLoad: function() {
                for (var t = cc.p(this.node.x, this.node.y), e = (2 * this.bianchanggezishu - 1, [{
                    count: 5,
                    srcPos: cc.p(0, 0)
                },
                {
                    count: 6,
                    srcPos: cc.p(2 * this.liubianxingH, 0)
                },
                {
                    count: 7,
                    srcPos: cc.p(2 * this.liubianxingH * 2, 0)
                },
                {
                    count: 8,
                    srcPos: cc.p(2 * this.liubianxingH * 3, 0)
                },
                {
                    count: 9,
                    srcPos: cc.p(2 * this.liubianxingH * 4, 0)
                },
                {
                    count: 8,
                    srcPos: cc.p(2 * this.liubianxingH * 4 + this.liubianxingH, -3 * this.liubianxingA / 2)
                },
                {
                    count: 7,
                    srcPos: cc.p(2 * this.liubianxingH * 4 + 2 * this.liubianxingH, -3 * this.liubianxingA * 2 / 2)
                },
                {
                    count: 6,
                    srcPos: cc.p(2 * this.liubianxingH * 4 + 3 * this.liubianxingH, -3 * this.liubianxingA * 3 / 2)
                },
                {
                    count: 5,
                    srcPos: cc.p(2 * this.liubianxingH * 4 + 4 * this.liubianxingH, -3 * this.liubianxingA * 4 / 2)
                }]), n = cc.pMult(cc.pForAngle(240 * (2 * Math.PI / 360)), 2 * this.liubianxingH), i = cc.pMult(cc.pForAngle(120 * (2 * Math.PI / 360)), 2 * this.liubianxingH * 4), o = [], a = [], s = 0; s < e.length; s++) for (var c = e[s].count, r = cc.pAdd(e[s].srcPos, i), l = cc.pAdd(t, r), h = 0; h < c; h++) {
                    var m = cc.pAdd(l, cc.pMult(n, h));
                    a.push(m)
                }
                for (var u = 0; u < a.length; u++) {
                    var d = new cc.Node("frame"),
                    p = d.addComponent(cc.Sprite);
                    p.spriteFrame = this.framePic,
                    d.x = a[u].x,
                    d.y = a[u].y,
                    d.parent = this.node,
                    d.FKIndex = u;
                    var g = new cc.Node("bianSpr"),
                    y = g.addComponent(cc.Sprite);
                    y.spriteFrame = this.bian,
                    g.active = !1,
                    g.parent = d,
                    o.push(d)
                }
                this.frameList = o,
                this.posList = e,
                this.isDeleting = !1,
                this.node.on("succDropDownOne", this.checkXC, this);
                var d = cc.find("Canvas/highScore/scoreLabel"),
                _ = d.getComponent(cc.Label);
                _.string = cc.sys.localStorage.getItem("score") || 0
            }
        }),
        cc._RF.pop()
    },
    {
        Util: "Util"
    }],
    Item: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "958cfmr+LJOy6mCQ9jOzkxW", "Item"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                id: 1,
                sp_ItemSpite: {
                    "default": [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {
                this.DrawAnimation = !1
            },
            SetItemFrame_Function: function(t) {
                this.getComponent("cc.Sprite").spriteFrame = this.sp_ItemSpite[t]
            },
            MoveAction_Function: function(t, e, n) {
                this.SetItemFrame_Function(n - 1),
                this.node.setPosition(t);
                var i = cc.moveTo(.8, e),
                o = cc.sequence(i, cc.callFunc(function() {
                    this.node.parent.parent.getComponent("GameMain").itemPool.put(this.node),
                    this.DrawAnimation = !1
                },
                this));
                this.node.runAction(o)
            }
        }),
        cc._RF.pop()
    },
    {}],
    LIneGameLight: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d86bfuns1JH37wBaKdlDQoz", "LIneGameLight"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_Light: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                isLight: !1
            },
            onLoad: function() {},
            changeLight_Function: function() {
                this.isLight ? (this.node.getComponent("cc.Sprite").spriteFrame = this.sp_Light[1], this.isLight = !1) : (this.node.getComponent("cc.Sprite").spriteFrame = this.sp_Light[0], this.isLight = !0)
            }
        }),
        cc._RF.pop()
    },
    {}],
    LineGameButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5b112e0Ea9CA7cqZBjtqSQq", "LineGameButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            rollButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").rollStart_Function()
            },
            stopButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").com_GameButtons.getChildByName("btEffect").active = !0,
                this.node.getComponent("cc.Button").interactable = !1,
                this.canvasNode.getComponent("LineGameMain").rollingTime = 3
            },
            betButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").com_AutoSelect.active = !1,
                this.canvasNode.getComponent("LineGameMain").com_BetSelect.active ? this.canvasNode.getComponent("LineGameMain").com_BetSelect.active = !1 : this.canvasNode.getComponent("LineGameMain").com_BetSelect.active = !0
            },
            betMenuBetSelectButtonClick_Function: function() {
                return this.canvasNode.getComponent("LineGameMain").com_BetSelect.active = !1,
                this.canvasNode.getComponent("LineGameMain").checkSelectBet_Function() ? void this.canvasNode.getComponent("LineGameMain").changeBet_Function(this.node.bet) : void this.canvasNode.getComponent("LineGameMain").openMessageBox_Function("余额50元以下只能使用0.1倍进行游戏", 0)
            },
            autoButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").com_BetSelect.active = !1,
                this.canvasNode.getComponent("LineGameMain").com_AutoSelect.active ? this.canvasNode.getComponent("LineGameMain").com_AutoSelect.active = !1 : this.canvasNode.getComponent("LineGameMain").com_AutoSelect.active = !0
            },
            autoMenuAutoSelectButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").changeAuto_Function(this.node.auto),
                this.canvasNode.getComponent("LineGameMain").com_AutoSelect.active = !1
            },
            autoTimeButtonClick_Function: function() {
                this.node.active = !1,
                this.canvasNode.getComponent("LineGameMain").com_GameButtons.getChildByName("bt_Auto").active = !0,
                this.canvasNode.getComponent("LineGameMain").autoTimes = 0
            },
            helpButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").com_Help.active = !0,
                this.canvasNode.getComponent("LineGameMain").bg_Black.active = !0,
                this.canvasNode.getComponent("LineGameMain").com_Help.getChildByName("bg_01").active = !0,
                this.canvasNode.getComponent("LineGameMain").com_Help.getChildByName("bg_02").active = !1
            },
            helpMenuCloseButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").com_Help.active = !1,
                this.canvasNode.getComponent("LineGameMain").bg_Black.active = !1
            },
            helpMenuNextButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").com_Help.getChildByName("bg_02").active ? this.canvasNode.getComponent("LineGameMain").com_Help.getChildByName("bg_02").active = !1 : this.canvasNode.getComponent("LineGameMain").com_Help.getChildByName("bg_02").active = !0
            },
            exitButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").exitGame_Function()
            },
            messageBoxReconnectButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").com_MessageBox.active = !1,
                this.canvasNode.getComponent("LineGameMain").netWork.lineGameGameSocket = null,
                cc.audioEngine.stopAll(),
                cc.director.loadScene("LobbyMain")
            },
            messageBoxConfirmButtonClick_Function: function() {
                this.canvasNode.getComponent("LineGameMain").com_MessageBox.active = !1,
                this.canvasNode.getComponent("LineGameMain").bg_Black.active = !1
            }
        }),
        cc._RF.pop()
    },
    {}],
    LineGameCoin: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "467e9uM9g1NfKLwxPFZJlz9", "LineGameCoin"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                coinSpriteFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                playAnimation: 0,
                currentFrame: 0,
                delayTime: 0
            },
            onLoad: function() {
                this.currentFrame = this.getRandom_Function(0, 5)
            },
            setCoinAnimation_Function: function(t, e, n) {
                this.node.setPosition(t),
                this.playAnimation = 1;
                var i = this.getRandom_Function( - 100, 100),
                o = this.getRandom_Function(80, 200),
                a = cc.moveTo(.25, i, -150),
                s = cc.jumpBy(.25, i, 0, o / 4, 1),
                c = Math.random(),
                r = cc.delayTime(c),
                l = cc.moveTo(.4, e),
                h = cc.sequence(a, s, r, l, cc.callFunc(function() {
                    this.node.active = !1,
                    this.playAnimation = 0,
                    this.node.parent.getComponent("LineGameMain").showCoinEffect_Function(),
                    this.node.parent.getComponent("LineGameMain").playCoinSound_Function()
                },
                this));
                this.node.runAction(h)
            },
            setFrame_Function: function() {
                this.nextFrame_Function(),
                this.node.getComponent("cc.Sprite").spriteFrame = this.coinSpriteFrame[this.currentFrame]
            },
            nextFrame_Function: function() {
                this.currentFrame < 5 ? ++this.currentFrame: (this.currentFrame = 0, this.node.parent.getComponent("LineGameMain").showStar_Function(this.node.position))
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            update: function(t) {
                this.playAnimation && (this.delayTime < .05 ? this.delayTime += t: (this.setFrame_Function(), this.delayTime = 0))
            }
        }),
        cc._RF.pop()
    },
    {}],
    LineGameEffect: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5fe58R93EhFLoMgphqkjhM1", "LineGameEffect"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {},
            animationCompleteCallBack_Function: function() {
                this.node.active = !1
            }
        }),
        cc._RF.pop()
    },
    {}],
    LineGameFirework: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "dfc8cHVMuNPgo6MAqSf008M", "LineGameFirework"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                this.colorArray = [[255, 243, 50], [255, 50, 255], [59, 230, 255], [69, 126, 255], [69, 255, 205], [255, 122, 69]]
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            setColor_Function: function() {
                var t = this.getRandom_Function(0, this.colorArray.length - 1);
                this.node.getComponent("cc.ParticleSystem").startColor = new cc.Color(this.colorArray[t][0], this.colorArray[t][1], this.colorArray[t][2]),
                this.node.getComponent("cc.ParticleSystem").endColor = new cc.Color(this.colorArray[t][0], this.colorArray[t][1], this.colorArray[t][2])
            },
            setPosition_Function: function() {
                var t = this.getRandom_Function( - 400, 400),
                e = this.getRandom_Function( - 200, 200),
                n = cc.p(t, e);
                this.node.setPosition(n)
            }
        }),
        cc._RF.pop()
    },
    {}],
    LineGameFruit: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "820c9nOWnlLcYrrd8lXtwCJ", "LineGameFruit"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                sp_FruitSpriteFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                currentFrame: 0,
                playerAnimation: 0
            },
            onLoad: function() {
                this.db_Animation = this.node.getChildByName("db_Animation").getComponent("dragonBones.ArmatureDisplay"),
                this.anArmature = this.db_Animation.armature()
            },
            randomSpriteFrame_Function: function() {
                var t = this.getRandom_Function(0, 6);
                this.setSpriteFrame_Function(t)
            },
            setSpriteFrame_Function: function(t) {
                this.currentFrame = t,
                this.setCurrentFrame_Function(t)
            },
            setCurrentFrame_Function: function(t) {
                this.node.getChildByName("sp_Fruit").getComponent("cc.Sprite").spriteFrame = this.sp_FruitSpriteFrame[t]
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            playerAnimation_Function: function() {
                this.node.getChildByName("sp_Fruit").active = !1,
                this.node.getChildByName("db_Animation").active = !0,
                this.anArmature.animation.play("roll0" + (this.currentFrame + 1), -1)
            }
        }),
        cc._RF.pop()
    },
    {}],
    LineGameMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8b12fYLJYJK8q8wYtPIJWtU", "LineGameMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                pb_Fruit: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Coin: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Star: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_CoinEffect: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Firework: {
                    "default": null,
                    type: cc.Prefab
                },
                vi_View: {
                    "default": null,
                    type: cc.Node
                },
                com_BG: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_MenuButtons: {
                    "default": null,
                    type: cc.Node
                },
                com_GameButtons: {
                    "default": null,
                    type: cc.Node
                },
                com_GameMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_PlatformMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_Lines: {
                    "default": null,
                    type: cc.Node
                },
                com_Help: {
                    "default": null,
                    type: cc.Node
                },
                com_BetSelect: {
                    "default": null,
                    type: cc.Node
                },
                com_AutoSelect: {
                    "default": null,
                    type: cc.Node
                },
                com_GetFreeTimes: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox: {
                    "default": null,
                    type: cc.Node
                },
                bg_Black: {
                    "default": null,
                    type: cc.Node
                },
                au_BGM: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_FruitRoll: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_FruitStop: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_BigWin: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Coin: {
                    "default": null,
                    url: cc.AudioClip
                }
            },
            onLoad: function() {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE),
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.renderer.enableDirtyRegion(!1);
                var e = this;
                cc.view.setResizeCallback(function() {
                    var t = cc.view.getVisibleSize();
                    e.uiResize_Function(t)
                }),
                this.playerInfo = t("PlayerInfo").getInstant,
                this.playerInfo.setGameObj_Function(this),
                this.netWork = t("LineGameNetWork").getInstant,
                this.netWork.setLineGameMainObj_Function(this),
                this.uiInit_Function(),
                this.gameInit_Function()
            },
            uiInit_Function: function() {
                var t = cc.view.getVisibleSize(),
                e = t.width / 1334;
                t.width > 1334 ? (this.com_BG.getChildByName("bg").scaleX = e, this.com_BG.getChildByName("bg").scaleY = e, this.bg_Black.scaleX = e, this.bg_Black.scaleY = e) : t.width < 1334 && (this.node.scaleX = e, this.node.scaleY = e, this.com_BG.getChildByName("bg").scaleX = 1 / e, this.com_BG.getChildByName("bg").scaleY = 1 / e, this.bg_Black.scaleX = 1 / e, this.bg_Black.scaleY = 1 / e, this.com_BG.getChildByName("bgUp").y = (t.height / 2 - this.com_BG.getChildByName("bgUp").height / 2) / e),
                this.com_BG.getChildByName("lb_Jackpot").y = this.com_BG.getChildByName("bgUp").y - 30,
                this.com_PlayerMessage.y = this.com_BG.getChildByName("bgUp").y,
                this.com_GameButtons.y = this.com_BG.getChildByName("bgDown").y,
                this.com_PlatformMessage.y = this.com_BG.getChildByName("bgDown").y,
                this.com_BetSelect.y = this.com_BG.getChildByName("bgDown").y,
                this.com_AutoSelect.y = this.com_BetSelect.y + 20,
                this.com_MenuButtons.y = this.com_PlayerMessage.y
            },
            uiResize_Function: function(t) {
                var e = t.width / 1334;
                t.width > 1334 ? (this.node.scaleX = 1, this.node.scaleY = 1, this.com_BG.getChildByName("bg").scaleX = e, this.com_BG.getChildByName("bg").scaleY = e, this.bg_Black.scaleX = e, this.bg_Black.scaleY = e, this.com_BG.getChildByName("bgUp").y = t.height / 2 - this.com_BG.getChildByName("bgUp").height / 2, this.com_BG.getChildByName("bgDown").y = -t.height / 2 + this.com_BG.getChildByName("bgDown").height / 2) : t.width < 1334 && (this.node.scaleX = e, this.node.scaleY = e, this.com_BG.getChildByName("bg").scaleX = 1 / e, this.com_BG.getChildByName("bg").scaleY = 1 / e, this.bg_Black.scaleX = 1 / e, this.bg_Black.scaleY = 1 / e, this.com_BG.getChildByName("bgUp").y = (t.height / 2 - this.com_BG.getChildByName("bgUp").height / 2) / e, this.com_BG.getChildByName("bgDown").y = ( - t.height / 2 + this.com_BG.getChildByName("bgDown").height / 2) / e),
                this.com_BG.getChildByName("lb_Jackpot").y = this.com_BG.getChildByName("bgUp").y - 30,
                this.com_PlayerMessage.y = this.com_BG.getChildByName("bgUp").y,
                this.com_GameButtons.y = this.com_BG.getChildByName("bgDown").y,
                this.com_PlatformMessage.y = this.com_BG.getChildByName("bgDown").y,
                this.com_BetSelect.y = this.com_BG.getChildByName("bgDown").y,
                this.com_AutoSelect.y = this.com_BetSelect.y + 20,
                this.com_MenuButtons.y = this.com_PlayerMessage.y
            },
            gameInit_Function: function() {
                this.netWork.lineGameSocketOn_Function(),
                this.bg_Black.on("touchstart",
                function(t) {
                    return ! 1
                },
                this),
                this.com_PlayerMessage.getChildByName("lb_PlayerName").getComponent("cc.Label").string = this.playerInfo.playerName,
                this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = this.playerInfo.playerCoin.toFixed(2),
                this.fruitArray = new Array(20);
                for (var t = 0; t < this.fruitArray.length; ++t) this.fruitArray[t] = cc.instantiate(this.pb_Fruit),
                this.vi_View.addChild(this.fruitArray[t]),
                this.fruitArray[t].setPosition( - 468 + 234 * parseInt(t % 5), 150 + parseInt(t / 5) * -150);
                for (this.coinArray = new Array(20), t = 0; t < this.coinArray.length; ++t) this.coinArray[t] = cc.instantiate(this.pb_Coin),
                this.node.addChild(this.coinArray[t]),
                this.coinArray[t].active = !1;
                for (this.starArray = new Array(4 * this.coinArray.length), t = 0; t < this.starArray.length; ++t) this.starArray[t] = cc.instantiate(this.pb_Star),
                this.node.addChild(this.starArray[t]),
                this.starArray[t].active = !1;
                for (this.coinEffectArray = new Array(10), t = 0; t < this.coinEffectArray.length; ++t) this.coinEffectArray[t] = cc.instantiate(this.pb_CoinEffect),
                this.node.addChild(this.coinEffectArray[t]),
                this.coinEffectArray[t].active = !1;
                this.isRolling = !1,
                this.isRollingPause = !1,
                this.rollingTime = 0,
                this.rollContorl = [0, 0, 0, 0, 0],
                this.startRollColumnTime = 0,
                this.stopRollColumnTime = 0,
                this.rollDistance = 100,
                this.isGetResult = !1,
                this.resultArray = [[2, 5, 4, 5, 3], [5, 4, 4, 5, 4], [6, 4, 0, 4, 3]],
                this.checkArray = [[[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]], [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]], [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]], [[0, 0], [1, 1], [2, 2], [1, 3], [0, 4]], [[2, 0], [1, 1], [0, 2], [1, 3], [2, 4]], [[0, 0], [0, 1], [1, 2], [0, 3], [0, 4]], [[2, 0], [2, 1], [1, 2], [2, 3], [2, 4]], [[1, 0], [2, 1], [2, 2], [2, 3], [1, 4]], [[1, 0], [0, 1], [0, 2], [0, 3], [1, 4]]],
                this.betArray = [1, 5, 10, 20, 50, 100, 200, 500, 1e3],
                this.betSelect = 5,
                this.autoArray = [200, 100, 50, 5],
                this.autoTimes = 0,
                this.winScore = 0,
                this.winFreeGameTime = 0,
                this.freeGameTime = this.netWork.freeGameTime,
                this.jackpot = this.netWork.jackpot,
                this.jackpotCount = !0,
                parseInt(this.jackpot / 500) > 100 ? this.jackpotInscrease = 50 : parseInt(this.jackpot / 200) > 100 ? this.jackpotInscrease = 100 : parseInt(this.jackpot / 100) > 100 ? this.jackpotInscrease = 200 : this.jackpotInscrease = 500,
                this.serverPlayerMoney = 0,
                this.drawWinScore = !1,
                this.increaseScore = .5,
                this.coinAppearPosition = cc.p(0, 0),
                this.coinFlyPosition = cc.p(this.com_PlayerMessage.x + this.com_PlayerMessage.getChildByName("lb_PlayerMoney").x + 20, this.com_PlayerMessage.y + this.com_PlayerMessage.getChildByName("lb_PlayerMoney").y),
                this.gameExit = !1,
                this.an_AwardAniamtion = this.com_GameMessage.getChildByName("db_Award").getComponent("dragonBones.ArmatureDisplay"),
                this.an_AwardArmature = this.an_AwardAniamtion.armature(),
                this.an_AwardAniamtion.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.frame_event_Function, this),
                this.an_FireworkAniamtion = this.com_GameMessage.getChildByName("db_Firework").getComponent("dragonBones.ArmatureDisplay"),
                this.an_FireworkArmature = this.an_FireworkAniamtion.armature(),
                this.an_FireworkAniamtion.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.frame_event_Function, this),
                this.lightTime = 0,
                this.fireworkShow = 0,
                this.fireworkLength = 8,
                this.fireworkCoolDown = 0,
                this.fireworkArray = [],
                this.betSelectInit_Function(),
                this.AutoSelectInit_Function(),
                this.playerInfo.musicControl && (this.bgmNumber = cc.audioEngine.play(this.au_BGM, !0, .5))
            },
            frame_event_Function: function(t) {
                switch (t.detail.name) {
                case "start":
                    break;
                case "win":
                    break;
                case "lose":
                    break;
                case "over":
                    break;
                case "award":
                    this.com_GameMessage.getChildByName("db_Award").active = !1,
                    this.com_GameMessage.getChildByName("db_Firework").active = !0,
                    this.an_FireworkAniamtion.playAnimation("firework", -1)
                }
            },
            betSelectInit_Function: function() {
                for (var t = 0; t < 4; ++t) this.com_BetSelect.children[t + 1].getChildByName("Label").getComponent("cc.Label").string = (this.betArray[this.betArray.length - 1 - t] / this.playerInfo.exchangeRate).toFixed(2),
                this.com_BetSelect.children[t + 1].bet = this.betArray.length - 1 - t;
                this.com_BetSelect.children[5].getChildByName("Label").getComponent("cc.Label").string = (this.betArray[2] / this.playerInfo.exchangeRate).toFixed(2),
                this.com_BetSelect.children[5].bet = 2,
                parseFloat(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) >= 50 ? this.betSelect = 5 : this.betSelect = 2,
                this.com_PlatformMessage.getChildByName("lb_Bet").getComponent("cc.Label").string = (this.betArray[this.betSelect] / this.playerInfo.exchangeRate).toFixed(2)
            },
            AutoSelectInit_Function: function() {
                for (var t = 0; t < 4; ++t) this.com_AutoSelect.children[t + 1].getChildByName("Label").getComponent("cc.Label").string = this.autoArray[t],
                this.com_AutoSelect.children[t + 1].auto = t
            },
            changeBet_Function: function(t) {
                this.betSelect = t,
                this.com_PlatformMessage.getChildByName("lb_Bet").getComponent("cc.Label").string = (this.betArray[t] / this.playerInfo.exchangeRate).toFixed(2)
            },
            changeAuto_Function: function(t) {
                this.autoTimes = this.autoArray[t],
                this.com_GameButtons.getChildByName("bt_Auto").active = !1,
                this.com_GameButtons.getChildByName("bt_AutoTimes").active = !0,
                this.com_GameButtons.getChildByName("bt_AutoTimes").getChildByName("Label").getComponent("cc.Label").string = this.autoTimes,
                this.rollStart_Function()
            },
            rollStart_Function: function() {
                if (this.freeGameTime > 0)--this.freeGameTime;
                else {
                    if (! (parseFloat(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) - this.betArray[this.betSelect] / this.playerInfo.exchangeRate > 0)) return void(this.com_GameButtons.getChildByName("bt_Roll").getComponent("cc.Button").interactable = !0);
                    this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) - this.betArray[this.betSelect] / this.playerInfo.exchangeRate).toFixed(2),
                    this.com_PlatformMessage.getChildByName("lb_TotalWin").getComponent("cc.Label").string = (parseFloat(this.com_PlatformMessage.getChildByName("lb_TotalWin").getComponent("cc.Label").string) - this.betArray[this.betSelect] / this.playerInfo.exchangeRate).toFixed(2),
                    this.autoTimes > 0 && (--this.autoTimes, this.com_GameButtons.getChildByName("bt_AutoTimes").getChildByName("Label").getComponent("cc.Label").string = this.autoTimes),
                    this.com_GameButtons.getChildByName("bt_Roll").active = !0,
                    this.com_GameButtons.getChildByName("bt_Roll").getComponent("cc.Button").interactable = !1,
                    this.com_GameButtons.getChildByName("bt_Stop").active = !1,
                    this.com_GameButtons.getChildByName("btEffect").active = !1,
                    this.com_GameButtons.getChildByName("bt_Free").active = !1
                }
                this.isRolling || (this.isRolling = !0, this.gameReset_Function(), this.netWork.lineGameGameSocket.emit("lottery", {
                    bet: this.betSelect,
                    lines: 9
                }), this.scheduleOnce(function() {
                    this.com_GameButtons.getChildByName("bt_Roll").active = !1,
                    this.com_GameButtons.getChildByName("bt_Stop").active = !0,
                    this.com_GameButtons.getChildByName("bt_Stop").getComponent("cc.Button").interactable = !0,
                    this.com_GameButtons.getChildByName("btEffect").active = !0,
                    this.com_GameButtons.getChildByName("bt_Free").active = !1
                },
                .5), this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_FruitRoll, !1, 1))
            },
            fruitMove_Function: function() {
                for (var t = 0; t < this.rollContorl.length; ++t) if (this.rollContorl[t]) for (var e = 0; e < 4; ++e) this.fruitArray[t + 5 * e].setPosition(this.fruitArray[t + 5 * e].x, this.fruitArray[t + 5 * e].y - this.rollDistance),
                this.fruitArray[t + 5 * e].y < -300 && (e < 3 ? this.fruitArray[t + 5 * e].setPosition(this.fruitArray[t + 5 * e].x, this.fruitArray[t + 5 * (e + 1)].y + 150 - this.rollDistance) : this.fruitArray[t + 5 * e].setPosition(this.fruitArray[t + 5 * e].x, this.fruitArray[t].y + 150), this.fruitArray[t + 5 * e].getComponent("LineGameFruit").randomSpriteFrame_Function())
            },
            startRollFruit_Function: function(t) {
                this.startRollColumnTime += t;
                for (var e = 0; e < this.rollContorl.length; ++e) if (this.startRollColumnTime > .1 * e && !this.rollContorl[e]) {
                    this.rollContorl[e] = 1;
                    break
                }
                this.fruitMove_Function()
            },
            stopRollFruit_Function: function(t) {
                if (!this.isGetResult) return void this.disconnectNetWork_Function();
                this.stopRollColumnTime += t;
                for (var e = 0; e < this.rollContorl.length; ++e) if (this.stopRollColumnTime > .1 * e && this.rollContorl[e]) {
                    this.rollContorl[e] = 0;
                    for (var n = 0; n < 4; ++n) n < 3 && this.fruitArray[e + 5 * n].getComponent("LineGameFruit").setSpriteFrame_Function(this.resultArray[n][e]),
                    this.fruitArray[e + 5 * n].setPosition(this.fruitArray[e + 5 * n].x, 150 - 150 * n - 30),
                    this.fruitArray[e + 5 * n].runAction(cc.moveBy(.1, cc.p(0, 30))),
                    this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_FruitStop, !1, 1);
                    break
                }
                this.fruitMove_Function(),
                this.com_GameButtons.getChildByName("bt_Stop").getComponent("cc.Button").interactable = !1;
                for (var i = 0,
                o = 0; o < this.rollContorl.length && !this.rollContorl[o]; ++o)++i;
                5 === i && (this.isRolling = !1, this.checkFruit_Function())
            },
            checkFruit_Function: function() {
                for (var t = 1,
                e = -1,
                n = 0; n < this.checkArray.length; ++n) {
                    t = 1,
                    e = -1;
                    for (var i = 0; i < this.checkArray[0].length; ++i) if (0 === i) e = this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame;
                    else if (6 === e) {
                        if (e !== this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame) {
                            if (t > 2) {
                                this.com_Lines.children[n].active = !0;
                                for (var o = 0; o < i; ++o) this.fruitArray[5 * this.checkArray[n][o][0] + this.checkArray[n][o][1]].getComponent("LineGameFruit").playerAnimation_Function()
                            }
                            break
                        }
                        if (t++, 5 === t) {
                            this.com_Lines.children[n].active = !0;
                            for (var o = 0; o <= i; ++o) this.fruitArray[5 * this.checkArray[n][o][0] + this.checkArray[n][o][1]].getComponent("LineGameFruit").playerAnimation_Function()
                        }
                    } else if (5 === e && 6 !== this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame) e = this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame,
                    t++;
                    else {
                        if (e !== this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame && 5 !== this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame) {
                            if (t > 2) {
                                this.com_Lines.children[n].active = !0;
                                for (var o = 0; o < i; ++o) this.fruitArray[5 * this.checkArray[n][o][0] + this.checkArray[n][o][1]].getComponent("LineGameFruit").playerAnimation_Function()
                            }
                            break
                        }
                        if (t++, 5 === t) {
                            this.com_Lines.children[n].active = !0;
                            for (var o = 0; o <= i; ++o) this.fruitArray[5 * this.checkArray[n][o][0] + this.checkArray[n][o][1]].getComponent("LineGameFruit").playerAnimation_Function()
                        }
                    }
                }
                for (var n = 0; n < this.checkArray.length; ++n) for (t = 1, e = -1, i = 4; i >= 0; --i) if (4 === i) e = this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame;
                else if (6 === e) {
                    if (e !== this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame) {
                        if (t > 2) {
                            this.com_Lines.children[n].active = !0;
                            for (var o = 4; o > i; --o) this.fruitArray[5 * this.checkArray[n][o][0] + this.checkArray[n][o][1]].getComponent("LineGameFruit").playerAnimation_Function()
                        }
                        break
                    }
                    t++
                } else if (5 === e && 6 !== this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame) e = this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame,
                t++;
                else {
                    if (e !== this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame && 5 !== this.fruitArray[5 * this.checkArray[n][i][0] + this.checkArray[n][i][1]].getComponent("LineGameFruit").currentFrame) {
                        if (t > 2) {
                            this.com_Lines.children[n].active = !0;
                            for (var o = 4; o > i; --o) this.fruitArray[5 * this.checkArray[n][o][0] + this.checkArray[n][o][1]].getComponent("LineGameFruit").playerAnimation_Function()
                        }
                        break
                    }
                    t++
                }
                if (this.com_Lines.getComponent("cc.Animation").play("Line"), this.winScore) {
                    var a = 0;
                    this.com_GameMessage.getChildByName("lb_WinScore").active = !0;
                    var s = this.winScore / this.betArray[this.betSelect];
                    a = s >= 10 ? 20 : s >= 8 ? 16 : s >= 6 ? 12 : s >= 4 ? 8 : s >= 2 ? 6 : 4,
                    this.winScore > 1e4 ? this.increaseScore = 20 : this.winScore > 5e3 ? this.increaseScore = 10 : this.winScore > 1e3 ? this.increaseScore = 1 : this.winScore > 500 ? this.increaseScore = .5 : this.increaseScore = .1;
                    var n = 0;
                    this.schedule(function() {
                        this.coinArray[n].active || (this.coinArray[n].active = !0, this.coinArray[n].getComponent("LineGameCoin").setCoinAnimation_Function(this.coinAppearPosition, this.coinFlyPosition, n)),
                        n < this.coinArray.length ? ++n: n = 0
                    },
                    .075, a - 1, 0)
                }
                this.drawWinScore = !0,
                s >= 8 && (this.com_GameMessage.getChildByName("db_Award").active = !0, this.an_AwardAniamtion.playAnimation("award", 1), this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_BigWin, !1, 1), this.fireworkShow = 1)
            },
            drawWinScore_Function: function() {
                this.winScore > 0 ? parseFloat(this.com_GameMessage.getChildByName("lb_WinScore").getComponent("cc.Label").string) + this.increaseScore < this.winScore / this.playerInfo.exchangeRate ? (this.com_GameMessage.getChildByName("lb_WinScore").getComponent("cc.Label").string = (parseFloat(this.com_GameMessage.getChildByName("lb_WinScore").getComponent("cc.Label").string) + this.increaseScore).toFixed(2), this.com_PlatformMessage.getChildByName("lb_WinScore").getComponent("cc.Label").string = this.com_GameMessage.getChildByName("lb_WinScore").getComponent("cc.Label").string, this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) + this.increaseScore).toFixed(2)) : (this.com_GameMessage.getChildByName("lb_WinScore").getComponent("cc.Label").string = (this.winScore / this.playerInfo.exchangeRate).toFixed(2), this.com_PlatformMessage.getChildByName("lb_WinScore").getComponent("cc.Label").string = (this.winScore / this.playerInfo.exchangeRate).toFixed(2), this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (this.serverPlayerMoney / this.playerInfo.exchangeRate).toFixed(2), this.com_PlatformMessage.getChildByName("lb_TotalWin").getComponent("cc.Label").string = (parseFloat(this.com_PlatformMessage.getChildByName("lb_TotalWin").getComponent("cc.Label").string) + this.winScore / this.playerInfo.exchangeRate).toFixed(2), this.drawWinScore = !1) : (this.drawWinScore = !1, this.jackpotCount || (this.com_BG.getChildByName("lb_Jackpot").getComponent("cc.Label").string = this.jackpot)),
                this.drawWinScore || (this.winFreeGameTime ? (this.com_GetFreeTimes.active = !0, this.com_GetFreeTimes.getChildByName("lb_Times").getComponent("cc.Label").string = this.winFreeGameTime, this.com_GetFreeTimes.getComponent("cc.Animation").play(), this.scheduleOnce(function() {
                    this.com_GetFreeTimes.active = !1,
                    this.com_GameButtons.getChildByName("bt_Roll").active = !1,
                    this.com_GameButtons.getChildByName("bt_Free").active = !0,
                    this.com_GameButtons.getChildByName("bt_Stop").active = !1,
                    this.com_GameButtons.getChildByName("bt_Free").getChildByName("Label").getComponent("cc.Label").string = this.winFreeGameTime,
                    this.autoClick_Function()
                },
                1.2)) : this.autoClick_Function())
            },
            autoClick_Function: function() {
                this.autoTimes > 0 || this.freeGameTime > 0 ? this.scheduleOnce(function() {
                    this.com_GameMessage.getChildByName("lb_WinScore").active = !1,
                    this.rollStart_Function()
                },
                1.8) : (this.com_GameButtons.getChildByName("bt_Roll").getComponent("cc.Button").interactable = !0, this.com_GameButtons.getChildByName("bt_Roll").active = !0, this.com_GameButtons.getChildByName("bt_Stop").getComponent("cc.Button").interactable = !0, this.com_GameButtons.getChildByName("bt_Stop").active = !1, this.com_GameButtons.getChildByName("bt_AutoTimes").active = !1, this.com_GameButtons.getChildByName("bt_Auto").active = !0, this.com_GameButtons.getChildByName("bt_Free").active = !1)
            },
            playCoinSound_Function: function() {
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Coin, !1, 1)
            },
            showStar_Function: function(t) {
                for (var e = 0; e < this.starArray.length; ++e) if (!this.starArray[e].active) {
                    this.starArray[e].active = !0,
                    this.starArray[e].setPosition(t),
                    this.starArray[e].getComponent("cc.Animation").play();
                    break
                }
            },
            showCoinEffect_Function: function() {
                for (var t = 0; t < this.coinEffectArray.length; ++t) if (!this.coinEffectArray[t].active) {
                    this.coinEffectArray[t].active = !0,
                    this.coinEffectArray[t].setPosition(this.coinFlyPosition),
                    this.coinEffectArray[t].getComponent("cc.Animation").play();
                    break
                }
            },
            gameReset_Function: function() {
                this.rollingTime = 0,
                this.startRollColumnTime = 0,
                this.stopRollColumnTime = 0,
                this.rollContorl = [0, 0, 0, 0, 0],
                this.winScore = 0,
                this.fireworkShow = 0,
                this.fireworkArray = [];
                for (var t = 0; t < this.fruitArray.length; ++t) this.fruitArray[t].getChildByName("sp_Fruit").active = !0,
                this.fruitArray[t].getChildByName("db_Animation").active = !1;
                for (t = 0; t < this.com_Lines.children.length; ++t) this.com_Lines.children[t].active = !1;
                this.com_PlatformMessage.getChildByName("lb_WinScore").getComponent("cc.Label").string = 0,
                this.com_GameMessage.getChildByName("lb_WinScore").active = !1,
                this.com_GameMessage.getChildByName("lb_WinScore").getComponent("cc.Label").string = 0,
                this.com_GameMessage.getChildByName("db_Award").active = !1,
                this.com_GameMessage.getChildByName("db_Firework").active = !1,
                this.drawWinScore = !1
            },
            jackpotCount_Function: function() {
                parseFloat(this.com_BG.getChildByName("lb_Jackpot").getComponent("cc.Label").string) < this.jackpot ? this.com_BG.getChildByName("lb_Jackpot").getComponent("cc.Label").string = (parseFloat(this.com_BG.getChildByName("lb_Jackpot").getComponent("cc.Label").string) + this.jackpot / this.jackpotInscrease).toFixed(2) : (this.com_BG.getChildByName("lb_Jackpot").getComponent("cc.Label").string = this.jackpot, this.jackpotCount = !1)
            },
            flashLight_Function: function() {
                for (var t = 0; t < this.com_BG.getChildByName("com_Light").children.length; ++t) this.com_BG.getChildByName("com_Light").children[t].getComponent("LIneGameLight").changeLight_Function()
            },
            fireworkShow_Function: function(t) {
                if (this.fireworkCoolDown += t, this.fireworkCoolDown >= .75) {
                    var e;
                    this.fireworkArray.length < this.fireworkLength ? (e = this.fireworkArray.length, this.fireworkArray[e] = cc.instantiate(this.pb_Firework), this.fireworkArray[e].addComponent("LineGameFirework"), this.com_GameMessage.addChild(this.fireworkArray[e]), this.fireworkArray[e].getComponent("LineGameFirework").setColor_Function(), this.fireworkArray[e].getComponent("LineGameFirework").setPosition_Function(), this.fireworkArray[e].getComponent("cc.ParticleSystem").resetSystem(), this.fireworkCoolDown = 0) : this.fireworkArray = []
                }
            },
            checkSelectBet_Function: function() {
                var t = parseFloat(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) >= 50;
                return t
            },
            openMessageBox_Function: function(t, e) {
                this.bg_Black.active = !0,
                this.com_MessageBox.active = !0;
                for (var n = 2; n < this.com_MessageBox.children.length; ++n) this.com_MessageBox.children[n].active = !1;
                switch (e) {
                case 0:
                    this.com_MessageBox.getChildByName("bt_Confirm").active = !0;
                    break;
                case 1:
                    this.com_MessageBox.getChildByName("bt_Reconnect").active = !0
                }
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = t
            },
            disconnectNetWork_Function: function() {
                this.bg_Black.active = !0,
                this.gameExit && this.netWork.lineGameGameSocket.disconnect(),
                this.netWork.lineGameGameSocket = null,
                this.playerInfo.gameDisconnect = !0,
                this.openMessageBox_Function("您已断线，请重新连接", 1)
            },
            exitGame_Function: function() {
                this.gameExit = !0,
                this.netWork.lineGameGameSocket.disconnect(),
                this.netWork.lineGameGameSocket = null,
                cc.audioEngine.stopAll(),
                cc.director.loadScene("LobbyMain")
            },
            update: function(t) {
                this.isRolling && (this.rollingTime < 3 ? (this.startRollFruit_Function(t), this.rollingTime += t) : this.stopRollFruit_Function(t)),
                this.drawWinScore && this.drawWinScore_Function(),
                this.jackpotCount && this.jackpotCount_Function(),
                this.lightTime > .5 ? (this.flashLight_Function(), this.lightTime = 0) : this.lightTime += t,
                this.fireworkShow && this.fireworkShow_Function(t)
            }
        }),
        cc._RF.pop()
    },
    {
        LineGameNetWork: "LineGameNetWork",
        PlayerInfo: "PlayerInfo"
    }],
    LineGameNetWork: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "13d61pRmjpJaIynC1I2HXd0", "LineGameNetWork");
        var i = function() {
            var e = "",
            n = function() {
                this.lobbyMain = null,
                this.lineGame = null,
                this.lineGameGameSocket = null,
                this.tableID = -1,
                this.seatID = -1,
                this.nickName = "",
                this.playerHead = null,
                this.playerList = null,
                this.jackpot = 0,
                this.freeGameTime = 0,
                this.eventOn = !1,
                this.init = function() {
                    this.playerInfo = t("PlayerInfo").getInstant
                },
                this.loginGame_Function = function(e, n, i, o) {
                    var a = this,
                    s = null;
                    null === a.lineGameGameSocket && (cc.sys.isNative ? a.lineGameGameSocket = SocketIO.connect(e + ":" + n) : (s = t("Socket.io"), a.lineGameGameSocket = s(e + ":" + n))),
                    a.lineGameGameSocket.on("connect_error",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("LineGame")
                    }),
                    a.lineGameGameSocket.on("connect_timeout",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("LineGame")
                    }),
                    a.lineGameGameSocket.on("connected",
                    function(t) {
                        if (t) try {
                            a.lineGameGameSocket.emit("LoginGame", {
                                userid: i,
                                gametype: 4,
                                sign: o
                            })
                        } catch(e) {}
                    }),
                    a.lineGameGameSocket.on("loginGameResult",
                    function(t) {
                        t = a.changeResultJSON_Function(t),
                        t.resultid ? (a.lobbyMain.getComponent("LobbyMain").netWork.socket.disconnect(), a.lineGameGameSocket.emit("LoginRoom", {
                            roomid: 1
                        }), a.loginRoom_Function()) : (a.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !1, a.lobbyMain.getComponent("LobbyMain").loadGameScene = !1, a.lobbyMain.getComponent("LobbyMain").bg_Black.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = t.msg, a.eventOn = !0)
                    })
                },
                this.loginRoom_Function = function() {
                    var t = this;
                    t.lineGameGameSocket.on("LoginRoomResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && (t.playerInfo.gameName = "LineGame", t.playerInfo.gameDisconnect = !1, t.tableID = e.ResultData.TableId, t.seatID = e.ResultData.seatId, t.jackpot = e.ResultData.score_pool / t.playerInfo.exchangeRate, t.freeGameTime = e.ResultData.freeCount, cc.audioEngine.stopAll(), cc.director.loadScene("LineGame"))
                    })
                },
                this.lineGameSocketOn_Function = function() {
                    var t = this;
                    t.lineGameGameSocket.on("lotteryResult",
                    function(e) {
                        switch (e = t.changeResultJSON_Function(e), e.ResultCode) {
                        case 1:
                            t.lineGame.isGetResult = !0,
                            t.lineGame.resultArray = e.ResultData.viewarray,
                            t.lineGame.winScore = e.ResultData.winscore,
                            t.lineGame.serverPlayerMoney = e.ResultData.userscore,
                            t.lineGame.jackpot = e.ResultData.score_pool / t.playerInfo.exchangeRate,
                            t.lineGame.freeGameTime = e.ResultData.freeCount,
                            t.lineGame.winFreeGameTime = e.ResultData.winfreeCount
                        }
                    }),
                    t.lineGameGameSocket.on("userGoldUpdate",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.lineGame.getComponent("LineGameMain").UpdatePlayerGold_Function(e.updateSocre / t.playerInfo.exchangeRate)
                    }),
                    t.lineGameGameSocket.on("disconnect",
                    function(e) {
                        t.lineGame.gameExit || t.lineGame.disconnectNetWork_Function()
                    })
                },
                this.setLobbyMainObj_Function = function(t) {
                    this.lobbyMain = t
                },
                this.setLineGameMainObj_Function = function(t) {
                    this.lineGame = t
                },
                this.changeResultJSON_Function = function(t) {
                    if (cc.sys.isNative) {
                        var e = JSON.parse(t);
                        return e
                    }
                    return t
                },
                this.init()
            };
            return e ? {
                getInstant: _kingOfFruit
            }: (e = new n, {
                getInstant: e
            })
        } ();
        e.exports = i,
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo",
        "Socket.io": "Socket.io"
    }],
    LoadCp: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "854c1uTckNFdp6/iT4tps27", "LoadCp"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                cc.log("开始加载资源"),
                cc.view.enableRetina(!1),
                cc.myAssets = {};
                for (var t = ["pics", "prefabs", "fonts", "anims"], e = 0, n = 0; n < t.length; n++) cc.loader.loadResAll(t[n],
                function(n, i, o) {
                    cc.myAssets[t[n]] = o,
                    e++,
                    e >= t.length && cc.director.loadScene("start")
                }.bind(this, n))
            }
        }),
        cc._RF.pop()
    },
    {}],
    LoadingSceneMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cfbdbHtGfRBe66zce2DMRx2", "LoadingSceneMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                com_BG: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.playerInfo = t("PlayerInfo").getInstant,
                this.loadingTime = 5,
                this.preLoadScene_Function(this.playerInfo.gameName)
            },
            preLoadScene_Function: function(t) {
                var e = this;
                cc.director.preloadScene(t,
                function() {
                    e.loadingTime = 0,
                    e.com_BG.getChildByName("pb_Loading").getChildByName("bar").width = 995,
                    cc.director.loadScene(t)
                })
            },
            drawProgressBar_Function: function(t) {
                this.com_BG.getChildByName("pb_Loading").getChildByName("bar").width = 995
            },
            update: function(t) {
                this.loadingTime > 0 && (this.loadingTime -= t, this.drawProgressBar_Function(this.loadingTime))
            }
        }),
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo"
    }],
    LobbyBankSelect: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fc2a2XSO0BP5qsZeZQMlo1I", "LobbyBankSelect"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                this.bankNumber = [[376968, 376969, 400360, 403391, 403392, 376966, 404158, 404159, 404171, 404172, 404173, 404174, 404157, 433667, 433668, 433669, 514906, 403393, 520108, 433666, 558916, 622678, 622679, 622680, 622688, 622689, 628206, 556617, 628209, 518212, 628208, 356390, 356391, 356392, 622916, 622918, 622919, 628370, 628371, 628372], [621660, 621661, 621662, 621663, 621665, 621666, 621667, 621668, 621669, 625908, 625910, 625909, 356833, 356835, 409665, 409666, 409668, 409669, 409670, 409671, 409672, 456351, 512315, 512316, 512411, 512412, 514957, 409667, 518378, 518379, 518474, 518475, 518476, 438088, 524865, 525745, 525746, 547766, 552742, 553131, 558868, 514958, 622752, 622753, 622755, 524864, 622757, 622758, 622759, 622760, 622761, 622762, 622763, 601382, 622756, 628388, 621256, 621212, 620514, 622754, 622764, 518377, 622765, 622788, 621283, 620061, 621725, 620040, 558869, 621330, 621331, 621332, 621333, 621297, 377677, 621568, 621569, 625905, 625906, 625907, 628313, 625333, 628312, 623208, 621620, 621756, 621757, 621758, 621759, 621785, 621786, 621787, 621788, 621789, 621790, 621672, 625337, 625338, 625568, 620025, 620026, 621293, 621294, 621342, 621343, 621364, 621394, 621648, 621248, 621215, 621249, 622750, 622751, 622771, 622772, 622770, 625145, 620531, 620210, 620211, 622479, 622480, 622273, 622274, 620019, 620035, 621231, 622789, 621638, 621334, 625140, 621395], [625826, 625827, 548478, 544243, 622820, 622830, 622838, 625336, 628269], []],
                this.bankName = ["中信银行", "中国银行", "中国农业银行", "中国建设银行", "招商银行", "兴业银行", "交通银行", "华夏银行", "广东发展银行", "光大银行", "浙商银行", "浙江稠州商业银行", "民生银行", "邮政储蓄", "顺德农村信用合作社", "深圳发展银行", "上海银行", "上海农村商业银行", "浦东发展银行", "平安银行", "南京银行", "杭州银行"]
            },
            checkBankName_Function: function(t) {}
        }),
        cc._RF.pop()
    },
    {}],
    LobbyButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "042ef7BDDxCbq9iTwpuVuBf", "LobbyButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            loginButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_Login.getChildByName("eb_Account").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_Login.getChildByName("eb_Password").getComponent("cc.EditBox").string;
                if (this.canvasNode.getComponent("LobbyMain").netWork.loginClick = !0, "" !== t && "" !== e) {
                    this.canvasNode.getComponent("LobbyMain").netWork.logouAccount_Function();
                    var n = this;
                    setTimeout(function() {
                        n.canvasNode.getComponent("LobbyMain").netWork.accountChange = !0,
                        n.canvasNode.getComponent("LobbyMain").netWork.loginAccount_Function(n.canvasNode.getComponent("LobbyMain").playerInfo.loginIp, t, e)
                    },
                    3e3),
                    this.node.getComponent("cc.Button").interactable = !1
                }
            },
            LoginMenuExitButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_Login.active = !1,
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1
            },
            playerInfoButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.active = !0,
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !0
            },
            mallButtonClick_Function: function() {
                switch (this.canvasNode.getComponent("LobbyMain").bg_Black.active = !0, this.canvasNode.getComponent("LobbyMain").playerInfo.lobbySelect) {
                case 0:
                    this.canvasNode.getComponent("LobbyMain").com_Mall.active = !0,
                    this.canvasNode.getComponent("LobbyMain").com_Mall.getChildByName("lb_PlayerId").getComponent("cc.Label").string = "ID: " + this.canvasNode.getComponent("LobbyMain").playerInfo.playerId;
                    break;
                case 1:
                    this.canvasNode.getComponent("LobbyMain").com_IOSMall.active = !0
                }
            },
            mallMenuBackButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1,
                this.canvasNode.getComponent("LobbyMain").com_Mall.active = !1,
                this.canvasNode.getComponent("LobbyMain").com_IOSMall.active = !1
            },
            mallMenuRechangeButtonClick_Function: function() {
                var t = 0;
                switch (this.node.rechargeId) {
                case 0:
                    t = 0;
                    break;
                case 1:
                    t = 1;
                    break;
                case 2:
                    t = 2;
                    break;
                case 3:
                    t = 3
                }
                var e = this.canvasNode.getComponent("LobbyMain").rechargeMoneyArray[t];
                this.canvasNode.getComponent("LobbyMain").com_Mall.getChildByName("eb_RechargeMoney").getComponent("cc.EditBox").string = e.toString()
            },
            mallMenuAliPayButtonClick_Function: function() {
                var t = parseInt(this.canvasNode.getComponent("LobbyMain").com_Mall.getChildByName("eb_RechargeMoney").getComponent("cc.EditBox").string);
                t < 10 || !t || this.canvasNode.getComponent("LobbyMain").pay_Function(t, null, 1)
            },
            mallMenuWeChatPayButtonClick_Function: function() {
                var t = parseInt(this.canvasNode.getComponent("LobbyMain").com_Mall.getChildByName("eb_RechargeMoney").getComponent("cc.EditBox").string);
                t < 10 || !t || this.canvasNode.getComponent("LobbyMain").pay_Function(t, null, 0)
            },
            mallMenuQuickPayButtonClick_Function: function() {},
            rechargeWebViewCloseButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_Mall.getChildByName("com_RechargeWeb").active = !1
            },
            mailButtonClick_Function: function() {},
            settingButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !0,
                this.canvasNode.getComponent("LobbyMain").com_Setting.active = !0
            },
            settingMenuCloseButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1,
                this.canvasNode.getComponent("LobbyMain").com_Setting.active = !1
            },
            settingMenuMusicButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").settingControlButtonClick_Function(this.node, 0)
            },
            settingMenuSoundEffectButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").settingControlButtonClick_Function(this.node, 1)
            },
            settingMenuExitButtonClick_Function: function() {
                cc.game.end()
            },
            shareButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").playerInfo.guest.split("_");
                this.canvasNode.getComponent("LobbyMain").playerInfo.shareUrl ? cc.sys.openURL(this.canvasNode.getComponent("LobbyMain").playerInfo.shareUrl + "?channel=" + t[0]) : cc.sys.openURL("https://www.f18887.com?channel=" + t[0])
            },
            activityButtonClick_Function: function() {},
            exchangeButtonClick_Function: function() {
                return this.canvasNode.getComponent("LobbyMain").bg_Black.active = !0,
                this.canvasNode.getComponent("LobbyMain").playerInfo.isOffical ? this.canvasNode.getComponent("LobbyMain").playerInfo.aliAccount ? (this.canvasNode.getComponent("LobbyMain").com_Withdraw.active = !0, this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("lb_OwnMoney").getComponent("cc.Label").string = this.canvasNode.getComponent("LobbyMain").playerInfo.playerCoin, void(this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("eb_WithdrawMoney").getComponent("cc.EditBox").string = "")) : (this.canvasNode.getComponent("LobbyMain").com_MessageBox_Withdraw.active = !0, void(this.canvasNode.getComponent("LobbyMain").com_MessageBox_Withdraw.getChildByName("lb_Tips").getComponent("cc.Label").string = "兑现必须绑定支付宝，要前去绑定账号吗？")) : (this.canvasNode.getComponent("LobbyMain").com_MessageBox_Withdraw.active = !0, void(this.canvasNode.getComponent("LobbyMain").com_MessageBox_Withdraw.getChildByName("lb_Tips").getComponent("cc.Label").string = "兑现必须绑定账号，要前去绑定账号吗？"))
            },
            exchangeMenuCloseButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1,
                this.canvasNode.getComponent("LobbyMain").com_Exchange.active = !1
            },
            customerServiceButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !0,
                this.canvasNode.getComponent("LobbyMain").com_CustomerService.active = !0
            },
            customerServiceMenuSendButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_CustomerService.getChildByName("eb_Chat").getComponent("cc.EditBox").string;
                "" !== t && (this.canvasNode.getComponent("LobbyMain").sendMessage = t, this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("sendMsgToUser", {
                    userId: 10,
                    msg: t
                })),
                this.canvasNode.getComponent("LobbyMain").com_CustomerService.getChildByName("eb_Chat").getComponent("cc.EditBox").string = ""
            },
            customerServiceMenuCloseButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1,
                this.canvasNode.getComponent("LobbyMain").com_CustomerService.active = !1
            },
            fishButtonClick_Function: function() {
                cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[2] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("Fish") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Fish")
            },
            bdeButtonClick_Function: function() {
                cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[4] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("Bde") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Bde")
            },
            twoEightButtonClick_Function: function() {
                cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[5] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("TwoEight") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_TwoEight")
            },
            bullButtonClick_Function: function() {
                cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[3] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("Bull") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_Bull")
            },
            grabBullButtonClick_Function: function() {
                cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[1] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("GrabBull") : this.canvasNode.getComponent("LobbyMain").gameMenuButtonClick_Function("com_GrabBull")
            },
            kingOfFruitButtonClick_Function: function() {
                cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[6] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("KingOfFruit") : this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "KingOfFruit")
            },
            lineGameButtonClick_Function: function() {
                cc.sys.isNative && this.canvasNode.getComponent("LobbyMain").playerInfo.needToUpdate[6] ? this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("LineGame") : this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "LineGame")
            },
            gameMenuBackButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").gameMenuBackButtonClick_Function()
            },
            grabBullRoomButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "GrabBull")
            },
            bdeRoomButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "Bde")
            },
            twoEightRoomButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "TwoEight")
            },
            fishRoomButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "Fish")
            },
            bullRoomButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "Bull")
            },
            kingOfFruitRoomButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").loginGameRoom_Function(this, "KingOfFruit")
            },
            updateMessageBoxConfirmButtonClick_Function: function() {
                this.node.active = !1,
                this.node.parent.getChildByName("bt_Close").active = !1,
                this.canvasNode.getComponent("LobbyMain").checkUpdate_Function("")
            },
            updateMessageBoxCloseuttonClick_Function: function() {
                this.canvasNode.getComponent("GameUpdate").gameName = "",
                this.canvasNode.getComponent("LobbyMain").com_UpdateMessageBox.active = !1,
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1
            },
            messageBoxConfirmButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_MessageBox.active = !1,
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1
            },
            reconnetedButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "正在重新连接",
                this.canvasNode.getComponent("LobbyMain").reconntetedGame_Function()
            },
            changeButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").playerInfo.playerId;
                this.canvasNode.getComponent("LobbyMain").pay_Function(0, this.node.id, 2)
            },
            playerInfoMenuBackButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.active = !1,
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1
            },
            playerInfoMenuCreateAccountButtonClick_Function: function() {
                this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_CreateAccount")
            },
            playerInfoMenuChangeNameButtonClick_Function: function() {
                this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_ChangeName")
            },
            playerInfoMenuChangeAccountButtonClick_Function: function() {
                this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_ChangeAccount")
            },
            playerInfoMenuBindAliButtonClick_Function: function() {
                this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_BindAli")
            },
            playerInfoMenuBindedAliButtonClick_Function: function() {
                this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_BindedAli")
            },
            playerInfoMenuBindCreditCardButtonClick_Function: function() {
                this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_BindCreditCard")
            },
            playerInfoMenuBindedCreditCardButtonClick_Function: function() {
                this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_BindedCreditCard")
            },
            playerInfoMenuChangePasswordButtonClick_Function: function() {
                this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_ChangePassword")
            },
            playerInfoMenuBindPhoneButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").playerInfo.phoneNumber ? this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_BindedPhone") : this.playerInfoButtonsAndComponentChange_Function(this.canvasNode, this.node, "com_BindPhone")
            },
            playerInfoButtonsAndComponentChange_Function: function(t, e, n) {
                for (var i = 2; i < 12; ++i) t.getComponent("LobbyMain").com_PlayerInfo.children[i].getComponent("cc.Button").interactable = !0;
                for (e.getComponent("cc.Button").interactable = !1, i = 12; i < t.getComponent("LobbyMain").com_PlayerInfo.children.length; ++i) t.getComponent("LobbyMain").com_PlayerInfo.children[i].active = !1;
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName(n).active = !0
            },
            createAccountMenuCreateButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("eb_Account").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("eb_Password").getComponent("cc.EditBox").string,
                n = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("eb_PasswordConfirm").getComponent("cc.EditBox").string;
                if (this.editBoxEditingBegin_Function("createAccount"), t && e && n) {
                    if (t.length < 6) return void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("lb_Tips0").getComponent("cc.Label").string = "账号至少6个数字或字母");
                    if (e.length < 6) return void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("lb_Tips1").getComponent("cc.Label").string = "密码至少6个数字或字母");
                    if (e !== n) return void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("lb_Tips2").getComponent("cc.Label").string = "密码与确认密码不一致");
                    this.node.getComponent("cc.Button").interactable = !1,
                    this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("changeOfficial", {
                        newAccount: t,
                        password: e
                    })
                }
            },
            changeNameMenuChangeButtonClick_Function: function() {
                if ("" !== this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeName").getChildByName("eb_Name").getComponent("cc.EditBox").string) {
                    var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeName").getChildByName("eb_Name").getComponent("cc.EditBox").string;
                    this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("updateNickName", {
                        newNickName: t
                    }),
                    this.node.getComponent("cc.Button").interactable = !1
                }
            },
            changeAccountMenuChangeButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("eb_Account").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("eb_Password").getComponent("cc.EditBox").string;
                if (this.canvasNode.getComponent("LobbyMain").netWork.loginClick = !0, this.canvasNode.getComponent("LobbyMain").playerInfo.isOffical) {
                    if ("" !== t && "" !== e) {
                        var n = this;
                        this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.active = !1,
                        this.node.getComponent("cc.Button").interactable = !1,
                        this.canvasNode.getComponent("LobbyMain").com_Tips.getChildByName("sp_Logining").active = !0,
                        setTimeout(function() {
                            n.canvasNode.getComponent("LobbyMain").netWork.logouAccount_Function(),
                            n.canvasNode.getComponent("LobbyMain").netWork.accountChange = !0,
                            n.canvasNode.getComponent("LobbyMain").netWork.loginAccount_Function(n.canvasNode.getComponent("LobbyMain").playerInfo.loginIp, t, e),
                            n.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("bt_PlayerInfoBack").getComponent("cc.Button").interactable = !1
                        },
                        2e3)
                    }
                } else this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("com_MessageBox").active = !0,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("com_RegisterMessageBox").active = !1
            },
            changeAccountMenuMessageBoxConfirmButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("eb_Account").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("eb_Password").getComponent("cc.EditBox").string;
                this.canvasNode.getComponent("LobbyMain").netWork.loginClick = !0,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("com_MessageBox").active = !1;
                var n = this;
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.active = !1,
                this.node.getComponent("cc.Button").interactable = !1,
                this.canvasNode.getComponent("LobbyMain").com_Tips.getChildByName("sp_Logining").active = !0,
                setTimeout(function() {
                    n.canvasNode.getComponent("LobbyMain").netWork.logouAccount_Function(),
                    n.canvasNode.getComponent("LobbyMain").netWork.accountChange = !0,
                    n.canvasNode.getComponent("LobbyMain").netWork.loginAccount_Function(n.canvasNode.getComponent("LobbyMain").playerInfo.loginIp, t, e),
                    n.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("bt_PlayerInfoBack").getComponent("cc.Button").interactable = !1
                },
                2e3)
            },
            changeAccountMenuMessageBoxCancelButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("com_MessageBox").active = !1
            },
            changeAccountMenuRegisterButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("com_MessageBox").active = !1,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("com_RegisterMessageBox").active = !0
            },
            changeAccountMenuForgotButtonClick_Function: function() {},
            registerMessageBoxBackButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("com_RegisterMessageBox").active = !1
            },
            registerMessageBoxConfirmButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.active = !1,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("com_RegisterMessageBox").active = !1,
                this.canvasNode.getComponent("LobbyRegister").registerAccount_Function(this.canvasNode.getComponent("LobbyMain").playerInfo.loginIp, !1)
            },
            bindAliMenuBindButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_Account").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_AccountConfirm").getComponent("cc.EditBox").string,
                n = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_Name").getComponent("cc.EditBox").string;
                this.editBoxEditingBegin_Function("bindAli"),
                t && e && n && (t === e ? (this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("bindZhifubao", {
                    zhifubao: t,
                    name: n
                }), this.node.getComponent("cc.Button").interactable = !1) : this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindAli").getChildByName("lb_Tips0").getComponent("cc.Label").string = "账号与确认账号不一致")
            },
            bindedAliChangeButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindedAli").active = !1,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAli").active = !0,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAli").getChildByName("eb_Account").getComponent("cc.EditBox").string = "",
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAli").getChildByName("eb_AccountConfirm").getComponent("cc.EditBox").string = "",
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAli").getChildByName("eb_Name").getComponent("cc.EditBox").string = ""
            },
            changeAliAccountSubmitButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAli").getChildByName("eb_Account").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAli").getChildByName("eb_AccountConfirm").getComponent("cc.EditBox").string,
                n = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAli").getChildByName("eb_Name").getComponent("cc.EditBox").string;
                this.editBoxEditingBegin_Function("changeAli"),
                t && e && n && (t === e ? this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("bindZhifubao", {
                    zhifubao: t,
                    name: n
                }) : this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindAli").getChildByName("lb_Tips0").getComponent("cc.Label").string = "账号与确认账号不一致")
            },
            changeAliAccountBackButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindedAli").active = !0,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAli").active = !1
            },
            bindCreditCardSelectBankButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("sv_SelectBank").active ? this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("sv_SelectBank").active = !1 : this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("sv_SelectBank").active = !0
            },
            bindCreditCardMenuSubmitButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("eb_Owner").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("eb_CardNo").getComponent("cc.EditBox").string,
                n = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("eb_CardNoConfirm").getComponent("cc.EditBox").string;
                t && e && n ? e === n ? this.canvasNode.getComponent("LobbyMain").bankSelect > 0 ? (this.canvasNode.getComponent("LobbyMain").creditCardObj = {
                    account: e,
                    bankType: this.canvasNode.getComponent("LobbyMain").bankSelect,
                    cardId: 0,
                    name: t,
                    userId: this.canvasNode.getComponent("LobbyMain").playerInfo.playerId
                },
                this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("BankInfo", {
                    act: 1,
                    account: e,
                    name: t,
                    bankType: this.canvasNode.getComponent("LobbyMain").bankSelect
                })) : this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("lb_Tips0").getComponent("cc.Label").string = "请选择银行卡类型": this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("lb_Tips0").getComponent("cc.Label").string = "信用卡号与确认卡号不一致": this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("lb_Tips0").getComponent("cc.Label").string = "请正确输入持卡人与卡号"
            },
            bindCreditCardMenuBackButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").active = !1,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindCreditCard").active = !0
            },
            bindCreditCardMenuEditButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").editCardId = this.node.cardId,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindCreditCard").active = !1,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").active = !0;
                for (var t = 0; t < this.canvasNode.getComponent("LobbyMain").bankList.length; ++t) if (this.node.cardId === this.canvasNode.getComponent("LobbyMain").bankList[t].cardId) {
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("eb_CardNo").getComponent("cc.EditBox").string = this.canvasNode.getComponent("LobbyMain").bankList[t].account,
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("eb_CardNoConfirm").getComponent("cc.EditBox").string = this.canvasNode.getComponent("LobbyMain").bankList[t].account,
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("eb_Owner").getComponent("cc.EditBox").string = this.canvasNode.getComponent("LobbyMain").bankList[t].name,
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("bt_SelectBank").getComponent("cc.Sprite").spriteFrame = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("sv_SelectBank").getComponent("cc.ScrollView").content.children[this.canvasNode.getComponent("LobbyMain").bankList[t].bankType].getComponent("cc.Sprite").spriteFrame,
                    this.canvasNode.getComponent("LobbyMain").bankSelect = this.canvasNode.getComponent("LobbyMain").bankList[t].bankType;
                    break
                }
            },
            bindCreditCardMenuAddButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindCreditCard").active = !1,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").active = !0,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("eb_CardNo").getComponent("cc.EditBox").string = "",
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("eb_CardNoConfirm").getComponent("cc.EditBox").string = "",
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("eb_Owner").getComponent("cc.EditBox").string = "",
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("bt_SelectBank").getComponent("cc.Sprite").spriteFrame = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("sv_SelectBank").getComponent("cc.ScrollView").content.children[0].getComponent("cc.Sprite").spriteFrame
            },
            editCreditCardSelectBankButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("sv_SelectBank").active ? this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("sv_SelectBank").active = !1 : this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("sv_SelectBank").active = !0
            },
            editCreditCardBanSelectkButtonClick_Function: function() {
                return this.canvasNode.getComponent("LobbyMain").bankSelect = this.node.bankId,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").active ? (this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("sv_SelectBank").active = !1, void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("bt_SelectBank").getComponent("cc.Sprite").spriteFrame = this.node.getComponent("cc.Sprite").spriteFrame)) : this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").active ? (this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("sv_SelectBank").active = !1, void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("bt_SelectBank").getComponent("cc.Sprite").spriteFrame = this.node.getComponent("cc.Sprite").spriteFrame)) : void 0
            },
            editCreditCardBackButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindCreditCard").active = !0,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").active = !1,
                this.canvasNode.getComponent("LobbyMain").bankSelect = -1
            },
            editCreditCardEditConfirmButtonClick_Function: function() {
                this.editBoxEditingBegin_Function("editCreditCard");
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("eb_Owner").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("eb_CardNo").getComponent("cc.EditBox").string,
                n = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("eb_CardNoConfirm").getComponent("cc.EditBox").string;
                t && e && n ? e === n ? this.canvasNode.getComponent("LobbyMain").bankSelect > 0 ? this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("BankInfo", {
                    act: 2,
                    cardId: this.canvasNode.getComponent("LobbyMain").editCardId,
                    account: e,
                    name: t,
                    bankType: this.canvasNode.getComponent("LobbyMain").bankSelect
                }) : this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("lb_Tips0").getComponent("cc.Label").string = "请选择银行卡类型": this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("lb_Tips0").getComponent("cc.Label").string = "信用卡号与确认卡号不一致": this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("lb_Tips0").getComponent("cc.Label").string = "请正确输入持卡人与卡号"
            },
            editCreditCardDeleteButtonClick_FunctionF: function() {
                this.canvasNode.getComponent("LobbyMain").messageBoxCallBack_Function("您确定要删除此银行卡吗？", 1, 1)
            },
            bindPhoneGetCodeButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindPhone").getChildByName("eb_PhoneNumber").getComponent("cc.EditBox").string;
                t.length < 11 || (this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("sendbindPhoneNo", {
                    phoneNo: parseInt(t)
                }), this.canvasNode.getComponent("LobbyMain").codeTimeCount = !0, this.canvasNode.getComponent("LobbyMain").getCodeTime = 60, this.node.getComponent("cc.Button").interactable = !1, this.node.children[0].getComponent("cc.Label").string = 60)
            },
            bindPhoneSubmitButtonClick_Function: function() {
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindPhone").getChildByName("eb_PhoneNumber").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindPhone").getChildByName("eb_Code").getComponent("cc.EditBox").string;
                t.length < 11 || e.length < 4 || this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("bindPhone", {
                    phoneNo: parseInt(t),
                    checkNo: parseInt(e)
                })
            },
            changePasswordMenuChangeButtonClick_Function: function() {
                if (!this.canvasNode.getComponent("LobbyMain").playerInfo.isOffical) return void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("lb_Tips1").getComponent("cc.Label").string = "修改密码前必须转正账号");
                var t = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("eb_OldPassword").getComponent("cc.EditBox").string,
                e = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("eb_NewPassword").getComponent("cc.EditBox").string,
                n = this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("eb_PasswordConfirm").getComponent("cc.EditBox").string;
                if (this.editBoxEditingBegin_Function("changePassword"), t && e && n) {
                    if (t === e) return void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("lb_Tips1").getComponent("cc.Label").string = "旧密码与新密码相同");
                    if (e.length < 6) return void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("lb_Tips2").getComponent("cc.Label").string = "密码至少6个数字或字母");
                    if (e !== n) return void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("lb_Tips2").getComponent("cc.Label").string = "密码与确认密码不一致");
                    this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("updatePassword", {
                        oldPassword: t,
                        password: e
                    }),
                    this.node.getComponent("cc.Button").interactable = !1;
                }
            },
            editBoxEditingBegin_Function: function(t) {
                switch (t) {
                case "createAccount":
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("lb_Tips0").getComponent("cc.Label").string = "",
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("lb_Tips1").getComponent("cc.Label").string = "",
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("lb_Tips2").getComponent("cc.Label").string = "";
                    break;
                case "changeName":
                    break;
                case "bindAli":
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindAli").getChildByName("lb_Tips0").getComponent("cc.Label").string = "";
                    break;
                case "changePassword":
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("lb_Tips1").getComponent("cc.Label").string = "",
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("lb_Tips2").getComponent("cc.Label").string = "";
                    break;
                case "bindCreditCard":
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindCreditCard").getChildByName("lb_Tips0").getComponent("cc.Label").string = "";
                    break;
                case "editCreditCard":
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("lb_Tips0").getComponent("cc.Label").string = "";
                    break;
                case "changeAli":
                    this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindAli").getChildByName("lb_Tips0").getComponent("cc.Label").string = ""
                }
            },
            withdrawBackButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1,
                this.canvasNode.getComponent("LobbyMain").com_Withdraw.active = !1
            },
            withdrawExchangeButtonClick_Function: function() {
                var t = parseFloat(this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("eb_WithdrawMoney").getComponent("cc.EditBox").string),
                e = parseFloat(this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("lb_OwnMoney").getComponent("cc.Label").string);
                if (t < 50 || isNaN(t) || e <= 58) return void(this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("eb_WithdrawMoney").getComponent("cc.EditBox").string = "提现失败，请阅读温馨提示");
                if (t >= 5e4) return void(this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("eb_WithdrawMoney").getComponent("cc.EditBox").string = "提现失败，请阅读温馨提示");
                switch (this.canvasNode.getComponent("LobbyMain").withdrawAccountSelect) {
                case 0:
                    this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("scoreOut", {
                        score: t * this.canvasNode.getComponent("LobbyMain").playerInfo.exchangeRate,
                        type: this.canvasNode.getComponent("LobbyMain").withdrawAccountSelect
                    });
                    break;
                case 1:
                    this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("scoreOut", {
                        score: t * this.canvasNode.getComponent("LobbyMain").playerInfo.exchangeRate,
                        type: this.canvasNode.getComponent("LobbyMain").withdrawAccountSelect,
                        cardId: this.canvasNode.getComponent("LobbyMain").withdrawBankId
                    });
                    break;
                default:
                    this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("eb_WithdrawMoney").getComponent("cc.EditBox").string = "提现失败，请选择兑奖账号"
                }
            },
            withdrawAccountButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("sv_Account").active ? this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("sv_Account").active = !1 : this.canvasNode.getComponent("LobbyMain").com_Withdraw.getChildByName("sv_Account").active = !0
            },
            withdrawAccountSelectButtonClick_Function: function() {
                this.canvasNode.com_Withdraw.getChildByName("bt_Account").getChildByName("lb_Account").getComponent("cc.Label").string = this.node.getChildByName("Label").getComponent("cc.Label").string,
                this.canvasNode.withdrawAccountSelect = this.node.selectId,
                this.node.selectId ? (this.canvasNode.withdrawBankId = this.node.cardId, this.canvasNode.com_Withdraw.getChildByName("lb_AccountType").getComponent("cc.Label").string = this.canvasNode.getComponent("LobbyMain").bankNameList[this.node.bankType]) : this.canvasNode.com_Withdraw.getChildByName("lb_AccountType").getComponent("cc.Label").string = "支付宝",
                this.canvasNode.com_Withdraw.getChildByName("sv_Account").active = !1
            },
            withdrawEditBoxEditBegan_Function: function() {
                this.node.getComponent("cc.EditBox").string = ""
            },
            withdrawEditBoxEditEnded_Function: function() {
                if (this.node.getComponent("cc.EditBox").string) {
                    var t = parseInt(this.node.getComponent("cc.EditBox").string);
                    if (isNaN(t)) return void(this.node.getComponent("cc.EditBox").string = "");
                    this.node.getComponent("cc.EditBox").string = t
                }
            },
            withdrawPhoneCardButtonClick_Function: function() {
                return this.canvasNode.getComponent("LobbyMain").bg_Black.active = !0,
                this.canvasNode.getComponent("LobbyMain").playerInfo.phoneNumber ? void(this.canvasNode.getComponent("LobbyMain").com_WithdrawPhoneCard.active = !0) : (this.canvasNode.getComponent("LobbyMain").com_MessageBox_Withdraw.active = !0, void(this.canvasNode.getComponent("LobbyMain").com_MessageBox_Withdraw.getChildByName("lb_Tips").getComponent("cc.Label").string = "兑现必须绑定电话号码，要前去绑定账号吗？"))
            },
            WithdrawPhoneCardCloseButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1,
                this.canvasNode.getComponent("LobbyMain").com_WithdrawPhoneCard.active = !1
            },
            WithdrawPhoneCardExchangeButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").reChargePhoneCard_Function(this)
            },
            messageBoxCBConfirmButtonClick_Function: function() {
                switch (this.canvasNode.getComponent("LobbyMain").com_MessageBox_CB.active = !1, this.canvasNode.getComponent("LobbyMain").operationType) {
                case 1:
                    this.canvasNode.getComponent("LobbyMain").netWork.socket.emit("BankInfo", {
                        act: 3,
                        cardId: this.canvasNode.getComponent("LobbyMain").editCardId
                    })
                }
            },
            messageBoxCBCancelButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_MessageBox_CB.active = !1
            },
            messageBoxLFConfirmButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_MessageBox_LoginFail.active = !1,
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1
            },
            messageBoxWithdrawConfirmClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_MessageBox_Withdraw.active = !1,
                this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.active = !0;
                for (var t = 2; t < 12; ++t) this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.children[t].getComponent("cc.Button").interactable = !0;
                for (t = 12; t < this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.children.length; ++t) this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.children[t].active = !1;
                return this.canvasNode.getComponent("LobbyMain").playerInfo.isOffical ? this.canvasNode.getComponent("LobbyMain").playerInfo.aliAccount ? this.canvasNode.getComponent("LobbyMain").playerInfo.phoneNumber ? void 0 : (this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("bt_BindPhone").getComponent("cc.Button").interactable = !1, void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindPhone").active = !0)) : (this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("bt_BindAli").getComponent("cc.Button").interactable = !1, void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_BindAli").active = !0)) : (this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("bt_CreateAccount").getComponent("cc.Button").interactable = !1, void(this.canvasNode.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_CreateAccount").active = !0))
            },
            messageBoxWithdrawCancelButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_MessageBox_Withdraw.active = !1,
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1
            },
            messageBoxNoMoneyConfirmButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_MessageBox_NoMoney.active = !1,
                this.mallButtonClick_Function()
            },
            messageBoxNoMoneyCancelButtonClick_Function: function() {
                this.canvasNode.getComponent("LobbyMain").com_MessageBox_NoMoney.active = !1,
                this.canvasNode.getComponent("LobbyMain").bg_Black.active = !1
            }
        }),
        cc._RF.pop()
    },
    {}],
    LobbyMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "03986Xn56dEOrZCM9wTLUCg", "LobbyMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                pb_Chat0: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Chat1: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_EditCardInfo: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_WithdrawAccountSelect: {
                    "default": null,
                    type: cc.Prefab
                },
                com_BG: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_Button: {
                    "default": null,
                    type: cc.Node
                },
                com_SystemMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_Mall: {
                    "default": null,
                    type: cc.Node
                },
                com_IOSMall: {
                    "default": null,
                    type: cc.Node
                },
                com_Withdraw: {
                    "default": null,
                    type: cc.Node
                },
                com_WithdrawPhoneCard: {
                    "default": null,
                    type: cc.Node
                },
                com_Exchange: {
                    "default": null,
                    type: cc.Node
                },
                com_CustomerService: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerInfo: {
                    "default": null,
                    type: cc.Node
                },
                com_Tips: {
                    "default": null,
                    type: cc.Node
                },
                com_Setting: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox_CB: {
                    "default": null,
                    type: cc.Node
                },
                com_UpdateMessageBox: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox_LoginFail: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox_NoMoney: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox_Withdraw: {
                    "default": null,
                    type: cc.Node
                },
                bg_Black: {
                    "default": null,
                    type: cc.Node
                },
                au_LobbyBGM: {
                    "default": null,
                    url: cc.AudioClip
                },
                sp_OnAndOff: {
                    "default": [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {
                cc.sys.isNative && cc.Device.setKeepScreenOn(!0),
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE),
                cc._renderType === cc.game.RENDER_TYPE_CANVAS && cc.renderer.enableDirtyRegion(!1);
                var e = this;
                cc.view.setResizeCallback(function() {
                    e.uiResize_Function()
                }),
                this.bg_Black.on("touchstart",
                function(t) {
                    return ! 1
                },
                this),
                this.disconneted = !1,
                this.playerInfo = t("PlayerInfo").getInstant,
                this.playerInfo.setGameObj_Function(this),
                this.netWork = t("LobbyNetWork"),
                this.netWork.setLobbyMainObj_Function(this),
                this.netWork.netWorkInit_Function(),
                this.netWorkTimeCount = 0,
                this.tempNetWork = null,
                this.md5 = t("md5").getInstant,
                this.uiInit_Function()
            },
            uiInit_Function: function() {
                var t = cc.director.getVisibleSize(),
                e = t.width / 1334;
                t.width > 1334 ? (this.com_BG.getChildByName("bg").scaleX = e, this.com_BG.getChildByName("bg").scaleY = e, this.com_BG.getChildByName("roomselectbg").scaleX = e, this.com_BG.getChildByName("roomselectbg").scaleY = e, this.com_BG.getChildByName("bgUp").scaleX = e, this.com_BG.getChildByName("bgDown").scaleX = e, this.bg_Black.scaleX = e, this.bg_Black.scaleY = e, this.com_Button.getChildByName("bt_Share").x = t.width / 2 - this.com_Button.getChildByName("bt_Share").width / 2) : t.width < 1334 && (this.node.scaleX = e, this.node.scaleY = e, this.com_BG.getChildByName("bg").scaleX = 1 / e, this.com_BG.getChildByName("bg").scaleY = 1 / e, this.com_BG.getChildByName("roomselectbg").scaleX = 1 / e, this.com_BG.getChildByName("roomselectbg").scaleY = 1 / e, this.com_BG.getChildByName("bgUp").scaleX = 1 / e, this.com_BG.getChildByName("bgDown").scaleX = 1 / e, this.bg_Black.scaleX = 1 / e, this.bg_Black.scaleY = 1 / e, this.com_BG.getChildByName("bgUp").y = (t.height / 2 - this.com_BG.getChildByName("bgUp").height / 2) / e, this.com_BG.getChildByName("bgDown").y = ( - t.height / 2 + this.com_BG.getChildByName("bgDown").height / 2) / e, this.com_BG.getChildByName("bgUpNameFrame").y = this.com_BG.getChildByName("bgUp").y - 1, this.com_BG.getChildByName("bgUpCoinFrame").y = this.com_BG.getChildByName("bgUpNameFrame").y, this.com_BG.getChildByName("bgUpTicketFrame").y = this.com_BG.getChildByName("bgUpNameFrame").y, this.com_BG.getChildByName("bgCoin").y = this.com_BG.getChildByName("bgUpNameFrame").y, this.com_BG.getChildByName("bgTicket").y = this.com_BG.getChildByName("bgUpNameFrame").y, this.com_PlayerMessage.getChildByName("sp_Head").y = this.com_BG.getChildByName("bgUp").y - 11, this.com_PlayerMessage.getChildByName("lb_PlayerName").y = this.com_BG.getChildByName("bgUpNameFrame").y, this.com_PlayerMessage.getChildByName("lb_PlayerMoney").y = this.com_BG.getChildByName("bgUpNameFrame").y, this.com_PlayerMessage.getChildByName("lb_PlayerGift").y = this.com_BG.getChildByName("bgUpNameFrame").y, this.com_Button.getChildByName("bt_PlayerInfo").y = this.com_BG.getChildByName("bgDown").y + 21, this.com_Button.getChildByName("bt_Activity").y = this.com_Button.getChildByName("bt_PlayerInfo").y, this.com_Button.getChildByName("bt_Exchange").y = this.com_Button.getChildByName("bt_PlayerInfo").y, this.com_Button.getChildByName("bt_CustomerService").y = this.com_Button.getChildByName("bt_PlayerInfo").y, this.com_Button.getChildByName("bt_Mall").y = this.com_BG.getChildByName("bgDown").y + 34, this.com_Button.getChildByName("bt_GameMenuBack").y = this.com_PlayerMessage.getChildByName("sp_Head").y - 10, this.com_Button.getChildByName("bt_PlusMall").y = this.com_PlayerMessage.getChildByName("sp_Head").y + 10, this.com_Button.getChildByName("bt_Setting").y = this.com_Button.getChildByName("bt_PlusMall").y, this.com_Button.getChildByName("bt_Share").x = (t.width / 2 - this.com_Button.getChildByName("bt_Share").width / 2) * (1 / e), this.com_SystemMessage.y = this.com_BG.getChildByName("bgUp").y - 50)
            },
            uiResize_Function: function() {
                var t = cc.director.getVisibleSize(),
                e = t.width / 1334;
                t.width > 1334 ? (this.node.scaleX = 1, this.node.scaleY = 1, this.com_BG.getChildByName("bg").scaleX = e, this.com_BG.getChildByName("bg").scaleY = e, this.com_BG.getChildByName("roomselectbg").scaleX = e, this.com_BG.getChildByName("roomselectbg").scaleY = e, this.com_BG.getChildByName("bgUp").scaleX = e, this.com_BG.getChildByName("bgDown").scaleX = e, this.bg_Black.scaleX = e, this.bg_Black.scaleY = e, this.com_BG.getChildByName("bgUp").y = t.height / 2 - this.com_BG.getChildByName("bgUp").height / 2, this.com_BG.getChildByName("bgDown").y = -t.height / 2 + this.com_BG.getChildByName("bgDown").height / 2, this.com_Button.getChildByName("bt_Share").x = t.width / 2 - this.com_Button.getChildByName("bt_Share").width / 2) : t.width < 1334 && (this.node.scaleX = e, this.node.scaleY = e, this.com_BG.getChildByName("bg").scaleX = 1 / e, this.com_BG.getChildByName("bg").scaleY = 1 / e, this.com_BG.getChildByName("roomselectbg").scaleX = 1 / e, this.com_BG.getChildByName("roomselectbg").scaleY = 1 / e, this.com_BG.getChildByName("bgUp").scaleX = 1 / e, this.com_BG.getChildByName("bgDown").scaleX = 1 / e, this.bg_Black.scaleX = 1 / e, this.bg_Black.scaleY = 1 / e, this.com_BG.getChildByName("bgUp").y = (t.height / 2 - this.com_BG.getChildByName("bgUp").height / 2) / e, this.com_BG.getChildByName("bgDown").y = ( - t.height / 2 + this.com_BG.getChildByName("bgDown").height / 2) / e, this.com_Button.getChildByName("bt_Share").x = (t.width / 2 - this.com_Button.getChildByName("bt_Share").width / 2) * (1 / e)),
                this.com_BG.getChildByName("bgUpNameFrame").y = this.com_BG.getChildByName("bgUp").y - 1,
                this.com_BG.getChildByName("bgUpCoinFrame").y = this.com_BG.getChildByName("bgUpNameFrame").y,
                this.com_BG.getChildByName("bgUpTicketFrame").y = this.com_BG.getChildByName("bgUpNameFrame").y,
                this.com_BG.getChildByName("bgCoin").y = this.com_BG.getChildByName("bgUpNameFrame").y,
                this.com_BG.getChildByName("bgTicket").y = this.com_BG.getChildByName("bgUpNameFrame").y,
                this.com_PlayerMessage.getChildByName("sp_Head").y = this.com_BG.getChildByName("bgUp").y - 11,
                this.com_PlayerMessage.getChildByName("lb_PlayerName").y = this.com_BG.getChildByName("bgUpNameFrame").y,
                this.com_PlayerMessage.getChildByName("lb_PlayerMoney").y = this.com_BG.getChildByName("bgUpNameFrame").y,
                this.com_PlayerMessage.getChildByName("lb_PlayerGift").y = this.com_BG.getChildByName("bgUpNameFrame").y,
                this.com_Button.getChildByName("bt_PlayerInfo").y = this.com_BG.getChildByName("bgDown").y + 21,
                this.com_Button.getChildByName("bt_Activity").y = this.com_Button.getChildByName("bt_PlayerInfo").y,
                this.com_Button.getChildByName("bt_Exchange").y = this.com_Button.getChildByName("bt_PlayerInfo").y,
                this.com_Button.getChildByName("bt_CustomerService").y = this.com_Button.getChildByName("bt_PlayerInfo").y,
                this.com_Button.getChildByName("bt_Mall").y = this.com_BG.getChildByName("bgDown").y + 34,
                this.com_Button.getChildByName("bt_GameMenuBack").y = this.com_PlayerMessage.getChildByName("sp_Head").y - 10,
                this.com_Button.getChildByName("bt_PlusMall").y = this.com_PlayerMessage.getChildByName("sp_Head").y + 10,
                this.com_Button.getChildByName("bt_Setting").y = this.com_Button.getChildByName("bt_PlusMall").y,
                this.com_SystemMessage.y = this.com_BG.getChildByName("bgUp").y - 50
            },
            lobbyInit_Function: function() {
                this.loadGameScene = !1,
                this.com_MessageBox.active = !1,
                this.com_MessageBox.getChildByName("bt_Reconneted").active = !1,
                this.rechargeButtonCick_Function(),
                this.setSystemMessage_Function(),
                this.enterRoom = !1,
                this.checkUpdateTimeOut = !1,
                this.checkUpdateGameName = "",
                this.checkUpdateTime = 20,
                this.checkUpdateTimeLabel = this.checkUpdateTime,
                this.heartBeatTime = -20,
                this.heartBeatTimeOut = 0,
                this.heartBeatEmitControl = !1,
                this.chatMessageArray = new Array,
                this.chatMessagePosition = [[ - 500, -30], [485, -30]],
                this.customerServiceMessageInit_Function(),
                this.bankSelect = -1,
                this.editCardId = -1,
                this.withdrawAccountSelect = -1,
                this.withdrawBankId = 0,
                this.bg_Black.active = !1,
                this.settingInit_Function(),
                this.node.getComponent("LobbyMenu").needToUpdate_Function(),
                this.playerInfo.gameDisconnect && this.gameReconnect_Function(this.playerInfo.gameIp, this.playerInfo.gameProt, this.playerInfo.gameName),
                this.codeTimeCount = !1,
                this.getCodeTime = 0
            },
            settingInit_Function: function() {
                this.sp_settingControl = new Array(2),
                this.sp_settingControl[0] = this.sp_OnAndOff[0],
                this.sp_settingControl[1] = this.sp_OnAndOff[1],
                cc.audioEngine.stopAll();
                var t = null;
                null === this.playerInfo.musicControl ? (t = this.playerInfo.readData_Function("userSetting"), null === t ? (t = {
                    musicControl: 1,
                    soundEffectControl: 1
                },
                this.playerInfo.writeData_Function("userSetting", t), this.playerInfo.musicControl = t.musicControl, this.playerInfo.soundEffectControl = t.soundEffectControl, this.com_Setting.getChildByName("bt_MusicControl").isVoice = this.playerInfo.musiccontrol, this.com_Setting.getChildByName("bt_SoundEffectControl").isVoice = this.playerInfo.soundEffectControl, this.bgmNumber = cc.audioEngine.play(this.au_LobbyBGM, !0, 1)) : (this.playerInfo.musicControl = t.musicControl, this.playerInfo.soundEffectControl = t.soundEffectControl, this.com_Setting.getChildByName("bt_MusicControl").isVoice = this.playerInfo.musiccontrol, this.com_Setting.getChildByName("bt_SoundEffectControl").isVoice = this.playerInfo.soundEffectControl, this.playerInfo.musicControl && (this.bgmNumber = cc.audioEngine.play(this.au_LobbyBGM, !0, 1)))) : this.playerInfo.musicControl && (this.com_Setting.getChildByName("bt_MusicControl").isVoice = this.playerInfo.musiccontrol, this.com_Setting.getChildByName("bt_SoundEffectControl").isVoice = this.playerInfo.soundEffectControl, this.bgmNumber = cc.audioEngine.play(this.au_LobbyBGM, !0, 1)),
                this.playerInfo.musicControl ? (this.com_Setting.getChildByName("bt_MusicControl").getComponent("cc.Sprite").spriteFrame = this.sp_settingControl[1], this.com_Setting.getChildByName("bt_MusicControl").getChildByName("sp_Control").setPosition(60, 0)) : (this.com_Setting.getChildByName("bt_MusicControl").getComponent("cc.Sprite").spriteFrame = this.sp_settingControl[0], this.com_Setting.getChildByName("bt_MusicControl").getChildByName("sp_Control").setPosition( - 60, 0)),
                this.playerInfo.soundEffectControl ? (this.com_Setting.getChildByName("bt_SoundEffectControl").getComponent("cc.Sprite").spriteFrame = this.sp_settingControl[1], this.com_Setting.getChildByName("bt_SoundEffectControl").getChildByName("sp_Control").setPosition(60, 0)) : (this.com_Setting.getChildByName("bt_SoundEffectControl").getComponent("cc.Sprite").spriteFrame = this.sp_settingControl[0], this.com_Setting.getChildByName("bt_SoundEffectControl").getChildByName("sp_Control").setPosition( - 60, 0)),
                cc.sys.os === cc.sys.OS_ANDROID && (this.com_Setting.getChildByName("bt_Exit").active = !0)
            },
            playerInfoMenuInit_Function: function() {
                for (var t = 12; t < this.com_PlayerInfo.children.length; ++t) this.com_PlayerInfo.children[t].active = !1;
                this.playerInfo.isOffical ? this.com_PlayerInfo.getChildByName("bt_CreateAccount").active = !1 : this.com_PlayerInfo.getChildByName("bt_CreateAccount").active = !0,
                this.com_PlayerInfo.getChildByName("bt_CreateAccount").active ? (this.com_PlayerInfo.getChildByName("bt_CreateAccount").active = !0, this.com_PlayerInfo.getChildByName("bt_CreateAccount").getComponent("cc.Button").interactable = !1, this.com_PlayerInfo.getChildByName("com_CreateAccount").active = !0, this.com_PlayerInfo.getChildByName("bt_ChangeName").active = !1, this.com_PlayerInfo.getChildByName("com_ChangeName").active = !1) : (this.com_PlayerInfo.getChildByName("com_CreateAccount").active = !1, this.com_PlayerInfo.getChildByName("bt_ChangeName").active = !0, this.com_PlayerInfo.getChildByName("bt_ChangeName").getComponent("cc.Button").interactable = !1, this.com_PlayerInfo.getChildByName("com_ChangeName").active = !0),
                this.playerInfo.isOffical && this.playerInfo.aliAccount ? this.com_Button.getChildByName("bt_Exchange").getChildByName("tips").active = !1 : this.com_Button.getChildByName("bt_Exchange").getChildByName("tips").active = !0,
                this.playerInfo.playerCoin < 50 ? (this.com_Button.getChildByName("bt_Mall").getChildByName("tips").active = !0, this.com_Button.getChildByName("bt_PlusMall").getChildByName("tips").active = !0) : (this.com_Button.getChildByName("bt_Mall").getChildByName("tips").active = !1, this.com_Button.getChildByName("bt_PlusMall").getChildByName("tips").active = !1),
                this.bankIdInit_Function(),
                this.netWork.socket.emit("getBank"),
                this.readChat_Function()
            },
            encryptString_Function: function(t, e, n) {
                for (var i = t,
                o = "",
                a = e; a < i.length; ++a) o += "*";
                return o.length > 8 && (o = "********"),
                i = i.length > n ? i.substring(0, e) + o + i.substring(i.length - e, i.length) : i.substring(0, e) + o
            },
            rechargeButtonCick_Function: function() {
                for (var t = 0; t < 5; ++t) this.com_IOSMall.getChildByName("bt_Charge_" + t).id = t;
                this.rechargeMoneyArray = [98, 198, 498, 968];
                for (var t = 0; t < 4; ++t) this.com_Mall.getChildByName("bt_Recharge" + t).rechargeId = t
            },
            customerServiceMessageInit_Function: function() {
                var t = this.com_CustomerService.getChildByName("sv_View").getComponent("cc.ScrollView").content;
                t.removeAllChildren(),
                this.chatMessageArray = [],
                this.netWork.socket.emit("getMsgToUser")
            },
            bankIdInit_Function: function() {
                for (var t = this.com_PlayerInfo.getChildByName("com_AddCreditCard").getChildByName("sv_SelectBank").getComponent("cc.ScrollView").content, e = this.com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("sv_SelectBank").getComponent("cc.ScrollView").content, n = 0; n < t.childrenCount; ++n) t.children[n].bankId = n,
                e.children[n].bankId = n
            },
            bankInfoInit_Function: function(t) {
                this.creditCardObj = null,
                this.bankList = t,
                this.bankNameList = ["", "工商银行", "中国银行", "农业银行", "建设银行", "交通银行", "招商银行", "中国邮政", "光大银行", "民生银行", "中信银行", "兴业银行", "华夏银行"];
                for (var e = null,
                n = 0; n < t.length; ++n) e = cc.instantiate(this.pb_EditCardInfo),
                e.setPosition(175, 180 - 100 * n),
                e.getChildByName("lb_CardInfo").getComponent("cc.Label").string = "银行卡: " + this.encryptString_Function(t[n].account, 4, 4),
                e.cardId = t[n].cardId,
                e.getComponent("LobbyButtonClick").canvasNode = this,
                this.com_PlayerInfo.getChildByName("com_BindCreditCard").addChild(e);
                t.length > 4 ? this.com_PlayerInfo.getChildByName("com_BindCreditCard").getChildByName("bt_AddCreditCard").active = !1 : this.com_PlayerInfo.getChildByName("com_BindCreditCard").getChildByName("bt_AddCreditCard").setPosition(175, 180 - 100 * t.length),
                this.withdrawInit_Function(t),
                this.withdrawPhoneCard_Function()
            },
            withdrawInit_Function: function(t) {
                this.com_Withdraw.getChildByName("bt_Account").getChildByName("lb_Account").getComponent("cc.Label").string = "";
                var e = this.com_Withdraw.getChildByName("sv_Account").getComponent("cc.ScrollView").content;
                e.removeAllChildren();
                var n = null;
                this.playerInfo.aliAccount && (n = cc.instantiate(this.pb_WithdrawAccountSelect), n.setPosition(0, -30), n.getChildByName("Label").getComponent("cc.Label").string = this.encryptString_Function(this.playerInfo.aliAccount, 4, 4), n.selectId = 0, n.getComponent("LobbyButtonClick").canvasNode = this, e.addChild(n));
                for (var i = 0; i < t.length; ++i) n = cc.instantiate(this.pb_WithdrawAccountSelect),
                n.setPosition(0, -30 - 60 * (i + 1)),
                n.getChildByName("Label").getComponent("cc.Label").string = this.encryptString_Function(t[i].account, 4, 4),
                n.selectId = 1,
                n.cardId = t[i].cardId,
                n.bankType = t[i].bankType,
                n.getComponent("LobbyButtonClick").canvasNode = this,
                e.addChild(n)
            },
            withdrawPhoneCard_Function: function() {
                for (var t = [20, 50, 100], e = [200, 490, 960], n = 0; n < 3; ++n) this.com_WithdrawPhoneCard.getChildByName("bt_Card" + n).withdrawId = n,
                this.com_WithdrawPhoneCard.getChildByName("bt_Card" + n).withdrawPhoneCard = t[n],
                this.com_WithdrawPhoneCard.getChildByName("bt_Card" + n).getChildByName("lb_WithdrawPhoneNumber").getComponent("cc.Label").string = e[n]
            },
            withdrawUpdate_Function: function(t) {
                var e = this.com_Withdraw.getChildByName("sv_Account").getComponent("cc.ScrollView").content;
                e.removeAllChildren();
                var n = null;
                this.playerInfo.aliAccount && (n = cc.instantiate(this.pb_WithdrawAccountSelect), n.setPosition(0, -30), n.getChildByName("Label").getComponent("cc.Label").string = this.encryptString_Function(this.playerInfo.aliAccount, 4, 4), n.selectId = 0, n.getComponent("LobbyButtonClick").canvasNode = this, e.addChild(n));
                for (var i = 0; i < t.length; ++i) n = cc.instantiate(this.pb_WithdrawAccountSelect),
                n.setPosition(0, -30 - 60 * (i + 1)),
                n.getChildByName("Label").getComponent("cc.Label").string = this.encryptString_Function(t[i].account, 4, 4),
                n.selectId = 1,
                n.cardId = t[i].cardId,
                n.bankType = t[i].bankType,
                n.getComponent("LobbyButtonClick").canvasNode = this,
                e.addChild(n)
            },
            addCreditCard_Function: function(t, e) {
                this.bankList || (this.bankList = new Array),
                this.creditCardObj.cardId = t,
                this.bankList.push(this.creditCardObj),
                this.com_PlayerInfo.getChildByName("com_AddCreditCard").active = !1,
                this.com_PlayerInfo.getChildByName("com_BindCreditCard").active = !0;
                var n = cc.instantiate(this.pb_EditCardInfo);
                n.cardId = t,
                n.setPosition(175, 180 - 100 * (this.bankList.length - 1)),
                n.getChildByName("lb_CardInfo").getComponent("cc.Label").string = "银行卡: " + this.encryptString_Function(this.creditCardObj.account, 4, 4),
                n.getComponent("LobbyButtonClick").canvasNode = this,
                this.com_PlayerInfo.getChildByName("com_BindCreditCard").addChild(n),
                this.bankList.length > 4 ? this.com_PlayerInfo.getChildByName("com_BindCreditCard").getChildByName("bt_AddCreditCard").active = !1 : this.com_PlayerInfo.getChildByName("com_BindCreditCard").getChildByName("bt_AddCreditCard").setPosition(175, 180 - 100 * this.bankList.length),
                this.creditCardObj = null,
                this.messageBoxCallBack_Function(e, 0, 0),
                this.withdrawUpdate_Function(this.bankList)
            },
            editCreditCard_Function: function(t, e) {
                for (var n = 0; n < this.bankList.length; ++n) this.bankList[n].cardId === t && (this.bankList[n].account = this.com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("eb_CardNo").getComponent("cc.EditBox").string, this.bankList[n].name = this.com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("eb_Owner").getComponent("cc.EditBox").string, this.bankList[n].bankType = this.bankSelect);
                for (this.bankSelect = -1, this.com_PlayerInfo.getChildByName("com_EditCreditCard").active = !1, this.com_PlayerInfo.getChildByName("com_BindCreditCard").active = !0, this.messageBoxCallBack_Function(e, 0, 0), n = 0; n < this.com_PlayerInfo.getChildByName("com_BindCreditCard").childrenCount; ++n) this.com_PlayerInfo.getChildByName("com_BindCreditCard").children[n].cardId === t && (this.com_PlayerInfo.getChildByName("com_BindCreditCard").children[n].getChildByName("lb_CardInfo").getComponent("cc.Label").string = "银行卡: " + this.encryptString_Function(this.com_PlayerInfo.getChildByName("com_EditCreditCard").getChildByName("eb_CardNo").getComponent("cc.EditBox").string, 4, 4));
                this.withdrawUpdate_Function(this.bankList)
            },
            deleteCreditCard_Function: function(t, e) {
                this.com_PlayerInfo.getChildByName("com_EditCreditCard").active = !1,
                this.com_PlayerInfo.getChildByName("com_BindCreditCard").active = !0,
                this.messageBoxCallBack_Function(e, 0, 0);
                for (var n = 0; n < this.bankList.length; ++n) if (this.bankList[n].cardId === t) {
                    this.bankList.splice(n, 1);
                    break
                }
                for (n = 0; n < this.com_PlayerInfo.getChildByName("com_BindCreditCard").childrenCount; ++n) if (this.com_PlayerInfo.getChildByName("com_BindCreditCard").children[n].cardId === t) {
                    this.com_PlayerInfo.getChildByName("com_BindCreditCard").removeChild(this.com_PlayerInfo.getChildByName("com_BindCreditCard").children[n]);
                    break
                }
                this.updateBankList_Function(),
                this.withdrawUpdate_Function(this.bankList)
            },
            updateBankList_Function: function() {
                for (var t = 0; t < this.com_PlayerInfo.getChildByName("com_BindCreditCard").childrenCount; ++t) this.com_PlayerInfo.getChildByName("com_BindCreditCard").children[t].setPosition(175, 180 - 100 * (t - 1));
                this.bankList.length > 4 ? this.com_PlayerInfo.getChildByName("com_BindCreditCard").getChildByName("bt_AddCreditCard").active = !1 : (this.com_PlayerInfo.getChildByName("com_BindCreditCard").getChildByName("bt_AddCreditCard").active = !0, this.com_PlayerInfo.getChildByName("com_BindCreditCard").getChildByName("bt_AddCreditCard").setPosition(175, 180 - 100 * this.bankList.length))
            },
            contentGameServerFail_Function: function(t) {
                var e = "";
                switch (t) {
                case "Fish":
                    e = "街机捕鱼";
                    break;
                case "Bde":
                    e = "八搭二";
                    break;
                case "GrabBull":
                    e = "抢庄牛牛";
                    break;
                case "TwoEight":
                    e = "二八杠";
                    break;
                case "Bull":
                    e = "经典牛牛";
                    break;
                case "LineGame":
                    e = "经典连线机"
                }
                this.com_MessageBox.active = !0,
                this.bg_Black.active = !0,
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "连接" + e + "出错，请联系客服",
                this.com_MessageBox.getChildByName("bt_Confirm").active = !0,
                this.com_MessageBox.getChildByName("bt_Reconneted").active = !1,
                this.com_Tips.getChildByName("sp_GameLoading").active = !1,
                this.loadGameScene = !1
            },
            loginGameRoom_Function: function(e, n) {
                if (this.playerInfo.playerCoin < e.node.entryCoin / 100) return this.bg_Black.active = !0,
                void(this.com_MessageBox_NoMoney.active = !0);
                if (this.playerInfo.gameIp = e.node.ip, this.playerInfo.gameProt = e.node.prot, this.playerInfo.gameName = n, this.tempNetWork = null, !this.loadGameScene) {
                    switch (this.loadGameScene = !0, n) {
                    case "Fish":
                        this.tempNetWork = t("FishNetWork").getInstant;
                        break;
                    case "Bde":
                        this.tempNetWork = t("BdeNetWork").getInstant;
                        break;
                    case "GrabBull":
                        this.tempNetWork = t("GrabBullNetWork").getInstant;
                        break;
                    case "TwoEight":
                        this.tempNetWork = t("TwoEightNetWork").getInstant;
                        break;
                    case "Bull":
                        this.tempNetWork = t("BullNetWork").getInstant;
                        break;
                    case "LineGame":
                        this.tempNetWork = t("LineGameNetWork").getInstant
                    }
                    this.com_Tips.getChildByName("sp_GameLoading").active = !0,
                    this.getComponent("LobbyMain").bg_Black.active = !0,
                    this.enterRoom = !0,
                    this.tempNetWork.setLobbyMainObj_Function(this),
                    this.tempNetWork.loginGame_Function(e.node.ip, e.node.prot, this.playerInfo.playerId, this.playerInfo.gameSign),
                    cc.audioEngine.stopAll()
                }
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            gameReconnect_Function: function(e, n, i) {
                this.playerInfo.gameIp = e,
                this.playerInfo.gameProt = n,
                this.playerInfo.gameName = i;
                var o = null;
                if (!this.loadGameScene) {
                    switch (this.loadGameScene = !0, i) {
                    case "Fish":
                        o = t("FishNetWork").getInstant;
                        break;
                    case "Bde":
                        o = t("BdeNetWork").getInstant;
                        break;
                    case "GrabBull":
                        o = t("GrabBullNetWork").getInstant;
                        break;
                    case "TwoEight":
                        o = t("TwoEightNetWork").getInstant;
                        break;
                    case "Bull":
                        o = t("BullNetWork").getInstant;
                        break;
                    case "LineGame":
                        o = t("LineGameNetWork").getInstant
                    }
                    this.enterRoom = !0,
                    this.com_Tips.getChildByName("sp_GameLoading").active = !0,
                    this.getComponent("LobbyMain").bg_Black.active = !0,
                    o.setLobbyMainObj_Function(this),
                    o.loginGame_Function(e, n, this.playerInfo.playerId, this.playerInfo.gameSign),
                    cc.audioEngine.stopAll(),
                    o = null
                }
            },
            pay_Function: function(t, e, n) {
                var i = -1;
                switch (cc.sys.os) {
                case cc.sys.OS_ANDROID:
                    i = 0;
                    break;
                case cc.sys.OS_IOS:
                    i = 1;
                    break;
                default:
                    i = 2
                }
                switch (n) {
                case 0:
                    var o = this.playerInfo.loginIp,
                    a = this.playerInfo.playerId,
                    s = t * this.playerInfo.exchangeRate,
                    c = 1300,
                    r = 1001,
                    l = this.playerInfo.account,
                    h = o + "/rechargeZhifuBao?userId=" + a + "&totalFee=" + s + "&platform=" + i + "&payType=" + c + "&appId=" + r + "&account=" + l;
                    break;
                case 1:
                    var o = this.playerInfo.loginIp,
                    a = this.playerInfo.playerId,
                    s = t * this.playerInfo.exchangeRate,
                    c = 2e3,
                    r = 1002,
                    l = this.playerInfo.account,
                    h = o + "/rechargeZhifuBao?userId=" + a + "&totalFee=" + s + "&platform=" + i + "&payType=" + c + "&appId=" + r + "&account=" + l;
                    break;
                case 2:
                    var m = [6, 18, 50, 100, 200],
                    o = this.playerInfo.loginIp,
                    a = this.playerInfo.playerId,
                    s = m[e] * this.playerInfo.exchangeRate,
                    r = 1001,
                    l = this.playerInfo.account,
                    h = o + "/rechargeZhifuBao?userId=" + a + "&totalFee=" + s + "&platform=" + i + "&goodsId=" + e + "&appId=" + r + "&account=" + l
                }
                this.rechargeMoney = 0,
                cc.sys.openURL(h)
            },
            customerServiceSendMessage_Function: function(t, e, n) {
                this.setChat_Function(t, e, n),
                this.writeChat_Function(t, e, n)
            },
            setChat_Function: function(t, e, n) {
                var i = this.com_CustomerService.getChildByName("sv_View").getComponent("cc.ScrollView").content,
                o = null;
                if (t === this.playerInfo.playerId ? (o = cc.instantiate(this.pb_Chat1), o.setPosition(this.chatMessagePosition[1][0], this.chatMessagePosition[1][1] + this.chatMessageArray.length * -160)) : 10 === t && (o = cc.instantiate(this.pb_Chat0), o.setPosition(this.chatMessagePosition[0][0], this.chatMessagePosition[0][1] + this.chatMessageArray.length * -160)), o) {
                    if (n.length > 25) {
                        o.getChildByName("lb_Chat").width = 800;
                        var a = n.length > 25 ? 2 : 1;
                        o.getChildByName("lb_Chat").height = 36 * a
                    } else o.getChildByName("lb_Chat").width = 32 * n.length;
                    o.getChildByName("lb_Name").getComponent("cc.Label").string = e,
                    o.getChildByName("lb_Chat").getComponent("cc.Label").string = n,
                    this.chatMessageArray.push(o),
                    i.addChild(o),
                    o.getChildByName("sp_ChatFrame").width = o.getChildByName("lb_Chat").width + 20,
                    o.getChildByName("sp_ChatFrame").height = o.getChildByName("lb_Chat").height + 20,
                    this.updateCustomerServiceMessageContent_Function(i)
                }
            },
            writeChat_Function: function(t, e, n) {
                "undefined" == typeof this.chatData && (this.chatData = this.playerInfo.readData_Function("chatData" + this.playerInfo.playerId));
                var i = {
                    userId: t,
                    nickname: e,
                    message: n
                };
                this.chatData || (this.chatData = new Array),
                this.chatData.push(i),
                this.chatData.length > 30 && this.chatData.shift(),
                this.playerInfo.writeData_Function("chatData" + this.playerInfo.playerId, this.chatData)
            },
            readChat_Function: function() {
                if (this.chatData = null, this.chatData = this.playerInfo.readData_Function("chatData" + this.playerInfo.playerId), null !== this.chatData) for (var t = 0; t < this.chatData.length; ++t) this.setChat_Function(this.chatData[t].userId, this.chatData[t].nickname, this.chatData[t].message)
            },
            updateCustomerServiceMessageContent_Function: function(t) {
                t.height = 160 * this.chatMessageArray.length + 30,
                this.com_CustomerService.getChildByName("sv_View").getComponent("cc.ScrollView").scrollToBottom(.5)
            },
            setSystemMessage_Function: function() {
                this.systemMessageArray ? this.systemMessageArray = [] : this.systemMessageArray = new Array,
                this.com_SystemMessage.getChildByName("vi_View").removeAllChildren(),
                this.systemMessageSign = 0;
                var t = new cc.Node;
                t.addComponent("cc.Label"),
                t.anchorX = 0,
                t.anchorY = .5,
                t.getComponent("cc.Label").overflow = 0,
                t.getComponent("cc.Label").string = "欢迎来到电玩城!",
                t.getComponent("cc.Label").fontSize = 26,
                t.getComponent("cc.Label").lineHeight = 28,
                t.setPosition(this.com_SystemMessage.getChildByName("vi_View").width / 2, 0),
                this.systemMessageArray.push(t),
                this.com_SystemMessage.getChildByName("vi_View").addChild(t),
                this.moveSystemMessage_Function()
            },
            moveSystemMessage_Function: function() {
                if (this.systemMessageArray.length > 0) {
                    var t = cc.moveBy(8, -this.systemMessageArray[this.systemMessageSign].width - this.com_SystemMessage.getChildByName("vi_View").width, 0),
                    e = cc.delayTime(2),
                    n = cc.sequence(t, e, cc.callFunc(function() {
                        this.systemMessageSign < this.systemMessageArray.length - 1 ? ++this.systemMessageSign: this.systemMessageSign = 0,
                        this.moveSystemMessage_Function()
                    },
                    this));
                    this.systemMessageArray[this.systemMessageSign].setPosition(this.com_SystemMessage.getChildByName("vi_View").width / 2, 0),
                    this.systemMessageArray[this.systemMessageSign].runAction(n)
                }
            },
            updateSystemMessage_Function: function() {},
            reChargePhoneCard_Function: function(t) {
                this.netWork.socket.emit("exchange", {
                    proCount: t.node.withdrawPhoneCard
                })
            },
            gameMenuButtonClick_Function: function(t) {
                for (this.com_Button.getChildByName("bt_GameMenuBack").active = !0, this.com_Button.getChildByName("bt_Mail").active = !1, this.com_Button.getChildByName("bt_Setting").active = !1, i = 0; i < this.node.getComponent("LobbyMenu").com_GameMenu.children.length; ++i) this.node.getComponent("LobbyMenu").com_GameMenu.children[i].active = !1;
                switch (this.node.getComponent("LobbyMenu").com_GameMenu.getChildByName(t).active = !0, this.playerInfo.lobbySelect) {
                case 0:
                    this.com_BG.getChildByName("roomselectbg").active = !0,
                    this.com_BG.getChildByName("bg").active = !1;
                    break;
                case 1:
                }
            },
            gameMenuBackButtonClick_Function: function() {
                this.com_Button.getChildByName("bt_GameMenuBack").active = !1,
                this.com_Button.getChildByName("bt_Setting").active = !0;
                for (var t = 0; t < this.node.getComponent("LobbyMenu").com_GameMenu.children.length; ++t) this.node.getComponent("LobbyMenu").com_GameMenu.children[t].active = !1;
                switch (this.playerInfo.lobbySelect) {
                case 0:
                    for (t = 0; t < 14; ++t) this.node.getComponent("LobbyMenu").com_GameMenu.children[t].active = !0;
                    break;
                case 1:
                    this.node.getComponent("LobbyMenu").com_GameMenu.getChildByName("sv_Scrollview").active = !0
                }
                this.com_BG.getChildByName("roomselectbg").active = !1,
                this.com_BG.getChildByName("bg").active = !0
            },
            settingControlButtonClick_Function: function(t, e) {
                var n, i;
                switch (e) {
                case 0:
                    this.playerInfo.musicControl ? (n = cc.moveBy(.1, -120, 0), i = cc.sequence(n, cc.callFunc(function() {
                        this.playerInfo.musicControl = 0,
                        t.getComponent("cc.Sprite").spriteFrame = this.sp_settingControl[0],
                        this.writeUserSettingDate_Function()
                    },
                    this)), cc.audioEngine.stop(this.bgmNumber)) : (n = cc.moveBy(.1, 120, 0), i = cc.sequence(n, cc.callFunc(function() {
                        this.playerInfo.musicControl = 1,
                        t.getComponent("cc.Sprite").spriteFrame = this.sp_settingControl[1],
                        this.writeUserSettingDate_Function()
                    },
                    this)), this.bgmNumber = cc.audioEngine.play(this.au_LobbyBGM, !0, 1));
                    break;
                case 1:
                    this.playerInfo.soundEffectControl ? (n = cc.moveBy(.1, -120, 0), i = cc.sequence(n, cc.callFunc(function() {
                        this.playerInfo.soundEffectControl = 0,
                        t.getComponent("cc.Sprite").spriteFrame = this.sp_settingControl[0],
                        this.writeUserSettingDate_Function()
                    },
                    this))) : (n = cc.moveBy(.1, 120, 0), i = cc.sequence(n, cc.callFunc(function() {
                        this.playerInfo.soundEffectControl = 1,
                        t.getComponent("cc.Sprite").spriteFrame = this.sp_settingControl[1],
                        this.writeUserSettingDate_Function()
                    },
                    this)))
                }
                t.getChildByName("sp_Control").runAction(i)
            },
            writeUserSettingDate_Function: function() {
                var t = {
                    musicControl: this.playerInfo.musicControl,
                    soundEffectControl: this.playerInfo.soundEffectControl
                };
                this.playerInfo.writeData_Function("userSetting", t)
            },
            checkNetWorkConnected_Function: function() {
                return this.disconneted
            },
            netWorkDisconneted_Function: function(t) {
                this.com_Tips.getChildByName("sp_Logining").active = !1,
                this.bg_Black.active = !0,
                this.com_MessageBox.active = !0,
                this.com_MessageBox.getChildByName("bt_Reconneted").active = !0,
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = t,
                this.disconneted = !0
            },
            reconntetedGame_Function: function() {
                var t = this.node.getComponent("LobbyRegister").account,
                e = this.node.getComponent("LobbyRegister").password;
                if (cc.audioEngine.stopAll(), null !== this.netWork.socket) {
                    cc.sys.isNative || this.netWork.socket.close();
                    for (var n in this.netWork.socket.$events) void 0 != n && this.netWork.socket.removeListen(n);
                    this.netWork.socket = null,
                    this.netWork.connected = !1
                }
                this.netWork.loginAccount_Function(this.playerInfo.loginIp, t, e)
            },
            checkUpdate_Function: function(t) {
                if ("" !== t) this.checkUpdateGameName = t;
                else if ("" === this.checkUpdateGameName) return;
                this.com_UpdateMessageBox.active = !0,
                this.com_UpdateMessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "检测版本中...\n" + this.checkUpdateTimeLabel + "s",
                this.com_UpdateMessageBox.getChildByName("bt_Confirm").active = !1,
                this.com_UpdateMessageBox.getChildByName("pb_Loading").active = !1,
                this.bg_Black.active = !0,
                this.node.getComponent("GameUpdate").checkGameUpdate_Function(this.checkUpdateGameName),
                this.checkUpdateTimeOut = !0
            },
            messageBoxCallBack_Function: function(t, e, n) {
                switch (e) {
                case 0:
                    this.com_MessageBox_CB.getChildByName("bt_Confirm").setPosition(0, -130),
                    this.com_MessageBox_CB.getChildByName("bt_Cancel").active = !1;
                    break;
                case 1:
                    this.com_MessageBox_CB.getChildByName("bt_Confirm").setPosition( - 120, -130),
                    this.com_MessageBox_CB.getChildByName("bt_Cancel").active = !0
                }
                this.com_MessageBox_CB.active = !0,
                this.com_MessageBox_CB.getChildByName("lb_Tips").getComponent("cc.Label").string = t,
                this.operationType = n
            },
            update: function(t) {
                if (this.checkUpdateTimeOut && (this.checkUpdateTime > 0 ? (this.checkUpdateTime -= t, this.checkUpdateTimeLabel = parseInt(this.checkUpdateTime)) : (this.com_UpdateMessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "网络出错，请重新尝试更新", this.com_UpdateMessageBox.getChildByName("bt_Confirm").active = !0, this.com_UpdateMessageBox.getChildByName("bt_Close").active = !0, this.checkUpdateTimeOut = !1)), this.codeTimeCount && (this.getCodeTime > 0 ? (this.getCodeTime -= t, this.com_PlayerInfo.getChildByName("com_BindPhone").getChildByName("bt_GetCode").getChildByName("lb_Time").getComponent("cc.Label").string = parseInt(this.getCodeTime) + "s") : (this.com_PlayerInfo.getChildByName("com_BindPhone").getChildByName("bt_GetCode").getChildByName("lb_Time").getComponent("cc.Label").string = "", this.com_PlayerInfo.getChildByName("com_BindPhone").getChildByName("bt_GetCode").getComponent("cc.Button").interactable = !0)), this.tempNetWork && this.tempNetWork.eventOn) {
                    switch (this.playerInfo.gameName) {
                    case "Fish":
                        this.tempNetWork.fishSocket.disconnect(),
                        this.tempNetWork.fishSocket = null;
                        break;
                    case "Bde":
                        this.tempNetWork.bdeGameSocket.disconnect(),
                        this.tempNetWork.bdeGameSocket = null;
                        break;
                    case "GrabBull":
                        this.tempNetWork.grabBullSocket.disconnect(),
                        this.tempNetWork.grabBullSocket = null;
                        break;
                    case "TwoEight":
                        this.tempNetWork.twoEightGameSocket.disconnect(),
                        this.tempNetWork.twoEightGameSocket = null;
                        break;
                    case "Bull":
                        this.tempNetWork.bullSocket.disconnect(),
                        this.tempNetWork.bullSocket = null;
                        break;
                    case "LineGame":
                        this.tempNetWork.lineGameGameSocket.disconnect(),
                        this.tempNetWork.lineGameGameSocket = null
                    }
                    this.tempNetWork.eventOn = !1,
                    this.tempNetWork = null,
                    this.playerInfo.gameName = "Lobby"
                }
            }
        }),
        cc._RF.pop()
    },
    {
        BdeNetWork: "BdeNetWork",
        BullNetWork: "BullNetWork",
        FishNetWork: "FishNetWork",
        GrabBullNetWork: "GrabBullNetWork",
        LineGameNetWork: "LineGameNetWork",
        LobbyNetWork: "LobbyNetWork",
        PlayerInfo: "PlayerInfo",
        TwoEightNetWork: "TwoEightNetWork",
        md5: "md5"
    }],
    LobbyMenu: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "df64bc4W6hJkroZ7B9sThxv", "LobbyMenu"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                com_GameMenu: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.playerInfo = this.node.getComponent("LobbyMain").playerInfo,
                this.showLight = !1,
                this.lightTime = new Array(6);
                for (var t = 0; t < this.lightTime.length; ++t) this.lightTime[t] = this.getRandom_Function(2, 5)
            },
            needToUpdate_Function: function() {
                switch (this.playerInfo.lobbySelect) {
                case 0:
                    for (var t = 1; t < this.playerInfo.needToUpdate.length; ++t) this.playerInfo.needToUpdate[t] ? this.com_GameMenu.children[t + 7].children[0].active = !0 : this.com_GameMenu.children[t + 7].children[0].active = !1;
                    break;
                case 1:
                }
            },
            gameMenuInit_Function: function(t) {
                switch (this.playerInfo.lobbySelect) {
                case 0:
                    this.gameMenuButtonInit_Function(t[7], this.com_GameMenu.getChildByName("bt_GrabBull"), this.com_GameMenu.getChildByName("com_GrabBull"), 0),
                    this.gameMenuButtonInit_Function(t[4], this.com_GameMenu.getChildByName("bt_Bde"), this.com_GameMenu.getChildByName("com_Bde"), 0),
                    this.gameMenuButtonInit_Function(t[2], this.com_GameMenu.getChildByName("bt_TwoEight"), this.com_GameMenu.getChildByName("com_TwoEight"), 0),
                    this.gameMenuButtonInit_Function(t[0], this.com_GameMenu.getChildByName("bt_Fish"), this.com_GameMenu.getChildByName("com_Fish"), 0),
                    this.gameMenuButtonInit_Function(t[8], this.com_GameMenu.getChildByName("bt_Bull"), this.com_GameMenu.getChildByName("com_Bull"), 0),
                    this.gameMenuButtonInit_Function(t[1], this.com_GameMenu.getChildByName("bt_LineGame"), null, 1);
                    break;
                case 1:
                    var e = this.com_GameMenu.getChildByName("sv_Scrollview").getComponent("cc.ScrollView").content;
                    this.gameMenuButtonInit_Function(t[7], e.getChildByName("bt_GrabBull"), this.com_GameMenu.getChildByName("com_GrabBull"), 0),
                    this.gameMenuButtonInit_Function(t[8], e.getChildByName("bt_Bull"), this.com_GameMenu.getChildByName("com_Bull"), 0);
                    for (var n = 0; n < 4; ++n) this.gameMenuButtonInit_Function(t[0], e.getChildByName("bt_Fish" + n), null, 2, n)
                }
                this.db_AnimationInit_Function(this.playerInfo.lobbySelect)
            },
            gameMenuButtonInit_Function: function(t, e, n, i, o) {
                switch (i) {
                case 0:
                    for (var a = 0; a < t.serverInfo.normal.length; ++a) n.children[a + 1].gameId = t.GameId,
                    n.children[a + 1].ip = t.serverInfo.normal[a].ip,
                    n.children[a + 1].prot = t.serverInfo.normal[a].prot,
                    n.children[a + 1].entryCoin = t.serverInfo.normal[a].entryCoin,
                    n.children[a + 1].server = t.serverInfo.normal[a].Server,
                    n.children[a + 1].bet = t.serverInfo.normal[a].bet,
                    n.children[a + 1].getChildByName("lb_Bet").getComponent("cc.Label").string = (t.serverInfo.normal[a].bet / this.playerInfo.exchangeRate).toFixed(2),
                    n.children[a + 1].getChildByName("lb_EntryCoin").getComponent("cc.Label").string = (t.serverInfo.normal[a].entryCoin / this.playerInfo.exchangeRate).toFixed(2),
                    n.children[a + 1].getChildByName("lb_PlayerNum").getComponent("cc.Label").string = "良好",
                    n.children[a + 1].getComponent("cc.Button").interactable = !0;
                    e.getComponent("cc.Button").interactable = !0;
                    break;
                case 1:
                    e.gameId = t.GameId,
                    e.ip = t.serverInfo.normal[0].ip,
                    e.prot = t.serverInfo.normal[0].prot,
                    e.entryCoin = t.serverInfo.normal[0].entryCoin,
                    e.server = t.serverInfo.normal[0].Server,
                    e.bet = t.serverInfo.normal[0].bet,
                    e.getComponent("cc.Button").interactable = !0;
                    break;
                case 2:
                    e.gameId = t.GameId,
                    e.ip = t.serverInfo.normal[o].ip,
                    e.prot = t.serverInfo.normal[o].prot,
                    e.entryCoin = t.serverInfo.normal[o].entryCoin,
                    e.server = t.serverInfo.normal[o].Server,
                    e.bet = t.serverInfo.normal[o].bet,
                    e.getChildByName("lb_Bet").getComponent("cc.Label").string = (t.serverInfo.normal[o].bet / this.playerInfo.exchangeRate).toFixed(2),
                    e.getChildByName("lb_EntryCoin").getComponent("cc.Label").string = (t.serverInfo.normal[o].entryCoin / this.playerInfo.exchangeRate).toFixed(2),
                    e.getComponent("cc.Button").interactable = !0
                }
            },
            db_AnimationInit_Function: function(t) {
                switch (t) {
                case 0:
                    this.an_BdeAnimation = this.com_GameMenu.getChildByName("db_Bde").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_BdeAnimation.playAnimation("db_Bde", -1),
                    this.an_TwoEightAnimation = this.com_GameMenu.getChildByName("db_TwoEight").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_TwoEightAnimation.playAnimation("db_TwoEight", -1),
                    this.an_BullAnimation = this.com_GameMenu.getChildByName("db_Bull").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_BullAnimation.playAnimation("db_Bull", -1),
                    this.an_FishAnimation = this.com_GameMenu.getChildByName("db_Fish").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_FishAnimation.playAnimation("db_Fish", -1),
                    this.an_GrabBullAnimation = this.com_GameMenu.getChildByName("db_GrabBull").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_GrabBullAnimation.playAnimation("db_GrabBull", -1),
                    this.an_KingOfFruitAnimation = this.com_GameMenu.getChildByName("db_KingOfFruit").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_KingOfFruitAnimation.playAnimation("db_KingOfFruit", -1),
                    this.an_BoardAnimation = this.com_GameMenu.getChildByName("db_Board").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_BoardAnimation.playAnimation("db_Board", -1),
                    this.an_BgAnimation = this.node.getComponent("LobbyMain").com_BG.getChildByName("bgAnimation").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_BgAnimation.playAnimation("bg", -1);
                    break;
                case 1:
                    var e = this.com_GameMenu.getChildByName("sv_Scrollview").getComponent("cc.ScrollView").content;
                    this.an_Room0 = e.getChildByName("db_Fish0").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_Room0.playAnimation("db_Room0", -1),
                    this.an_Room1 = e.getChildByName("db_Fish1").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_Room1.playAnimation("db_Room1", -1),
                    this.an_Room2 = e.getChildByName("db_Fish2").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_Room2.playAnimation("db_Room2", -1),
                    this.an_Room3 = e.getChildByName("db_Fish3").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_Room3.playAnimation("db_Room3", -1),
                    this.an_Room4 = e.getChildByName("db_GrabBull").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_Room4.playAnimation("db_Room4", -1),
                    this.an_Room5 = e.getChildByName("db_Bull").getComponent("dragonBones.ArmatureDisplay"),
                    this.an_Room5.playAnimation("db_Room5", -1)
                }
            },
            lightAnimation_Function: function(t) {
                switch (t) {
                case 0:
                    this.node.getComponent("LobbyMenu").com_GameMenu.getChildByName("bt_GrabBull").getComponent("cc.Animation").play();
                    break;
                case 1:
                    this.node.getComponent("LobbyMenu").com_GameMenu.getChildByName("bt_Fish").getComponent("cc.Animation").play();
                    break;
                case 2:
                    this.node.getComponent("LobbyMenu").com_GameMenu.getChildByName("bt_Bull").getComponent("cc.Animation").play();
                    break;
                case 3:
                    this.node.getComponent("LobbyMenu").com_GameMenu.getChildByName("bt_Bde").getComponent("cc.Animation").play();
                    break;
                case 4:
                    this.node.getComponent("LobbyMenu").com_GameMenu.getChildByName("bt_TwoEight").getComponent("cc.Animation").play();
                    break;
                case 5:
                    this.node.getComponent("LobbyMenu").com_GameMenu.getChildByName("bt_LineGame").getComponent("cc.Animation").play()
                }
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            update: function(t) {
                if (this.showLight) for (var e = 0; e < this.lightTime.length; ++e) this.lightTime[e] > 0 ? this.lightTime[e] -= t: (this.lightAnimation_Function(e), this.lightTime[e] = this.getRandom_Function(5, 10))
            }
        }),
        cc._RF.pop()
    },
    {}],
    LobbyNetWork: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "52ecdBGXStPmK+56+vjTdD6", "LobbyNetWork"),
        e.exports = {
            accountChange: !1,
            lobbyMain: null,
            playerInfo: null,
            serverList: null,
            getNameAndSign: !1,
            getLoginCode: !1,
            headSprite: null,
            socket: null,
            io: null,
            connected: !1,
            userName: "",
            passWord: "",
            loginClick: !1,
            netWorkInit_Function: function() {
                var e = this;
                e.io = null,
                e.socket = null,
                e.playerInfo = t("PlayerInfo").getInstant,
                e.loginAccount_Function(e.playerInfo.loginIp)
            },
            loginAccount_Function: function(e, n, i) {
                this.userName = n,
                this.passWord = i;
                var o = this;
                o.socket = null,
                cc.sys.isNative ? o.socket = SocketIO.connect(e) : (o.io = t("Socket.io"), o.socket = o.io(e)),
                o.loginSocketOn_Function()
            },
            loginSocketOn_Function: function() {
                var t = this;
                t.socket.on("connect_error",
                function(e) {
                    t.lobbyMain.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "连接错误，请检测网络"
                }),
                t.socket.on("connect_timeout",
                function(e) {
                    t.lobbyMain.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "连接超时，请检测网络"
                }),
                t.socket.on("reconnect",
                function(e) {
                    t.lobbyMain.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "重连中..."
                }),
                t.socket.on("error",
                function(e) {
                    t.lobbyMain.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "网络错误，请检测网络"
                }),
                t.socket.on("connected",
                function(e) {
                    e && (t.lobbyMain.disconneted = !1, t.accountChange ? t.socket.emit("login", {
                        userName: t.userName,
                        password: t.passWord
                    }) : t.lobbyMain.getComponent("LobbyRegister").checkAccount_Function(t.playerInfo.loginIp), t.lobbyMain.disconneted || (t.lobbyMain.bg_Black.active = !1, t.lobbyMain.com_MessageBox.active = !1), t.connected = !0)
                }),
                t.socket.on("loginResult",
                function(e) {
                    if (e = t.changeResultJSON(e), e.resultid) {
                        if (t.loginClick = !1, t.playerInfo.account = e.Obj.account, t.playerInfo.gameSign = e.Obj.sign, t.playerInfo.playerId = e.Obj.id, t.playerInfo.playerName = e.Obj.nickname, t.playerInfo.playerCoin = e.Obj.score / t.playerInfo.exchangeRate, t.playerInfo.playerDiamond = e.Obj.diamond, e.Obj.proplist[1] ? t.playerInfo.playerGift = e.Obj.proplist[1] : t.playerInfo.playerGift = 0, t.playerInfo.phoneNumber = e.Obj.phoneNo, e.Obj.phoneNo ? t.lobbyMain.com_PlayerInfo.getChildByName("com_BindedPhone").getChildByName("lb_Number").getComponent("cc.Label").string = t.lobbyMain.encryptString_Function(e.Obj.phoneNo, 3, 6) : t.lobbyMain.com_PlayerInfo.getChildByName("com_BindedPhone").getChildByName("lb_Number").getComponent("cc.Label").string = "", t.playerInfo.isOffical = e.Obj.official, t.playerInfo.gameDisconnect || (t.playerInfo.gameName = "Lobby"), t.lobbyMain.com_PlayerMessage.getChildByName("lb_PlayerName").getComponent("cc.Label").string = e.Obj.nickname, t.lobbyMain.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = t.playerInfo.playerCoin.toFixed(2), t.lobbyMain.com_PlayerMessage.getChildByName("lb_PlayerDiamond").getComponent("cc.Label").string = t.playerInfo.playerDiamond, t.lobbyMain.com_PlayerMessage.getChildByName("lb_PlayerGift").getComponent("cc.Label").string = t.playerInfo.playerGift, t.lobbyMain.com_PlayerInfo.active = !1, t.lobbyMain.com_Mall.active = !1, t.lobbyMain.com_IOSMall.active = !1, t.lobbyMain.com_Exchange.active = !1, t.lobbyMain.com_CustomerService.active = !1, t.lobbyMain.com_Withdraw.active = !1, t.lobbyMain.com_Setting.active = !1, t.lobbyMain.com_Tips.getChildByName("sp_Logining").active = !1, t.accountChange) {
                            var n = t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("eb_Account").getComponent("cc.EditBox").string,
                            i = t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("eb_Password").getComponent("cc.EditBox").string;
                            t.lobbyMain.getComponent("LobbyRegister").changeUserData_Function(n, i),
                            t.accountChange = !1,
                            t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").active = !1,
                            t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("eb_Account").getComponent("cc.EditBox").string = "",
                            t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("eb_Password").getComponent("cc.EditBox").string = ""
                        }
                        t.lobbyMain.lobbyInit_Function()
                    } else {
                        if (t.accountChange) return t.lobbyMain.bg_Black.active = !0,
                        t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("eb_Password").getComponent("cc.EditBox").string = "",
                        t.lobbyMain.netWorkDisconneted_Function("账号或者密码错误，请重新登录"),
                        void(t.accountChange = !1);
                        t.lobbyMain.bg_Black.active = !0,
                        t.lobbyMain.com_Tips.getChildByName("sp_Logining").active = !1,
                        t.lobbyMain.com_MessageBox_LoginFail.active = !0
                    }
                    t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("bt_ChangeAccount").getComponent("cc.Button").interactable = !0,
                    t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("bt_PlayerInfoBack").getComponent("cc.Button").interactable = !0,
                    t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("bt_Change").getComponent("cc.Button").interactable = !0,
                    t.lobbyMain.getComponent("LobbyMain").com_PlayerInfo.getChildByName("com_ChangeAccount").getChildByName("com_MessageBox").getChildByName("bt_Confirm").getComponent("cc.Button").interactable = !0
                }),
                t.socket.on("ServerListResult",
                function(e) {
                    if (e = t.changeResultJSON(e)) {
                        switch (t.serverList = e.GameInfo, t.playerInfo.lobbySelect) {
                        case 0:
                            t.lobbyMain.getComponent("LobbyMenu").showLight = !0;
                            break;
                        case 1:
                            t.lobbyMain.getComponent("LobbyMenu").showLight = !1
                        }
                        t.lobbyMain.getComponent("LobbyMenu").gameMenuInit_Function(t.serverList)
                    }
                }),
                t.anotherFunctionInit_Function()
            },
            anotherFunctionInit_Function: function() {
                var t = this;
                t.socket.on("sendCoinResult",
                function(e) {
                    e = t.changeResultJSON(e),
                    e.Result && (t.playerInfo.playerCoin = (parseFloat(t.playerInfo.playerCoin) + e.score / t.playerInfo.exchangeRate).toFixed(2), t.lobbyMain.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = t.playerInfo.playerCoin)
                }),
                t.socket.on("sendbindPhoneNoResult",
                function(e) {
                    e = t.changeResultJSON(e),
                    e.Result || (t.lobbyMain.com_PlayerInfo.active = !1, t.openMessageBox_Function(e.msg))
                }),
                t.socket.on("bindPhoneResult",
                function(e) {
                    e = t.changeResultJSON(e),
                    e.Result && (t.playerInfo.phoneNumber = t.lobbyMain.com_PlayerInfo.getChildByName("com_BindPhone").getChildByName("eb_PhoneNumber").getComponent("cc.EditBox").string),
                    t.lobbyMain.com_PlayerInfo.active = !1,
                    t.openMessageBox_Function(e.msg)
                }),
                t.socket.on("exchangeResult",
                function(e) {
                    e = t.changeResultJSON(e),
                    e.Result && (t.playerInfo.playerGift += e.deleteCount, t.lobbyMain.com_PlayerMessage.getChildByName("lb_PlayerGift").getComponent("cc.Label").string = t.playerInfo.playerGift),
                    t.lobbyMain.com_WithdrawPhoneCard.active = !1,
                    t.openMessageBox_Function(e.msg)
                }),
                t.socket.on("sendMsg",
                function(e) {
                    e = t.changeResultJSON(e),
                    t.lobbyMain.customerServiceSendMessage_Function(e.userId, e.nickname, e.msg)
                }),
                t.socket.on("sendMsgToUserResult",
                function(e) {
                    e = t.changeResultJSON(e),
                    e.ResultCode ? t.lobbyMain.com_CustomerService.getChildByName("eb_Chat").getComponent("cc.EditBox").string = e.msg: (t.lobbyMain.customerServiceSendMessage_Function(t.playerInfo.playerId, t.playerInfo.playerName, t.lobbyMain.sendMessage), t.lobbyMain.sendMessage = "")
                }),
                t.socket.on("getMsgToUserResult",
                function(e) {
                    if (e = t.changeResultJSON(e), !e.ResultCode) {
                        var n = new Array;
                        if (e.data.chatList) for (var i = 0; i < e.data.chatList.length; ++i) t.lobbyMain.customerServiceSendMessage_Function(e.data.chatList[i].userId, e.data.chatList[i].nickname, e.data.chatList[i].msg),
                        n[i] = e.data.chatList[i].id
                    }
                    t.socket.emit("updateCharLog", {
                        idList: n
                    })
                }),
                t.socket.on("firstExchagerResult",
                function(e) {
                    e = t.changeResultJSON(e),
                    t.playerInfo.aliAccount = e.zhifubao,
                    t.playerInfo.aliName = e.zhifubaoName,
                    t.lobbyMain.playerInfoMenuInit_Function()
                }),
                t.socket.on("disconnect",
                function() {
                    t.loginClick || t.lobbyMain.enterRoom || t.lobbyMain.netWorkDisconneted_Function("游戏已断开，请重新连接游戏")
                }),
                t.socket.on("heartbeatResult",
                function() {
                    t.lobbyMain.heartBeatTime = 0,
                    t.lobbyMain.heartBeatTimeOut = 0
                }),
                t.socket.on("updateNickNameResult",
                function(e) {
                    e = t.changeResultJSON(e),
                    t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangeName").getChildByName("bt_Change").getComponent("cc.Button").interactable = !0,
                    e.Result ? t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangeName").getChildByName("eb_Name").getComponent("cc.EditBox").string = e.msg: (t.playerInfo.playerName = t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangeName").getChildByName("eb_Name").getComponent("cc.EditBox").string, t.lobbyMain.com_PlayerMessage.getChildByName("lb_PlayerName").getComponent("cc.Label").string = t.playerInfo.playerName, t.lobbyMain.com_PlayerInfo.active = !1, t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangeName").getChildByName("eb_Name").getComponent("cc.EditBox").string = "", t.openMessageBox_Function(e.msg))
                }),
                t.socket.on("bindZhifubaoResult",
                function(e) {
                    if (e = t.changeResultJSON(e), t.lobbyMain.com_PlayerInfo.getChildByName("com_BindAli").getChildByName("bt_Bind").getComponent("cc.Button").interactable = !0, e.Result) t.lobbyMain.com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_Account").getComponent("cc.EditBox").string = e.msg,
                    t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangeAli").getChildByName("eb_Account").getComponent("cc.EditBox").string = e.msg;
                    else {
                        t.lobbyMain.com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_Account").getComponent("cc.EditBox").string ? (t.playerInfo.aliAccount = t.lobbyMain.com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_Account").getComponent("cc.EditBox").string, t.playerInfo.aliName = t.lobbyMain.com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_Name").getComponent("cc.EditBox").string) : (t.playerInfo.aliAccount = t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangeAli").getChildByName("eb_Account").getComponent("cc.EditBox").string, t.playerInfo.aliName = t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangeAli").getChildByName("eb_Name").getComponent("cc.EditBox").string),
                        t.lobbyMain.com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_Account").getComponent("cc.EditBox").string = "",
                        t.lobbyMain.com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_AccountConfirm").getComponent("cc.EditBox").string = "",
                        t.lobbyMain.com_PlayerInfo.getChildByName("com_BindAli").getChildByName("eb_Name").getComponent("cc.EditBox").string = "",
                        t.lobbyMain.com_PlayerInfo.getChildByName("com_BindAli").active = !1,
                        t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangeAli").active = !1,
                        t.lobbyMain.com_PlayerInfo.getChildByName("bt_BindAli").active = !1,
                        t.lobbyMain.com_PlayerInfo.getChildByName("bt_BindedAli").active = !0,
                        t.lobbyMain.com_PlayerInfo.getChildByName("bt_BindedAli").getComponent("cc.Button").interactable = !1,
                        t.playerInfo.encryptAliAccount = t.lobbyMain.encryptString_Function(t.playerInfo.aliAccount, 3, 6),
                        t.playerInfo.encryptAliName = t.lobbyMain.encryptString_Function(t.playerInfo.aliName, 1, 3),
                        t.lobbyMain.com_PlayerInfo.getChildByName("com_BindedAli").getChildByName("lb_AccountInfo").getComponent("cc.Label").string = t.playerInfo.encryptAliAccount,
                        t.lobbyMain.com_PlayerInfo.getChildByName("com_BindedAli").getChildByName("lb_NameInfo").getComponent("cc.Label").string = t.playerInfo.encryptAliName,
                        t.lobbyMain.com_PlayerInfo.getChildByName("com_BindedAli").active = !0,
                        t.lobbyMain.com_Withdraw.getChildByName("lb_Account").getComponent("cc.Label").string = "",
                        t.lobbyMain.com_PlayerInfo.active = !1,
                        t.openMessageBox_Function(e.msg);
                        var n = t.lobbyMain.com_Withdraw.getChildByName("sv_Account").getComponent("cc.ScrollView").content,
                        i = null;
                        i = cc.instantiate(t.lobbyMain.pb_WithdrawAccountSelect),
                        i.setPosition(0, -30),
                        i.getChildByName("Label").getComponent("cc.Label").string = t.lobbyMain.encryptString_Function(t.lobbyMain.playerInfo.aliAccount, 4, 4),
                        i.selectId = 0,
                        i.getComponent("LobbyButtonClick").canvasNode = t.lobbyMain,
                        n.addChild(i),
                        t.lobbyMain.com_Button.getChildByName("bt_Exchange").getChildByName("tips").active = !1
                    }
                }),
                t.socket.on("scoreOutResult",
                function(e) {
                    e = t.changeResultJSON(e),
                    t.lobbyMain.com_Withdraw.active = !1,
                    t.openMessageBox_Function(e.msg)
                }),
                t.socket.on("changeOfficialResult",
                function(e) {
                    if (e = t.changeResultJSON(e), t.lobbyMain.com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("bt_Create").getComponent("cc.Button").interactable = !0, e.ResultCode) t.lobbyMain.com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("lb_Tips0").getComponent("cc.Label").string = e.msg;
                    else {
                        var n = {
                            account: t.lobbyMain.com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("eb_Account").getComponent("cc.EditBox").string,
                            password: t.lobbyMain.com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("eb_Password").getComponent("cc.EditBox").string
                        };
                        t.lobbyMain.getComponent("LobbyRegister").writeUserDate_Function(n,
                        function() {
                            t.playerInfo.account = n.account,
                            t.playerInfo.password = n.password,
                            t.lobbyMain.com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("eb_Account").getComponent("cc.EditBox").string = "",
                            t.lobbyMain.com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("eb_Password").getComponent("cc.EditBox").string = "",
                            t.lobbyMain.com_PlayerInfo.getChildByName("com_CreateAccount").getChildByName("eb_PasswordConfirm").getComponent("cc.EditBox").string = "",
                            t.lobbyMain.com_PlayerInfo.getChildByName("com_CreateAccount").active = !1,
                            t.lobbyMain.com_PlayerInfo.getChildByName("bt_CreateAccount").active = !1,
                            t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangeName").active = !0,
                            t.lobbyMain.com_PlayerInfo.getChildByName("bt_ChangeName").active = !0,
                            t.lobbyMain.com_PlayerInfo.getChildByName("bt_ChangeName").getComponent("cc.Button").interactable = !1,
                            t.lobbyMain.com_PlayerInfo.active = !1,
                            t.openMessageBox_Function(e.msg),
                            t.playerInfo.isOffical = 1
                        })
                    }
                }),
                t.socket.on("BankInfoResult",
                function(e) {
                    if (e = t.changeResultJSON(e), !e.Result) switch (e.act) {
                    case 1:
                        t.lobbyMain.addCreditCard_Function(e.cardId, e.msg);
                        break;
                    case 2:
                        t.lobbyMain.editCreditCard_Function(e.cardId, e.msg);
                        break;
                    case 3:
                        t.lobbyMain.deleteCreditCard_Function(e.cardId, e.msg)
                    }
                }),
                t.socket.on("getBankResult",
                function(e) {
                    e = t.changeResultJSON(e),
                    t.lobbyMain.bankInfoInit_Function(e.data.bankList)
                }),
                t.socket.on("updatePasswordResult",
                function(e) {
                    if (e = t.changeResultJSON(e), t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("bt_Change").getComponent("cc.Button").interactable = !0, e.ResultCode) t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("lb_Tips0").getComponent("cc.Label").string = e.msg;
                    else {
                        var n = {
                            account: t.playerInfo.account,
                            password: t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("eb_NewPassword").getComponent("cc.EditBox").string
                        };
                        t.lobbyMain.getComponent("LobbyRegister").writeUserDate_Function(n,
                        function() {
                            t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("eb_OldPassword").getComponent("cc.EditBox").string = "",
                            t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("eb_NewPassword").getComponent("cc.EditBox").string = "",
                            t.lobbyMain.com_PlayerInfo.getChildByName("com_ChangePassword").getChildByName("eb_PasswordConfirm").getComponent("cc.EditBox").string = "",
                            t.lobbyMain.com_PlayerInfo.active = !1,
                            t.openMessageBox_Function(e.msg)
                        })
                    }
                })
            },
            openMessageBox_Function: function(t) {
                this.lobbyMain.bg_Black.active = !0,
                this.lobbyMain.com_MessageBox.active = !0,
                this.lobbyMain.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = t
            },
            logouAccount_Function: function() {
                this.socket.disconnect(),
                this.socket = null
            },
            setLobbyMainObj_Function: function(t) {
                this.lobbyMain = t;
            },
            changeResultJSON: function(t) {
                if (cc.sys.isNative) {
                    var e = JSON.parse(t);
                    return e
                }
                return t
            }
        },
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo",
        "Socket.io": "Socket.io"
    }],
    LobbyRegister: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "131cbzybtpBjKQHm81QL3c2", "LobbyRegister"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                this.canLoign = !1,
                this.account = null,
                this.password = null
            },
            checkAccount_Function: function(t) {
                var e = null;
                e = cc.sys.isNative ? JSON.parse(cc.sys.localStorage.getItem("userData")) : JSON.parse(localStorage.getItem("userData")),
                null === e ? this.registerAccount_Function(t, !0) : (this.account = e.account, this.password = e.password, this.canLoign = !0, this.getComponent("LobbyMain").netWork.socket.emit("login", {
                    userName: this.account,
                    password: this.password
                }))
            },
            writeUserDate_Function: function(t, e) {
                cc.sys.isNative ? cc.sys.localStorage.setItem("userData", JSON.stringify(t)) : localStorage.setItem("userData", JSON.stringify(t)),
                e()
            },
            changeUserData_Function: function(t, e) {
                var n = {
                    account: t,
                    password: e
                };
                cc.sys.isNative ? cc.sys.localStorage.setItem("userData", JSON.stringify(n)) : localStorage.setItem("userData", JSON.stringify(n))
            },
            registerAccount_Function: function(t, e) {
                var n = this;
                this.getAccount_Function(t,
                function(t, i) {
                    var o = null;
                    o = {
                        account: t,
                        password: i
                    },
                    n.writeUserDate_Function(o,
                    function() {
                        n.account = o.account,
                        n.password = o.password,
                        n.canLoign = !0,
                        e ? n.getComponent("LobbyMain").netWork.socket.emit("login", {
                            userName: n.account,
                            password: n.password
                        }) : n.getComponent("LobbyMain").netWork.loginAccount_Function(n.getComponent("LobbyMain").playerInfo.loginIp, n.account, n.password)
                    })
                })
            },
            getAccount_Function: function(e, n) {
                var i = t("md5").getInstant,
                o = "42dfcb34fb02d8cd",
                a = "getGuessA",
                s = this.node.getComponent("LobbyMain").playerInfo.guest,
                c = parseInt(Date.parse(new Date) / 1e3),
                r = i.hex_md5(a + s + c + o),
                l = e + "/weixinLogin?act=" + a + "&time=" + c + "&daili=" + s + "&sign=" + r,
                h = new XMLHttpRequest;
                h.onreadystatechange = function() {
                    if (4 === h.readyState && 200 === h.status) {
                        var t = h.response;
                        if (null !== h.response) {
                            try {
                                t = JSON.parse(t)
                            } catch(e) {
                                console.log("JSON wrong")
                            }
                            n && n(t.data.account, t.data.password)
                        }
                    }
                },
                h.open("get", l),
                h.send()
            }
        }),
        cc._RF.pop()
    },
    {
        md5: "md5"
    }],
    MiniFarmButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "01a3dK1bI1Ol7BjwkUwTPsM", "MiniFarmButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                canvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            investmentButtonClick_Function: function() {},
            ruleButtonClick_Function: function() {},
            recordButtonClick_Function: function() {}
        }),
        cc._RF.pop()
    },
    {}],
    MiniFarmMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2748a0p5Q1HW4XXbnGqC1hr", "MiniFarmMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                com_Girl: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {}
        }),
        cc._RF.pop()
    },
    {}],
    Net: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2e8b7zdwXxEZpAxveXC8LxU", "Net"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                this._armatureDisplay = this.getComponent("dragonBones.ArmatureDisplay"),
                this._armature = this._armatureDisplay.armature(),
                this._armatureDisplay.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.netReset, this)
            },
            netReset: function(t) {
                this.node.parent.parent.getComponent("GameMain").netPool.put(this.node)
            }
        }),
        cc._RF.pop()
    },
    {}],
    NewLBXKuai: [function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        cc._RF.push(e, "7f7eecsfeNLxL7pMDgXTdAA", "NewLBXKuai");
        var o, a = t("InitLBXFrame"),
        s = t("Util"),
        c = .7;
        cc.Class({
            "extends": cc.Component,
            properties: (o = {
                checkerboard: {
                    "default": null,
                    type: a
                }
            },
            i(o, "Kcount", 3), i(o, "liubianxingH", 0), i(o, "liubianxingA", 0), i(o, "kuaiTex", {
                "default": null,
                type: cc.SpriteFrame
            }), i(o, "color1", {
                "default": null,
                type: cc.SpriteFrame
            }), i(o, "color2", {
                "default": null,
                type: cc.SpriteFrame
            }), i(o, "color3", {
                "default": null,
                type: cc.SpriteFrame
            }), i(o, "color4", {
                "default": null,
                type: cc.SpriteFrame
            }), i(o, "anSound", {
                "default": null,
                url: cc.AudioClip
            }), i(o, "fangxiaSound1", {
                "default": null,
                url: cc.AudioClip
            }), i(o, "fangxiaSound2", {
                "default": null,
                url: cc.AudioClip
            }), i(o, "fangxiaSound3", {
                "default": null,
                url: cc.AudioClip
            }), i(o, "canNotSound1", {
                "default": null,
                url: cc.AudioClip
            }), i(o, "canNotSound2", {
                "default": null,
                url: cc.AudioClip
            }), o),
            getTheConfig: function() {
                var t = this.liubianxingA,
                e = this.liubianxingH,
                n = [[cc.p(0, 0)], [cc.p(0, 0), cc.p(2 * e, 0)], [cc.p(0, 0), cc.p(e, 1.5 * t)], [cc.p(0, 0), cc.p(e, 1.5 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(4 * e, 0)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(e, 1.5 * t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(e, 1.5 * -t)], [cc.p(0, 0), cc.p(e, 1.5 * t), cc.p(3 * e, 1.5 * t)], [cc.p(0, 0), cc.p(e, 1.5 * t), cc.p(2 * e, 3 * t)], [cc.p(0, 0), cc.p(e, 1.5 * t), cc.p(0, 3 * t)], [cc.p(0, 0), cc.p(e, 1.5 * -t), cc.p(3 * e, 1.5 * -t)], [cc.p(0, 0), cc.p(e, 1.5 * -t), cc.p(2 * e, 3 * -t)], [cc.p(0, 0), cc.p(e, 1.5 * -t), cc.p(0, 3 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(4 * e, 0), cc.p(6 * e, 0)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(4 * e, 0), cc.p(5 * e, 1.5 * t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(4 * e, 0), cc.p(5 * e, 1.5 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(4 * e, 0), cc.p(3 * e, 1.5 * t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(4 * e, 0), cc.p(3 * e, 1.5 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * t), cc.p(e, 1.5 * t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * t), cc.p(2 * e, 3 * t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * t), cc.p(4 * e, 3 * t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * t), cc.p(5 * e, 1.5 * t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * -t), cc.p(e, 1.5 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * -t), cc.p(2 * e, 3 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * -t), cc.p(4 * e, 3 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(3 * e, 1.5 * -t), cc.p(5 * e, 1.5 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(e, 1.5 * -t), cc.p( - e, 1.5 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(e, 1.5 * -t), cc.p(0, 3 * -t)], [cc.p(0, 0), cc.p(2 * e, 0), cc.p(e, 1.5 * -t), cc.p(2 * e, 3 * -t)], [cc.p(0, 0), cc.p(e, 1.5 * -t), cc.p(2 * e, 3 * -t), cc.p(3 * e, 4.5 * -t)], [cc.p(0, 0), cc.p( - e, 1.5 * -t), cc.p(2 * -e, 3 * -t), cc.p(3 * -e, 4.5 * -t)]];
                return n
            },
            newOneK: function(t) {
                var e = new cc.Node("colorSpr"),
                n = e.addComponent(cc.Sprite);
                n.spriteFrame = this["color" + t];
                var i = new cc.Node("wenliSpr"),
                o = i.addComponent(cc.Sprite);
                return o.spriteFrame = this.kuaiTex,
                i.parent = e,
                e
            },
            newOneNode: function() {
                for (var t = new cc.Node("kuai"), e = this.getTheConfig(), n = s.random(0, e.length - 1), i = e[n], n = s.random(1, 4), o = 0, a = 0, r = 0, l = 0, h = 0; h < i.length; h++) {
                    var m = i[h],
                    u = this.newOneK(n);
                    u.x = m.x,
                    o += u.x,
                    a++,
                    u.y = m.y,
                    r += u.y,
                    l++,
                    t.addChild(u)
                }
                return t.x = -o / a,
                t.y = -r / l,
                t.setScale(c),
                t
            },
            addTouchEvent: function() {
                var t = 100,
                e = this;
                this.node.ox = this.node.x,
                this.node.oy = this.node.y,
                this.node.on(cc.Node.EventType.TOUCH_START,
                function() {
                    this.y += t,
                    this.getChildByName("kuai").setScale(1),
                    cc.audioEngine.playEffect(e.anSound)
                },
                this.node),
                this.node.on(cc.Node.EventType.TOUCH_MOVE,
                function(t) {
                    var n = t.touch.getDelta();
                    this.x += n.x,
                    this.y += n.y,
                    e.collisionFunc(),
                    e.checkIsCanDrop() ? e.changeColorDeal() : e.changeColorDeal(!0)
                },
                this.node),
                this.node.on(cc.Node.EventType.TOUCH_CANCEL,
                function(t) {
                    this.dropDownFunc()
                },
                this),
                this.node.on(cc.Node.EventType.TOUCH_END,
                function(t) {
                    this.dropDownFunc()
                },
                this)
            },
            changeColorDeal: function(t) {
                for (var e = 0; e < this.checkerboard.frameList.length; e++) {
                    var n = this.checkerboard.frameList[e].getChildByName("bianSpr");
                    n.active = !1
                }
                if (!t) for (var e = 0; e < this.checkFrameList.length; e++) {
                    var n = this.checkFrameList[e].getChildByName("bianSpr");
                    n.active = !0
                }
            },
            collisionFunc: function() {
                this.checkFrameList = [],
                this.checkFKlist = [];
                for (var t = this.node.children[0].children, e = 0; e < t.length; e++) {
                    var n = cc.pAdd(cc.p(this.node.children[0].x, this.node.children[0].y), cc.p(t[e].x, t[e].y)),
                    i = cc.pAdd(this.node.position, n),
                    o = this.checkPosFunc(i);
                    o && (this.checkFKlist.push(t[e]), this.checkFrameList.push(o))
                }
            },
            checkPosFunc: function(t) {
                for (var e = 27,
                n = 0; n < this.checkerboard.frameList.length; n++) {
                    var i = this.checkerboard.frameList[n],
                    o = cc.pDistance(cc.p(i.x, i.y), t);
                    if (o <= e) return i
                }
            },
            checkIsLose: function() {
                for (var t = 0,
                e = this.node.children[0].children, n = 0; n < this.checkerboard.frameList.length; n++) {
                    var i = this.checkerboard.frameList[n],
                    o = cc.p(i.x, i.y),
                    a = 1;
                    if (!i.isHaveFK) {
                        for (var s = 1; s < e.length; s++) for (var c = 27,
                        r = cc.pAdd(o, cc.p(e[s].x, e[s].y)), l = 0; l < this.checkerboard.frameList.length; l++) {
                            var h = this.checkerboard.frameList[l],
                            m = cc.pDistance(cc.p(h.x, h.y), r);
                            m <= c && !h.isHaveFK && a++
                        }
                        a == e.length && t++
                    }
                }
                return 0 == t
            },
            checkIsCanDrop: function() {
                if (0 == this.checkFrameList.length || this.checkFrameList.length != this.node.children[0].children.length) return ! 1;
                for (var t = 0; t < this.checkFrameList.length; t++) if (this.checkFrameList[t].isHaveFK) return ! 1;
                return ! 0
            },
            dropDownFunc: function() {
                if (!this.checkIsCanDrop()) return this.takeBack(),
                void cc.audioEngine.playEffect(this.canNotSound1);
                for (var t = 0; t < this.checkFKlist.length; t++) this.checkFKlist[t].x = 0,
                this.checkFKlist[t].y = 0,
                this.checkFKlist[t].parent = this.checkFrameList[t],
                this.checkFrameList[t].isHaveFK = !0;
                this.node.removeAllChildren();
                var e = this.newOneNode();
                this.node.addChild(e),
                this.checkerboard.curFKLen = this.checkFKlist.length,
                this.checkerboard.node.emit("succDropDownOne");
                var n = s.random(1, 3);
                cc.audioEngine.playEffect(this["fangxiaSound" + n]),
                this.takeBack(),
                this.checkerboard.checkIsLose()
            },
            takeBack: function() {
                this.checkFrameList = [],
                this.changeColorDeal(),
                this.node.getChildByName("kuai").setScale(c),
                this.node.x = this.node.ox,
                this.node.y = this.node.oy
            },
            onLoad: function() {
                this.checkFrameList = [],
                this.checkFKlist = [],
                this.node.cascadeOpacity = !0;
                var t = this.newOneNode();
                this.node.addChild(t),
                this.addTouchEvent()
            }
        }),
        cc._RF.pop()
    },
    {
        InitLBXFrame: "InitLBXFrame",
        Util: "Util"
    }],
    Over: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "afffeBXdgRNEql3TSvfkYGy", "Over");
        var i = t("Global"),
        o = t("Colors");
        cc.Class({
            "extends": cc.Component,
            properties: {
                bg: {
                    "default": null,
                    type: cc.Node
                },
                gameText: {
                    "default": null,
                    type: cc.Node
                },
                backBtn: {
                    "default": null,
                    type: cc.Node
                },
                textLabel: {
                    "default": null,
                    type: cc.Label
                },
                scoreLabel: {
                    "default": null,
                    type: cc.Label
                },
                scoreText: {
                    "default": null,
                    type: cc.Node
                },
                overEffect: cc.AudioClip,
                addCoin: cc.AudioClip,
                btnEffect: cc.AudioClip,
                score: 0,
                changeScore: 0
            },
            onLoad: function() {
                this.bg.color = o.overBg;
                var t = cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.5), cc.scaleTo(1, 1)));
                this.gameText.runAction(t),
                cc.audioEngine.playEffect(this.overEffect),
                this.score = i.score,
                this.schedule(this.updateScore, .1, cc.REPEAT_FOREVER, 2);
                var e = this;
                this.bg.on(cc.Node.EventType.TOUCH_START,
                function(t) {
                    cc.log("score text touch"),
                    cc.audioEngine.playEffect(e.addCoin),
                    e.changeScore = e.score,
                    e.scoreLabel.string = "最终分数：" + e.changeScore
                },
                this.bg)
            },
            updateScore: function() {
                this.score <= this.changeScore && this.unschedule(this.updateScore),
                this.changeScore += 20,
                this.changeScore = this.changeScore > this.score ? this.score: this.changeScore,
                cc.audioEngine.playEffect(this.addCoin),
                this.scoreLabel.string = "最终分数：" + this.changeScore
            },
            back: function() {
                i.score = 0,
                cc.audioEngine.playEffect(this.btnEffect),
                cc.director.loadScene("startScene")
            }
        }),
        cc._RF.pop()
    },
    {
        Colors: "Colors",
        Global: "Global"
    }],
    Path: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e74ebUWag5Ls6lramtUdGS6", "Path"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                this.birdPath = new Array(17),
                this.LoadPath_Function()
            },
            LoadPath_Function: function() {
                this.birdPath[0] = [[900, 450], [100, -50], [ - 300, -600]],
                this.birdPath[1] = [[900, 360], [50, 0], [ - 480, -600]],
                this.birdPath[2] = [[900, 270], [0, 50], [ - 660, -600]],
                this.birdPath[3] = [[900, 180], [ - 50, 100], [ - 840, -400]],
                this.birdPath[4] = [[900, 90], [ - 100, 150], [ - 900, -200]],
                this.birdPath[5] = [[900, -90], [ - 100, -150], [ - 900, 200]],
                this.birdPath[6] = [[900, -180], [ - 50, -100], [ - 840, 400]],
                this.birdPath[7] = [[900, -270], [0, -50], [ - 660, 600]],
                this.birdPath[8] = [[900, -360], [50, 0], [ - 480, 600]],
                this.birdPath[9] = [[900, -450], [100, 50], [ - 300, 600]],
                this.birdPath[10] = [[900, 600], [0, 250], [ - 900, 0]],
                this.birdPath[11] = [[900, -600], [0, -250], [ - 900, 0]],
                this.birdPath[12] = [[900, 600], [0, 150], [ - 900, -100]],
                this.birdPath[13] = [[900, -600], [0, -150], [ - 900, 100]],
                this.birdPath[14] = [[ - 900, 450], [ - 100, -50], [300, -600]],
                this.birdPath[15] = [[ - 900, 360], [ - 50, 0], [480, -600]],
                this.birdPath[16] = [[ - 900, 270], [0, 50], [660, -600]],
                this.birdPath[17] = [[ - 900, 180], [50, 100], [840, -400]],
                this.birdPath[18] = [[ - 900, 90], [100, 150], [900, -200]],
                this.birdPath[19] = [[ - 900, -90], [100, -150], [900, 200]],
                this.birdPath[20] = [[ - 900, -180], [50, -100], [840, 400]],
                this.birdPath[21] = [[ - 900, -270], [0, -50], [660, 600]],
                this.birdPath[22] = [[ - 900, -360], [ - 50, 0], [480, 600]],
                this.birdPath[23] = [[ - 900, -450], [ - 100, 50], [300, 600]],
                this.birdPath[24] = [[ - 900, 600], [0, 250], [900, 0]],
                this.birdPath[25] = [[ - 900, -600], [0, -250], [900, 0]],
                this.birdPath[26] = [[ - 900, 600], [0, 150], [900, -100]],
                this.birdPath[27] = [[ - 900, -600], [0, -150], [900, 100]],
                this.birdPath[28] = [[900, 0], [0, 0], [ - 900, 0]],
                this.birdPath[29] = [[ - 900, 200], [0, 200], [900, 200]],
                this.birdPath[30] = [[ - 900, -200], [0, -200], [900, -200]],
                this.birdPath[31] = [[450, 250], [0, -250], [ - 300, -900]],
                this.birdPath[32] = [[300, 0], [400, -350], [450, -900]],
                this.birdPath[33] = [[ - 150, -150], [500, 300], [60, 900]],
                this.birdPath[34] = [[ - 500, 250], [ - 100, 0], [400, -900]],
                this.birdPath[35] = [[400, -200], [50, 100], [ - 800, 250]],
                this.birdPath[36] = [[ - 600, -350], [100, -250], [900, -150]],
                this.birdPath[37] = [[0, -350], [500, 200], [600, 800]],
                this.birdPath[38] = [[600, 0], [0, -100], [ - 600, -700]],
                this.birdPath[39] = [[0, 300], [300, -300], [350, 900]],
                this.birdPath[40] = [[ - 600, 0], [100, 150], [300, 900]],
                this.birdPath[41] = [[ - 900, 0], [ - 300, -250], [ - 50, 0], [ - 300, 250], [ - 550, 0], [ - 300, -250], [ - 50, 0], [ - 300, 250], [ - 550, 0], [ - 300, -600]],
                this.birdPath[42] = [[900, 0], [300, -250], [50, 0], [300, 250], [550, 0], [300, -250], [50, 0], [300, 250], [550, 0], [300, -600]]
            }
        }),
        cc._RF.pop()
    },
    {}],
    PlayerInfo: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a5687kZcEZKSaxmys3ks1lg", "PlayerInfo");
        var i = function() {
            var t = "",
            e = function() {
                this.serverVersion = new Array(7),
                this.localVersion = new Array(7),
                this.needToUpdate = [0, 0, 0, 0, 0, 0, 0],
                this.loginIp = "",
                this.guest = "",
                this.shareUrl = null,
                this.exchangeRate = 1,
                this.account = "",
                this.password = "",
                this.sign = "",
                this.gameSign = "",
                this.code = "",
                this.playerId = 0,
                this.playerName = "",
                this.playerCoin = 0,
                this.playerGift = 0,
                this.playerDiamond = 0,
                this.playerHead = null,
                this.musicControl = null,
                this.soundEffectControl = null,
                this.isOffical = !1,
                this.phoneNumber = "",
                this.aliAccount = "",
                this.encryptAliAccount = "",
                this.aliName = "",
                this.encryptAliName = "",
                this.withdraw = null,
                this.withdrawOpen = !0,
                this.gameIp = "",
                this.gameProt = "",
                this.gameName = "",
                this.gameDisconnect = !1,
                this.gameHide = !1,
                this.gameObj = null,
                this.sceneName = "",
                this.lobbySelect = 0,
                this.channel = "",
                this.init_Function = function() {
                    cc.game.on(cc.game.EVENT_HIDE, this.gameOnHide_Function.bind(this)),
                    cc.game.on(cc.game.EVENT_SHOW, this.gameOnShow_Function.bind(this))
                },
                this.writeData_Function = function(t, e, n) {
                    cc.sys.isNative ? cc.sys.localStorage.setItem(t, JSON.stringify(e)) : localStorage.setItem(t, JSON.stringify(e)),
                    n && n()
                },
                this.readData_Function = function(t) {
                    var e = null;
                    return e = cc.sys.isNative ? JSON.parse(cc.sys.localStorage.getItem(t)) : JSON.parse(localStorage.getItem(t))
                },
                this.gameOnHide_Function = function() {
                    this.gameHide = !0,
                    this.hideTime = Date.parse(new Date) / 1e3
                },
                this.gameOnShow_Function = function() {
                    if (this.gameHide) {
                        switch (this.showTime = Date.parse(new Date) / 1e3, this.gameName) {
                        case "Lobby":
                            this.showTime - this.hideTime > 30 && this.gameObj.netWorkDisconneted_Function("游戏已断开，请重新连接游戏");
                            break;
                        case "GrabBull":
                            this.showTime - this.hideTime > 5 && (this.gameObj.gameExit = !0, this.gameObj.disconnectNetWork_Function());
                            break;
                        case "Bull":
                            this.showTime - this.hideTime > 5 && (this.gameObj.gameExit = !0, this.gameObj.disconnectNetWork_Function());
                            break;
                        case "LineGame":
                            this.showTime - this.hideTime > 20 && (this.gameObj.gameExit = !0, this.gameObj.disconnectNetWork_Function());
                            break;
                        case "Fish":
                            this.showTime - this.hideTime > 5 && (this.gameObj.gameExit = !0, this.gameObj.disconnectNetWork_Function());
                            break;
                        case "Bde":
                            this.showTime - this.hideTime > 5 && (this.gameObj.gameExit = !0, this.gameObj.disconnectNetWork_Function());
                            break;
                        case "TwoEight":
                            this.showTime - this.hideTime > 5 && (this.gameObj.gameExit = !0, this.gameObj.disconnectNetWork_Function());
                            break;
                        default:
                            cc.log(this.gameName)
                        }
                        this.gameHide = !1
                    }
                },
                this.setGameObj_Function = function(t) {
                    this.gameObj = null,
                    this.gameObj = t
                },
                this.init_Function()
            };
            return t ? {
                getInstant: t
            }: (t = new e, {
                getInstant: t
            })
        } ();
        e.exports = i,
        cc._RF.pop()
    },
    {}],
    ScoreBtnCp: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "60736hqNd9FQpPxB28E07+O", "ScoreBtnCp"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {}
        }),
        cc._RF.pop()
    },
    {}],
    "Socket.io": [function(t, e, n) { (function(i) {
            "use strict";
            cc._RF.push(e, "5481aNU/OxCiYZn7J7OcJ+q", "Socket.io");
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(t) {
                return typeof t
            }: function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
            };
            cc.sys.isNative || !
            function(t) {
                if ("object" === ("undefined" == typeof n ? "undefined": o(n)) && "undefined" != typeof e) e.exports = t();
                else if ("function" == typeof define && define.amd) define([], t);
                else {
                    var a;
                    a = "undefined" != typeof window ? window: "undefined" != typeof i ? i: "undefined" != typeof self ? self: this,
                    a.io = t()
                }
            } (function() {
                var e;
                return function n(e, i, o) {
                    function a(c, r) {
                        if (!i[c]) {
                            if (!e[c]) {
                                var l = "function" == typeof t && t;
                                if (!r && l) return l(c, !0);
                                if (s) return s(c, !0);
                                var h = new Error("Cannot find module '" + c + "'");
                                throw h.code = "MODULE_NOT_FOUND",
                                h
                            }
                            var m = i[c] = {
                                exports: {}
                            };
                            e[c][0].call(m.exports,
                            function(t) {
                                var n = e[c][1][t];
                                return a(n ? n: t)
                            },
                            m, m.exports, n, e, i, o)
                        }
                        return i[c].exports
                    }
                    for (var s = "function" == typeof t && t,
                    c = 0; c < o.length; c++) a(o[c]);
                    return a
                } ({
                    1 : [function(t, e, n) {
                        function i(t, e) {
                            "object" == ("undefined" == typeof t ? "undefined": o(t)) && (e = t, t = void 0),
                            e = e || {};
                            var n, i = a(t),
                            s = i.source,
                            h = i.id,
                            m = i.path,
                            u = l[h] && m in l[h].nsps,
                            d = e.forceNew || e["force new connection"] || !1 === e.multiplex || u;
                            return d ? (r("ignoring socket cache for %s", s), n = c(s, e)) : (l[h] || (r("new io instance for %s", s), l[h] = c(s, e)), n = l[h]),
                            n.socket(i.path)
                        }
                        var a = t("./url"),
                        s = t("socket.io-parser"),
                        c = t("./manager"),
                        r = t("debug")("socket.io-client");
                        e.exports = n = i;
                        var l = n.managers = {};
                        n.protocol = s.protocol,
                        n.connect = i,
                        n.Manager = t("./manager"),
                        n.Socket = t("./socket")
                    },
                    {
                        "./manager": 2,
                        "./socket": 4,
                        "./url": 5,
                        debug: 14,
                        "socket.io-parser": 40
                    }],
                    2 : [function(t, e, n) {
                        function i(t, e) {
                            return this instanceof i ? (t && "object" == ("undefined" == typeof t ? "undefined": o(t)) && (e = t, t = void 0), e = e || {},
                            e.path = e.path || "/socket.io", this.nsps = {},
                            this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new d({
                                min: this.reconnectionDelay(),
                                max: this.reconnectionDelayMax(),
                                jitter: this.randomizationFactor()
                            }), this.timeout(null == e.timeout ? 2e4: e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new r.Encoder, this.decoder = new r.Decoder, this.autoConnect = e.autoConnect !== !1, void(this.autoConnect && this.open())) : new i(t, e)
                        }
                        var a = t("engine.io-client"),
                        s = t("./socket"),
                        c = t("component-emitter"),
                        r = t("socket.io-parser"),
                        l = t("./on"),
                        h = t("component-bind"),
                        m = t("debug")("socket.io-client:manager"),
                        u = t("indexof"),
                        d = t("backo2"),
                        p = Object.prototype.hasOwnProperty;
                        e.exports = i,
                        i.prototype.emitAll = function() {
                            this.emit.apply(this, arguments);
                            for (var t in this.nsps) p.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
                        },
                        i.prototype.updateSocketIds = function() {
                            for (var t in this.nsps) p.call(this.nsps, t) && (this.nsps[t].id = this.engine.id)
                        },
                        c(i.prototype),
                        i.prototype.reconnection = function(t) {
                            return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
                        },
                        i.prototype.reconnectionAttempts = function(t) {
                            return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
                        },
                        i.prototype.reconnectionDelay = function(t) {
                            return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
                        },
                        i.prototype.randomizationFactor = function(t) {
                            return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
                        },
                        i.prototype.reconnectionDelayMax = function(t) {
                            return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
                        },
                        i.prototype.timeout = function(t) {
                            return arguments.length ? (this._timeout = t, this) : this._timeout
                        },
                        i.prototype.maybeReconnectOnOpen = function() { ! this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                        },
                        i.prototype.open = i.prototype.connect = function(t) {
                            if (m("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                            m("opening %s", this.uri),
                            this.engine = a(this.uri, this.opts);
                            var e = this.engine,
                            n = this;
                            this.readyState = "opening",
                            this.skipReconnect = !1;
                            var i = l(e, "open",
                            function() {
                                n.onopen(),
                                t && t()
                            }),
                            o = l(e, "error",
                            function(e) {
                                if (m("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", e), t) {
                                    var i = new Error("Connection error");
                                    i.data = e,
                                    t(i)
                                } else n.maybeReconnectOnOpen()
                            });
                            if (!1 !== this._timeout) {
                                var s = this._timeout;
                                m("connect attempt will timeout after %d", s);
                                var c = setTimeout(function() {
                                    m("connect attempt timed out after %d", s),
                                    i.destroy(),
                                    e.close(),
                                    e.emit("error", "timeout"),
                                    n.emitAll("connect_timeout", s)
                                },
                                s);
                                this.subs.push({
                                    destroy: function() {
                                        clearTimeout(c)
                                    }
                                })
                            }
                            return this.subs.push(i),
                            this.subs.push(o),
                            this
                        },
                        i.prototype.onopen = function() {
                            m("open"),
                            this.cleanup(),
                            this.readyState = "open",
                            this.emit("open");
                            var t = this.engine;
                            this.subs.push(l(t, "data", h(this, "ondata"))),
                            this.subs.push(l(t, "ping", h(this, "onping"))),
                            this.subs.push(l(t, "pong", h(this, "onpong"))),
                            this.subs.push(l(t, "error", h(this, "onerror"))),
                            this.subs.push(l(t, "close", h(this, "onclose"))),
                            this.subs.push(l(this.decoder, "decoded", h(this, "ondecoded")))
                        },
                        i.prototype.onping = function() {
                            this.lastPing = new Date,
                            this.emitAll("ping")
                        },
                        i.prototype.onpong = function() {
                            this.emitAll("pong", new Date - this.lastPing)
                        },
                        i.prototype.ondata = function(t) {
                            this.decoder.add(t)
                        },
                        i.prototype.ondecoded = function(t) {
                            this.emit("packet", t)
                        },
                        i.prototype.onerror = function(t) {
                            m("error", t),
                            this.emitAll("error", t)
                        },
                        i.prototype.socket = function(t) {
                            function e() {~u(i.connecting, n) || i.connecting.push(n)
                            }
                            var n = this.nsps[t];
                            if (!n) {
                                n = new s(this, t),
                                this.nsps[t] = n;
                                var i = this;
                                n.on("connecting", e),
                                n.on("connect",
                                function() {
                                    n.id = i.engine.id
                                }),
                                this.autoConnect && e()
                            }
                            return n
                        },
                        i.prototype.destroy = function(t) {
                            var e = u(this.connecting, t);~e && this.connecting.splice(e, 1),
                            this.connecting.length || this.close()
                        },
                        i.prototype.packet = function(t) {
                            m("writing packet %j", t);
                            var e = this;
                            e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t,
                            function(n) {
                                for (var i = 0; i < n.length; i++) e.engine.write(n[i], t.options);
                                e.encoding = !1,
                                e.processPacketQueue()
                            }))
                        },
                        i.prototype.processPacketQueue = function() {
                            if (this.packetBuffer.length > 0 && !this.encoding) {
                                var t = this.packetBuffer.shift();
                                this.packet(t)
                            }
                        },
                        i.prototype.cleanup = function() {
                            m("cleanup");
                            for (var t; t = this.subs.shift();) t.destroy();
                            this.packetBuffer = [],
                            this.encoding = !1,
                            this.lastPing = null,
                            this.decoder.destroy()
                        },
                        i.prototype.close = i.prototype.disconnect = function() {
                            m("disconnect"),
                            this.skipReconnect = !0,
                            this.reconnecting = !1,
                            "opening" == this.readyState && this.cleanup(),
                            this.backoff.reset(),
                            this.readyState = "closed",
                            this.engine && this.engine.close()
                        },
                        i.prototype.onclose = function(t) {
                            m("onclose"),
                            this.cleanup(),
                            this.backoff.reset(),
                            this.readyState = "closed",
                            this.emit("close", t),
                            this._reconnection && !this.skipReconnect && this.reconnect()
                        },
                        i.prototype.reconnect = function() {
                            if (this.reconnecting || this.skipReconnect) return this;
                            var t = this;
                            if (this.backoff.attempts >= this._reconnectionAttempts) m("reconnect failed"),
                            this.backoff.reset(),
                            this.emitAll("reconnect_failed"),
                            this.reconnecting = !1;
                            else {
                                var e = this.backoff.duration();
                                m("will wait %dms before reconnect attempt", e),
                                this.reconnecting = !0;
                                var n = setTimeout(function() {
                                    t.skipReconnect || (m("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) {
                                        e ? (m("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (m("reconnect success"), t.onreconnect())
                                    }))
                                },
                                e);
                                this.subs.push({
                                    destroy: function() {
                                        clearTimeout(n)
                                    }
                                })
                            }
                        },
                        i.prototype.onreconnect = function() {
                            var t = this.backoff.attempts;
                            this.reconnecting = !1,
                            this.backoff.reset(),
                            this.updateSocketIds(),
                            this.emitAll("reconnect", t)
                        }
                    },
                    {
                        "./on": 3,
                        "./socket": 4,
                        backo2: 8,
                        "component-bind": 11,
                        "component-emitter": 12,
                        debug: 14,
                        "engine.io-client": 16,
                        indexof: 32,
                        "socket.io-parser": 40
                    }],
                    3 : [function(t, e, n) {
                        function i(t, e, n) {
                            return t.on(e, n),
                            {
                                destroy: function() {
                                    t.removeListener(e, n)
                                }
                            }
                        }
                        e.exports = i
                    },
                    {}],
                    4 : [function(t, e, n) {
                        function i(t, e) {
                            this.io = t,
                            this.nsp = e,
                            this.json = this,
                            this.ids = 0,
                            this.acks = {},
                            this.receiveBuffer = [],
                            this.sendBuffer = [],
                            this.connected = !1,
                            this.disconnected = !0,
                            this.io.autoConnect && this.open()
                        }
                        var o = t("socket.io-parser"),
                        a = t("component-emitter"),
                        s = t("to-array"),
                        c = t("./on"),
                        r = t("component-bind"),
                        l = t("debug")("socket.io-client:socket"),
                        h = t("has-binary");
                        e.exports = n = i;
                        var m = {
                            connect: 1,
                            connect_error: 1,
                            connect_timeout: 1,
                            connecting: 1,
                            disconnect: 1,
                            error: 1,
                            reconnect: 1,
                            reconnect_attempt: 1,
                            reconnect_failed: 1,
                            reconnect_error: 1,
                            reconnecting: 1,
                            ping: 1,
                            pong: 1
                        },
                        u = a.prototype.emit;
                        a(i.prototype),
                        i.prototype.subEvents = function() {
                            if (!this.subs) {
                                var t = this.io;
                                this.subs = [c(t, "open", r(this, "onopen")), c(t, "packet", r(this, "onpacket")), c(t, "close", r(this, "onclose"))]
                            }
                        },
                        i.prototype.open = i.prototype.connect = function() {
                            return this.connected ? this: (this.subEvents(), this.io.open(), "open" == this.io.readyState && this.onopen(), this.emit("connecting"), this)
                        },
                        i.prototype.send = function() {
                            var t = s(arguments);
                            return t.unshift("message"),
                            this.emit.apply(this, t),
                            this
                        },
                        i.prototype.emit = function(t) {
                            if (m.hasOwnProperty(t)) return u.apply(this, arguments),
                            this;
                            var e = s(arguments),
                            n = o.EVENT;
                            h(e) && (n = o.BINARY_EVENT);
                            var i = {
                                type: n,
                                data: e
                            };
                            return i.options = {},
                            i.options.compress = !this.flags || !1 !== this.flags.compress,
                            "function" == typeof e[e.length - 1] && (l("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), i.id = this.ids++),
                            this.connected ? this.packet(i) : this.sendBuffer.push(i),
                            delete this.flags,
                            this
                        },
                        i.prototype.packet = function(t) {
                            t.nsp = this.nsp,
                            this.io.packet(t)
                        },
                        i.prototype.onopen = function() {
                            l("transport is open - connecting"),
                            "/" != this.nsp && this.packet({
                                type: o.CONNECT
                            })
                        },
                        i.prototype.onclose = function(t) {
                            l("close (%s)", t),
                            this.connected = !1,
                            this.disconnected = !0,
                            delete this.id,
                            this.emit("disconnect", t)
                        },
                        i.prototype.onpacket = function(t) {
                            if (t.nsp == this.nsp) switch (t.type) {
                            case o.CONNECT:
                                this.onconnect();
                                break;
                            case o.EVENT:
                                this.onevent(t);
                                break;
                            case o.BINARY_EVENT:
                                this.onevent(t);
                                break;
                            case o.ACK:
                                this.onack(t);
                                break;
                            case o.BINARY_ACK:
                                this.onack(t);
                                break;
                            case o.DISCONNECT:
                                this.ondisconnect();
                                break;
                            case o.ERROR:
                                this.emit("error", t.data)
                            }
                        },
                        i.prototype.onevent = function(t) {
                            var e = t.data || [];
                            l("emitting event %j", e),
                            null != t.id && (l("attaching ack callback to event"), e.push(this.ack(t.id))),
                            this.connected ? u.apply(this, e) : this.receiveBuffer.push(e)
                        },
                        i.prototype.ack = function(t) {
                            var e = this,
                            n = !1;
                            return function() {
                                if (!n) {
                                    n = !0;
                                    var i = s(arguments);
                                    l("sending ack %j", i);
                                    var a = h(i) ? o.BINARY_ACK: o.ACK;
                                    e.packet({
                                        type: a,
                                        id: t,
                                        data: i
                                    })
                                }
                            }
                        },
                        i.prototype.onack = function(t) {
                            var e = this.acks[t.id];
                            "function" == typeof e ? (l("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : l("bad ack %s", t.id)
                        },
                        i.prototype.onconnect = function() {
                            this.connected = !0,
                            this.disconnected = !1,
                            this.emit("connect"),
                            this.emitBuffered()
                        },
                        i.prototype.emitBuffered = function() {
                            var t;
                            for (t = 0; t < this.receiveBuffer.length; t++) u.apply(this, this.receiveBuffer[t]);
                            for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
                            this.sendBuffer = []
                        },
                        i.prototype.ondisconnect = function() {
                            l("server disconnect (%s)", this.nsp),
                            this.destroy(),
                            this.onclose("io server disconnect")
                        },
                        i.prototype.destroy = function() {
                            if (this.subs) {
                                for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
                                this.subs = null
                            }
                            this.io.destroy(this)
                        },
                        i.prototype.close = i.prototype.disconnect = function() {
                            return this.connected && (l("performing disconnect (%s)", this.nsp), this.packet({
                                type: o.DISCONNECT
                            })),
                            this.destroy(),
                            this.connected && this.onclose("io client disconnect"),
                            this
                        },
                        i.prototype.compress = function(t) {
                            return this.flags = this.flags || {},
                            this.flags.compress = t,
                            this
                        }
                    },
                    {
                        "./on": 3,
                        "component-bind": 11,
                        "component-emitter": 12,
                        debug: 14,
                        "has-binary": 30,
                        "socket.io-parser": 40,
                        "to-array": 43
                    }],
                    5 : [function(t, e, n) { (function(n) {
                            function i(t, e) {
                                var i = t,
                                e = e || n.location;
                                null == t && (t = e.protocol + "//" + e.host),
                                "string" == typeof t && ("/" == t.charAt(0) && (t = "/" == t.charAt(1) ? e.protocol + t: e.host + t), /^(https?|wss?):\/\//.test(t) || (a("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t: "https://" + t), a("parse %s", t), i = o(t)),
                                i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80": /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
                                i.path = i.path || "/";
                                var s = i.host.indexOf(":") !== -1,
                                c = s ? "[" + i.host + "]": i.host;
                                return i.id = i.protocol + "://" + c + ":" + i.port,
                                i.href = i.protocol + "://" + c + (e && e.port == i.port ? "": ":" + i.port),
                                i
                            }
                            var o = t("parseuri"),
                            a = t("debug")("socket.io-client:url");
                            e.exports = i
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        debug: 14,
                        parseuri: 38
                    }],
                    6 : [function(t, e, n) {
                        function i(t, e, n) {
                            function i(t, o) {
                                if (i.count <= 0) throw new Error("after called too many times"); --i.count,
                                t ? (a = !0, e(t), e = n) : 0 !== i.count || a || e(null, o)
                            }
                            var a = !1;
                            return n = n || o,
                            i.count = t,
                            0 === t ? e() : i
                        }
                        function o() {}
                        e.exports = i
                    },
                    {}],
                    7 : [function(t, e, n) {
                        e.exports = function(t, e, n) {
                            var i = t.byteLength;
                            if (e = e || 0, n = n || i, t.slice) return t.slice(e, n);
                            if (e < 0 && (e += i), n < 0 && (n += i), n > i && (n = i), e >= i || e >= n || 0 === i) return new ArrayBuffer(0);
                            for (var o = new Uint8Array(t), a = new Uint8Array(n - e), s = e, c = 0; s < n; s++, c++) a[c] = o[s];
                            return a.buffer
                        }
                    },
                    {}],
                    8 : [function(t, e, n) {
                        function i(t) {
                            t = t || {},
                            this.ms = t.min || 100,
                            this.max = t.max || 1e4,
                            this.factor = t.factor || 2,
                            this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter: 0,
                            this.attempts = 0
                        }
                        e.exports = i,
                        i.prototype.duration = function() {
                            var t = this.ms * Math.pow(this.factor, this.attempts++);
                            if (this.jitter) {
                                var e = Math.random(),
                                n = Math.floor(e * this.jitter * t);
                                t = 0 == (1 & Math.floor(10 * e)) ? t - n: t + n
                            }
                            return 0 | Math.min(t, this.max)
                        },
                        i.prototype.reset = function() {
                            this.attempts = 0
                        },
                        i.prototype.setMin = function(t) {
                            this.ms = t
                        },
                        i.prototype.setMax = function(t) {
                            this.max = t
                        },
                        i.prototype.setJitter = function(t) {
                            this.jitter = t
                        }
                    },
                    {}],
                    9 : [function(t, e, n) { !
                        function() {
                            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            e = new Uint8Array(256), i = 0; i < t.length; i++) e[t.charCodeAt(i)] = i;
                            n.encode = function(e) {
                                var n, i = new Uint8Array(e),
                                o = i.length,
                                a = "";
                                for (n = 0; n < o; n += 3) a += t[i[n] >> 2],
                                a += t[(3 & i[n]) << 4 | i[n + 1] >> 4],
                                a += t[(15 & i[n + 1]) << 2 | i[n + 2] >> 6],
                                a += t[63 & i[n + 2]];
                                return o % 3 === 2 ? a = a.substring(0, a.length - 1) + "=": o % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="),
                                a
                            },
                            n.decode = function(t) {
                                var n, i, o, a, s, c = .75 * t.length,
                                r = t.length,
                                l = 0;
                                "=" === t[t.length - 1] && (c--, "=" === t[t.length - 2] && c--);
                                var h = new ArrayBuffer(c),
                                m = new Uint8Array(h);
                                for (n = 0; n < r; n += 4) i = e[t.charCodeAt(n)],
                                o = e[t.charCodeAt(n + 1)],
                                a = e[t.charCodeAt(n + 2)],
                                s = e[t.charCodeAt(n + 3)],
                                m[l++] = i << 2 | o >> 4,
                                m[l++] = (15 & o) << 4 | a >> 2,
                                m[l++] = (3 & a) << 6 | 63 & s;
                                return h
                            }
                        } ()
                    },
                    {}],
                    10 : [function(t, e, n) { (function(t) {
                            function n(t) {
                                for (var e = 0; e < t.length; e++) {
                                    var n = t[e];
                                    if (n.buffer instanceof ArrayBuffer) {
                                        var i = n.buffer;
                                        if (n.byteLength !== i.byteLength) {
                                            var o = new Uint8Array(n.byteLength);
                                            o.set(new Uint8Array(i, n.byteOffset, n.byteLength)),
                                            i = o.buffer
                                        }
                                        t[e] = i
                                    }
                                }
                            }
                            function i(t, e) {
                                e = e || {};
                                var i = new a;
                                n(t);
                                for (var o = 0; o < t.length; o++) i.append(t[o]);
                                return e.type ? i.getBlob(e.type) : i.getBlob()
                            }
                            function o(t, e) {
                                return n(t),
                                new Blob(t, e || {})
                            }
                            var a = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
                            s = function() {
                                try {
                                    var t = new Blob(["hi"]);
                                    return 2 === t.size
                                } catch(e) {
                                    return ! 1
                                }
                            } (),
                            c = s &&
                            function() {
                                try {
                                    var t = new Blob([new Uint8Array([1, 2])]);
                                    return 2 === t.size
                                } catch(e) {
                                    return ! 1
                                }
                            } (),
                            r = a && a.prototype.append && a.prototype.getBlob;
                            e.exports = function() {
                                return s ? c ? t.Blob: o: r ? i: void 0
                            } ()
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {}],
                    11 : [function(t, e, n) {
                        var i = [].slice;
                        e.exports = function(t, e) {
                            if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
                            var n = i.call(arguments, 2);
                            return function() {
                                return e.apply(t, n.concat(i.call(arguments)))
                            }
                        }
                    },
                    {}],
                    12 : [function(t, e, n) {
                        function i(t) {
                            if (t) return o(t)
                        }
                        function o(t) {
                            for (var e in i.prototype) t[e] = i.prototype[e];
                            return t
                        }
                        e.exports = i,
                        i.prototype.on = i.prototype.addEventListener = function(t, e) {
                            return this._callbacks = this._callbacks || {},
                            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
                            this
                        },
                        i.prototype.once = function(t, e) {
                            function n() {
                                this.off(t, n),
                                e.apply(this, arguments)
                            }
                            return n.fn = e,
                            this.on(t, n),
                            this
                        },
                        i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(t, e) {
                            if (this._callbacks = this._callbacks || {},
                            0 == arguments.length) return this._callbacks = {},
                            this;
                            var n = this._callbacks["$" + t];
                            if (!n) return this;
                            if (1 == arguments.length) return delete this._callbacks["$" + t],
                            this;
                            for (var i, o = 0; o < n.length; o++) if (i = n[o], i === e || i.fn === e) {
                                n.splice(o, 1);
                                break
                            }
                            return this
                        },
                        i.prototype.emit = function(t) {
                            this._callbacks = this._callbacks || {};
                            var e = [].slice.call(arguments, 1),
                            n = this._callbacks["$" + t];
                            if (n) {
                                n = n.slice(0);
                                for (var i = 0,
                                o = n.length; i < o; ++i) n[i].apply(this, e)
                            }
                            return this
                        },
                        i.prototype.listeners = function(t) {
                            return this._callbacks = this._callbacks || {},
                            this._callbacks["$" + t] || []
                        },
                        i.prototype.hasListeners = function(t) {
                            return !! this.listeners(t).length
                        }
                    },
                    {}],
                    13 : [function(t, e, n) {
                        e.exports = function(t, e) {
                            var n = function() {};
                            n.prototype = e.prototype,
                            t.prototype = new n,
                            t.prototype.constructor = t
                        }
                    },
                    {}],
                    14 : [function(t, e, n) {
                        function i() {
                            return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
                        }
                        function a() {
                            var t = arguments,
                            e = this.useColors;
                            if (t[0] = (e ? "%c": "") + this.namespace + (e ? " %c": " ") + t[0] + (e ? "%c ": " ") + "+" + n.humanize(this.diff), !e) return t;
                            var i = "color: " + this.color;
                            t = [t[0], i, "color: inherit"].concat(Array.prototype.slice.call(t, 1));
                            var o = 0,
                            a = 0;
                            return t[0].replace(/%[a-z%]/g,
                            function(t) {
                                "%%" !== t && (o++, "%c" === t && (a = o))
                            }),
                            t.splice(a, 0, i),
                            t
                        }
                        function s() {
                            return "object" === ("undefined" == typeof console ? "undefined": o(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments)
                        }
                        function c(t) {
                            try {
                                null == t ? n.storage.removeItem("debug") : n.storage.debug = t
                            } catch(e) {}
                        }
                        function r() {
                            var t;
                            try {
                                t = n.storage.debug
                            } catch(e) {}
                            return t
                        }
                        function l() {
                            try {
                                return window.localStorage
                            } catch(t) {}
                        }
                        n = e.exports = t("./debug"),
                        n.log = s,
                        n.formatArgs = a,
                        n.save = c,
                        n.load = r,
                        n.useColors = i,
                        n.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local: l(),
                        n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"],
                        n.formatters.j = function(t) {
                            return JSON.stringify(t)
                        },
                        n.enable(r())
                    },
                    {
                        "./debug": 15
                    }],
                    15 : [function(t, e, n) {
                        function i() {
                            return n.colors[h++%n.colors.length]
                        }
                        function o(t) {
                            function e() {}
                            function o() {
                                var t = o,
                                e = +new Date,
                                a = e - (l || e);
                                t.diff = a,
                                t.prev = l,
                                t.curr = e,
                                l = e,
                                null == t.useColors && (t.useColors = n.useColors()),
                                null == t.color && t.useColors && (t.color = i());
                                var s = Array.prototype.slice.call(arguments);
                                s[0] = n.coerce(s[0]),
                                "string" != typeof s[0] && (s = ["%o"].concat(s));
                                var c = 0;
                                s[0] = s[0].replace(/%([a-z%])/g,
                                function(e, i) {
                                    if ("%%" === e) return e;
                                    c++;
                                    var o = n.formatters[i];
                                    if ("function" == typeof o) {
                                        var a = s[c];
                                        e = o.call(t, a),
                                        s.splice(c, 1),
                                        c--
                                    }
                                    return e
                                }),
                                "function" == typeof n.formatArgs && (s = n.formatArgs.apply(t, s));
                                var r = o.log || n.log || console.log.bind(console);
                                r.apply(t, s)
                            }
                            e.enabled = !1,
                            o.enabled = !0;
                            var a = n.enabled(t) ? o: e;
                            return a.namespace = t,
                            a
                        }
                        function a(t) {
                            n.save(t);
                            for (var e = (t || "").split(/[\s,]+/), i = e.length, o = 0; o < i; o++) e[o] && (t = e[o].replace(/\*/g, ".*?"), "-" === t[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")))
                        }
                        function s() {
                            n.enable("")
                        }
                        function c(t) {
                            var e, i;
                            for (e = 0, i = n.skips.length; e < i; e++) if (n.skips[e].test(t)) return ! 1;
                            for (e = 0, i = n.names.length; e < i; e++) if (n.names[e].test(t)) return ! 0;
                            return ! 1
                        }
                        function r(t) {
                            return t instanceof Error ? t.stack || t.message: t
                        }
                        n = e.exports = o,
                        n.coerce = r,
                        n.disable = s,
                        n.enable = a,
                        n.enabled = c,
                        n.humanize = t("ms"),
                        n.names = [],
                        n.skips = [],
                        n.formatters = {};
                        var l, h = 0
                    },
                    {
                        ms: 35
                    }],
                    16 : [function(t, e, n) {
                        e.exports = t("./lib/")
                    },
                    {
                        "./lib/": 17
                    }],
                    17 : [function(t, e, n) {
                        e.exports = t("./socket"),
                        e.exports.parser = t("engine.io-parser")
                    },
                    {
                        "./socket": 18,
                        "engine.io-parser": 27
                    }],
                    18 : [function(t, e, n) { (function(n) {
                            function i(t, e) {
                                if (! (this instanceof i)) return new i(t, e);
                                e = e || {},
                                t && "object" == ("undefined" == typeof t ? "undefined": o(t)) && (e = t, t = null),
                                t ? (t = m(t), e.hostname = t.host, e.secure = "https" == t.protocol || "wss" == t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = m(e.host).host),
                                this.secure = null != e.secure ? e.secure: n.location && "https:" == location.protocol,
                                e.hostname && !e.port && (e.port = this.secure ? "443": "80"),
                                this.agent = e.agent || !1,
                                this.hostname = e.hostname || (n.location ? location.hostname: "localhost"),
                                this.port = e.port || (n.location && location.port ? location.port: this.secure ? 443 : 80),
                                this.query = e.query || {},
                                "string" == typeof this.query && (this.query = d.decode(this.query)),
                                this.upgrade = !1 !== e.upgrade,
                                this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/",
                                this.forceJSONP = !!e.forceJSONP,
                                this.jsonp = !1 !== e.jsonp,
                                this.forceBase64 = !!e.forceBase64,
                                this.enablesXDR = !!e.enablesXDR,
                                this.timestampParam = e.timestampParam || "t",
                                this.timestampRequests = e.timestampRequests,
                                this.transports = e.transports || ["polling", "websocket"],
                                this.readyState = "",
                                this.writeBuffer = [],
                                this.policyPort = e.policyPort || 843,
                                this.rememberUpgrade = e.rememberUpgrade || !1,
                                this.binaryType = null,
                                this.onlyBinaryUpgrades = e.onlyBinaryUpgrades,
                                this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}),
                                !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                                this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                                this.pfx = e.pfx || null,
                                this.key = e.key || null,
                                this.passphrase = e.passphrase || null,
                                this.cert = e.cert || null,
                                this.ca = e.ca || null,
                                this.ciphers = e.ciphers || null,
                                this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized;
                                var a = "object" == ("undefined" == typeof n ? "undefined": o(n)) && n;
                                a.global === a && e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders),
                                this.open()
                            }
                            function a(t) {
                                var e = {};
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                                return e
                            }
                            var s = t("./transports"),
                            c = t("component-emitter"),
                            r = t("debug")("engine.io-client:socket"),
                            l = t("indexof"),
                            h = t("engine.io-parser"),
                            m = t("parseuri"),
                            u = t("parsejson"),
                            d = t("parseqs");
                            e.exports = i,
                            i.priorWebsocketSuccess = !1,
                            c(i.prototype),
                            i.protocol = h.protocol,
                            i.Socket = i,
                            i.Transport = t("./transport"),
                            i.transports = t("./transports"),
                            i.parser = t("engine.io-parser"),
                            i.prototype.createTransport = function(t) {
                                r('creating transport "%s"', t);
                                var e = a(this.query);
                                e.EIO = h.protocol,
                                e.transport = t,
                                this.id && (e.sid = this.id);
                                var n = new s[t]({
                                    agent: this.agent,
                                    hostname: this.hostname,
                                    port: this.port,
                                    secure: this.secure,
                                    path: this.path,
                                    query: e,
                                    forceJSONP: this.forceJSONP,
                                    jsonp: this.jsonp,
                                    forceBase64: this.forceBase64,
                                    enablesXDR: this.enablesXDR,
                                    timestampRequests: this.timestampRequests,
                                    timestampParam: this.timestampParam,
                                    policyPort: this.policyPort,
                                    socket: this,
                                    pfx: this.pfx,
                                    key: this.key,
                                    passphrase: this.passphrase,
                                    cert: this.cert,
                                    ca: this.ca,
                                    ciphers: this.ciphers,
                                    rejectUnauthorized: this.rejectUnauthorized,
                                    perMessageDeflate: this.perMessageDeflate,
                                    extraHeaders: this.extraHeaders
                                });
                                return n
                            },
                            i.prototype.open = function() {
                                var t;
                                if (this.rememberUpgrade && i.priorWebsocketSuccess && this.transports.indexOf("websocket") != -1) t = "websocket";
                                else {
                                    if (0 === this.transports.length) {
                                        var e = this;
                                        return void setTimeout(function() {
                                            e.emit("error", "No transports available")
                                        },
                                        0)
                                    }
                                    t = this.transports[0]
                                }
                                this.readyState = "opening";
                                try {
                                    t = this.createTransport(t)
                                } catch(n) {
                                    return this.transports.shift(),
                                    void this.open()
                                }
                                t.open(),
                                this.setTransport(t)
                            },
                            i.prototype.setTransport = function(t) {
                                r("setting transport %s", t.name);
                                var e = this;
                                this.transport && (r("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()),
                                this.transport = t,
                                t.on("drain",
                                function() {
                                    e.onDrain()
                                }).on("packet",
                                function(t) {
                                    e.onPacket(t)
                                }).on("error",
                                function(t) {
                                    e.onError(t)
                                }).on("close",
                                function() {
                                    e.onClose("transport close")
                                })
                            },
                            i.prototype.probe = function(t) {
                                function e() {
                                    if (u.onlyBinaryUpgrades) {
                                        var e = !this.supportsBinary && u.transport.supportsBinary;
                                        m = m || e
                                    }
                                    m || (r('probe transport "%s" opened', t), h.send([{
                                        type: "ping",
                                        data: "probe"
                                    }]), h.once("packet",
                                    function(e) {
                                        if (!m) if ("pong" == e.type && "probe" == e.data) {
                                            if (r('probe transport "%s" pong', t), u.upgrading = !0, u.emit("upgrading", h), !h) return;
                                            i.priorWebsocketSuccess = "websocket" == h.name,
                                            r('pausing current transport "%s"', u.transport.name),
                                            u.transport.pause(function() {
                                                m || "closed" != u.readyState && (r("changing transport and sending upgrade packet"), l(), u.setTransport(h), h.send([{
                                                    type: "upgrade"
                                                }]), u.emit("upgrade", h), h = null, u.upgrading = !1, u.flush())
                                            })
                                        } else {
                                            r('probe transport "%s" failed', t);
                                            var n = new Error("probe error");
                                            n.transport = h.name,
                                            u.emit("upgradeError", n)
                                        }
                                    }))
                                }
                                function n() {
                                    m || (m = !0, l(), h.close(), h = null)
                                }
                                function o(e) {
                                    var i = new Error("probe error: " + e);
                                    i.transport = h.name,
                                    n(),
                                    r('probe transport "%s" failed because of error: %s', t, e),
                                    u.emit("upgradeError", i)
                                }
                                function a() {
                                    o("transport closed")
                                }
                                function s() {
                                    o("socket closed")
                                }
                                function c(t) {
                                    h && t.name != h.name && (r('"%s" works - aborting "%s"', t.name, h.name), n())
                                }
                                function l() {
                                    h.removeListener("open", e),
                                    h.removeListener("error", o),
                                    h.removeListener("close", a),
                                    u.removeListener("close", s),
                                    u.removeListener("upgrading", c)
                                }
                                r('probing transport "%s"', t);
                                var h = this.createTransport(t, {
                                    probe: 1
                                }),
                                m = !1,
                                u = this;
                                i.priorWebsocketSuccess = !1,
                                h.once("open", e),
                                h.once("error", o),
                                h.once("close", a),
                                this.once("close", s),
                                this.once("upgrading", c),
                                h.open()
                            },
                            i.prototype.onOpen = function() {
                                if (r("socket open"), this.readyState = "open", i.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                                    r("starting upgrade probes");
                                    for (var t = 0,
                                    e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
                                }
                            },
                            i.prototype.onPacket = function(t) {
                                if ("opening" == this.readyState || "open" == this.readyState) switch (r('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                                case "open":
                                    this.onHandshake(u(t.data));
                                    break;
                                case "pong":
                                    this.setPing(),
                                    this.emit("pong");
                                    break;
                                case "error":
                                    var e = new Error("server error");
                                    e.code = t.data,
                                    this.onError(e);
                                    break;
                                case "message":
                                    this.emit("data", t.data),
                                    this.emit("message", t.data)
                                } else r('packet received with socket readyState "%s"', this.readyState)
                            },
                            i.prototype.onHandshake = function(t) {
                                this.emit("handshake", t),
                                this.id = t.sid,
                                this.transport.query.sid = t.sid,
                                this.upgrades = this.filterUpgrades(t.upgrades),
                                this.pingInterval = t.pingInterval,
                                this.pingTimeout = t.pingTimeout,
                                this.onOpen(),
                                "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                            },
                            i.prototype.onHeartbeat = function(t) {
                                clearTimeout(this.pingTimeoutTimer);
                                var e = this;
                                e.pingTimeoutTimer = setTimeout(function() {
                                    "closed" != e.readyState && e.onClose("ping timeout")
                                },
                                t || e.pingInterval + e.pingTimeout)
                            },
                            i.prototype.setPing = function() {
                                var t = this;
                                clearTimeout(t.pingIntervalTimer),
                                t.pingIntervalTimer = setTimeout(function() {
                                    r("writing ping packet - expecting pong within %sms", t.pingTimeout),
                                    t.ping(),
                                    t.onHeartbeat(t.pingTimeout)
                                },
                                t.pingInterval)
                            },
                            i.prototype.ping = function() {
                                var t = this;
                                this.sendPacket("ping",
                                function() {
                                    t.emit("ping")
                                })
                            },
                            i.prototype.onDrain = function() {
                                this.writeBuffer.splice(0, this.prevBufferLen),
                                this.prevBufferLen = 0,
                                0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                            },
                            i.prototype.flush = function() {
                                "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (r("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                            },
                            i.prototype.write = i.prototype.send = function(t, e, n) {
                                return this.sendPacket("message", t, e, n),
                                this
                            },
                            i.prototype.sendPacket = function(t, e, n, i) {
                                if ("function" == typeof e && (i = e, e = void 0), "function" == typeof n && (i = n, n = null), "closing" != this.readyState && "closed" != this.readyState) {
                                    n = n || {},
                                    n.compress = !1 !== n.compress;
                                    var o = {
                                        type: t,
                                        data: e,
                                        options: n
                                    };
                                    this.emit("packetCreate", o),
                                    this.writeBuffer.push(o),
                                    i && this.once("flush", i),
                                    this.flush()
                                }
                            },
                            i.prototype.close = function() {
                                function t() {
                                    i.onClose("forced close"),
                                    r("socket closing - telling transport to close"),
                                    i.transport.close()
                                }
                                function e() {
                                    i.removeListener("upgrade", e),
                                    i.removeListener("upgradeError", e),
                                    t()
                                }
                                function n() {
                                    i.once("upgrade", e),
                                    i.once("upgradeError", e)
                                }
                                if ("opening" == this.readyState || "open" == this.readyState) {
                                    this.readyState = "closing";
                                    var i = this;
                                    this.writeBuffer.length ? this.once("drain",
                                    function() {
                                        this.upgrading ? n() : t()
                                    }) : this.upgrading ? n() : t()
                                }
                                return this
                            },
                            i.prototype.onError = function(t) {
                                r("socket error %j", t),
                                i.priorWebsocketSuccess = !1,
                                this.emit("error", t),
                                this.onClose("transport error", t)
                            },
                            i.prototype.onClose = function(t, e) {
                                if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                                    r('socket close with reason: "%s"', t);
                                    var n = this;
                                    clearTimeout(this.pingIntervalTimer),
                                    clearTimeout(this.pingTimeoutTimer),
                                    this.transport.removeAllListeners("close"),
                                    this.transport.close(),
                                    this.transport.removeAllListeners(),
                                    this.readyState = "closed",
                                    this.id = null,
                                    this.emit("close", t, e),
                                    n.writeBuffer = [],
                                    n.prevBufferLen = 0
                                }
                            },
                            i.prototype.filterUpgrades = function(t) {
                                for (var e = [], n = 0, i = t.length; n < i; n++)~l(this.transports, t[n]) && e.push(t[n]);
                                return e
                            }
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        "./transport": 19,
                        "./transports": 20,
                        "component-emitter": 26,
                        debug: 14,
                        "engine.io-parser": 27,
                        indexof: 32,
                        parsejson: 36,
                        parseqs: 37,
                        parseuri: 38
                    }],
                    19 : [function(t, e, n) {
                        function i(t) {
                            this.path = t.path,
                            this.hostname = t.hostname,
                            this.port = t.port,
                            this.secure = t.secure,
                            this.query = t.query,
                            this.timestampParam = t.timestampParam,
                            this.timestampRequests = t.timestampRequests,
                            this.readyState = "",
                            this.agent = t.agent || !1,
                            this.socket = t.socket,
                            this.enablesXDR = t.enablesXDR,
                            this.pfx = t.pfx,
                            this.key = t.key,
                            this.passphrase = t.passphrase,
                            this.cert = t.cert,
                            this.ca = t.ca,
                            this.ciphers = t.ciphers,
                            this.rejectUnauthorized = t.rejectUnauthorized,
                            this.extraHeaders = t.extraHeaders
                        }
                        var o = t("engine.io-parser"),
                        a = t("component-emitter");
                        e.exports = i,
                        a(i.prototype),
                        i.prototype.onError = function(t, e) {
                            var n = new Error(t);
                            return n.type = "TransportError",
                            n.description = e,
                            this.emit("error", n),
                            this
                        },
                        i.prototype.open = function() {
                            return "closed" != this.readyState && "" != this.readyState || (this.readyState = "opening", this.doOpen()),
                            this
                        },
                        i.prototype.close = function() {
                            return "opening" != this.readyState && "open" != this.readyState || (this.doClose(), this.onClose()),
                            this
                        },
                        i.prototype.send = function(t) {
                            if ("open" != this.readyState) throw new Error("Transport not open");
                            this.write(t)
                        },
                        i.prototype.onOpen = function() {
                            this.readyState = "open",
                            this.writable = !0,
                            this.emit("open")
                        },
                        i.prototype.onData = function(t) {
                            var e = o.decodePacket(t, this.socket.binaryType);
                            this.onPacket(e)
                        },
                        i.prototype.onPacket = function(t) {
                            this.emit("packet", t)
                        },
                        i.prototype.onClose = function() {
                            this.readyState = "closed",
                            this.emit("close")
                        }
                    },
                    {
                        "component-emitter": 26,
                        "engine.io-parser": 27
                    }],
                    20 : [function(t, e, n) { (function(e) {
                            function i(t) {
                                var n, i = !1,
                                c = !1,
                                r = !1 !== t.jsonp;
                                if (e.location) {
                                    var l = "https:" == location.protocol,
                                    h = location.port;
                                    h || (h = l ? 443 : 80),
                                    i = t.hostname != location.hostname || h != t.port,
                                    c = t.secure != l
                                }
                                if (t.xdomain = i, t.xscheme = c, n = new o(t), "open" in n && !t.forceJSONP) return new a(t);
                                if (!r) throw new Error("JSONP disabled");
                                return new s(t)
                            }
                            var o = t("xmlhttprequest-ssl"),
                            a = t("./polling-xhr"),
                            s = t("./polling-jsonp"),
                            c = t("./websocket");
                            n.polling = i,
                            n.websocket = c
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        "./polling-jsonp": 21,
                        "./polling-xhr": 22,
                        "./websocket": 24,
                        "xmlhttprequest-ssl": 25
                    }],
                    21 : [function(t, e, n) { (function(n) {
                            function i() {}
                            function o(t) {
                                a.call(this, t),
                                this.query = this.query || {},
                                c || (n.___eio || (n.___eio = []), c = n.___eio),
                                this.index = c.length;
                                var e = this;
                                c.push(function(t) {
                                    e.onData(t)
                                }),
                                this.query.j = this.index,
                                n.document && n.addEventListener && n.addEventListener("beforeunload",
                                function() {
                                    e.script && (e.script.onerror = i)
                                },
                                !1)
                            }
                            var a = t("./polling"),
                            s = t("component-inherit");
                            e.exports = o;
                            var c, r = /\n/g,
                            l = /\\n/g;
                            s(o, a),
                            o.prototype.supportsBinary = !1,
                            o.prototype.doClose = function() {
                                this.script && (this.script.parentNode.removeChild(this.script), this.script = null),
                                this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null),
                                a.prototype.doClose.call(this)
                            },
                            o.prototype.doPoll = function() {
                                var t = this,
                                e = document.createElement("script");
                                this.script && (this.script.parentNode.removeChild(this.script), this.script = null),
                                e.async = !0,
                                e.src = this.uri(),
                                e.onerror = function(e) {
                                    t.onError("jsonp poll error", e)
                                };
                                var n = document.getElementsByTagName("script")[0];
                                n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e),
                                this.script = e;
                                var i = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                                i && setTimeout(function() {
                                    var t = document.createElement("iframe");
                                    document.body.appendChild(t),
                                    document.body.removeChild(t)
                                },
                                100)
                            },
                            o.prototype.doWrite = function(t, e) {
                                function n() {
                                    i(),
                                    e()
                                }
                                function i() {
                                    if (o.iframe) try {
                                        o.form.removeChild(o.iframe)
                                    } catch(t) {
                                        o.onError("jsonp polling iframe removal error", t)
                                    }
                                    try {
                                        var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                                        a = document.createElement(e)
                                    } catch(t) {
                                        a = document.createElement("iframe"),
                                        a.name = o.iframeId,
                                        a.src = "javascript:0"
                                    }
                                    a.id = o.iframeId,
                                    o.form.appendChild(a),
                                    o.iframe = a
                                }
                                var o = this;
                                if (!this.form) {
                                    var a, s = document.createElement("form"),
                                    c = document.createElement("textarea"),
                                    h = this.iframeId = "eio_iframe_" + this.index;
                                    s.className = "socketio",
                                    s.style.position = "absolute",
                                    s.style.top = "-1000px",
                                    s.style.left = "-1000px",
                                    s.target = h,
                                    s.method = "POST",
                                    s.setAttribute("accept-charset", "utf-8"),
                                    c.name = "d",
                                    s.appendChild(c),
                                    document.body.appendChild(s),
                                    this.form = s,
                                    this.area = c
                                }
                                this.form.action = this.uri(),
                                i(),
                                t = t.replace(l, "\\\n"),
                                this.area.value = t.replace(r, "\\n");
                                try {
                                    this.form.submit()
                                } catch(m) {}
                                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                                    "complete" == o.iframe.readyState && n()
                                }: this.iframe.onload = n
                            }
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        "./polling": 23,
                        "component-inherit": 13
                    }],
                    22 : [function(t, e, n) { (function(n) {
                            function i() {}
                            function o(t) {
                                if (r.call(this, t), n.location) {
                                    var e = "https:" == location.protocol,
                                    i = location.port;
                                    i || (i = e ? 443 : 80),
                                    this.xd = t.hostname != n.location.hostname || i != t.port,
                                    this.xs = t.secure != e
                                } else this.extraHeaders = t.extraHeaders
                            }
                            function a(t) {
                                this.method = t.method || "GET",
                                this.uri = t.uri,
                                this.xd = !!t.xd,
                                this.xs = !!t.xs,
                                this.async = !1 !== t.async,
                                this.data = void 0 != t.data ? t.data: null,
                                this.agent = t.agent,
                                this.isBinary = t.isBinary,
                                this.supportsBinary = t.supportsBinary,
                                this.enablesXDR = t.enablesXDR,
                                this.pfx = t.pfx,
                                this.key = t.key,
                                this.passphrase = t.passphrase,
                                this.cert = t.cert,
                                this.ca = t.ca,
                                this.ciphers = t.ciphers,
                                this.rejectUnauthorized = t.rejectUnauthorized,
                                this.extraHeaders = t.extraHeaders,
                                this.create()
                            }
                            function s() {
                                for (var t in a.requests) a.requests.hasOwnProperty(t) && a.requests[t].abort()
                            }
                            var c = t("xmlhttprequest-ssl"),
                            r = t("./polling"),
                            l = t("component-emitter"),
                            h = t("component-inherit"),
                            m = t("debug")("engine.io-client:polling-xhr");
                            e.exports = o,
                            e.exports.Request = a,
                            h(o, r),
                            o.prototype.supportsBinary = !0,
                            o.prototype.request = function(t) {
                                return t = t || {},
                                t.uri = this.uri(),
                                t.xd = this.xd,
                                t.xs = this.xs,
                                t.agent = this.agent || !1,
                                t.supportsBinary = this.supportsBinary,
                                t.enablesXDR = this.enablesXDR,
                                t.pfx = this.pfx,
                                t.key = this.key,
                                t.passphrase = this.passphrase,
                                t.cert = this.cert,
                                t.ca = this.ca,
                                t.ciphers = this.ciphers,
                                t.rejectUnauthorized = this.rejectUnauthorized,
                                t.extraHeaders = this.extraHeaders,
                                new a(t)
                            },
                            o.prototype.doWrite = function(t, e) {
                                var n = "string" != typeof t && void 0 !== t,
                                i = this.request({
                                    method: "POST",
                                    data: t,
                                    isBinary: n
                                }),
                                o = this;
                                i.on("success", e),
                                i.on("error",
                                function(t) {
                                    o.onError("xhr post error", t)
                                }),
                                this.sendXhr = i
                            },
                            o.prototype.doPoll = function() {
                                m("xhr poll");
                                var t = this.request(),
                                e = this;
                                t.on("data",
                                function(t) {
                                    e.onData(t)
                                }),
                                t.on("error",
                                function(t) {
                                    e.onError("xhr poll error", t)
                                }),
                                this.pollXhr = t
                            },
                            l(a.prototype),
                            a.prototype.create = function() {
                                var t = {
                                    agent: this.agent,
                                    xdomain: this.xd,
                                    xscheme: this.xs,
                                    enablesXDR: this.enablesXDR
                                };
                                t.pfx = this.pfx,
                                t.key = this.key,
                                t.passphrase = this.passphrase,
                                t.cert = this.cert,
                                t.ca = this.ca,
                                t.ciphers = this.ciphers,
                                t.rejectUnauthorized = this.rejectUnauthorized;
                                var e = this.xhr = new c(t),
                                i = this;
                                try {
                                    m("xhr open %s: %s", this.method, this.uri),
                                    e.open(this.method, this.uri, this.async);
                                    try {
                                        if (this.extraHeaders) {
                                            e.setDisableHeaderCheck(!0);
                                            for (var o in this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && e.setRequestHeader(o, this.extraHeaders[o])
                                        }
                                    } catch(s) {}
                                    if (this.supportsBinary && (e.responseType = "arraybuffer"), "POST" == this.method) try {
                                        this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                    } catch(s) {}
                                    "withCredentials" in e && (e.withCredentials = !0),
                                    this.hasXDR() ? (e.onload = function() {
                                        i.onLoad()
                                    },
                                    e.onerror = function() {
                                        i.onError(e.responseText)
                                    }) : e.onreadystatechange = function() {
                                        4 == e.readyState && (200 == e.status || 1223 == e.status ? i.onLoad() : setTimeout(function() {
                                            i.onError(e.status)
                                        },
                                        0))
                                    },
                                    m("xhr data %s", this.data),
                                    e.send(this.data)
                                } catch(s) {
                                    return void setTimeout(function() {
                                        i.onError(s)
                                    },
                                    0)
                                }
                                n.document && (this.index = a.requestsCount++, a.requests[this.index] = this)
                            },
                            a.prototype.onSuccess = function() {
                                this.emit("success"),
                                this.cleanup()
                            },
                            a.prototype.onData = function(t) {
                                this.emit("data", t),
                                this.onSuccess()
                            },
                            a.prototype.onError = function(t) {
                                this.emit("error", t),
                                this.cleanup(!0)
                            },
                            a.prototype.cleanup = function(t) {
                                if ("undefined" != typeof this.xhr && null !== this.xhr) {
                                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = i: this.xhr.onreadystatechange = i, t) try {
                                        this.xhr.abort()
                                    } catch(e) {}
                                    n.document && delete a.requests[this.index],
                                    this.xhr = null
                                }
                            },
                            a.prototype.onLoad = function() {
                                var t;
                                try {
                                    var e;
                                    try {
                                        e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                                    } catch(n) {}
                                    if ("application/octet-stream" === e) t = this.xhr.response;
                                    else if (this.supportsBinary) try {
                                        t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                                    } catch(n) {
                                        for (var i = new Uint8Array(this.xhr.response), o = [], a = 0, s = i.length; a < s; a++) o.push(i[a]);
                                        t = String.fromCharCode.apply(null, o)
                                    } else t = this.xhr.responseText
                                } catch(n) {
                                    this.onError(n)
                                }
                                null != t && this.onData(t)
                            },
                            a.prototype.hasXDR = function() {
                                return "undefined" != typeof n.XDomainRequest && !this.xs && this.enablesXDR
                            },
                            a.prototype.abort = function() {
                                this.cleanup()
                            },
                            n.document && (a.requestsCount = 0, a.requests = {},
                            n.attachEvent ? n.attachEvent("onunload", s) : n.addEventListener && n.addEventListener("beforeunload", s, !1))
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        "./polling": 23,
                        "component-emitter": 26,
                        "component-inherit": 13,
                        debug: 14,
                        "xmlhttprequest-ssl": 25
                    }],
                    23 : [function(t, e, n) {
                        function i(t) {
                            var e = t && t.forceBase64;
                            h && !e || (this.supportsBinary = !1),
                            o.call(this, t)
                        }
                        var o = t("../transport"),
                        a = t("parseqs"),
                        s = t("engine.io-parser"),
                        c = t("component-inherit"),
                        r = t("yeast"),
                        l = t("debug")("engine.io-client:polling");
                        e.exports = i;
                        var h = function() {
                            var e = t("xmlhttprequest-ssl"),
                            n = new e({
                                xdomain: !1
                            });
                            return null != n.responseType
                        } ();
                        c(i, o),
                        i.prototype.name = "polling",
                        i.prototype.doOpen = function() {
                            this.poll()
                        },
                        i.prototype.pause = function(t) {
                            function e() {
                                l("paused"),
                                n.readyState = "paused",
                                t()
                            }
                            var n = this;
                            if (this.readyState = "pausing", this.polling || !this.writable) {
                                var i = 0;
                                this.polling && (l("we are currently polling - waiting to pause"), i++, this.once("pollComplete",
                                function() {
                                    l("pre-pause polling complete"),
                                    --i || e()
                                })),
                                this.writable || (l("we are currently writing - waiting to pause"), i++, this.once("drain",
                                function() {
                                    l("pre-pause writing complete"),
                                    --i || e()
                                }))
                            } else e()
                        },
                        i.prototype.poll = function() {
                            l("polling"),
                            this.polling = !0,
                            this.doPoll(),
                            this.emit("poll")
                        },
                        i.prototype.onData = function(t) {
                            var e = this;
                            l("polling got data %s", t);
                            var n = function(t, n, i) {
                                return "opening" == e.readyState && e.onOpen(),
                                "close" == t.type ? (e.onClose(), !1) : void e.onPacket(t)
                            };
                            s.decodePayload(t, this.socket.binaryType, n),
                            "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
                        },
                        i.prototype.doClose = function() {
                            function t() {
                                l("writing close packet"),
                                e.write([{
                                    type: "close"
                                }])
                            }
                            var e = this;
                            "open" == this.readyState ? (l("transport open - closing"), t()) : (l("transport not open - deferring close"), this.once("open", t))
                        },
                        i.prototype.write = function(t) {
                            var e = this;
                            this.writable = !1;
                            var n = function() {
                                e.writable = !0,
                                e.emit("drain")
                            },
                            e = this;
                            s.encodePayload(t, this.supportsBinary,
                            function(t) {
                                e.doWrite(t, n)
                            })
                        },
                        i.prototype.uri = function() {
                            var t = this.query || {},
                            e = this.secure ? "https": "http",
                            n = ""; ! 1 !== this.timestampRequests && (t[this.timestampParam] = r()),
                            this.supportsBinary || t.sid || (t.b64 = 1),
                            t = a.encode(t),
                            this.port && ("https" == e && 443 != this.port || "http" == e && 80 != this.port) && (n = ":" + this.port),
                            t.length && (t = "?" + t);
                            var i = this.hostname.indexOf(":") !== -1;
                            return e + "://" + (i ? "[" + this.hostname + "]": this.hostname) + n + this.path + t
                        }
                    },
                    {
                        "../transport": 19,
                        "component-inherit": 13,
                        debug: 14,
                        "engine.io-parser": 27,
                        parseqs: 37,
                        "xmlhttprequest-ssl": 25,
                        yeast: 45
                    }],
                    24 : [function(t, e, n) { (function(n) {
                            function i(t) {
                                var e = t && t.forceBase64;
                                e && (this.supportsBinary = !1),
                                this.perMessageDeflate = t.perMessageDeflate,
                                o.call(this, t)
                            }
                            var o = t("../transport"),
                            a = t("engine.io-parser"),
                            s = t("parseqs"),
                            c = t("component-inherit"),
                            r = t("yeast"),
                            l = t("debug")("engine.io-client:websocket"),
                            h = n.WebSocket || n.MozWebSocket,
                            m = h;
                            if (!m && "undefined" == typeof window) try {
                                m = t("ws")
                            } catch(u) {}
                            e.exports = i,
                            c(i, o),
                            i.prototype.name = "websocket",
                            i.prototype.supportsBinary = !0,
                            i.prototype.doOpen = function() {
                                if (this.check()) {
                                    var t = this.uri(),
                                    e = void 0,
                                    n = {
                                        agent: this.agent,
                                        perMessageDeflate: this.perMessageDeflate
                                    };
                                    n.pfx = this.pfx,
                                    n.key = this.key,
                                    n.passphrase = this.passphrase,
                                    n.cert = this.cert,
                                    n.ca = this.ca,
                                    n.ciphers = this.ciphers,
                                    n.rejectUnauthorized = this.rejectUnauthorized,
                                    this.extraHeaders && (n.headers = this.extraHeaders),
                                    this.ws = h ? new m(t) : new m(t, e, n),
                                    void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                                    this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer",
                                    this.addEventListeners()
                                }
                            },
                            i.prototype.addEventListeners = function() {
                                var t = this;
                                this.ws.onopen = function() {
                                    t.onOpen()
                                },
                                this.ws.onclose = function() {
                                    t.onClose()
                                },
                                this.ws.onmessage = function(e) {
                                    t.onData(e.data)
                                },
                                this.ws.onerror = function(e) {
                                    t.onError("websocket error", e)
                                }
                            },
                            "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (i.prototype.onData = function(t) {
                                var e = this;
                                setTimeout(function() {
                                    o.prototype.onData.call(e, t)
                                },
                                0)
                            }),
                            i.prototype.write = function(t) {
                                function e() {
                                    i.emit("flush"),
                                    setTimeout(function() {
                                        i.writable = !0,
                                        i.emit("drain")
                                    },
                                    0)
                                }
                                var i = this;
                                this.writable = !1;
                                for (var o = t.length,
                                s = 0,
                                c = o; s < c; s++) !
                                function(t) {
                                    a.encodePacket(t, i.supportsBinary,
                                    function(a) {
                                        if (!h) {
                                            var s = {};
                                            if (t.options && (s.compress = t.options.compress), i.perMessageDeflate) {
                                                var c = "string" == typeof a ? n.Buffer.byteLength(a) : a.length;
                                                c < i.perMessageDeflate.threshold && (s.compress = !1)
                                            }
                                        }
                                        try {
                                            h ? i.ws.send(a) : i.ws.send(a, s)
                                        } catch(r) {
                                            l("websocket closed before onclose event")
                                        }--o || e()
                                    })
                                } (t[s])
                            },
                            i.prototype.onClose = function() {
                                o.prototype.onClose.call(this)
                            },
                            i.prototype.doClose = function() {
                                "undefined" != typeof this.ws && this.ws.close()
                            },
                            i.prototype.uri = function() {
                                var t = this.query || {},
                                e = this.secure ? "wss": "ws",
                                n = "";
                                this.port && ("wss" == e && 443 != this.port || "ws" == e && 80 != this.port) && (n = ":" + this.port),
                                this.timestampRequests && (t[this.timestampParam] = r()),
                                this.supportsBinary || (t.b64 = 1),
                                t = s.encode(t),
                                t.length && (t = "?" + t);
                                var i = this.hostname.indexOf(":") !== -1;
                                return e + "://" + (i ? "[" + this.hostname + "]": this.hostname) + n + this.path + t
                            },
                            i.prototype.check = function() {
                                return ! (!m || "__initialize" in m && this.name === i.prototype.name)
                            }
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        "../transport": 19,
                        "component-inherit": 13,
                        debug: 14,
                        "engine.io-parser": 27,
                        parseqs: 37,
                        ws: void 0,
                        yeast: 45
                    }],
                    25 : [function(t, e, n) {
                        var i = t("has-cors");
                        e.exports = function(t) {
                            var e = t.xdomain,
                            n = t.xscheme,
                            o = t.enablesXDR;
                            try {
                                if ("undefined" != typeof XMLHttpRequest && (!e || i)) return new XMLHttpRequest
                            } catch(a) {}
                            try {
                                if ("undefined" != typeof XDomainRequest && !n && o) return new XDomainRequest
                            } catch(a) {}
                            if (!e) try {
                                return new ActiveXObject("Microsoft.XMLHTTP")
                            } catch(a) {}
                        }
                    },
                    {
                        "has-cors": 31
                    }],
                    26 : [function(t, e, n) {
                        function i(t) {
                            if (t) return o(t)
                        }
                        function o(t) {
                            for (var e in i.prototype) t[e] = i.prototype[e];
                            return t
                        }
                        e.exports = i,
                        i.prototype.on = i.prototype.addEventListener = function(t, e) {
                            return this._callbacks = this._callbacks || {},
                            (this._callbacks[t] = this._callbacks[t] || []).push(e),
                            this
                        },
                        i.prototype.once = function(t, e) {
                            function n() {
                                i.off(t, n),
                                e.apply(this, arguments)
                            }
                            var i = this;
                            return this._callbacks = this._callbacks || {},
                            n.fn = e,
                            this.on(t, n),
                            this
                        },
                        i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(t, e) {
                            if (this._callbacks = this._callbacks || {},
                            0 == arguments.length) return this._callbacks = {},
                            this;
                            var n = this._callbacks[t];
                            if (!n) return this;
                            if (1 == arguments.length) return delete this._callbacks[t],
                            this;
                            for (var i, o = 0; o < n.length; o++) if (i = n[o], i === e || i.fn === e) {
                                n.splice(o, 1);
                                break
                            }
                            return this
                        },
                        i.prototype.emit = function(t) {
                            this._callbacks = this._callbacks || {};
                            var e = [].slice.call(arguments, 1),
                            n = this._callbacks[t];
                            if (n) {
                                n = n.slice(0);
                                for (var i = 0,
                                o = n.length; i < o; ++i) n[i].apply(this, e)
                            }
                            return this
                        },
                        i.prototype.listeners = function(t) {
                            return this._callbacks = this._callbacks || {},
                            this._callbacks[t] || []
                        },
                        i.prototype.hasListeners = function(t) {
                            return !! this.listeners(t).length
                        }
                    },
                    {}],
                    27 : [function(t, e, n) { (function(e) {
                            function i(t, e) {
                                var i = "b" + n.packets[t.type] + t.data.data;
                                return e(i)
                            }
                            function o(t, e, i) {
                                if (!e) return n.encodeBase64Packet(t, i);
                                var o = t.data,
                                a = new Uint8Array(o),
                                s = new Uint8Array(1 + o.byteLength);
                                s[0] = _[t.type];
                                for (var c = 0; c < a.length; c++) s[c + 1] = a[c];
                                return i(s.buffer)
                            }
                            function a(t, e, i) {
                                if (!e) return n.encodeBase64Packet(t, i);
                                var o = new FileReader;
                                return o.onload = function() {
                                    t.data = o.result,
                                    n.encodePacket(t, e, !0, i)
                                },
                                o.readAsArrayBuffer(t.data)
                            }
                            function s(t, e, i) {
                                if (!e) return n.encodeBase64Packet(t, i);
                                if (y) return a(t, e, i);
                                var o = new Uint8Array(1);
                                o[0] = _[t.type];
                                var s = new f([o.buffer, t.data]);
                                return i(s)
                            }
                            function c(t, e, n) {
                                for (var i = new Array(t.length), o = u(t.length, n), a = function(t, n, o) {
                                    e(n,
                                    function(e, n) {
                                        i[t] = n,
                                        o(e, i)
                                    })
                                },
                                s = 0; s < t.length; s++) a(s, t[s], o)
                            }
                            var r = t("./keys"),
                            l = t("has-binary"),
                            h = t("arraybuffer.slice"),
                            m = t("base64-arraybuffer"),
                            u = t("after"),
                            d = t("utf8"),
                            p = navigator.userAgent.match(/Android/i),
                            g = /PhantomJS/i.test(navigator.userAgent),
                            y = p || g;
                            n.protocol = 3;
                            var _ = n.packets = {
                                open: 0,
                                close: 1,
                                ping: 2,
                                pong: 3,
                                message: 4,
                                upgrade: 5,
                                noop: 6
                            },
                            C = r(_),
                            b = {
                                type: "error",
                                data: "parser error"
                            },
                            f = t("blob");
                            n.encodePacket = function(t, n, a, c) {
                                "function" == typeof n && (c = n, n = !1),
                                "function" == typeof a && (c = a, a = null);
                                var r = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                                if (e.ArrayBuffer && r instanceof ArrayBuffer) return o(t, n, c);
                                if (f && r instanceof e.Blob) return s(t, n, c);
                                if (r && r.base64) return i(t, c);
                                var l = _[t.type];
                                return void 0 !== t.data && (l += a ? d.encode(String(t.data)) : String(t.data)),
                                c("" + l)
                            },
                            n.encodeBase64Packet = function(t, i) {
                                var o = "b" + n.packets[t.type];
                                if (f && t.data instanceof e.Blob) {
                                    var a = new FileReader;
                                    return a.onload = function() {
                                        var t = a.result.split(",")[1];
                                        i(o + t)
                                    },
                                    a.readAsDataURL(t.data)
                                }
                                var s;
                                try {
                                    s = String.fromCharCode.apply(null, new Uint8Array(t.data))
                                } catch(c) {
                                    for (var r = new Uint8Array(t.data), l = new Array(r.length), h = 0; h < r.length; h++) l[h] = r[h];
                                    s = String.fromCharCode.apply(null, l)
                                }
                                return o += e.btoa(s),
                                i(o)
                            },
                            n.decodePacket = function(t, e, i) {
                                if ("string" == typeof t || void 0 === t) {
                                    if ("b" == t.charAt(0)) return n.decodeBase64Packet(t.substr(1), e);
                                    if (i) try {
                                        t = d.decode(t)
                                    } catch(o) {
                                        return b
                                    }
                                    var a = t.charAt(0);
                                    return Number(a) == a && C[a] ? t.length > 1 ? {
                                        type: C[a],
                                        data: t.substring(1)
                                    }: {
                                        type: C[a]
                                    }: b
                                }
                                var s = new Uint8Array(t),
                                a = s[0],
                                c = h(t, 1);
                                return f && "blob" === e && (c = new f([c])),
                                {
                                    type: C[a],
                                    data: c
                                }
                            },
                            n.decodeBase64Packet = function(t, n) {
                                var i = C[t.charAt(0)];
                                if (!e.ArrayBuffer) return {
                                    type: i,
                                    data: {
                                        base64: !0,
                                        data: t.substr(1)
                                    }
                                };
                                var o = m.decode(t.substr(1));
                                return "blob" === n && f && (o = new f([o])),
                                {
                                    type: i,
                                    data: o
                                }
                            },
                            n.encodePayload = function(t, e, i) {
                                function o(t) {
                                    return t.length + ":" + t
                                }
                                function a(t, i) {
                                    n.encodePacket(t, !!s && e, !0,
                                    function(t) {
                                        i(null, o(t))
                                    })
                                }
                                "function" == typeof e && (i = e, e = null);
                                var s = l(t);
                                return e && s ? f && !y ? n.encodePayloadAsBlob(t, i) : n.encodePayloadAsArrayBuffer(t, i) : t.length ? void c(t, a,
                                function(t, e) {
                                    return i(e.join(""))
                                }) : i("0:")
                            },
                            n.decodePayload = function(t, e, i) {
                                if ("string" != typeof t) return n.decodePayloadAsBinary(t, e, i);
                                "function" == typeof e && (i = e, e = null);
                                var o;
                                if ("" == t) return i(b, 0, 1);
                                for (var a, s, c = "",
                                r = 0,
                                l = t.length; r < l; r++) {
                                    var h = t.charAt(r);
                                    if (":" != h) c += h;
                                    else {
                                        if ("" == c || c != (a = Number(c))) return i(b, 0, 1);
                                        if (s = t.substr(r + 1, a), c != s.length) return i(b, 0, 1);
                                        if (s.length) {
                                            if (o = n.decodePacket(s, e, !0), b.type == o.type && b.data == o.data) return i(b, 0, 1);
                                            var m = i(o, r + a, l);
                                            if (!1 === m) return
                                        }
                                        r += a,
                                        c = ""
                                    }
                                }
                                return "" != c ? i(b, 0, 1) : void 0
                            },
                            n.encodePayloadAsArrayBuffer = function(t, e) {
                                function i(t, e) {
                                    n.encodePacket(t, !0, !0,
                                    function(t) {
                                        return e(null, t)
                                    })
                                }
                                return t.length ? void c(t, i,
                                function(t, n) {
                                    var i = n.reduce(function(t, e) {
                                        var n;
                                        return n = "string" == typeof e ? e.length: e.byteLength,
                                        t + n.toString().length + n + 2
                                    },
                                    0),
                                    o = new Uint8Array(i),
                                    a = 0;
                                    return n.forEach(function(t) {
                                        var e = "string" == typeof t,
                                        n = t;
                                        if (e) {
                                            for (var i = new Uint8Array(t.length), s = 0; s < t.length; s++) i[s] = t.charCodeAt(s);
                                            n = i.buffer
                                        }
                                        e ? o[a++] = 0 : o[a++] = 1;
                                        for (var c = n.byteLength.toString(), s = 0; s < c.length; s++) o[a++] = parseInt(c[s]);
                                        o[a++] = 255;
                                        for (var i = new Uint8Array(n), s = 0; s < i.length; s++) o[a++] = i[s]
                                    }),
                                    e(o.buffer)
                                }) : e(new ArrayBuffer(0))
                            },
                            n.encodePayloadAsBlob = function(t, e) {
                                function i(t, e) {
                                    n.encodePacket(t, !0, !0,
                                    function(t) {
                                        var n = new Uint8Array(1);
                                        if (n[0] = 1, "string" == typeof t) {
                                            for (var i = new Uint8Array(t.length), o = 0; o < t.length; o++) i[o] = t.charCodeAt(o);
                                            t = i.buffer,
                                            n[0] = 0
                                        }
                                        for (var a = t instanceof ArrayBuffer ? t.byteLength: t.size, s = a.toString(), c = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) c[o] = parseInt(s[o]);
                                        if (c[s.length] = 255, f) {
                                            var r = new f([n.buffer, c.buffer, t]);
                                            e(null, r)
                                        }
                                    })
                                }
                                c(t, i,
                                function(t, n) {
                                    return e(new f(n))
                                })
                            },
                            n.decodePayloadAsBinary = function(t, e, i) {
                                "function" == typeof e && (i = e, e = null);
                                for (var o = t,
                                a = [], s = !1; o.byteLength > 0;) {
                                    for (var c = new Uint8Array(o), r = 0 === c[0], l = "", m = 1; 255 != c[m]; m++) {
                                        if (l.length > 310) {
                                            s = !0;
                                            break
                                        }
                                        l += c[m]
                                    }
                                    if (s) return i(b, 0, 1);
                                    o = h(o, 2 + l.length),
                                    l = parseInt(l);
                                    var u = h(o, 0, l);
                                    if (r) try {
                                        u = String.fromCharCode.apply(null, new Uint8Array(u))
                                    } catch(d) {
                                        var p = new Uint8Array(u);
                                        u = "";
                                        for (var m = 0; m < p.length; m++) u += String.fromCharCode(p[m])
                                    }
                                    a.push(u),
                                    o = h(o, l)
                                }
                                var g = a.length;
                                a.forEach(function(t, o) {
                                    i(n.decodePacket(t, e, !0), o, g)
                                })
                            }
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        "./keys": 28,
                        after: 6,
                        "arraybuffer.slice": 7,
                        "base64-arraybuffer": 9,
                        blob: 10,
                        "has-binary": 29,
                        utf8: 44
                    }],
                    28 : [function(t, e, n) {
                        e.exports = Object.keys ||
                        function(t) {
                            var e = [],
                            n = Object.prototype.hasOwnProperty;
                            for (var i in t) n.call(t, i) && e.push(i);
                            return e
                        }
                    },
                    {}],
                    29 : [function(t, e, n) { (function(n) {
                            function i(t) {
                                function e(t) {
                                    if (!t) return ! 1;
                                    if (n.Buffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return ! 0;
                                    if (a(t)) {
                                        for (var i = 0; i < t.length; i++) if (e(t[i])) return ! 0
                                    } else if (t && "object" == ("undefined" == typeof t ? "undefined": o(t))) {
                                        t.toJSON && (t = t.toJSON());
                                        for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s) && e(t[s])) return ! 0
                                    }
                                    return ! 1
                                }
                                return e(t)
                            }
                            var a = t("isarray");
                            e.exports = i
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        isarray: 33
                    }],
                    30 : [function(t, e, n) { (function(n) {
                            function i(t) {
                                function e(t) {
                                    if (!t) return ! 1;
                                    if (n.Buffer && n.Buffer.isBuffer && n.Buffer.isBuffer(t) || n.ArrayBuffer && t instanceof ArrayBuffer || n.Blob && t instanceof Blob || n.File && t instanceof File) return ! 0;
                                    if (a(t)) {
                                        for (var i = 0; i < t.length; i++) if (e(t[i])) return ! 0
                                    } else if (t && "object" == ("undefined" == typeof t ? "undefined": o(t))) {
                                        t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());
                                        for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s) && e(t[s])) return ! 0
                                    }
                                    return ! 1
                                }
                                return e(t)
                            }
                            var a = t("isarray");
                            e.exports = i
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        isarray: 33
                    }],
                    31 : [function(t, e, n) {
                        try {
                            e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
                        } catch(i) {
                            e.exports = !1
                        }
                    },
                    {}],
                    32 : [function(t, e, n) {
                        var i = [].indexOf;
                        e.exports = function(t, e) {
                            if (i) return t.indexOf(e);
                            for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
                            return - 1
                        }
                    },
                    {}],
                    33 : [function(t, e, n) {
                        e.exports = Array.isArray ||
                        function(t) {
                            return "[object Array]" == Object.prototype.toString.call(t)
                        }
                    },
                    {}],
                    34 : [function(t, n, a) { (function(t) { (function() {
                                function i(t, e) {
                                    function n(t) {
                                        if (n[t] !== _) return n[t];
                                        var i;
                                        if ("bug-string-char-index" == t) i = "a" != "a" [0];
                                        else if ("json" == t) i = n("json-stringify") && n("json-parse");
                                        else {
                                            var o, c = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                            if ("json-stringify" == t) {
                                                var r = e.stringify,
                                                l = "function" == typeof r && f;
                                                if (l) { (o = function() {
                                                        return 1
                                                    }).toJSON = o;
                                                    try {
                                                        l = "0" === r(0) && "0" === r(new a) && '""' == r(new s) && r(b) === _ && r(_) === _ && r() === _ && "1" === r(o) && "[1]" == r([o]) && "[null]" == r([_]) && "null" == r(null) && "[null,null,null]" == r([_, b, null]) && r({
                                                            a: [o, !0, !1, null, "\0\b\n\f\r\t"]
                                                        }) == c && "1" === r(null, o) && "[\n 1,\n 2\n]" == r([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == r(new h(( - 864e13))) && '"+275760-09-13T00:00:00.000Z"' == r(new h(864e13)) && '"-000001-01-01T00:00:00.000Z"' == r(new h(( - 621987552e5))) && '"1969-12-31T23:59:59.999Z"' == r(new h(( - 1)))
                                                    } catch(m) {
                                                        l = !1
                                                    }
                                                }
                                                i = l
                                            }
                                            if ("json-parse" == t) {
                                                var u = e.parse;
                                                if ("function" == typeof u) try {
                                                    if (0 === u("0") && !u(!1)) {
                                                        o = u(c);
                                                        var d = 5 == o.a.length && 1 === o.a[0];
                                                        if (d) {
                                                            try {
                                                                d = !u('"\t"')
                                                            } catch(m) {}
                                                            if (d) try {
                                                                d = 1 !== u("01")
                                                            } catch(m) {}
                                                            if (d) try {
                                                                d = 1 !== u("1.")
                                                            } catch(m) {}
                                                        }
                                                    }
                                                } catch(m) {
                                                    d = !1
                                                }
                                                i = d
                                            }
                                        }
                                        return n[t] = !!i
                                    }
                                    t || (t = l.Object()),
                                    e || (e = l.Object());
                                    var a = t.Number || l.Number,
                                    s = t.String || l.String,
                                    r = t.Object || l.Object,
                                    h = t.Date || l.Date,
                                    m = t.SyntaxError || l.SyntaxError,
                                    u = t.TypeError || l.TypeError,
                                    d = t.Math || l.Math,
                                    p = t.JSON || l.JSON;
                                    "object" == ("undefined" == typeof p ? "undefined": o(p)) && p && (e.stringify = p.stringify, e.parse = p.parse);
                                    var g, y, _, C = r.prototype,
                                    b = C.toString,
                                    f = new h(( - 0xc782b5b800cec));
                                    try {
                                        f = f.getUTCFullYear() == -109252 && 0 === f.getUTCMonth() && 1 === f.getUTCDate() && 10 == f.getUTCHours() && 37 == f.getUTCMinutes() && 6 == f.getUTCSeconds() && 708 == f.getUTCMilliseconds()
                                    } catch(B) {}
                                    if (!n("json")) {
                                        var v = "[object Function]",
                                        N = "[object Date]",
                                        k = "[object Number]",
                                        F = "[object String]",
                                        M = "[object Array]",
                                        A = "[object Boolean]",
                                        S = n("bug-string-char-index");
                                        if (!f) var L = d.floor,
                                        P = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                        I = function(t, e) {
                                            return P[e] + 365 * (t - 1970) + L((t - 1969 + (e = +(e > 1))) / 4) - L((t - 1901 + e) / 100) + L((t - 1601 + e) / 400)
                                        };
                                        if ((g = C.hasOwnProperty) || (g = function(t) {
                                            var e, n = {};
                                            return (n.__proto__ = null, n.__proto__ = {
                                                toString: 1
                                            },
                                            n).toString != b ? g = function(t) {
                                                var e = this.__proto__,
                                                n = t in (this.__proto__ = null, this);
                                                return this.__proto__ = e,
                                                n
                                            }: (e = n.constructor, g = function(t) {
                                                var n = (this.constructor || e).prototype;
                                                return t in this && !(t in n && this[t] === n[t])
                                            }),
                                            n = null,
                                            g.call(this, t)
                                        }), y = function(t, e) {
                                            var n, i, a, s = 0; (n = function() {
                                                this.valueOf = 0
                                            }).prototype.valueOf = 0,
                                            i = new n;
                                            for (a in i) g.call(i, a) && s++;
                                            return n = i = null,
                                            s ? y = 2 == s ?
                                            function(t, e) {
                                                var n, i = {},
                                                o = b.call(t) == v;
                                                for (n in t) o && "prototype" == n || g.call(i, n) || !(i[n] = 1) || !g.call(t, n) || e(n)
                                            }: function(t, e) {
                                                var n, i, o = b.call(t) == v;
                                                for (n in t) o && "prototype" == n || !g.call(t, n) || (i = "constructor" === n) || e(n); (i || g.call(t, n = "constructor")) && e(n)
                                            }: (i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function(t, e) {
                                                var n, a, s = b.call(t) == v,
                                                r = !s && "function" != typeof t.constructor && c[o(t.hasOwnProperty)] && t.hasOwnProperty || g;
                                                for (n in t) s && "prototype" == n || !r.call(t, n) || e(n);
                                                for (a = i.length; n = i[--a]; r.call(t, n) && e(n));
                                            }),
                                            y(t, e)
                                        },
                                        !n("json-stringify")) {
                                            var w = {
                                                92 : "\\\\",
                                                34 : '\\"',
                                                8 : "\\b",
                                                12 : "\\f",
                                                10 : "\\n",
                                                13 : "\\r",
                                                9 : "\\t"
                                            },
                                            T = "000000",
                                            x = function(t, e) {
                                                return (T + (e || 0)).slice( - t)
                                            },
                                            G = "\\u00",
                                            E = function(t) {
                                                for (var e = '"',
                                                n = 0,
                                                i = t.length,
                                                o = !S || i > 10,
                                                a = o && (S ? t.split("") : t); n < i; n++) {
                                                    var s = t.charCodeAt(n);
                                                    switch (s) {
                                                    case 8:
                                                    case 9:
                                                    case 10:
                                                    case 12:
                                                    case 13:
                                                    case 34:
                                                    case 92:
                                                        e += w[s];
                                                        break;
                                                    default:
                                                        if (s < 32) {
                                                            e += G + x(2, s.toString(16));
                                                            break
                                                        }
                                                        e += o ? a[n] : t.charAt(n)
                                                    }
                                                }
                                                return e + '"'
                                            },
                                            R = function z(t, e, n, i, a, s, c) {
                                                var r, l, h, m, d, p, C, f, B, v, S, P, w, T, G, R;
                                                try {
                                                    r = e[t]
                                                } catch(D) {}
                                                if ("object" == ("undefined" == typeof r ? "undefined": o(r)) && r) if (l = b.call(r), l != N || g.call(r, "toJSON"))"function" == typeof r.toJSON && (l != k && l != F && l != M || g.call(r, "toJSON")) && (r = r.toJSON(t));
                                                else if (r > -1 / 0 && r < 1 / 0) {
                                                    if (I) {
                                                        for (d = L(r / 864e5), h = L(d / 365.2425) + 1970 - 1; I(h + 1, 0) <= d; h++);
                                                        for (m = L((d - I(h, 0)) / 30.42); I(h, m + 1) <= d; m++);
                                                        d = 1 + d - I(h, m),
                                                        p = (r % 864e5 + 864e5) % 864e5,
                                                        C = L(p / 36e5) % 24,
                                                        f = L(p / 6e4) % 60,
                                                        B = L(p / 1e3) % 60,
                                                        v = p % 1e3
                                                    } else h = r.getUTCFullYear(),
                                                    m = r.getUTCMonth(),
                                                    d = r.getUTCDate(),
                                                    C = r.getUTCHours(),
                                                    f = r.getUTCMinutes(),
                                                    B = r.getUTCSeconds(),
                                                    v = r.getUTCMilliseconds();
                                                    r = (h <= 0 || h >= 1e4 ? (h < 0 ? "-": "+") + x(6, h < 0 ? -h: h) : x(4, h)) + "-" + x(2, m + 1) + "-" + x(2, d) + "T" + x(2, C) + ":" + x(2, f) + ":" + x(2, B) + "." + x(3, v) + "Z"
                                                } else r = null;
                                                if (n && (r = n.call(e, t, r)), null === r) return "null";
                                                if (l = b.call(r), l == A) return "" + r;
                                                if (l == k) return r > -1 / 0 && r < 1 / 0 ? "" + r: "null";
                                                if (l == F) return E("" + r);
                                                if ("object" == ("undefined" == typeof r ? "undefined": o(r))) {
                                                    for (T = c.length; T--;) if (c[T] === r) throw u();
                                                    if (c.push(r), S = [], G = s, s += a, l == M) {
                                                        for (w = 0, T = r.length; w < T; w++) P = z(w, r, n, i, a, s, c),
                                                        S.push(P === _ ? "null": P);
                                                        R = S.length ? a ? "[\n" + s + S.join(",\n" + s) + "\n" + G + "]": "[" + S.join(",") + "]": "[]"
                                                    } else y(i || r,
                                                    function(t) {
                                                        var e = z(t, r, n, i, a, s, c);
                                                        e !== _ && S.push(E(t) + ":" + (a ? " ": "") + e)
                                                    }),
                                                    R = S.length ? a ? "{\n" + s + S.join(",\n" + s) + "\n" + G + "}": "{" + S.join(",") + "}": "{}";
                                                    return c.pop(),
                                                    R
                                                }
                                            };
                                            e.stringify = function(t, e, n) {
                                                var i, a, s, r;
                                                if (c["undefined" == typeof e ? "undefined": o(e)] && e) if ((r = b.call(e)) == v) a = e;
                                                else if (r == M) {
                                                    s = {};
                                                    for (var l, h = 0,
                                                    m = e.length; h < m; l = e[h++], r = b.call(l), (r == F || r == k) && (s[l] = 1));
                                                }
                                                if (n) if ((r = b.call(n)) == k) {
                                                    if ((n -= n % 1) > 0) for (i = "", n > 10 && (n = 10); i.length < n; i += " ");
                                                } else r == F && (i = n.length <= 10 ? n: n.slice(0, 10));
                                                return R("", (l = {},
                                                l[""] = t, l), a, s, i, "", [])
                                            }
                                        }
                                        if (!n("json-parse")) {
                                            var D, O, W = s.fromCharCode,
                                            U = {
                                                92 : "\\",
                                                34 : '"',
                                                47 : "/",
                                                98 : "\b",
                                                116 : "\t",
                                                110 : "\n",
                                                102 : "\f",
                                                114 : "\r"
                                            },
                                            j = function() {
                                                throw D = O = null,
                                                m()
                                            },
                                            J = function() {
                                                for (var t, e, n, i, o, a = O,
                                                s = a.length; D < s;) switch (o = a.charCodeAt(D)) {
                                                case 9:
                                                case 10:
                                                case 13:
                                                case 32:
                                                    D++;
                                                    break;
                                                case 123:
                                                case 125:
                                                case 91:
                                                case 93:
                                                case 58:
                                                case 44:
                                                    return t = S ? a.charAt(D) : a[D],
                                                    D++,
                                                    t;
                                                case 34:
                                                    for (t = "@", D++; D < s;) if (o = a.charCodeAt(D), o < 32) j();
                                                    else if (92 == o) switch (o = a.charCodeAt(++D)) {
                                                    case 92:
                                                    case 34:
                                                    case 47:
                                                    case 98:
                                                    case 116:
                                                    case 110:
                                                    case 102:
                                                    case 114:
                                                        t += U[o],
                                                        D++;
                                                        break;
                                                    case 117:
                                                        for (e = ++D, n = D + 4; D < n; D++) o = a.charCodeAt(D),
                                                        o >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || j();
                                                        t += W("0x" + a.slice(e, D));
                                                        break;
                                                    default:
                                                        j()
                                                    } else {
                                                        if (34 == o) break;
                                                        for (o = a.charCodeAt(D), e = D; o >= 32 && 92 != o && 34 != o;) o = a.charCodeAt(++D);
                                                        t += a.slice(e, D)
                                                    }
                                                    if (34 == a.charCodeAt(D)) return D++,
                                                    t;
                                                    j();
                                                default:
                                                    if (e = D, 45 == o && (i = !0, o = a.charCodeAt(++D)), o >= 48 && o <= 57) {
                                                        for (48 == o && (o = a.charCodeAt(D + 1), o >= 48 && o <= 57) && j(), i = !1; D < s && (o = a.charCodeAt(D), o >= 48 && o <= 57); D++);
                                                        if (46 == a.charCodeAt(D)) {
                                                            for (n = ++D; n < s && (o = a.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                            n == D && j(),
                                                            D = n
                                                        }
                                                        if (o = a.charCodeAt(D), 101 == o || 69 == o) {
                                                            for (o = a.charCodeAt(++D), 43 != o && 45 != o || D++, n = D; n < s && (o = a.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                            n == D && j(),
                                                            D = n
                                                        }
                                                        return + a.slice(e, D)
                                                    }
                                                    if (i && j(), "true" == a.slice(D, D + 4)) return D += 4,
                                                    !0;
                                                    if ("false" == a.slice(D, D + 5)) return D += 5,
                                                    !1;
                                                    if ("null" == a.slice(D, D + 4)) return D += 4,
                                                    null;
                                                    j()
                                                }
                                                return "$"
                                            },
                                            H = function Y(t) {
                                                var e, n;
                                                if ("$" == t && j(), "string" == typeof t) {
                                                    if ("@" == (S ? t.charAt(0) : t[0])) return t.slice(1);
                                                    if ("[" == t) {
                                                        for (e = []; t = J(), "]" != t; n || (n = !0)) n && ("," == t ? (t = J(), "]" == t && j()) : j()),
                                                        "," == t && j(),
                                                        e.push(Y(t));
                                                        return e
                                                    }
                                                    if ("{" == t) {
                                                        for (e = {}; t = J(), "}" != t; n || (n = !0)) n && ("," == t ? (t = J(), "}" == t && j()) : j()),
                                                        "," != t && "string" == typeof t && "@" == (S ? t.charAt(0) : t[0]) && ":" == J() || j(),
                                                        e[t.slice(1)] = Y(J());
                                                        return e
                                                    }
                                                    j()
                                                }
                                                return t
                                            },
                                            V = function(t, e, n) {
                                                var i = X(t, e, n);
                                                i === _ ? delete t[e] : t[e] = i
                                            },
                                            X = function(t, e, n) {
                                                var i, a = t[e];
                                                if ("object" == ("undefined" == typeof a ? "undefined": o(a)) && a) if (b.call(a) == M) for (i = a.length; i--;) V(a, i, n);
                                                else y(a,
                                                function(t) {
                                                    V(a, t, n)
                                                });
                                                return n.call(t, e, a)
                                            };
                                            e.parse = function(t, e) {
                                                var n, i;
                                                return D = 0,
                                                O = "" + t,
                                                n = H(J()),
                                                "$" != J() && j(),
                                                D = O = null,
                                                e && b.call(e) == v ? X((i = {},
                                                i[""] = n, i), "", e) : n
                                            }
                                        }
                                    }
                                    return e.runInContext = i,
                                    e
                                }
                                var s = "function" == typeof e && e.amd,
                                c = {
                                    "function": !0,
                                    object: !0
                                },
                                r = c["undefined" == typeof a ? "undefined": o(a)] && a && !a.nodeType && a,
                                l = c["undefined" == typeof window ? "undefined": o(window)] && window || this,
                                h = r && c["undefined" == typeof n ? "undefined": o(n)] && n && !n.nodeType && "object" == ("undefined" == typeof t ? "undefined": o(t)) && t;
                                if (!h || h.global !== h && h.window !== h && h.self !== h || (l = h), r && !s) i(l, r);
                                else {
                                    var m = l.JSON,
                                    u = l.JSON3,
                                    d = !1,
                                    p = i(l, l.JSON3 = {
                                        noConflict: function() {
                                            return d || (d = !0, l.JSON = m, l.JSON3 = u, m = u = null),
                                            p
                                        }
                                    });
                                    l.JSON = {
                                        parse: p.parse,
                                        stringify: p.stringify
                                    }
                                }
                                s && e(function() {
                                    return p
                                })
                            }).call(this)
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {}],
                    35 : [function(t, e, n) {
                        function i(t) {
                            if (t = "" + t, !(t.length > 1e4)) {
                                var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                                if (e) {
                                    var n = parseFloat(e[1]),
                                    i = (e[2] || "ms").toLowerCase();
                                    switch (i) {
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return n * m;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return n * h;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return n * l;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return n * r;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return n * c;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return n
                                    }
                                }
                            }
                        }
                        function o(t) {
                            return t >= h ? Math.round(t / h) + "d": t >= l ? Math.round(t / l) + "h": t >= r ? Math.round(t / r) + "m": t >= c ? Math.round(t / c) + "s": t + "ms"
                        }
                        function a(t) {
                            return s(t, h, "day") || s(t, l, "hour") || s(t, r, "minute") || s(t, c, "second") || t + " ms"
                        }
                        function s(t, e, n) {
                            if (! (t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n: Math.ceil(t / e) + " " + n + "s"
                        }
                        var c = 1e3,
                        r = 60 * c,
                        l = 60 * r,
                        h = 24 * l,
                        m = 365.25 * h;
                        e.exports = function(t, e) {
                            return e = e || {},
                            "string" == typeof t ? i(t) : e["long"] ? a(t) : o(t)
                        }
                    },
                    {}],
                    36 : [function(t, e, n) { (function(t) {
                            var n = /^[\],:{}\s]*$/,
                            i = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                            o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                            a = /(?:^|:|,)(?:\s*\[)+/g,
                            s = /^\s+/,
                            c = /\s+$/;
                            e.exports = function(e) {
                                return "string" == typeof e && e ? (e = e.replace(s, "").replace(c, ""), t.JSON && JSON.parse ? JSON.parse(e) : n.test(e.replace(i, "@").replace(o, "]").replace(a, "")) ? new Function("return " + e)() : void 0) : null
                            }
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {}],
                    37 : [function(t, e, n) {
                        n.encode = function(t) {
                            var e = "";
                            for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                            return e
                        },
                        n.decode = function(t) {
                            for (var e = {},
                            n = t.split("&"), i = 0, o = n.length; i < o; i++) {
                                var a = n[i].split("=");
                                e[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                            }
                            return e
                        }
                    },
                    {}],
                    38 : [function(t, e, n) {
                        var i = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                        e.exports = function(t) {
                            var e = t,
                            n = t.indexOf("["),
                            a = t.indexOf("]");
                            n != -1 && a != -1 && (t = t.substring(0, n) + t.substring(n, a).replace(/:/g, ";") + t.substring(a, t.length));
                            for (var s = i.exec(t || ""), c = {},
                            r = 14; r--;) c[o[r]] = s[r] || "";
                            return n != -1 && a != -1 && (c.source = e, c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"), c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), c.ipv6uri = !0),
                            c
                        }
                    },
                    {}],
                    39 : [function(t, e, n) { (function(e) {
                            var i = t("isarray"),
                            a = t("./is-buffer");
                            n.deconstructPacket = function(t) {
                                function e(t) {
                                    if (!t) return t;
                                    if (a(t)) {
                                        var s = {
                                            _placeholder: !0,
                                            num: n.length
                                        };
                                        return n.push(t),
                                        s
                                    }
                                    if (i(t)) {
                                        for (var c = new Array(t.length), r = 0; r < t.length; r++) c[r] = e(t[r]);
                                        return c
                                    }
                                    if ("object" == ("undefined" == typeof t ? "undefined": o(t)) && !(t instanceof Date)) {
                                        var c = {};
                                        for (var l in t) c[l] = e(t[l]);
                                        return c
                                    }
                                    return t
                                }
                                var n = [],
                                s = t.data,
                                c = t;
                                return c.data = e(s),
                                c.attachments = n.length,
                                {
                                    packet: c,
                                    buffers: n
                                }
                            },
                            n.reconstructPacket = function(t, e) {
                                function n(t) {
                                    if (t && t._placeholder) {
                                        var a = e[t.num];
                                        return a
                                    }
                                    if (i(t)) {
                                        for (var s = 0; s < t.length; s++) t[s] = n(t[s]);
                                        return t
                                    }
                                    if (t && "object" == ("undefined" == typeof t ? "undefined": o(t))) {
                                        for (var c in t) t[c] = n(t[c]);
                                        return t
                                    }
                                    return t
                                }
                                return t.data = n(t.data),
                                t.attachments = void 0,
                                t
                            },
                            n.removeBlobs = function(t, n) {
                                function s(t, l, h) {
                                    if (!t) return t;
                                    if (e.Blob && t instanceof Blob || e.File && t instanceof File) {
                                        c++;
                                        var m = new FileReader;
                                        m.onload = function() {
                                            h ? h[l] = this.result: r = this.result,
                                            --c || n(r)
                                        },
                                        m.readAsArrayBuffer(t)
                                    } else if (i(t)) for (var u = 0; u < t.length; u++) s(t[u], u, t);
                                    else if (t && "object" == ("undefined" == typeof t ? "undefined": o(t)) && !a(t)) for (var d in t) s(t[d], d, t)
                                }
                                var c = 0,
                                r = t;
                                s(r),
                                c || n(r)
                            }
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {
                        "./is-buffer": 41,
                        isarray: 33
                    }],
                    40 : [function(t, e, n) {
                        function i() {}
                        function o(t) {
                            var e = "",
                            i = !1;
                            return e += t.type,
                            n.BINARY_EVENT != t.type && n.BINARY_ACK != t.type || (e += t.attachments, e += "-"),
                            t.nsp && "/" != t.nsp && (i = !0, e += t.nsp),
                            null != t.id && (i && (e += ",", i = !1), e += t.id),
                            null != t.data && (i && (e += ","), e += m.stringify(t.data)),
                            h("encoded %j as %s", t, e),
                            e
                        }
                        function a(t, e) {
                            function n(t) {
                                var n = d.deconstructPacket(t),
                                i = o(n.packet),
                                a = n.buffers;
                                a.unshift(i),
                                e(a)
                            }
                            d.removeBlobs(t, n)
                        }
                        function s() {
                            this.reconstructor = null
                        }
                        function c(t) {
                            var e = {},
                            i = 0;
                            if (e.type = Number(t.charAt(0)), null == n.types[e.type]) return l();
                            if (n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type) {
                                for (var o = "";
                                "-" != t.charAt(++i) && (o += t.charAt(i), i != t.length););
                                if (o != Number(o) || "-" != t.charAt(i)) throw new Error("Illegal attachments");
                                e.attachments = Number(o)
                            }
                            if ("/" == t.charAt(i + 1)) for (e.nsp = ""; ++i;) {
                                var a = t.charAt(i);
                                if ("," == a) break;
                                if (e.nsp += a, i == t.length) break
                            } else e.nsp = "/";
                            var s = t.charAt(i + 1);
                            if ("" !== s && Number(s) == s) {
                                for (e.id = ""; ++i;) {
                                    var a = t.charAt(i);
                                    if (null == a || Number(a) != a) {--i;
                                        break
                                    }
                                    if (e.id += t.charAt(i), i == t.length) break
                                }
                                e.id = Number(e.id)
                            }
                            if (t.charAt(++i)) try {
                                e.data = m.parse(t.substr(i))
                            } catch(c) {
                                return l()
                            }
                            return h("decoded %s as %j", t, e),
                            e
                        }
                        function r(t) {
                            this.reconPack = t,
                            this.buffers = []
                        }
                        function l(t) {
                            return {
                                type: n.ERROR,
                                data: "parser error"
                            }
                        }
                        var h = t("debug")("socket.io-parser"),
                        m = t("json3"),
                        u = (t("isarray"), t("component-emitter")),
                        d = t("./binary"),
                        p = t("./is-buffer");
                        n.protocol = 4,
                        n.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
                        n.CONNECT = 0,
                        n.DISCONNECT = 1,
                        n.EVENT = 2,
                        n.ACK = 3,
                        n.ERROR = 4,
                        n.BINARY_EVENT = 5,
                        n.BINARY_ACK = 6,
                        n.Encoder = i,
                        n.Decoder = s,
                        i.prototype.encode = function(t, e) {
                            if (h("encoding packet %j", t), n.BINARY_EVENT == t.type || n.BINARY_ACK == t.type) a(t, e);
                            else {
                                var i = o(t);
                                e([i])
                            }
                        },
                        u(s.prototype),
                        s.prototype.add = function(t) {
                            var e;
                            if ("string" == typeof t) e = c(t),
                            n.BINARY_EVENT == e.type || n.BINARY_ACK == e.type ? (this.reconstructor = new r(e), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", e)) : this.emit("decoded", e);
                            else {
                                if (!p(t) && !t.base64) throw new Error("Unknown type: " + t);
                                if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                                e = this.reconstructor.takeBinaryData(t),
                                e && (this.reconstructor = null, this.emit("decoded", e))
                            }
                        },
                        s.prototype.destroy = function() {
                            this.reconstructor && this.reconstructor.finishedReconstruction()
                        },
                        r.prototype.takeBinaryData = function(t) {
                            if (this.buffers.push(t), this.buffers.length == this.reconPack.attachments) {
                                var e = d.reconstructPacket(this.reconPack, this.buffers);
                                return this.finishedReconstruction(),
                                e
                            }
                            return null
                        },
                        r.prototype.finishedReconstruction = function() {
                            this.reconPack = null,
                            this.buffers = []
                        }
                    },
                    {
                        "./binary": 39,
                        "./is-buffer": 41,
                        "component-emitter": 42,
                        debug: 14,
                        isarray: 33,
                        json3: 34
                    }],
                    41 : [function(t, e, n) { (function(t) {
                            function n(e) {
                                return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer
                            }
                            e.exports = n
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {}],
                    42 : [function(t, e, n) {
                        arguments[4][26][0].apply(n, arguments)
                    },
                    {
                        dup: 26
                    }],
                    43 : [function(t, e, n) {
                        function i(t, e) {
                            var n = [];
                            e = e || 0;
                            for (var i = e || 0; i < t.length; i++) n[i - e] = t[i];
                            return n
                        }
                        e.exports = i
                    },
                    {}],
                    44 : [function(t, n, a) { (function(t) { !
                            function(i) {
                                function s(t) {
                                    for (var e, n, i = [], o = 0, a = t.length; o < a;) e = t.charCodeAt(o++),
                                    e >= 55296 && e <= 56319 && o < a ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? i.push(((1023 & e) << 10) + (1023 & n) + 65536) : (i.push(e), o--)) : i.push(e);
                                    return i
                                }
                                function c(t) {
                                    for (var e, n = t.length,
                                    i = -1,
                                    o = ""; ++i < n;) e = t[i],
                                    e > 65535 && (e -= 65536, o += B(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e),
                                    o += B(e);
                                    return o
                                }
                                function r(t) {
                                    if (t >= 55296 && t <= 57343) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value")
                                }
                                function l(t, e) {
                                    return B(t >> e & 63 | 128)
                                }
                                function h(t) {
                                    if (0 == (4294967168 & t)) return B(t);
                                    var e = "";
                                    return 0 == (4294965248 & t) ? e = B(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (r(t), e = B(t >> 12 & 15 | 224), e += l(t, 6)) : 0 == (4292870144 & t) && (e = B(t >> 18 & 7 | 240), e += l(t, 12), e += l(t, 6)),
                                    e += B(63 & t | 128)
                                }
                                function m(t) {
                                    for (var e, n = s(t), i = n.length, o = -1, a = ""; ++o < i;) e = n[o],
                                    a += h(e);
                                    return a
                                }
                                function u() {
                                    if (f >= b) throw Error("Invalid byte index");
                                    var t = 255 & C[f];
                                    if (f++, 128 == (192 & t)) return 63 & t;
                                    throw Error("Invalid continuation byte")
                                }
                                function d() {
                                    var t, e, n, i, o;
                                    if (f > b) throw Error("Invalid byte index");
                                    if (f == b) return ! 1;
                                    if (t = 255 & C[f], f++, 0 == (128 & t)) return t;
                                    if (192 == (224 & t)) {
                                        var e = u();
                                        if (o = (31 & t) << 6 | e, o >= 128) return o;
                                        throw Error("Invalid continuation byte")
                                    }
                                    if (224 == (240 & t)) {
                                        if (e = u(), n = u(), o = (15 & t) << 12 | e << 6 | n, o >= 2048) return r(o),
                                        o;
                                        throw Error("Invalid continuation byte")
                                    }
                                    if (240 == (248 & t) && (e = u(), n = u(), i = u(), o = (15 & t) << 18 | e << 12 | n << 6 | i, o >= 65536 && o <= 1114111)) return o;
                                    throw Error("Invalid UTF-8 detected")
                                }
                                function p(t) {
                                    C = s(t),
                                    b = C.length,
                                    f = 0;
                                    for (var e, n = []; (e = d()) !== !1;) n.push(e);
                                    return c(n)
                                }
                                var g = "object" == ("undefined" == typeof a ? "undefined": o(a)) && a,
                                y = "object" == ("undefined" == typeof n ? "undefined": o(n)) && n && n.exports == g && n,
                                _ = "object" == ("undefined" == typeof t ? "undefined": o(t)) && t;
                                _.global !== _ && _.window !== _ || (i = _);
                                var C, b, f, B = String.fromCharCode,
                                v = {
                                    version: "2.0.0",
                                    encode: m,
                                    decode: p
                                };
                                if ("function" == typeof e && "object" == o(e.amd) && e.amd) e(function() {
                                    return v
                                });
                                else if (g && !g.nodeType) if (y) y.exports = v;
                                else {
                                    var N = {},
                                    k = N.hasOwnProperty;
                                    for (var F in v) k.call(v, F) && (g[F] = v[F])
                                } else i.utf8 = v
                            } (this)
                        }).call(this, "undefined" != typeof self ? self: "undefined" != typeof window ? window: "undefined" != typeof i ? i: {})
                    },
                    {}],
                    45 : [function(t, e, n) {
                        function i(t) {
                            var e = "";
                            do e = c[t % r] + e,
                            t = Math.floor(t / r);
                            while (t > 0);
                            return e
                        }
                        function o(t) {
                            var e = 0;
                            for (m = 0; m < t.length; m++) e = e * r + l[t.charAt(m)];
                            return e
                        }
                        function a() {
                            var t = i( + new Date);
                            return t !== s ? (h = 0, s = t) : t + "." + i(h++)
                        }
                        for (var s, c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), r = 64, l = {},
                        h = 0, m = 0; m < r; m++) l[c[m]] = m;
                        a.encode = i,
                        a.decode = o,
                        e.exports = a
                    },
                    {}]
                },
                {},
                [1])(1)
            }),
            cc._RF.pop()
        }).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
    },
    {}],
    StartBtnCp: [function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        cc._RF.push(e, "40fb6AaQcJJZpqFTVkM9vp+", "StartBtnCp"),
        cc.Class({
            "extends": cc.Component,
            properties: i({},
            "游戏界面", {
                "default": null,
                type: cc.Prefab
            }),
            onClick: function() {
                var t = (this.node.parent, cc.sequence(cc.scaleTo(.2, 0), cc.callFunc(function() {
                    cc.director.loadScene("games"),
                    this.node.destroy()
                },
                this))),
                e = this.getComponent(cc.Animation);
                e.stop(),
                this.node.runAction(t)
            },
            onLoad: function() {}
        }),
        cc._RF.pop()
    },
    {}],
    Start: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "93b00nCxxFPrIc5JPv/zRid", "Start");
        var i = t("Colors");
        cc.Class({
            "extends": cc.Component,
            properties: {
                gameName: {
                    "default": null,
                    type: cc.Node
                },
                bg: {
                    "default": null,
                    type: cc.Node
                },
                startBtn: {
                    "default": null,
                    type: cc.Node
                },
                btnEffect: cc.AudioClip
            },
            onLoad: function() {
                this.bg.color = i.startBg;
                var t = cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.5), cc.scaleTo(1, 1)));
                this.gameName.runAction(t)
            },
            startGame: function() {
                cc.audioEngine.playEffect(this.btnEffect),
                cc.director.loadScene("gameScene")
            }
        }),
        cc._RF.pop()
    },
    {
        Colors: "Colors"
    }],
    Task: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "046003P7V9BaaVuBhzI0n7e", "Task"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {},
            nextMoGui: function() {
                this.node.parent.parent.parent.parent.getComponent("GameMain").nextMoGui()
            }
        }),
        cc._RF.pop()
    },
    {}],
    Tile: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "563c3Q68aFA34ml9ZAtNykI", "Tile");
        var i = t("Global"),
        o = t("Colors");
        cc.Class({
            "extends": cc.Component,
            properties: {
                numLabel: {
                    "default": null,
                    type: cc.Label
                },
                clickEffect: cc.AudioClip
            },
            onLoad: function() {
                var t = this;
                this.node.on(cc.Node.EventType.TOUCH_START,
                function(e) {
                    t.game.isCal || (cc.audioEngine.playEffect(t.clickEffect), t.game.isCal = !0, i.combo = 0, cc.audioEngine.playEffect(this.addCoin), t.setNum(parseInt(t.numLabel.string) + 1, !0, !1))
                },
                this.node)
            },
            newTile: function(t, e) {
                this.node.setPosition(5 + (5 + this.node.width) * e + this.node.width / 2, 5 + (5 + this.node.height) * t + this.node.height / 2),
                this.node.setScale(0),
                this.node.runAction(cc.scaleTo(.1, 1)),
                this.setArrPosition(t, e)
            },
            moveTo: function(t, e) {
                this.row = t,
                this.col = e,
                this.node.stopActionByTag(1);
                var n = cc.moveTo(.2, cc.p(5 + (5 + this.node.width) * e + this.node.width / 2, 5 + (5 + this.node.height) * t + this.node.height / 2));
                this.node.runAction(n),
                n.setTag(1)
            },
            destoryTile: function() {
                var t = cc.sequence(cc.scaleTo(.1, 0), cc.callFunc(function(t) {
                    t.destroy()
                },
                this.node, this.node));
                this.node.runAction(t)
            },
            setArrPosition: function(t, e) {
                this.row = t,
                this.col = e
            },
            setNum: function(t, e, n) {
                switch (this.game.maxNum = t > this.game.maxNum ? t: this.game.maxNum, this.numLabel.string = t, t) {
                case 1:
                    this.node.color = o.num1;
                    break;
                case 2:
                    this.node.color = o.num2;
                    break;
                case 3:
                    this.node.color = o.num3;
                    break;
                case 4:
                    this.node.color = o.num4;
                    break;
                case 5:
                    this.node.color = o.num5;
                    break;
                case 6:
                    this.node.color = o.num6;
                    break;
                case 7:
                    this.node.color = o.num7;
                    break;
                case 8:
                    this.node.color = o.num8;
                    break;
                case 9:
                    this.node.color = o.num9;
                    break;
                case 10:
                    this.node.color = o.num10;
                    break;
                case 11:
                    this.node.color = o.num11;
                    break;
                case 12:
                    this.node.color = o.num12;
                    break;
                case 13:
                    this.node.color = o.num13;
                    break;
                case 14:
                    this.node.color = o.num14;
                    break;
                case 15:
                    this.node.color = o.num15;
                    break;
                case 16:
                    this.node.color = o.num16;
                    break;
                case 17:
                    this.node.color = o.num17;
                    break;
                case 18:
                    this.node.color = o.num18;
                    break;
                case 19:
                    this.node.color = o.num19;
                    break;
                case 20:
                    this.node.color = o.num20;
                    break;
                default:
                    this.node.color = o.nums
                }
                if (n && this.node.runAction(cc.sequence(cc.scaleTo(.15, 1.5), cc.scaleTo(.15, 1))), e) {
                    var a = this.game.operateLogic(this.row, this.col, parseInt(this.numLabel.string), !0),
                    s = this.game.powers;
                    if (!a) {
                        for (var c = s.length - 1; c >= 0; c--) if (null != s[c]) {
                            var r = cc.sequence(cc.scaleTo(.1, 0), cc.callFunc(function(t) {
                                t.destroy()
                            },
                            null, s[c]));
                            s[c].runAction(r),
                            s[c] = null;
                            break
                        }
                        null == s[0] && (i.score = this.game.scoreNum.string, cc.director.loadScene("overScene"))
                    }
                }
            }
        }),
        cc._RF.pop()
    },
    {
        Colors: "Colors",
        Global: "Global"
    }],
    TipCp: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9c645IsvPlMpb/oilbxc6Kp", "TipCp"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                this.node.x = 0,
                this.node.y = 0,
                this.node.runAction(cc.sequence(cc.spawn(cc.fadeOut(1), cc.moveBy(1, cc.p(0, 100))), cc.removeSelf(!0)))
            }
        }),
        cc._RF.pop()
    },
    {}],
    TwoEightAnimation: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e997bAEL55GSr81p2Na2px5", "TwoEightAnimation"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {},
            startBetAnimation_Function: function() {
                this.node.active = !1
            },
            applyToDownCallBack_Function: function() {
                this.node.opacity = 255,
                this.node.parent.active = !1
            },
            betFullCallBack_Function: function() {
                this.node.opacity = 255,
                this.node.parent.active = !1
            }
        }),
        cc._RF.pop()
    },
    {}],
    TwoEightButtonClick: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b1d8d/BnU1BCrv69AJl+wxN", "TwoEightButtonClick"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                CanvasNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {},
            BettingButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").isBetTime && (this.CanvasNode.getComponent("TwoEightMain").chipsPosition = this.node.betPosition, this.CanvasNode.getComponent("TwoEightMain").netWork.twoEightGameSocket.emit("downCoin", {
                    chips: this.CanvasNode.getComponent("TwoEightMain").getbetIndex_Function(this.CanvasNode.getComponent("TwoEightMain").selectBet),
                    selectId: this.node.betPosition
                }))
            },
            BetButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").am_ButtonAnimation.getComponent("cc.Animation").stop(),
                this.CanvasNode.getComponent("TwoEightMain").am_ButtonAnimation.setPosition(this.node.position),
                this.CanvasNode.getComponent("TwoEightMain").am_ButtonAnimation.active = !0,
                this.CanvasNode.getComponent("TwoEightMain").am_ButtonAnimation.getComponent("cc.Animation").play("TwoEightButtonEffect"),
                this.CanvasNode.getComponent("TwoEightMain").selectBet = this.node.bet / this.CanvasNode.getComponent("TwoEightMain").playerInfo.exchangeRate
            },
            resetButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").resetGame_Function()
            },
            twoEightGameExit_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").getCanExit_Function() ? (this.CanvasNode.getComponent("TwoEightMain").com_Exit.active = !0, this.CanvasNode.getComponent("TwoEightMain").bg_Black.active = !0) : (this.getComponent("cc.Button").interactable = !1, this.CanvasNode.getComponent("TwoEightMain").gameExit_Function())
            },
            beBankerButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").bankerList.length < 4 && (this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.active = !0, parseInt(this.CanvasNode.getComponent("TwoEightMain").com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) - 10 * this.CanvasNode.getComponent("TwoEightMain").getTotalBetted_Function() >= this.CanvasNode.getComponent("TwoEightMain").beBankerMin ? (this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bg1").active = !0, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bg2").active = !1, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bt_Confirm").active = !1, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("sl_TakeMoneyBeBankerBar").active = !0, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bt_BeBankerConfirm").active = !0, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bt_BeBankerCancel").active = !0, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerOwnMoney").getComponent("cc.Label").string = this.CanvasNode.getComponent("TwoEightMain").com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_NotEnoughMoney").active = !1, parseInt(this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerOwnMoney").getComponent("cc.Label").string) - 10 * this.CanvasNode.getComponent("TwoEightMain").getTotalBetted_Function() >= this.CanvasNode.getComponent("TwoEightMain").beBankerMax ? this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string = parseInt(this.CanvasNode.getComponent("TwoEightMain").beBankerMin + this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("sl_TakeMoneyBeBankerBar").getComponent("cc.Slider").progress.toFixed(2) * (this.CanvasNode.getComponent("TwoEightMain").beBankerMax - this.CanvasNode.getComponent("TwoEightMain").beBankerMin)) : this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string = parseInt(this.CanvasNode.getComponent("TwoEightMain").beBankerMin + this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("sl_TakeMoneyBeBankerBar").getComponent("cc.Slider").progress.toFixed(2) * (parseInt(this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerOwnMoney").getComponent("cc.Label").string - 10 * this.CanvasNode.getComponent("TwoEightMain").getTotalBetted_Function()) - this.CanvasNode.getComponent("TwoEightMain").beBankerMin))) : (this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bg1").active = !1, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bg2").active = !0, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bt_Confirm").active = !0, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("sl_TakeMoneyBeBankerBar").active = !1, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bt_BeBankerConfirm").active = !1, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("bt_BeBankerCancel").active = !1, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_NotEnoughMoney").active = !0, this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_NotEnoughMoney").getComponent("cc.Label").string = this.CanvasNode.getComponent("TwoEightMain").beBankerMin));
            },
            beBankerMenuConfirmButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").netWork.twoEightGameSocket.emit("up", {
                    Coin: parseInt(this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string) * this.CanvasNode.getComponent("TwoEightMain").playerInfo.exchangeRate
                }),
                this.CanvasNode.getComponent("TwoEightMain").takeMoney = parseInt(this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string),
                this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.active = !1
            },
            beBankerMenuCancelButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.active = !1
            },
            beBankerMenuSliderProccess_Function: function() {
                parseInt(this.CanvasNode.getComponent("TwoEightMain").com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) - 10 * this.CanvasNode.getComponent("TwoEightMain").getTotalBetted_Function() >= this.CanvasNode.getComponent("TwoEightMain").beBankerMax ? this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string = parseInt(this.CanvasNode.getComponent("TwoEightMain").beBankerMin + this.node.getComponent("cc.Slider").progress.toFixed(2) * (this.CanvasNode.getComponent("TwoEightMain").beBankerMax - this.CanvasNode.getComponent("TwoEightMain").beBankerMin)) : this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerTakeMoney").getComponent("cc.Label").string = parseInt(this.CanvasNode.getComponent("TwoEightMain").beBankerMin + this.node.getComponent("cc.Slider").progress.toFixed(2) * (parseInt(this.CanvasNode.getComponent("TwoEightMain").com_BeBankerMenu.getChildByName("lb_PlayerOwnMoney").getComponent("cc.Label").string - 10 * this.CanvasNode.getComponent("TwoEightMain").getTotalBetted_Function()) - this.CanvasNode.getComponent("TwoEightMain").beBankerMin))
            },
            giveUpButtonClick_Function: function() {
                this.node.getComponent("cc.Button").interactable = !1,
                this.CanvasNode.getComponent("TwoEightMain").netWork.twoEightGameSocket.emit("down", {}),
                this.CanvasNode.getComponent("TwoEightMain").applyToDown_Function()
            },
            userListButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").ulAppear ? (this.CanvasNode.getComponent("TwoEightMain").com_UserList.active = !1, this.CanvasNode.getComponent("TwoEightMain").ulAppear = !1) : (this.CanvasNode.getComponent("TwoEightMain").com_UserList.active = !0, this.CanvasNode.getComponent("TwoEightMain").ulAppear = !0)
            },
            helpButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").com_Help.active = !0,
                this.CanvasNode.getComponent("TwoEightMain").bg_Black.active = !0
            },
            helpMenuCloseButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").com_Help.active = !1,
                this.CanvasNode.getComponent("TwoEightMain").bg_Black.active = !1
            },
            messageBoxReconnectButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").com_MessageBox.active = !1,
                cc.audioEngine.stopAll(),
                cc.director.loadScene("LobbyMain")
            },
            exitMenuCancelButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").com_Exit.active = !1,
                this.CanvasNode.getComponent("TwoEightMain").bg_Black.active = !1
            },
            exitMenuConfirmButtonClick_Function: function() {
                this.CanvasNode.getComponent("TwoEightMain").gameExit_Function()
            }
        }),
        cc._RF.pop()
    },
    {}],
    TwoEightChips: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "58716o1HMdP2LM9dT2bQst1", "TwoEightChips"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                chipsType: {
                    "default": [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {},
            setFrame_Function: function(t) {
                this.getComponent("cc.Sprite").spriteFrame = this.chipsType[t]
            },
            setLabel_Function: function(t) {
                this.node.children[0].getComponent("cc.Label").string = t
            }
        }),
        cc._RF.pop()
    },
    {}],
    TwoEightMaJong: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "09371D9ULxELLrEQWILErU7", "TwoEightMaJong"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                maJongFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                type: 0
            },
            onLoad: function() {},
            open_Function: function() {
                this.setFrame_Function(this.type)
            },
            setFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.maJongFrame[t]
            }
        }),
        cc._RF.pop()
    },
    {}],
    TwoEightMain: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "45c37RJIMRC95ioGn/tRyxT", "TwoEightMain"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                vi_View: {
                    "default": null,
                    type: cc.Node
                },
                pb_MaJong: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Chips: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_Point: {
                    "default": null,
                    type: cc.Prefab
                },
                pb_WinLoseSign: {
                    "default": null,
                    type: cc.Prefab
                },
                am_ButtonAnimation: {
                    "default": null,
                    type: cc.Node
                },
                com_BG: {
                    "default": null,
                    type: cc.Node
                },
                com_BetButtons: {
                    "default": null,
                    type: cc.Node
                },
                com_BettedFrame: {
                    "default": null,
                    type: cc.Node
                },
                com_BetTimer: {
                    "default": null,
                    type: cc.Node
                },
                com_PlayerMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_BankerMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_BankerList: {
                    "default": null,
                    type: cc.Node
                },
                com_BeBankerMenu: {
                    "default": null,
                    type: cc.Node
                },
                com_BankerUpAnimation: {
                    "default": null,
                    type: cc.Node
                },
                com_BankerDownanimation: {
                    "default": null,
                    type: cc.Node
                },
                com_Buttons: {
                    "default": null,
                    type: cc.Node
                },
                com_WinLoseList: {
                    "default": null,
                    type: cc.Node
                },
                com_UserList: {
                    "default": null,
                    type: cc.Node
                },
                com_Tips: {
                    "default": null,
                    type: cc.Node
                },
                com_Billing: {
                    "default": null,
                    type: cc.Node
                },
                com_Help: {
                    "default": null,
                    type: cc.Node
                },
                com_SystemMessage: {
                    "default": null,
                    type: cc.Node
                },
                com_Exit: {
                    "default": null,
                    type: cc.Node
                },
                com_MessageBox: {
                    "default": null,
                    type: cc.Node
                },
                bg_Black: {
                    "default": null,
                    type: cc.Node
                },
                an_StartAnimation: {
                    "default": null,
                    type: cc.Node
                },
                an_DealAnimation: {
                    "default": null,
                    type: cc.Node
                },
                an_Start: {
                    "default": null,
                    type: cc.Node
                },
                an_NoMoney: {
                    "default": null,
                    type: cc.Node
                },
                au_BGM: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Bet: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Win: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Lose: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Clock: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Send: {
                    "default": null,
                    url: cc.AudioClip
                },
                au_Shuffle: {
                    "default": null,
                    url: cc.AudioClip
                }
            },
            onLoad: function() {
                this.size = cc.view.getDesignResolutionSize(),
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE),
                this.playerInfo = t("PlayerInfo").getInstant,
                this.playerInfo.setGameObj_Function(this);
                var e = this;
                cc.view.setResizeCallback(function() {
                    var t = cc.view.getVisibleSize();
                    e.uiResize_Function(t)
                }),
                this.bg_Black.on("touchstart",
                function(t) {
                    return ! 1
                },
                this),
                this.uiInit_Function(),
                this.gameInit_Function()
            },
            uiInit_Function: function() {
                var t = cc.view.getVisibleSize(),
                e = t.width / 1334;
                t.width > 1334 ? (this.com_BG.getChildByName("bg").scaleX = e, this.com_BG.getChildByName("bg").scaleY = e, this.com_BG.getChildByName("bgup").scaleX = e, this.com_BG.getChildByName("bgdown").scaleX = e, this.bg_Black.scaleX = e, this.bg_Black.scaleY = e, this.com_PlayerMessage.x = -t.width / 2 + 60, this.com_PlayerMessage.y = -t.height / 2 + 50, this.com_SystemMessage.x = (t.width - this.com_SystemMessage.width) / 2 - 20, this.com_Buttons.getChildByName("bt_Exit").x = t.width / 2 - 45) : t.width < 1334 && (this.node.scaleX = e, this.node.scaleY = e, this.com_BG.getChildByName("bg").scaleX = 1 / e, this.com_BG.getChildByName("bg").scaleY = 1 / e, this.bg_Black.scaleX = 1 / e, this.bg_Black.scaleY = 1 / e, this.com_BG.getChildByName("bgup").y = (t.height - this.com_BG.getChildByName("bgup").height) / 2 / e + 4, this.com_BG.getChildByName("bgdown").y = ( - t.height + this.com_BG.getChildByName("bgdown").height) / 2 / e - 8, this.com_PlayerMessage.x = -t.width / 2 / e + 60, this.com_PlayerMessage.y = -t.height / 2 / e + 50, this.com_SystemMessage.x = (t.width / e - this.com_SystemMessage.width) / 2, this.com_SystemMessage.y = ( - t.height + this.com_SystemMessage.height) / 2 / e, this.com_BG.getChildByName("sign").y = this.com_PlayerMessage.y, this.com_WinLoseList.y = this.com_BG.getChildByName("sign").y + 32, this.com_Buttons.getChildByName("bt_Exit").x = t.width / 2 - 45 / e),
                this.com_Buttons.getChildByName("bt_Help").x = this.com_Buttons.getChildByName("bt_Exit").x - 100,
                this.com_Buttons.getChildByName("bt_UserList").x = this.com_PlayerMessage.x - 5,
                this.com_UserList.x = this.com_Buttons.getChildByName("bt_UserList").x + 50,
                this.com_BankerList.x = this.com_UserList.x - 4,
                this.com_Buttons.getChildByName("bt_BeBanker").x = this.com_BankerList.x + 120
            },
            uiResize_Function: function(t) {
                var e = t.width / 1334;
                t.width > 1334 ? (e = t.width / 1334, this.node.scaleX = 1, this.node.scaleY = 1, this.com_BG.getChildByName("bg").scaleX = e, this.com_BG.getChildByName("bg").scaleY = e, this.bg_Black.scaleX = e, this.bg_Black.scaleY = e, this.com_BG.getChildByName("bgup").scaleX = e, this.com_BG.getChildByName("bgdown").scaleX = e, this.com_BG.getChildByName("bgup").y = (t.height - this.com_BG.getChildByName("bgup").height) / 2, this.com_BG.getChildByName("bgdown").y = ( - t.height + this.com_BG.getChildByName("bgdown").height) / 2, this.com_PlayerMessage.x = -t.width / 2 + 60, this.com_PlayerMessage.y = -t.height / 2 + 50, this.com_SystemMessage.x = (t.width - this.com_SystemMessage.width) / 2 - 20, this.com_SystemMessage.y = ( - t.height + this.com_SystemMessage.height) / 2, this.com_Buttons.getChildByName("bt_Exit").x = t.width / 2 - 45) : t.width < 1334 && (this.node.scaleX = e, this.node.scaleY = e, this.com_BG.getChildByName("bg").scaleX = 1 / e, this.com_BG.getChildByName("bg").scaleY = 1 / e, this.com_BG.getChildByName("bgup").scaleX = 1, this.com_BG.getChildByName("bgdown").scaleX = 1, this.com_BG.getChildByName("bgup").y = (t.height - this.com_BG.getChildByName("bgup").height) / 2 / e + 4, this.com_BG.getChildByName("bgdown").y = ( - t.height + this.com_BG.getChildByName("bgdown").height) / 2 / e - 8, this.bg_Black.scaleX = 1 / e, this.bg_Black.scaleY = 1 / e, this.com_PlayerMessage.x = -t.width / 2 / e + 60, this.com_PlayerMessage.y = -t.height / 2 / e + 50, this.com_SystemMessage.x = (t.width / e - this.com_SystemMessage.width) / 2, this.com_SystemMessage.y = ( - t.height + this.com_SystemMessage.height) / 2 / e, this.com_Buttons.getChildByName("bt_Exit").x = t.width / 2 - 45 / e),
                this.com_BG.getChildByName("sign").y = this.com_PlayerMessage.y,
                this.com_WinLoseList.y = this.com_BG.getChildByName("sign").y + 27,
                this.com_Buttons.getChildByName("bt_Help").x = this.com_Buttons.getChildByName("bt_Exit").x - 100,
                this.com_Buttons.getChildByName("bt_UserList").x = this.com_PlayerMessage.x - 5,
                this.com_UserList.x = this.com_Buttons.getChildByName("bt_UserList").x + 50,
                this.com_BankerList.x = this.com_UserList.x - 4,
                this.com_Buttons.getChildByName("bt_BeBanker").x = this.com_BankerList.x + 120
            },
            gameInit_Function: function() {
                this.netWork = t("TwoEightNetWork").getInstant,
                this.netWork.setTwoEightObj_Function(this),
                this.netWork.setTwoEightSocketOn_Function(),
                this.userName = this.playerInfo.playerName,
                this.playerId = this.playerInfo.playerId,
                this.tax = this.netWork.tax,
                this.beBankerMin = this.netWork.beBankerMin,
                this.beBankerMax = this.netWork.beBankerMax,
                this.selectBet = this.netWork.coinList[0] / this.playerInfo.exchangeRate,
                this.chipsPosition = -1,
                this.betPosition = [[ - 505, 105, -255, -110], [ - 125, 105, 125, -110], [255, 105, 505, -110]],
                this.betButtonInit_Function(),
                this.totalBetted = [0, 0, 0],
                this.personalBetted = [0, 0, 0],
                this.bankerTotalWin = 0,
                this.playerTotalWin = 0,
                this.maJongPositionArray = [[ - 65, 245], [65, 245], [ - 440, -60], [ - 310, -60], [ - 65, -60], [65, -60], [310, -60], [440, -60]],
                this.maJongArray = new Array(8);
                for (var e = 0; e < this.maJongArray.length; ++e) this.maJongArray[e] = cc.instantiate(this.pb_MaJong),
                this.maJongArray[e].setPosition(this.maJongPositionArray[e][0], this.maJongPositionArray[e][1]),
                this.vi_View.addChild(this.maJongArray[e]),
                this.maJongArray[e].active = !1;
                for (this.chipsArray = [], this.pointPosition = [[0, 180], [ - 380, 60], [0, 60], [380, 60]], this.pointArray = new Array(4), e = 0; e < this.pointArray.length; ++e) this.pointArray[e] = cc.instantiate(this.pb_Point),
                this.pointArray[e].setPosition(this.pointPosition[e][0], this.pointPosition[e][1]),
                this.pointArray[e].active = !1,
                this.vi_View.addChild(this.pointArray[e]);
                this.betTime = 0,
                this.betTimeCount = 0,
                this.isBetTime = !1,
                this.resultArray = [0, 0, 0],
                this.winLoseListPosition = [0, 0],
                this.winLoseCount = [0, 0, 0],
                this.winLoseArray = [],
                this.isBanker = !1,
                this.takeMoney = 0,
                this.bankerList = [],
                this.applyToDown = !1,
                this.netWork.twoEightGameSocket.emit("getDownTime", {}),
                this.openControl = !0,
                this.systemMessageMax = 20,
                this.systemMessageArray = [],
                this.ulPosition = [ - 88, -10],
                this.ulAppear = !1,
                this.playerList = this.netWork.playerList,
                this.setUserList_Function(),
                this.gameExit = !1,
                this.db_DealAnimation = this.an_DealAnimation.getChildByName("an_SendMaJong").getComponent("dragonBones.ArmatureDisplay"),
                this.dbArmature = this.db_DealAnimation.armature(),
                this.db_DealAnimation.addEventListener(dragonBones.EventObject.START, this.startPlay_Function, this),
                this.db_DealAnimation.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this.loop_com_Function, this),
                this.db_DealAnimation.addEventListener(dragonBones.EventObject.FRAME_EVENT, this.frame_event_Function, this),
                this.playerInfo.musicControl && (this.bgmNumber = cc.audioEngine.play(this.au_BGM, !0, .5))
            },
            startPlay_Function: function(t) {},
            loop_com_Function: function(t) {},
            frame_event_Function: function(t) {
                switch (t.detail.name) {
                case "dealAnimation0":
                    this.maJongArray[0].active = !0,
                    this.maJongArray[1].active = !0;
                    break;
                case "dealAnimation1":
                    this.maJongArray[2].active = !0,
                    this.maJongArray[3].active = !0;
                    break;
                case "dealAnimation2":
                    this.maJongArray[4].active = !0,
                    this.maJongArray[5].active = !0;
                    break;
                case "dealAnimation3":
                    this.maJongArray[6].active = !0,
                    this.maJongArray[7].active = !0
                }
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Send, !1, 1)
            },
            betButtonInit_Function: function() {
                for (var t = 0; t < 3; ++t) this.com_BetButtons.children[t].betPosition = t;
                var e = 0;
                for (t = 0; t < 4; ++t) this.com_BetButtons.children[t + 4].bet = this.netWork.coinList[t],
                e = this.netWork.coinList[t] / this.playerInfo.exchangeRate,
                e >= 1e3 ? this.com_BetButtons.children[t + 4].getChildByName("Label").getComponent("cc.Label").string = e / 1e3 + "K": this.com_BetButtons.children[t + 4].getChildByName("Label").getComponent("cc.Label").string = e
            },
            firstTimeEntryInit_Function: function(t) {
                this.com_PlayerMessage.getChildByName("lb_PlayerName").getComponent("cc.Label").string = this.userName,
                this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (this.playerInfo.playerCoin + this.netWork.addScore).toFixed(2),
                this.bankerList = t.upUserList,
                this.betTime = t.downTime,
                this.com_BetTimer.getChildByName("lb_Timer").getComponent("cc.Label").string = this.betTime,
                t.upUserList.length > 0 ? (this.isBetTime = !0, this.com_BankerMessage.getChildByName("sp_BankerFrame2").active = !1, this.com_BankerMessage.getChildByName("sp_BankerFrame1").active = !0, this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string = t.upUserList[0].nickname, this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = (t.upUserList[0].upCoin / this.playerInfo.exchangeRate).toFixed(2), this.com_BankerMessage.getChildByName("sp_BakerHead").active = !0) : (this.isBetTime = !1, this.com_Tips.active = !0, this.com_Tips.getChildByName("sp_Tips01").active = !1, this.com_Tips.getChildByName("sp_Tips02").active = !1);
                for (var e = 0; e < t.upUserList.length; ++e) this.playerId === t.upUserList[e].userId && (this.com_Buttons.getChildByName("bt_BeBanker").active = !1, this.com_Buttons.getChildByName("bt_GiveUp").active = !0, this.isBanker = !0, this.lasted = !0),
                0 !== e && (this.com_BankerList.children[e - 1].getComponent("cc.Label").string = t.upUserList[e].nickname);
                for (e = 0; e < 3; ++e) this.com_BettedFrame.children[e].getChildByName("lb_TotalBet").getComponent("cc.Label").string = "总下注: " + t.DownCoin[e] / this.playerInfo.exchangeRate,
                this.com_BettedFrame.children[e].getChildByName("lb_PlayerBet").getComponent("cc.Label").string = "我的下注: " + t.myDownCoin[e] / this.playerInfo.exchangeRate,
                this.totalBetted[e] = t.DownCoin[e] / this.playerInfo.exchangeRate,
                this.personalBetted[e] = t.myDownCoin[e] / this.playerInfo.exchangeRate
            },
            bettedChips_Function: function(t, e, n) {
                var i = -1,
                o = cc.instantiate(this.pb_Chips),
                a = 0;
                e /= this.playerInfo.exchangeRate;
                for (var s = 0; s < this.netWork.coinList.length; ++s) if (e === this.netWork.coinList[s] / this.playerInfo.exchangeRate) {
                    a = this.netWork.coinList[s] / this.playerInfo.exchangeRate >= 1e3 ? this.netWork.coinList[s] / this.playerInfo.exchangeRate / 1e3 + "K": this.netWork.coinList[s] / this.playerInfo.exchangeRate,
                    o.getComponent("TwoEightChips").setLabel_Function(a),
                    i = s;
                    break
                }
                o.getComponent("TwoEightChips").setFrame_Function(i),
                o.tag = -10,
                this.vi_View.addChild(o, -1),
                this.chipsArray.push(o),
                o.setPosition(this.getRandom_Function(this.betPosition[t][0], this.betPosition[t][2]), this.getRandom_Function(this.betPosition[t][1], this.betPosition[t][3])),
                n && this.setPersonalBettedString_Function(t, e),
                this.setTotalBettedString_Function(t, e),
                this.chipsPosition = -1
            },
            sendCardAnimation_Function: function() {
                this.db_DealAnimation.playAnimation("xipai", 1),
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Shuffle, !1, 1)
            },
            getRandom_Function: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            setTotalBettedString_Function: function(t, e) {
                this.totalBetted[t] += e,
                this.com_BettedFrame.children[t].getChildByName("lb_TotalBet").getComponent("cc.Label").string = "总下注: " + this.totalBetted[t].toFixed(2)
            },
            setPersonalBettedString_Function: function(t, e) {
                this.personalBetted[t] += e,
                this.com_BettedFrame.children[t].getChildByName("lb_PlayerBet").getComponent("cc.Label").string = "我的下注: " + this.personalBetted[t].toFixed(2)
            },
            setMaJongType_Function: function(t) {
                for (var e = 0; e < this.maJongArray.length; ++e) this.maJongArray[e].getComponent("TwoEightMaJong").type = t[e],
                this.maJongArray[e].active = !0
            },
            setResult_Function: function(t) {
                for (var e = 0; e < this.resultArray.length; ++e) this.resultArray[e] = t[e];
                this.openPlayerMaJong_Function(),
                this.openBankerMaJong_Function(),
                this.checkPoint_Function(t)
            },
            openPlayerMaJong_Function: function() {
                for (var t = 0; t < 6; ++t) this.maJongArray[t + 2].getComponent("TwoEightMaJong").open_Function()
            },
            openBankerMaJong_Function: function() {
                for (var t = 0; t < 2; ++t) this.maJongArray[t].getComponent("TwoEightMaJong").open_Function()
            },
            bankerUpAniamtion_Function: function(t) {
                this.com_BankerUpAnimation.getChildByName("lb_PlayerName").getComponent("cc.Label").string = t,
                this.com_BankerUpAnimation.active = !0,
                this.com_BankerUpAnimation.setPosition(0, 0),
                this.com_BankerUpAnimation.opacity = 255;
                var e = cc.moveTo(1, cc.p(0, 250)),
                n = cc.fadeOut(1),
                i = cc.spawn(e, n);
                this.com_BankerUpAnimation.runAction(i)
            },
            bankerDownAniamtion_Function: function() {
                this.com_BankerDownanimation.getChildByName("lb_PlayerName").getComponent("cc.Label").string = this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string,
                this.com_BankerDownanimation.active = !0,
                this.com_BankerDownanimation.setPosition(0, 250),
                this.com_BankerDownanimation.opacity = 255;
                var t = cc.moveTo(1, cc.p(0, 0)),
                e = cc.fadeOut(1),
                n = cc.spawn(t, e);
                this.com_BankerDownanimation.runAction(n)
            },
            bankerUp_Function: function(t, e) {
                this.com_BankerMessage.getChildByName("sp_BankerFrame2").active = !1,
                this.com_BankerMessage.getChildByName("sp_BankerFrame1").active = !0,
                this.com_Tips.active = !1,
                this.bankerUpAniamtion_Function(t)
            },
            bankerDown_Function: function(t, e) {
                e ? this.bankerList.splice(e, 1) : (this.com_BankerMessage.getChildByName("sp_BankerFrame1").active = !1, this.com_BankerMessage.getChildByName("sp_BankerFrame2").active = !0, this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string = "", this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = "", this.bankerList.shift(), this.bankerDownAniamtion_Function(), this.com_Buttons.getChildByName("bt_GiveUp").getComponent("cc.Button").interactable = !0),
                this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) + parseFloat(t / this.playerInfo.exchangeRate)).toFixed(2),
                this.updateBankerList_Function()
            },
            checkBankerList_Function: function(t) {
                this.bankerList.push(t),
                t.nickname === this.userName && (this.com_Buttons.getChildByName("bt_BeBanker").active = !1, this.com_Buttons.getChildByName("bt_GiveUp").active = !0, this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseInt(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) - t.upCoin / this.playerInfo.exchangeRate).toFixed(2)),
                this.bankerList.length > 1 ? this.updateBankerList_Function() : (this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string = t.nickname, this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = parseFloat(t.upCoin / this.playerInfo.exchangeRate).toFixed(2), this.com_BankerMessage.getChildByName("sp_BankerFrame1").active = !0, this.com_BankerMessage.getChildByName("sp_BankerFrame2").active = !1, this.com_BankerMessage.getChildByName("sp_BakerHead").active = !0, this.bankerUp_Function(t.nickname), t.nickname === this.userName && (this.isBanker = !0, this.lasted = !0), this.resetGame_Function()),
                this.com_Billing.active = !1
            },
            updateBankerList_Function: function() {
                for (var t = 0; t < this.com_BankerList.children.length; ++t) this.com_BankerList.children[t].getComponent("cc.Label").string = "";
                for (var t = 0; t < this.bankerList.length; ++t) t + 1 < this.bankerList.length && (this.com_BankerList.children[t].getComponent("cc.Label").string = this.bankerList[t + 1].nickname);
                if (this.bankerList.length > 0)"" === this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string && (this.bankerUp_Function(this.bankerList[0].nickname), this.com_BankerMessage.getChildByName("lb_BankerName").getComponent("cc.Label").string = this.bankerList[0].nickname, this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = parseFloat(this.bankerList[0].upCoin / this.playerInfo.exchangeRate).toFixed(2), this.com_BankerMessage.getChildByName("sp_BakerHead").active = !0),
                this.bankerList[0].nickname === this.userName && (this.lasted = !0);
                else {
                    this.isBetTime = !1,
                    this.com_Tips.active = !0,
                    this.com_Tips.getChildByName("sp_Tips00").active = !0,
                    this.com_Tips.getChildByName("sp_Tips01").active = !1,
                    this.com_Tips.getChildByName("sp_Tips02").active = !1,
                    this.com_BankerMessage.getChildByName("sp_BakerHead").active = !1,
                    this.totalBetted = [0, 0, 0];
                    for (var t = 0; t < this.chipsArray.length; ++t) this.vi_View.removeChildByTag( - 10);
                    for (this.chipsArray = [], t = 0; t < 3; ++t) this.com_BettedFrame.children[t].getChildByName("lb_TotalBet").getComponent("cc.Label").string = "总下注: 0",
                    this.com_BettedFrame.children[t].getChildByName("lb_PlayerBet").getComponent("cc.Label").string = "";
                    this.personalBetted = [0, 0, 0]
                }
            },
            applyToDown_Function: function() {
                this.applyToDown || (this.applyToDown = !0, this.com_Tips.active = !0, this.com_Tips.getChildByName("sp_Tips00").active = !1, this.com_Tips.getChildByName("sp_Tips01").active = !1, this.com_Tips.getChildByName("sp_Tips02").active = !0, this.com_Tips.getChildByName("sp_Tips02").getComponent("cc.Animation").play("ApplyToDown"))
            },
            checkPoint_Function: function(t) {
                for (var e = 0; e < this.pointArray.length; ++e) this.maJongArray[2 * e].getComponent("TwoEightMaJong").type === this.maJongArray[2 * e + 1].getComponent("TwoEightMaJong").type ? (this.pointArray[e].getComponent("TwoEightPoint").setPoint_Function(10), this.pointArray[e].getComponent("TwoEightPoint").type = this.maJongArray[2 * e].getComponent("TwoEightMaJong").type) : 8 === this.maJongArray[2 * e].getComponent("TwoEightMaJong").type && 2 === this.maJongArray[2 * e + 1].getComponent("TwoEightMaJong").type || 2 === this.maJongArray[2 * e].getComponent("TwoEightMaJong").type && 8 === this.maJongArray[2 * e + 1].getComponent("TwoEightMaJong").type ? (this.pointArray[e].getComponent("TwoEightPoint").setPoint_Function(11), this.pointArray[e].getComponent("TwoEightPoint").type = 10) : (this.pointArray[e].getComponent("TwoEightPoint").setPoint_Function((this.maJongArray[2 * e].getComponent("TwoEightMaJong").type + this.maJongArray[2 * e + 1].getComponent("TwoEightMaJong").type) % 10), this.maJongArray[2 * e].getComponent("TwoEightMaJong").type > this.maJongArray[2 * e + 1].getComponent("TwoEightMaJong").type ? this.pointArray[e].getComponent("TwoEightPoint").type = this.maJongArray[2 * e].getComponent("TwoEightMaJong").type: this.pointArray[e].getComponent("TwoEightPoint").type = this.maJongArray[2 * e + 1].getComponent("TwoEightMaJong").type),
                this.pointArray[e].active = !0,
                this.pointArray[e].setLocalZOrder(1);
                this.checkWinLose_Function(t)
            },
            checkWinLose_Function: function(t) {
                for (var e = 0; e < t.length; ++e) t[e] > 0 ? this.winLoseCount[e] = 1 : this.winLoseCount[e] = 0;
                this.setWinLoseList_Function()
            },
            setWinLoseList_Function: function() {
                for (var t, e = 0; e < this.winLoseCount.length; ++e) t = cc.instantiate(this.pb_WinLoseSign),
                t.getComponent("TwoEightSign").setSignFrame_Function(this.winLoseCount[e]),
                this.winLoseArray.push(t),
                this.com_WinLoseList.addChild(t);
                if (this.winLoseArray.length < 51) for (e = 0; e < this.winLoseCount.length; ++e) this.winLoseArray[this.winLoseArray.length - 3 + e].setPosition(34 * (this.winLoseArray.length / 3 - 1), e * -27);
                else {
                    for (e = 0; e < this.winLoseCount.length; ++e) this.com_WinLoseList.removeChild(this.winLoseArray[0]),
                    this.winLoseArray.shift();
                    for (e = 0; e < this.winLoseArray.length; ++e) this.winLoseArray[e].setPosition(this.winLoseListPosition[0] + 34 * parseInt(e / 3), this.winLoseListPosition[1] + e % 3 * -27)
                }
            },
            billng_Function: function(t) {
                this.com_Billing.active = !0,
                this.scheduleOnce(function() {
                    this.com_Billing.active = !1
                },
                2),
                t >= 0 ? (this.com_Billing.getChildByName("lb_Score").color = cc.Color.YELLOW, this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Win, !1, 1)) : (this.com_Billing.getChildByName("lb_Score").color = cc.Color.CYAN, this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Lose, !1, 1)),
                this.com_Billing.getChildByName("lb_Score").getComponent("cc.Label").string = (t / this.playerInfo.exchangeRate).toFixed(2),
                this.isBanker ? this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = (parseFloat(this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string) + t / this.playerInfo.exchangeRate).toFixed(2) : (this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string = (parseFloat(this.com_PlayerMessage.getChildByName("lb_PlayerMoney").getComponent("cc.Label").string) + t / this.playerInfo.exchangeRate).toFixed(2), this.lasted && (this.isBanker = !0)),
                this.totalBetted = [0, 0, 0],
                this.personalBetted = [0, 0, 0]
            },
            updateBankerMoney_Function: function(t) {
                this.com_BankerMessage.getChildByName("lb_BankerMoney").getComponent("cc.Label").string = (t / this.playerInfo.exchangeRate).toFixed(2)
            },
            startGame_Function: function() {
                this.resetGame_Function(),
                this.betTime = 10,
                this.betTimeCount = 0,
                this.com_Billing.active = !1,
                this.an_StartAnimation.active = !0,
                this.an_StartAnimation.getComponent("cc.Animation").play("TwoEightStart"),
                this.an_Start.active = !0,
                this.an_Start.getComponent("cc.Animation").play(),
                this.scheduleOnce(function() {
                    this.an_Start.active = !1
                },
                1.5),
                this.bankerList.length > 0 && (this.isBetTime = !0),
                this.openControl = !0
            },
            resetGame_Function: function() {
                this.totalBetted = [0, 0, 0];
                for (var t = 0; t < this.chipsArray.length; ++t) this.vi_View.removeChildByTag( - 10);
                for (this.chipsArray = [], t = 0; t < 3; ++t) this.com_BettedFrame.children[t].getChildByName("lb_TotalBet").getComponent("cc.Label").string = "总下注: 0",
                this.com_BettedFrame.children[t].getChildByName("lb_PlayerBet").getComponent("cc.Label").string = "";
                for (this.personalBetted = [0, 0, 0], this.bankerTotalWin = 0, this.playerTotalWin = 0, this.winLoseCount = [0, 0, 0], t = 0; t < this.maJongArray.length; ++t) this.maJongArray[t].getComponent("TwoEightMaJong").type = 0,
                this.maJongArray[t].getComponent("TwoEightMaJong").open_Function(),
                this.maJongArray[t].active = !1;
                for (t = 0; t < this.pointArray.length; ++t) this.pointArray[t].active = !1;
                this.resultArray = [0, 0, 0]
            },
            getbetIndex_Function: function(t) {
                for (var e = -1,
                n = 0; n < this.netWork.coinList.length; ++n) if (t === this.netWork.coinList[n] / this.playerInfo.exchangeRate) {
                    e = n;
                    break
                }
                return e
            },
            getTotalBetted_Function: function() {
                for (var t = 0,
                e = 0; e < this.personalBetted.length; ++e) t += this.personalBetted[e];
                return t
            },
            setSystemMessage_Function: function(t, e, n) {
                var i = new cc.Node;
                switch (i.addComponent("cc.Label"), i.anchorX = 0, i.anchorY = 1, i.width = 580, i.height = 30, i.getComponent("cc.Label").overflow = 3, i.getComponent("cc.Label").fontSize = 20, i.getComponent("cc.Label").lineHeight = 22, n) {
                case 0:
                    t ? (i.color = cc.Color.WHITE, i.getComponent("cc.Label").string = "玩家: " + t + " 下注 " + (e / this.playerInfo.exchangeRate).toFixed(2)) : (i.color = cc.Color.YELLOW, i.getComponent("cc.Label").string = "下注 " + this.selectBet.toFixed(2));
                    break;
                case 1:
                    e > 0 ? (i.color = cc.Color.YELLOW, i.getComponent("cc.Label").string = "本局赢得 " + (e / this.playerInfo.exchangeRate).toFixed(2)) : (i.color = cc.Color.CYAN, i.getComponent("cc.Label").string = "本局输了 " + (e / this.playerInfo.exchangeRate).toFixed(2))
                }
                this.systemMessageArray.push(i),
                this.systemMessageArray[this.systemMessageArray.length - 1].setPosition( - 215, (this.systemMessageArray.length - 1) * -25),
                this.com_SystemMessage.getComponent("cc.ScrollView").content.addChild(this.systemMessageArray[this.systemMessageArray.length - 1]),
                this.systemMessageArray.length > this.systemMessageMax && (this.systemMessageArray.shift(), this.com_SystemMessage.getComponent("cc.ScrollView").content.removeChild(this.systemMessageArray[0]), this.updateSystemMessagePosition_Function()),
                this.systemMessageArray.length > 4 && (this.com_SystemMessage.getComponent("cc.ScrollView").content.height = 25 * this.systemMessageArray.length, this.com_SystemMessage.getComponent("cc.ScrollView").scrollToBottom())
            },
            setUserList_Function: function() {
                for (var t = null,
                e = 0; e < this.playerList.length; ++e) t = new cc.Node,
                t.addComponent("cc.Label"),
                t.anchorX = 0,
                t.anchorY = 1,
                t.width = 580,
                t.height = 30,
                t.getComponent("cc.Label").overflow = 3,
                t.getComponent("cc.Label").fontSize = 20,
                t.getComponent("cc.Label").lineHeight = 22,
                t.getComponent("cc.Label").string = this.playerList[e].nickname,
                t.setPosition( - 89, e * -25 + -5),
                this.com_UserList.getChildByName("scrollView").getComponent("cc.ScrollView").content.addChild(t);
                this.updatePlayerList_Function()
            },
            playerEnterRoom_Function: function(t) {
                this.playerList.push(t);
                var e = new cc.Node;
                e.addComponent("cc.Label"),
                e.anchorX = 0,
                e.anchorY = 1,
                e.width = 580,
                e.height = 30,
                e.getComponent("cc.Label").overflow = 3,
                e.getComponent("cc.Label").fontSize = 20,
                e.getComponent("cc.Label").lineHeight = 22,
                e.getComponent("cc.Label").string = t.nickname,
                this.com_UserList.getChildByName("scrollView").getComponent("cc.ScrollView").content.addChild(e),
                this.updatePlayerList_Function()
            },
            playerLeaveRoom_Function: function(t) {
                for (var e = 0; e < this.playerList.length; ++e) if (t === this.playerList[e].userId) {
                    for (var n = 0; n < this.com_UserList.getChildByName("scrollView").getComponent("cc.ScrollView").content.children.length; ++n) if (this.playerList[e].nickname === this.com_UserList.getChildByName("scrollView").getComponent("cc.ScrollView").content.children[n].getComponent("cc.Label").string) {
                        this.com_UserList.getChildByName("scrollView").getComponent("cc.ScrollView").content.removeChild(this.com_UserList.getChildByName("scrollView").getComponent("cc.ScrollView").content.children[n]);
                        break
                    }
                    this.playerList.splice(e, 1)
                }
                this.updatePlayerList_Function()
            },
            updatePlayerList_Function: function() {
                for (var t = 0; t < this.playerList.length; ++t) this.com_UserList.getChildByName("scrollView").getComponent("cc.ScrollView").content.children[t].setPosition( - 89, -5 + t * -25);
                this.playerList.length > 9 && (this.com_UserList.getChildByName("scrollView").getComponent("cc.ScrollView").content.height = 25 * this.playerList.length)
            },
            updateSystemMessagePosition_Function: function() {
                for (var t = 0; t < this.systemMessageArray.length; ++t) this.systemMessageArray[t].setPosition( - 215, t * -25)
            },
            gameExit_Function: function() {
                this.gameExit = !0,
                this.netWork.twoEightGameSocket.disconnect(),
                cc.audioEngine.stopAll(),
                cc.director.loadScene("LobbyMain")
            },
            playAudio_Function: function() {
                this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Bet, !1, 1)
            },
            betIsFull_Function: function() {
                255 === this.com_Tips.getChildByName("sp_Tips01").opacity && (this.com_Tips.active = !0, this.com_Tips.getChildByName("sp_Tips00").active = !1, this.com_Tips.getChildByName("sp_Tips01").active = !0, this.com_Tips.getChildByName("sp_Tips02").active = !1, this.com_Tips.getChildByName("sp_Tips01").getComponent("cc.Animation").play("BetFull"))
            },
            noMoney_Function: function() {
                this.com_Tips.getChildByName("sp_YuEBuZu").active === !1 && (this.com_Tips.active = !0, this.com_Tips.getChildByName("sp_Tips00").active = !1, this.com_Tips.getChildByName("sp_Tips01").active = !1, this.com_Tips.getChildByName("sp_Tips02").active = !1, this.com_Tips.getChildByName("sp_YuEBuZu").opacity = 255, this.com_Tips.getChildByName("sp_YuEBuZu").active = !0, this.com_Tips.getChildByName("sp_YuEBuZu").runAction(cc.sequence(cc.fadeOut(2), cc.callFunc(function() {
                    this.com_Tips.getChildByName("sp_YuEBuZu").active = !1,
                    this.com_Tips.active = !1
                },
                this))));
            },
            betting_Full_Function: function(t) {
                this.com_Tips.getChildByName("MaxMoney").active === !1 && (this.com_Tips.active = !0, this.com_Tips.getChildByName("MaxMoney").getChildByName("JinE").getComponent("cc.Label").string = (parseInt(t) / this.playerInfo.exchangeRate).toFixed(2), this.com_Tips.getChildByName("sp_Tips00").active = !1, this.com_Tips.getChildByName("sp_Tips01").active = !1, this.com_Tips.getChildByName("sp_Tips02").active = !1, this.com_Tips.getChildByName("MaxMoney").opacity = 255, this.com_Tips.getChildByName("MaxMoney").active = !0, this.com_Tips.getChildByName("MaxMoney").runAction(cc.sequence(cc.fadeOut(2), cc.callFunc(function() {
                    this.com_Tips.getChildByName("MaxMoney").active = !1,
                    this.com_Tips.active = !1
                },
                this))))
            },
            disconnectNetWork_Function: function() {
                this.bg_Black.active = !0,
                this.gameExit && this.netWork.twoEightGameSocket.disconnect(),
                this.netWork.twoEightGameSocket = null,
                this.playerInfo.gameDisconnect = !0,
                this.com_MessageBox.active = !0,
                this.com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = "您已断线，请重新连接"
            },
            getCanExit_Function: function() {
                return !! (this.isBanker || this.getTotalBetted_Function() > 0)
            },
            update: function(t) {
                this.betTime > 0 ? this.betTimeCount >= 1 ? (this.betTimeCount = 0, --this.betTime, this.com_BetTimer.getChildByName("lb_Timer").getComponent("cc.Label").string = this.betTime, 3 === this.betTime && this.playerInfo.soundEffectControl && cc.audioEngine.play(this.au_Clock, !1, 1)) : this.betTimeCount += t: this.isBetTime = !1
            }
        }),
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo",
        TwoEightNetWork: "TwoEightNetWork"
    }],
    TwoEightNetWork: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ecdd8Yb41pH1o1dzuyBqDLi", "TwoEightNetWork");
        var i = function() {
            var e = "",
            n = function() {
                this.lobbyMain = null,
                this.twoEight = null,
                this.twoEightGameSocket = null,
                this.tableID = -1,
                this.seatID = -1,
                this.playerHead = null,
                this.playerList = null,
                this.beBankerMin = 0,
                this.beBankerMax = 0,
                this.tax = 0,
                this.addScore = 0,
                this.coinList = [],
                this.eventOn = !1,
                this.init = function() {
                    this.playerInfo = t("PlayerInfo").getInstant
                },
                this.loginGame_Function = function(e, n, i, o) {
                    var a = this,
                    s = null;
                    cc.sys.isNative ? a.twoEightGameSocket = SocketIO.connect(e + ":" + n) : (s = t("Socket.io"), a.twoEightGameSocket = s(e + ":" + n)),
                    a.twoEightGameSocket.on("connect_error",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("TwoEight")
                    }),
                    a.twoEightGameSocket.on("connect_timeout",
                    function() {
                        a.playerInfo.gameDisconnect || a.lobbyMain.contentGameServerFail_Function("TwoEight")
                    }),
                    a.twoEightGameSocket.on("connected",
                    function(t) {
                        if (t) try {
                            a.twoEightGameSocket.emit("LoginGame", {
                                userid: i,
                                gametype: 3,
                                sign: o
                            })
                        } catch(e) {}
                    }),
                    a.twoEightGameSocket.on("loginGameResult",
                    function(t) {
                        t = a.changeResultJSON_Function(t),
                        t.resultid ? (a.playerInfo.playerCoin = t.Obj.score / a.playerInfo.exchangeRate, a.lobbyMain.getComponent("LobbyMain").netWork.socket.disconnect(), a.twoEightGameSocket.emit("LoginRoom", {
                            roomid: 1
                        }), a.loginRoom_Function()) : (a.lobbyMain.com_Tips.getChildByName("sp_GameLoading").active = !1, a.lobbyMain.getComponent("LobbyMain").loadGameScene = !1, a.lobbyMain.getComponent("LobbyMain").bg_Black.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.active = !0, a.lobbyMain.getComponent("LobbyMain").com_MessageBox.getChildByName("lb_Tips").getComponent("cc.Label").string = t.msg, a.eventOn = !0)
                    })
                },
                this.loginRoom_Function = function() {
                    var t = this;
                    t.twoEightGameSocket.on("LoginRoomResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && (t.tableID = e.ResultData.TableId, t.seatID = e.ResultData.seatId, t.playerList = e.ResultData.userList, t.beBankerMin = e.ResultData.upMin / t.playerInfo.exchangeRate, t.beBankerMax = e.ResultData.upMax / t.playerInfo.exchangeRate, t.addScore = e.ResultData.addscore / t.playerInfo.exchangeRate, t.coinList = e.ResultData.coinConfig, t.playerInfo.gameDisconnect = !1, t.playerInfo.gameName = "TwoEight", cc.audioEngine.stopAll(), cc.director.loadScene("TwoEight"))
                    })
                },
                this.setTwoEightSocketOn_Function = function() {
                    var t = this;
                    t.twoEightGameSocket.on("downCoinBegin",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.twoEight.startGame_Function()
                    }),
                    t.twoEightGameSocket.on("downEnd",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        t.twoEight.getComponent("TwoEightMain").isBetTime = !1
                    }),
                    t.twoEightGameSocket.on("openResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.result && (t.twoEight.setMaJongType_Function(e.card), t.twoEight.setResult_Function(e.jieguo))
                    }),
                    t.twoEightGameSocket.on("downCoinResult",
                    function(e) {
                        if (e = t.changeResultJSON_Function(e), 1 === e.ResultCode) t.twoEight.bettedChips_Function(e.selectId, e.downCoin, 1),
                        t.twoEight.setSystemMessage_Function("", 0, 0),
                        t.twoEight.playAudio_Function();
                        else if (e.ResultCode === -1) t.twoEight.betIsFull_Function();
                        else if (e.ResultCode === -3) {
                            var n = e.msg.substring(6);
                            t.twoEight.betting_Full_Function(n)
                        } else 0 === e.ResultCode && t.twoEight.noMoney_Function()
                    }),
                    t.twoEightGameSocket.on("otherDownCoin",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && (t.twoEight.bettedChips_Function(e.selectId, e.downCoin, 0), t.twoEight.setSystemMessage_Function(e.userNickname, e.downCoin, 0), t.twoEight.playAudio_Function())
                    }),
                    t.twoEightGameSocket.on("upResult",
                    function(e) {
                        if (e = t.changeResultJSON_Function(e), e.ResultCode) {
                            var n = {
                                userId: t.twoEight.playerID,
                                nickname: t.twoEight.userName,
                                upCoin: t.twoEight.takeMoney * t.playerInfo.exchangeRate
                            };
                            t.twoEight.getComponent("TwoEightMain").betTime = e.downTime,
                            t.twoEight.getComponent("TwoEightMain").isBetTime = !0,
                            t.twoEight.checkBankerList_Function(n)
                        }
                    }),
                    t.twoEightGameSocket.on("downResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        1 === e.ResultCode && (t.twoEight.com_Buttons.getChildByName("bt_BeBanker").active = !0, t.twoEight.com_Buttons.getChildByName("bt_GiveUp").active = !1, t.twoEight.isBanker = !1, t.twoEight.lasted = !1, t.twoEight.applyToDown = !1, t.twoEight.com_Buttons.getChildByName("bt_GiveUp").getComponent("cc.Button").interactable = !0, t.twoEight.bankerDown_Function(e.upCoin, e.idx))
                    }),
                    t.twoEightGameSocket.on("otherUp",
                    function(e) {
                        if (e = t.changeResultJSON_Function(e)) {
                            var n = {
                                userId: -1,
                                nickname: e.userNickname,
                                upCoin: e.upCoin
                            };
                            t.twoEight.getComponent("TwoEightMain").betTime = e.downTime,
                            t.twoEight.getComponent("TwoEightMain").isBetTime = !0,
                            t.twoEight.checkBankerList_Function(n)
                        }
                    }),
                    t.twoEightGameSocket.on("otherDown",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.twoEight.bankerDown_Function(0, e.idx)
                    }),
                    t.twoEightGameSocket.on("winResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && setTimeout(function() {
                            t.twoEight.billng_Function(e),
                            t.twoEight.setSystemMessage_Function("", e, 1)
                        },
                        3e3)
                    }),
                    t.twoEightGameSocket.on("getDownTimeResult",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && t.twoEight.firstTimeEntryInit_Function(e)
                    }),
                    t.twoEightGameSocket.on("resetBankerCoin",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && t.twoEight.updateBankerMoney_Function(e.upCoin)
                    }),
                    t.twoEightGameSocket.on("playEnter",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e.ResultCode && t.twoEight.playerEnterRoom_Function(e.ResultData)
                    }),
                    t.twoEightGameSocket.on("PlayerOut",
                    function(e) {
                        e = t.changeResultJSON_Function(e),
                        e && t.twoEight.playerLeaveRoom_Function(e.userId)
                    }),
                    t.twoEightGameSocket.on("sendCard",
                    function() {
                        t.twoEight.sendCardAnimation_Function()
                    }),
                    t.twoEightGameSocket.on("disconnect",
                    function(e) {
                        t.twoEight.gameExit || t.twoEight.disconnectNetWork_Function()
                    })
                },
                this.setLobbyMainObj_Function = function(t) {
                    this.lobbyMain = t
                },
                this.setTwoEightObj_Function = function(t) {
                    this.twoEight = t
                },
                this.changeResultJSON_Function = function(t) {
                    if (cc.sys.isNative) {
                        var e = JSON.parse(t);
                        return e
                    }
                    return t
                },
                this.init()
            };
            return e ? {
                getInstant: e
            }: (e = new n, {
                getInstant: e
            })
        } ();
        e.exports = i,
        cc._RF.pop()
    },
    {
        PlayerInfo: "PlayerInfo",
        "Socket.io": "Socket.io"
    }],
    TwoEightPoint: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "95789nau6FGdqPUXgw6CJVg", "TwoEightPoint"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                pointFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                },
                point: 0,
                type: 0
            },
            onLoad: function() {},
            setPoint_Function: function(t) {
                this.point = t,
                this.setFrame_Function(t)
            },
            setFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.pointFrame[t]
            }
        }),
        cc._RF.pop()
    },
    {}],
    TwoEightSign: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fa555etWH5JxK47QOicGC2g", "TwoEightSign"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                signFrame: {
                    "default": [],
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {},
            setSignFrame_Function: function(t) {
                this.node.getComponent("cc.Sprite").spriteFrame = this.signFrame[t]
            }
        }),
        cc._RF.pop()
    },
    {}],
    Util: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1f57fJXW/5MwpzGE2th5qGE", "Util");
        var i = {
            printObj: function(t) {
                var e = "";
                for (var n in t) e += " function " == typeof t[n] ? n + " \n ": n + " \n "
            },
            random: function(t, e) {
                return Math.floor(Math.random() * (e - t + 1) + t)
            },
            testCodeStr: "",
            testCode1: function(t) {
                this.start = (new Date).getTime(),
                this.testCodeStr = t
            },
            testCode2: function(t) {
                this.end = (new Date).getTime();
                this.end - this.start + "ms"
            }
        };
        e.exports = i,
        cc._RF.pop()
    },
    {}],
    ZIndexSet: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5e01bZLGtxMGLcsjPA8ntEI", "ZIndexSet"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                zIndex: 0
            },
            onLoad: function() {
                this.node.zIndex = this.zIndex
            }
        }),
        cc._RF.pop()
    },
    {}],
    bg: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fa1d3o+2GVFxakyeF6UEg4b", "bg");
        var i = t("initObj");
        cc.Class({
            "extends": cc.Component,
            properties: {
                bg1: {
                    "default": null,
                    type: cc.Node
                },
                bg2: {
                    "default": null,
                    type: cc.Node
                }
            },
            init: function() {
                var t = i.player.level;
                t > 1 && (this["bg" + (t - 1)].active = !1),
                3 !== t && (this["bg" + t].active = !0)
            }
        }),
        cc._RF.pop()
    },
    {
        initObj: "initObj"
    }],
    bulletGroup: [function(require, module, exports) {
        "use strict";
        cc._RF.push(module, "2a848LucixLA6Az483Z4MLD", "bulletGroup");
        var bPosition = cc.Class({
            name: "bPosition",
            properties: {
                xAxis: {
                    "default": "",
                    tooltip: "初始x轴，相对hero"
                },
                yAxis: {
                    "default": "",
                    tooltip: "初始y轴，相对hero"
                }
            }
        }),
        bulletInfinite = cc.Class({
            name: "bulletInfinite",
            properties: {
                name: "",
                freqTime: 0,
                initPollCount: 0,
                prefab: cc.Prefab,
                position: {
                    "default": [],
                    type: bPosition,
                    tooltip: "每次多少排子弹"
                }
            }
        }),
        bulletFiniteG = cc.Class({
            name: "bulletFiniteG",
            "extends": bulletInfinite,
            properties: {
                finiteTime: 0,
                orginName: ""
            }
        });
        cc.Class({
            "extends": cc.Component,
            properties: function() {
                return {
                    bulletInfinite: {
                        "default": null,
                        type: bulletInfinite,
                        tooltip: "无限时长子弹组"
                    },
                    bulletFiniteG: {
                        "default": [],
                        type: bulletFiniteG,
                        tooltip: "有限时长子弹组"
                    },
                    hero: cc.Node
                }
            },
            onLoad: function() {
                this.eState = D.commonInfo.gameState.none,
                D.common.initObjPool(this, this.bulletInfinite),
                D.common.batchInitObjPool(this, this.bulletFiniteG)
            },
            startAction: function() {
                this.eState = D.commonInfo.gameState.start,
                this.getNewbullet(this.bulletInfinite),
                this.bICallback = function() {
                    this.getNewbullet(this.bulletInfinite)
                }.bind(this),
                this.schedule(this.bICallback, this.bulletInfinite.freqTime)
            },
            pauseAction: function() {
                this.enabled = !1,
                this.eState = D.commonInfo.gameState.pause
            },
            resumeAction: function() {
                this.enabled = !0,
                this.eState = D.commonInfo.gameState.start
            },
            changeBullet: function(t) {
                this.unschedule(this.bICallback),
                this.unschedule(this.bFCallback);
                for (var e = 0; e < this.bulletFiniteG.length; e++) if (this.bulletFiniteG[e].orginName == t) {
                    this.bFCallback = function(t) {
                        this.getNewbullet(this.bulletFiniteG[t])
                    }.bind(this, e),
                    this.schedule(this.bFCallback, this.bulletFiniteG[e].freqTime, this.bulletFiniteG[e].finiteTime);
                    var n = this.bulletFiniteG[e].freqTime * this.bulletFiniteG[e].finiteTime;
                    this.schedule(this.bICallback, this.bulletInfinite.freqTime, cc.macro.REPEAT_FOREVER, n)
                }
            },
            getNewbullet: function(t) {
                for (var e = t.name + "Pool",
                n = 0; n < t.position.length; n++) {
                    var i = D.common.genNewNode(this[e], t.prefab, this.node),
                    o = this.getBulletPostion(t.position[n]);
                    i.setPosition(o),
                    i.getComponent("bullet").bulletGroup = this
                }
            },
            getBulletPostion: function getBulletPostion(posInfo) {
                var hPos = this.hero.getPosition(),
                newV2_x = hPos.x + eval(posInfo.xAxis),
                newV2_y = hPos.y + eval(posInfo.yAxis);
                return cc.p(newV2_x, newV2_y)
            },
            bulletDied: function(t) {
                D.common.backObjPool(this, t)
            }
        }),
        cc._RF.pop()
    },
    {}],
    bullet: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4eda9smHLNOKIxEhRQN+51L", "bullet"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                xSpeed: cc.Integer,
                ySpeed: cc.Integer,
                hpDrop: cc.Integer
            },
            onLoad: function() {},
            onCollision: function(t, e) {
                this.bulletGroup.bulletDied(this.node)
            },
            update: function(t) {
                this.bulletGroup.eState == D.commonInfo.gameState.start && (this.node.x += t * this.xSpeed, this.node.y += t * this.ySpeed, this.node.y > this.node.parent.height && this.bulletGroup.bulletDied(this.node))
            }
        }),
        cc._RF.pop()
    },
    {}],
    claw: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0b11fYPFGFOv7ojRZUCLV4A", "claw");
        var i = t("config"),
        o = i.obj,
        a = i.player;
        cc.Class({
            "extends": cc.Component,
            properties: {
                minerNode: {
                    "default": null,
                    type: cc.Node
                },
                objNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.miner = this.minerNode.getComponent("miner")
            },
            onCollisionEnter: function(t, e) {
                if ("down" != this.miner.state) return ! 1;
                var n = o["tag" + t.tag];
                if (this.miner.state = "up", this.miner.getAnimation(n.speed), a.preMoney = n.money, 0 !== n.money) {
                    this.miner.clawClose();
                    var i = this.objNode,
                    s = t.node.getComponent(cc.Sprite);
                    i.getComponent(cc.Sprite).spriteFrame = s.spriteFrame,
                    i.width = t.node.width,
                    i.height = t.node.height,
                    cc.log(i.width, i.height),
                    this.objShow(),
                    t.node.destroy()
                }
            },
            objShow: function() {
                this.objNode.opacity = 255
            },
            objHide: function() {
                this.objNode.opacity = 0
            }
        }),
        cc._RF.pop()
    },
    {
        config: "config"
    }],
    common: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1d0efIksyVK+bP0oH/Kg/LW", "common");
        var i = cc.Enum({
            none: 0,
            start: 1,
            stop: 2
        }),
        o = cc.Class({
            "extends": cc.Component,
            properties: {
                hero: {
                    "default": null,
                    type: cc.Node
                }
            },
            statics: {
                gameState: i
            },
            onLoad: function() {
                D.commonInfo = o,
                D.common = this,
                this.arr = {},
                this.arr.bullet = [],
                this.arr.doubleLaser = [],
                this.arr.enemy1 = [],
                this.arr.enemy2 = [],
                this.arr.enemy3 = [],
                this.arr.ufoBomb = [],
                this.arr.ufoBullet = []
            },
            batchInitObjPool: function(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    this.initObjPool(t, i)
                }
            },
            initObjPool: function(t, e) {
                var n = e.name,
                i = n + "Pool";
                t[i] = new cc.NodePool;
                for (var o = e.initPollCount,
                a = 0; a < o; ++a) {
                    var s = cc.instantiate(e.prefab);
                    t[i].put(s)
                }
            },
            genNewNode: function(t, e, n) {
                var i = null;
                return i = t.size() > 0 ? t.get() : cc.instantiate(e),
                n.addChild(i),
                this.arr[e.name].push(i),
                i
            },
            backObjPool: function(t, e) {
                var n = e.name + "Pool";
                t[n].put(e)
            },
            timeFmt: function(t, e) {
                var n = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
                for (var i in n) new RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length)));
                return e
            },
            update: function() {
                if (this.hero.getComponent("hero").sta === !0) {
                    for (var t = 0; t < this.arr.bullet.length; t++) for (var e = 0; e < this.arr.enemy1.length; e++) if (this.arr.bullet[t].x >= this.arr.enemy1[e].x - 25 && this.arr.bullet[t].x <= this.arr.enemy1[e].x + 25 && this.arr.bullet[t].y <= this.arr.enemy1[e].y + 20 && this.arr.bullet[t].y >= this.arr.enemy1[e].y - 20) {
                        this.arr.bullet[t].getComponent("bullet").onCollision(),
                        this.arr.enemy1[e].getComponent("enemy").onCollision(this.arr.bullet[t], 0),
                        this.arr.enemy1[e].getComponent("enemy").hP < 1 && (this.arr.enemy1.splice(e, 1), e--),
                        this.arr.bullet.splice(t, 1),
                        t--;
                        break
                    }
                    for (var t = 0; t < this.arr.bullet.length; t++) for (var e = 0; e < this.arr.enemy2.length; e++) if (this.arr.bullet[t].x >= this.arr.enemy2[e].x - 35 && this.arr.bullet[t].x <= this.arr.enemy2[e].x + 35 && this.arr.bullet[t].y <= this.arr.enemy2[e].y + 45 && this.arr.bullet[t].y >= this.arr.enemy2[e].y - 45) {
                        this.arr.bullet[t].getComponent("bullet").onCollision(),
                        this.arr.enemy2[e].getComponent("enemy").onCollision(this.arr.bullet[t], 0),
                        this.arr.enemy2[e].getComponent("enemy").hP < 1 && (this.arr.enemy2.splice(e, 1), e--),
                        this.arr.bullet.splice(t, 1),
                        t--;
                        break
                    }
                    for (var t = 0; t < this.arr.bullet.length; t++) for (var e = 0; e < this.arr.enemy3.length; e++) if (this.arr.bullet[t].x >= this.arr.enemy3[e].x - 83 && this.arr.bullet[t].x <= this.arr.enemy3[e].x + 83 && this.arr.bullet[t].y <= this.arr.enemy3[e].y + 123 && this.arr.bullet[t].y >= this.arr.enemy3[e].y - 123) {
                        this.arr.bullet[t].getComponent("bullet").onCollision(),
                        this.arr.enemy3[e].getComponent("enemy").onCollision(this.arr.bullet[t], 0),
                        this.arr.enemy3[e].getComponent("enemy").hP < 1 && (this.arr.enemy3.splice(e, 1), e--),
                        this.arr.bullet.splice(t, 1),
                        t--;
                        break
                    }
                    for (var t = 0; t < this.arr.doubleLaser.length; t++) for (var e = 0; e < this.arr.enemy1.length; e++) if (this.arr.doubleLaser[t].x >= this.arr.enemy1[e].x - 25 && this.arr.doubleLaser[t].x <= this.arr.enemy1[e].x + 25 && this.arr.doubleLaser[t].y <= this.arr.enemy1[e].y + 20 && this.arr.doubleLaser[t].y >= this.arr.enemy1[e].y - 20) {
                        this.arr.doubleLaser[t].getComponent("bullet").onCollision(),
                        this.arr.enemy1[e].getComponent("enemy").onCollision(this.arr.doubleLaser[t], 0),
                        this.arr.enemy1[e].getComponent("enemy").hP < 1 && (this.arr.enemy1.splice(e, 1), e--),
                        this.arr.doubleLaser.splice(t, 1),
                        t--;
                        break
                    }
                    for (var t = 0; t < this.arr.doubleLaser.length; t++) for (var e = 0; e < this.arr.enemy2.length; e++) if (this.arr.doubleLaser[t].x >= this.arr.enemy2[e].x - 35 && this.arr.doubleLaser[t].x <= this.arr.enemy2[e].x + 35 && this.arr.doubleLaser[t].y <= this.arr.enemy2[e].y + 45 && this.arr.doubleLaser[t].y >= this.arr.enemy2[e].y - 45) {
                        this.arr.doubleLaser[t].getComponent("bullet").onCollision(),
                        this.arr.enemy2[e].getComponent("enemy").onCollision(this.arr.doubleLaser[t], 0),
                        this.arr.enemy2[e].getComponent("enemy").hP < 1 && (this.arr.enemy2.splice(e, 1), e--),
                        this.arr.doubleLaser.splice(t, 1),
                        t--;
                        break
                    }
                    for (var t = 0; t < this.arr.doubleLaser.length; t++) for (var e = 0; e < this.arr.enemy3.length; e++) if (this.arr.doubleLaser[t].x >= this.arr.enemy3[e].x - 83 && this.arr.doubleLaser[t].x <= this.arr.enemy3[e].x + 83 && this.arr.doubleLaser[t].y <= this.arr.enemy3[e].y + 123 && this.arr.doubleLaser[t].y >= this.arr.enemy3[e].y - 123) {
                        this.arr.doubleLaser[t].getComponent("bullet").onCollision(),
                        this.arr.enemy3[e].getComponent("enemy").onCollision(this.arr.doubleLaser[t], 0),
                        this.arr.enemy3[e].getComponent("enemy").hP < 1 && (this.arr.enemy3.splice(e, 1), e--),
                        this.arr.doubleLaser.splice(t, 1),
                        t--;
                        break
                    }
                    for (var t = 0; t < this.arr.enemy1.length; t++) if (this.arr.enemy1[t].x - 25 <= this.hero.position.x + 40 && this.arr.enemy1[t].x - 25 >= this.hero.position.x - 40 && this.arr.enemy1[t].y - 20 <= this.hero.position.y + 30 && this.arr.enemy1[t].y - 20 >= this.hero.position.y - 30 || this.arr.enemy1[t].x - 25 <= this.hero.position.x + 40 && this.arr.enemy1[t].x - 25 >= this.hero.position.x - 40 && this.arr.enemy1[t].y + 20 <= this.hero.position.y + 30 && this.arr.enemy1[t].y + 20 >= this.hero.position.y - 30 || this.arr.enemy1[t].x + 25 <= this.hero.position.x + 40 && this.arr.enemy1[t].x + 25 >= this.hero.position.x - 40 && this.arr.enemy1[t].y - 20 <= this.hero.position.y + 30 && this.arr.enemy1[t].y - 20 >= this.hero.position.y - 30 || this.arr.enemy1[t].x + 25 <= this.hero.position.x + 40 && this.arr.enemy1[t].x + 25 >= this.hero.position.x - 40 && this.arr.enemy1[t].y + 20 <= this.hero.position.y + 30 && this.arr.enemy1[t].y + 20 >= this.hero.position.y - 30) return void this.hero.getComponent("hero").onCollision(this.arr.enemy1[t], this.hero);
                    for (var t = 0; t < this.arr.enemy2.length; t++) if (this.arr.enemy2[t].x - 35 <= this.hero.position.x + 40 && this.arr.enemy2[t].x - 35 >= this.hero.position.x - 40 && this.arr.enemy2[t].y - 45 <= this.hero.position.y + 30 && this.arr.enemy2[t].y - 45 >= this.hero.position.y - 30 || this.arr.enemy2[t].x - 35 <= this.hero.position.x + 40 && this.arr.enemy2[t].x - 35 >= this.hero.position.x - 40 && this.arr.enemy2[t].y + 45 <= this.hero.position.y + 30 && this.arr.enemy2[t].y + 45 >= this.hero.position.y - 30 || this.arr.enemy2[t].x + 35 <= this.hero.position.x + 40 && this.arr.enemy2[t].x + 35 >= this.hero.position.x - 40 && this.arr.enemy2[t].y - 45 <= this.hero.position.y + 30 && this.arr.enemy2[t].y - 45 >= this.hero.position.y - 30 || this.arr.enemy2[t].x + 35 <= this.hero.position.x + 40 && this.arr.enemy2[t].x + 35 >= this.hero.position.x - 40 && this.arr.enemy2[t].y + 45 <= this.hero.position.y + 30 && this.arr.enemy2[t].y + 45 >= this.hero.position.y - 30) return void this.hero.getComponent("hero").onCollision(this.arr.enemy2[t], this.hero);
                    for (var t = 0; t < this.arr.enemy3.length; t++) if (this.hero.position.x - 40 >= this.arr.enemy3[t].x - 80 && this.hero.position.x - 40 <= this.arr.enemy3[t].x + 80 && this.hero.position.y - 30 >= this.arr.enemy3[t].y - 120 && this.hero.position.y - 30 <= this.arr.enemy3[t].y + 120 || this.hero.position.x + 40 >= this.arr.enemy3[t].x - 80 && this.hero.position.x + 40 <= this.arr.enemy3[t].x + 80 && this.hero.position.y - 30 >= this.arr.enemy3[t].y - 120 && this.hero.position.y - 30 <= this.arr.enemy3[t].y + 120 || this.hero.position.x - 40 >= this.arr.enemy3[t].x - 80 && this.hero.position.x - 40 <= this.arr.enemy3[t].x + 80 && this.hero.position.y + 30 >= this.arr.enemy3[t].y - 120 && this.hero.position.y + 30 <= this.arr.enemy3[t].y + 120 || this.hero.position.x + 40 >= this.arr.enemy3[t].x - 80 && this.hero.position.x + 40 <= this.arr.enemy3[t].x + 80 && this.hero.position.y - 30 >= this.arr.enemy3[t].y - 120 && this.hero.position.y - 30 <= this.arr.enemy3[t].y + 120) return void this.hero.getComponent("hero").onCollision(this.arr.enemy3[t], this.hero);
                    for (var t = 0; t < this.arr.ufoBomb.length; t++) if (! (this.arr.ufoBomb[t].x + 30 <= this.hero.position.x - 40 || this.arr.ufoBomb[t].x - 30 >= this.hero.position.x + 40 || this.arr.ufoBomb[t].y + 30 <= this.hero.position.y - 30 || this.arr.ufoBomb[t].y - 30 >= this.hero.position.y + 30)) {
                        this.hero.getComponent("hero").onCollision(this.arr.ufoBomb[t], this.hero),
                        this.arr.ufoBomb[t].getComponent("ufo").onCollision(),
                        this.arr.ufoBomb.splice(t, 1),
                        t--;
                        break
                    }
                    for (var t = 0; t < this.arr.ufoBullet.length; t++) if (! (this.arr.ufoBullet[t].x + 30 <= this.hero.position.x - 40 || this.arr.ufoBullet[t].x - 30 >= this.hero.position.x + 40 || this.arr.ufoBullet[t].y + 30 <= this.hero.position.y - 30 || this.arr.ufoBullet[t].y - 30 >= this.hero.position.y + 30)) {
                        this.hero.getComponent("hero").onCollision(this.arr.ufoBullet[t], this.hero),
                        this.arr.ufoBullet[t].getComponent("ufo").onCollision(),
                        this.arr.ufoBullet.splice(t, 1),
                        t--;
                        break
                    }
                }
            }
        });
        cc._RF.pop()
    },
    {}],
    config: [function(t, e, n) {
        "use strict";
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function o(t) {
            var e, n, i, o, a = [];
            for (e in t) for (i = t[e], n = 0; n < i.length; n++) o = JSON.parse(JSON.stringify(m[e])),
            o.x = i[n][0],
            o.y = i[n][1],
            a.push(o);
            return a
        }
        cc._RF.push(e, "96ecfYtIItHgp3UdjoZCfsw", "config");
        var a, s = {
            type: "heavy",
            numb: 1
        },
        c = {
            type: "light",
            numb: 2
        },
        r = {
            type: "light",
            numb: 3
        },
        l = {
            type: "fast",
            numb: 4
        },
        h = {
            money: 0,
            level: 1,
            state: [],
            pause: !0,
            gameState: "run",
            preMoney: 0,
            minerState: "rotate",
            isgamerun: function() {
                return "run" == this.gameState
            },
            getTarget: function() {
                return p["level" + this.level].money
            },
            isSuccess: function() {
                return this.money >= this.getTarget()
            },
            gameEnd: function() {
                this.gameState = "end"
            },
            gameRun: function() {
                this.gameState = "run"
            },
            get isSound() {
                return "false" !== cc.sys.localStorage.getItem("isSound")
            },
            set isSound(t) {
                cc.sys.localStorage.setItem("isSound", t)
            },
            get isMusic() {
                return "false" !== cc.sys.localStorage.getItem("isMusic")
            },
            set isMusic(t) {
                cc.sys.localStorage.setItem("isMusic", t)
            }
        },
        m = (a = {
            tag1: {
                name: "kong",
                speed: r,
                money: 0
            },
            tag2: {
                name: "gold1",
                speed: c,
                money: 50
            },
            tag3: {
                name: "gold2",
                speed: c,
                money: 100
            },
            tag4: {
                name: "gold3",
                speed: s,
                money: 250
            },
            tag5: {
                name: "gold4",
                speed: s,
                money: 500
            },
            tag6: {
                name: "boneBody",
                speed: c,
                money: 7
            },
            tag7: {
                name: "boneHead",
                speed: c,
                money: 20
            },
            tag8: {
                name: "stone0",
                speed: c,
                money: 11
            },
            tag9: {
                name: "stone1",
                speed: s,
                money: 20
            },
            tag10: {
                name: "mouse",
                speed: c,
                money: 2
            }
        },
        i(a, "tag10", {
            name: "bag",
            speed: c,
            get money() {
                return Math.ceil(800 * Math.random())
            }
        }), i(a, "tag11", {
            name: "diamonds",
            speed: c,
            money: 600
        }), a),
        u = {
            tag2: [[100, 100], [150, 150]],
            tag3: [[100, 300], [200, 400]],
            tag4: [[700, 30], [780, 60], [180, 100]],
            tag5: [[500, 30], [680, 160], [280, 120]],
            tag8: [[700, 400], [80, 380], [880, 100]],
            tag9: [[500, 230]]
        },
        d = {
            tag2: [[0, 0], [100, 100], [150, 110]],
            tag4: [[ - 100, -20], [100, 20]]
        },
        p = {
            level1: {
                money: 500,
                obj: o(u)
            },
            level2: {
                money: 2800,
                obj: o(d)
            }
        };
        e.exports = {
            level: p,
            player: h,
            obj: m,
            get fastSpeed() {
                return l
            },
            set fastSpeed(t) {
                cc.warn("无法设置fastSpeed为" + t)
            }
        },
        cc._RF.pop()
    },
    {}],
    end: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f0133iULi1N4oelJflg3vp7", "end"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                topScore: cc.Label,
                currentScore: cc.Label
            },
            onLoad: function() {
                var t = cc.sys.localStorage.getItem("topScore");
                this.topScore.string = t;
                var e = cc.sys.localStorage.getItem("currentScore");
                this.currentScore.string = e,
                cc.director.preloadScene("historyScore")
            },
            gameRestart: function() {
                cc.director.loadScene("PlaneMain")
            },
            gameExit: function() {
                cc.director.loadScene("PlaneStart")
            },
            gotoHistoryScore: function() {
                cc.director.loadScene("historyScore")
            }
        }),
        cc._RF.pop()
    },
    {}],
    enemyGroup: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1da0ekbQM5FrJqiDx/2TTuD", "enemyGroup");
        var i = cc.Class({
            name: "enemyG",
            properties: {
                name: "",
                freqTime: 0,
                initPollCount: 0,
                prefab: cc.Prefab
            }
        });
        cc.Class({
            "extends": cc.Component,
            properties: function() {
                return {
                    enemyG: {
                        "default": [],
                        type: i
                    },
                    main: {
                        "default": null,
                        type: t("main")
                    }
                }
            },
            onLoad: function() {
                this.eState = D.commonInfo.gameState.none,
                D.common.batchInitObjPool(this, this.enemyG)
            },
            startAction: function() {
                this.eState = D.commonInfo.gameState.start;
                for (var t = 0; t < this.enemyG.length; ++t) {
                    var e = this.enemyG[t].freqTime,
                    n = "callback_" + t;
                    this[n] = function(t) {
                        this.getNewEnemy(this.enemyG[t])
                    }.bind(this, t),
                    this.schedule(this[n], e)
                }
            },
            resumeAction: function() {
                this.enabled = !0,
                this.eState = D.commonInfo.gameState.start
            },
            pauseAction: function() {
                this.enabled = !1,
                this.eState = D.commonInfo.gameState.pause
            },
            getNewEnemy: function(t) {
                var e = t.name + "Pool",
                n = D.common.genNewNode(this[e], t.prefab, this.node),
                i = this.getNewEnemyPositon(n);
                n.setPosition(i),
                n.getComponent("enemy").init()
            },
            getNewEnemyPositon: function(t) {
                var e = cc.randomMinus1To1() * (this.node.parent.width / 2 - t.width / 2),
                n = this.node.parent.height / 2 + t.height / 2;
                return cc.v2(e, n)
            },
            enemyDied: function(t, e) {
                D.common.backObjPool(this, t),
                parseInt(e) > 0 && this.main.gainScore(e)
            },
            getScore: function() {
                return this.main.getScore()
            }
        }),
        cc._RF.pop()
    },
    {
        main: "main"
    }],
    enemy: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9b238Ih5KhNu6i1LIhe9v+x", "enemy"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                xMinSpeed: {
                    "default": 0,
                    type: cc.Integer,
                    tooltip: "x轴最小速度"
                },
                xMaxSpeed: {
                    "default": 0,
                    type: cc.Integer,
                    tooltip: "x轴最大速度"
                },
                yMinSpeed: {
                    "default": 0,
                    type: cc.Integer,
                    tooltip: "y轴最小速度"
                },
                yMaxSpeed: {
                    "default": 0,
                    type: cc.Integer,
                    tooltip: "y轴最大速度"
                },
                initHP: {
                    "default": 0,
                    type: cc.Integer,
                    tooltip: "初始生命值"
                },
                initSpriteFrame: {
                    "default": null,
                    type: cc.SpriteFrame,
                    tooltip: "初始化的图像"
                },
                score: {
                    "default": 0,
                    type: cc.Integer,
                    tooltip: "死后获得的分数"
                },
                enemyDownClip: cc.AudioClip
            },
            onLoad: function() {
                this.xSpeed = Math.random() * (this.xMaxSpeed - this.xMinSpeed) + this.xMinSpeed,
                this.ySpeed = cc.random0To1() * (this.yMaxSpeed - this.yMinSpeed) + this.yMinSpeed,
                this.enemyGroup = this.node.parent.getComponent("enemyGroup")
            },
            init: function() {
                this.hP != this.initHP && (this.hP = this.initHP);
                var t = this.node.getComponent(cc.Sprite);
                t.spriteFrame != this.initSpriteFrame && (t.spriteFrame = this.initSpriteFrame)
            },
            update: function(t) {
                if (this.enemyGroup.eState == D.commonInfo.gameState.start) {
                    var e = this.enemyGroup.getScore();
                    e <= 5e4 ? this.node.y += t * this.ySpeed: e > 5e4 && e <= 1e5 ? this.node.y += t * this.ySpeed - .5 : e > 1e5 && e <= 15e4 ? this.node.y += t * this.ySpeed - 1 : e > 15e4 && e <= 2e5 ? this.node.y += t * this.ySpeed - 1.5 : e > 2e5 && e <= 3e5 ? this.node.y += t * this.ySpeed - 2 : this.node.y += t * this.ySpeed - 3,
                    this.node.x += t * this.xSpeed,
                    this.node.y < -this.node.parent.height / 2 && this.enemyGroup.enemyDied(this.node, 0)
                }
            },
            onCollision: function(t, e) {
                var n = t.getComponent("bullet");
                if (this.hP > 0 && (this.hP -= n.hpDrop, this.hP <= 0)) {
                    var i = this.getComponent(cc.Animation),
                    o = this.node.name + "ani";
                    i.play(o),
                    i.on("finished", this.onFinished, this),
                    cc.audioEngine.playEffect(this.enemyDownClip, !1)
                }
            },
            onFinished: function(t) {
                this.enemyGroup.enemyDied(this.node, this.score)
            }
        }),
        cc._RF.pop()
    },
    {}],
    game: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "11e2ddsmi9PhYk3lz5zqpkc", "game");
        var i = t("initObj"),
        o = i.player;
        cc.Class({
            "extends": cc.Component,
            properties: {
                levelmusic: {
                    "default": null,
                    url: cc.AudioClip
                },
                bgNode: {
                    "default": null,
                    type: cc.Node
                },
                stateNode: {
                    "default": null,
                    type: cc.Node
                },
                objNode: {
                    "default": null,
                    type: cc.Node
                },
                minerNode: {
                    "default": null,
                    type: cc.Node
                },
                leveloverNode: {
                    "default": null,
                    type: cc.Node
                },
                clawNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.init(),
                this.setCollision(),
                this.listenclick(),
                this.scheduleOnce(function() {
                    this.goLevel()
                },
                .1)
            },
            init: function() {
                this.bg = this.bgNode.getComponent("bg"),
                this.state = this.stateNode.getComponent("state"),
                this.obj = this.objNode.getComponent("obj"),
                this.miner = this.minerNode.getComponent("miner"),
                this.claw = this.clawNode.getComponent("claw"),
                this.levelover = this.leveloverNode.getComponent("levelover"),
                this.menuNode = cc.find("menu"),
                this.menu = this.menuNode.getComponent("menu")
            },
            setLevelmusic: function() {
                this.menu.setcurrentbgAudio(this.levelmusic)
            },
            setCollision: function() {
                var t = cc.director.getCollisionManager();
                t.enabled = !0
            },
            goLevel: function() {
                o.pause = !1,
                this.setLevelmusic(),
                this.bg.init(),
                this.state.init(),
                this.obj.init(),
                this.miner.init()
            },
            gameEnd: function() {
                o.gameEnd(),
                o.preMoney = 0,
                this.leveloverNode.active = !0,
                o.isSuccess() ? this.levelover.success() : this.levelover.fail()
            },
            goNext: function() {
                this.leveloverNode.active = !1,
                o.isSuccess() ? (o.level++, 3 === o.level ? (o.level = 1, o.money = 0, cc.director.loadScene("index")) : this.goLevel()) : (o.level = 1, o.money = 0, cc.director.loadScene("index"))
            },
            gameRun: function() {
                o.gameRun()
            },
            minerUp: function() {
                this.claw.objHide(),
                this.state.addMoney()
            },
            listenclick: function() {
                this.node.on("touchend",
                function(t) {
                    "rotate" != this.miner.state || o.pause || (this.miner.state = "down")
                },
                this)
            },
            pause: function() {
                this.menu.menushow()
            },
            run: function() {}
        }),
        cc._RF.pop()
    },
    {
        initObj: "initObj"
    }],
    globals: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3c55dFpNttJ54YKgjc781VL", "globals"),
        window.D = {
            common: null,
            commonInfo: null
        },
        cc._RF.pop()
    },
    {}],
    hero: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f3d16MxZIFJbYvdLUCowvyi", "hero"),
        cc.Class({
            "extends": cc.Component,
            properties: function() {
                return {
                    blowupani: {
                        "default": null,
                        type: cc.Prefab,
                        tooltip: "爆炸动画"
                    },
                    gameOverClip: cc.AudioClip,
                    main: {
                        "default": null,
                        type: t("main")
                    },
                    bulletGroup: {
                        "default": null,
                        type: t("bulletGroup")
                    }
                }
            },
            onLoad: function() {
                this.eState = D.commonInfo.gameState.none,
                this.onDrag(),
                this.sta = !0
            },
            onDrag: function() {
                this.node.on("touchmove", this.dragMove, this)
            },
            offDrag: function() {
                this.node.off("touchmove", this.dragMove, this)
            },
            dragMove: function(t) {
                var e = t.getLocation(),
                n = this.node.parent.convertToNodeSpaceAR(e),
                i = -this.node.parent.width / 2 + this.node.width / 2,
                o = -i,
                a = -this.node.parent.height / 2 + this.node.height / 2,
                s = -a;
                n.x < i && (n.x = i),
                n.x > o && (n.x = o),
                n.y < a && (n.y = a),
                n.y > s && (n.y = s),
                this.node.setPosition(n)
            },
            onCollision: function(t, e) {
                if ("ufoBullet" == t.name || "ufoBomb" == t.name)"ufoBullet" == t.name ? this.bulletGroup.changeBullet(t.name) : "ufoBomb" == t.name && this.main.getUfoBomb();
                else {
                    if ("enemy1" != t.name && "enemy2" != t.name && "enemy3" != t.name) return ! 1;
                    this.sta = !1;
                    var n = this.node.getPosition(),
                    i = cc.instantiate(this.blowupani);
                    this.node.parent.addChild(i),
                    i.setPosition(n);
                    var o = i.getComponent(cc.Animation);
                    o.on("finished", this.onFinished, i),
                    cc.audioEngine.playEffect(this.gameOverClip, !1),
                    this.main.gameOver()
                }
            },
            onFinished: function(t) {
                this.destroy()
            }
        }),
        cc._RF.pop()
    },
    {
        bulletGroup: "bulletGroup",
        main: "main"
    }],
    historyScore: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6c54bDZECBCupOeso6Vb+5n", "historyScore"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                itemPrefab: cc.Prefab,
                scrollContent: cc.Node,
                backGame: cc.Node
            },
            onLoad: function() {
                for (var t = JSON.parse(cc.sys.localStorage.getItem("score")), e = 0; e < t.length; ++e) {
                    var n = cc.instantiate(this.itemPrefab),
                    i = t[e];
                    this.scrollContent.addChild(n),
                    n.getComponent("scoreItemTemplate").init({
                        score: i.score,
                        time: i.time
                    })
                }
                this.backGame.on("touchstart", this.backGameO, this)
            },
            backGameO: function() {
                cc.director.loadScene("PlaneEnd")
            }
        }),
        cc._RF.pop()
    },
    {}],
    index: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a4604FTd3lGkakcyyT0SzlA", "index");
        var i = t("initObj");
        i.player;
        cc.Class({
            "extends": cc.Component,
            properties: {
                menubgAudio: {
                    "default": null,
                    url: cc.AudioClip
                },
                cloud: {
                    type: cc.Node,
                    "default": null
                },
                miner: {
                    type: cc.Node,
                    "default": null
                },
                leg: {
                    type: cc.Node,
                    "default": null
                },
                face: {
                    type: cc.Node,
                    "default": null
                },
                minerdelayTime: .8,
                clouddelayTime: 10,
                settingbutton: {
                    type: cc.Node,
                    "default": null
                },
                startgame: {
                    type: cc.Node,
                    "default": null
                }
            },
            settingbuttonClick: function() {
                cc.find("menu").getComponent("menu").menushow()
            },
            startgameClick: function() {
                cc.director.loadScene("LeaveScene")
            },
            onLoad: function() {
                var t = this.minerdelayTime;
                this.cloudMove(),
                this.minerRightAction(t),
                this.scheduleOnce(function() {
                    this.minerAction()
                },
                t),
                cc.find("menu").getComponent("menu").setcurrentbgAudio(this.menubgAudio)
            },
            cloudMove: function() {
                var t = cc.repeatForever(cc.sequence(cc.moveBy(this.clouddelayTime, 1200, 0), cc.moveBy(0, -1200, 0)));
                this.cloud.runAction(t)
            },
            minerRightAction: function(t) {
                this.face.opacity = 0;
                var e = cc.moveBy(t, cc.p(340, 0));
                this.miner.runAction(e)
            },
            minerAction: function() {
                this.leg.getComponent(cc.Animation).play("miner_leg"),
                this.face.getComponent(cc.Animation).play("miner_face"),
                this.face.opacity = 255
            }
        }),
        cc._RF.pop()
    },
    {
        initObj: "initObj"
    }],
    initObj: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a14e78gMS9KFKzEg4YRVDAy", "initObj");
        var i = t("config"),
        o = i.player,
        a = i.level;
        e.exports = {
            player: o,
            time: 60,
            levelTimeBanner: {
                position: cc.v2(263, 391)
            },
            miner: {
                position: cc.v2(554, 129)
            },
            getobj: function() {
                return a["level" + o.level].obj
            },
            fastSpeed: i.fastSpeed
        },
        cc._RF.pop()
    },
    {
        config: "config"
    }],
    init: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "faa31aTL4JAkpRLeJDsNgiz", "init"),
        cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT)
            }
        }),
        cc._RF.pop()
    },
    {}],
    levelover: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cef74HW3XRN+Y127JqBr1TQ", "levelover"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                stateNode: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.stateLabel = this.stateNode.getComponent(cc.Label)
            },
            success: function() {
                this.stateLabel.string = "通关成功"
            },
            fail: function() {
                this.stateLabel.string = "通关失败"
            }
        }),
        cc._RF.pop()
    },
    {}],
    main: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "87f03bZc3hDtpWh+1mYQzj+", "main"),
        cc.Class({
            "extends": cc.Component,
            properties: function() {
                return {
                    pause: cc.Button,
                    btnSprite: {
                        "default": [],
                        type: cc.SpriteFrame,
                        tooltip: "暂停按钮不同状态的图片"
                    },
                    bomb: cc.Node,
                    gameMusic: {
                        "default": null,
                        type: cc.AudioSource
                    },
                    useBombClip: cc.AudioClip,
                    enemyGroup: {
                        "default": null,
                        type: t("enemyGroup")
                    },
                    hero: {
                        "default": null,
                        type: t("hero")
                    },
                    ufoGroup: {
                        "default": null,
                        type: t("ufoGroup")
                    },
                    bulletGroup: {
                        "default": null,
                        type: t("bulletGroup")
                    },
                    scoreDisplay: cc.Label,
                    bombNoDisplay: cc.Label
                }
            },
            onLoad: function() {
                this.score = 0,
                this.bombNo = 0,
                this.scoreDisplay.string = this.score,
                this.bombNoDisplay.string = this.bombNo,
                this.eState = D.commonInfo.gameState.start,
                this.enemyGroup.startAction(),
                this.bulletGroup.startAction(),
                this.ufoGroup.startAction(),
                this.bomb.on("touchstart", this.bombOnclick, this),
                this.gameMusic.play()
            },
            bombOnclick: function() {
                var t = this.bomb.getChildByName("bombNo").getComponent(cc.Label),
                e = parseInt(t.string);
                e > 0 ? (t.string = e - 1, this.removeEnemy(), cc.audioEngine.playEffect(this.useBombClip, !1)) : console.log("没有子弹")
            },
            pauseClick: function() {
                this.eState == D.commonInfo.gameState.pause ? (this.resumeAction(), this.eState = D.commonInfo.gameState.start) : this.eState == D.commonInfo.gameState.start && (this.pauseAction(), this.eState = D.commonInfo.gameState.pause)
            },
            resumeAction: function() {
                this.enemyGroup.resumeAction(),
                this.bulletGroup.resumeAction(),
                this.ufoGroup.resumeAction(),
                this.hero.onDrag(),
                this.gameMusic.resume(),
                this.pause.normalSprite = this.btnSprite[0],
                this.pause.pressedSprite = this.btnSprite[1],
                this.pause.hoverSprite = this.btnSprite[1]
            },
            pauseAction: function() {
                this.enemyGroup.pauseAction(),
                this.bulletGroup.pauseAction(),
                this.hero.offDrag(),
                this.gameMusic.pause(),
                this.ufoGroup.pauseAction(),
                this.pause.normalSprite = this.btnSprite[2],
                this.pause.pressedSprite = this.btnSprite[3],
                this.pause.hoverSprite = this.btnSprite[3]
            },
            gainScore: function(t) {
                this.score += t,
                this.scoreDisplay.string = this.score.toString()
            },
            getScore: function() {
                return parseInt(this.scoreDisplay.string)
            },
            updateScore: function() {
                var t = this.scoreDisplay.string,
                e = {
                    score: t,
                    time: D.common.timeFmt(new Date, "yyyy-MM-dd hh:mm:ss")
                },
                n = cc.sys.localStorage.getItem("score"),
                i = cc.sys.localStorage.getItem("topScore"); (!i || parseInt(i) < parseInt(t)) && cc.sys.localStorage.setItem("topScore", t),
                n ? (n = JSON.parse(n), n instanceof Array || (n = []), n.unshift(e)) : (n = [], n.unshift(e)),
                cc.sys.localStorage.setItem("currentScore", t),
                cc.sys.localStorage.setItem("score", JSON.stringify(n))
            },
            removeEnemy: function() {
                this.enemyGroup.node.removeAllChildren()
            },
            getUfoBomb: function() {
                parseInt(this.bombNoDisplay.string) < 3 && (this.bombNoDisplay.string += 1)
            },
            gameOver: function() {
                this.pauseAction(),
                this.updateScore(),
                cc.director.loadScene("PlaneEnd")
            }
        }),
        cc._RF.pop()
    },
    {
        bulletGroup: "bulletGroup",
        enemyGroup: "enemyGroup",
        hero: "hero",
        ufoGroup: "ufoGroup"
    }],
    md5: [function(t, e, n) {
        "use strict";
        function i(t) {
            return d(o(u(t), t.length * y))
        }
        function o(t, e) {
            t[e >> 5] |= 128 << e % 32,
            t[(e + 64 >>> 9 << 4) + 14] = e;
            for (var n = 1732584193,
            i = -271733879,
            o = -1732584194,
            a = 271733878,
            m = 0; m < t.length; m += 16) {
                var u = n,
                d = i,
                p = o,
                g = a;
                n = s(n, i, o, a, t[m + 0], 7, -680876936),
                a = s(a, n, i, o, t[m + 1], 12, -389564586),
                o = s(o, a, n, i, t[m + 2], 17, 606105819),
                i = s(i, o, a, n, t[m + 3], 22, -1044525330),
                n = s(n, i, o, a, t[m + 4], 7, -176418897),
                a = s(a, n, i, o, t[m + 5], 12, 1200080426),
                o = s(o, a, n, i, t[m + 6], 17, -1473231341),
                i = s(i, o, a, n, t[m + 7], 22, -45705983),
                n = s(n, i, o, a, t[m + 8], 7, 1770035416),
                a = s(a, n, i, o, t[m + 9], 12, -1958414417),
                o = s(o, a, n, i, t[m + 10], 17, -42063),
                i = s(i, o, a, n, t[m + 11], 22, -1990404162),
                n = s(n, i, o, a, t[m + 12], 7, 1804603682),
                a = s(a, n, i, o, t[m + 13], 12, -40341101),
                o = s(o, a, n, i, t[m + 14], 17, -1502002290),
                i = s(i, o, a, n, t[m + 15], 22, 1236535329),
                n = c(n, i, o, a, t[m + 1], 5, -165796510),
                a = c(a, n, i, o, t[m + 6], 9, -1069501632),
                o = c(o, a, n, i, t[m + 11], 14, 643717713),
                i = c(i, o, a, n, t[m + 0], 20, -373897302),
                n = c(n, i, o, a, t[m + 5], 5, -701558691),
                a = c(a, n, i, o, t[m + 10], 9, 38016083),
                o = c(o, a, n, i, t[m + 15], 14, -660478335),
                i = c(i, o, a, n, t[m + 4], 20, -405537848),
                n = c(n, i, o, a, t[m + 9], 5, 568446438),
                a = c(a, n, i, o, t[m + 14], 9, -1019803690),
                o = c(o, a, n, i, t[m + 3], 14, -187363961),
                i = c(i, o, a, n, t[m + 8], 20, 1163531501),
                n = c(n, i, o, a, t[m + 13], 5, -1444681467),
                a = c(a, n, i, o, t[m + 2], 9, -51403784),
                o = c(o, a, n, i, t[m + 7], 14, 1735328473),
                i = c(i, o, a, n, t[m + 12], 20, -1926607734),
                n = r(n, i, o, a, t[m + 5], 4, -378558),
                a = r(a, n, i, o, t[m + 8], 11, -2022574463),
                o = r(o, a, n, i, t[m + 11], 16, 1839030562),
                i = r(i, o, a, n, t[m + 14], 23, -35309556),
                n = r(n, i, o, a, t[m + 1], 4, -1530992060),
                a = r(a, n, i, o, t[m + 4], 11, 1272893353),
                o = r(o, a, n, i, t[m + 7], 16, -155497632),
                i = r(i, o, a, n, t[m + 10], 23, -1094730640),
                n = r(n, i, o, a, t[m + 13], 4, 681279174),
                a = r(a, n, i, o, t[m + 0], 11, -358537222),
                o = r(o, a, n, i, t[m + 3], 16, -722521979),
                i = r(i, o, a, n, t[m + 6], 23, 76029189),
                n = r(n, i, o, a, t[m + 9], 4, -640364487),
                a = r(a, n, i, o, t[m + 12], 11, -421815835),
                o = r(o, a, n, i, t[m + 15], 16, 530742520),
                i = r(i, o, a, n, t[m + 2], 23, -995338651),
                n = l(n, i, o, a, t[m + 0], 6, -198630844),
                a = l(a, n, i, o, t[m + 7], 10, 1126891415),
                o = l(o, a, n, i, t[m + 14], 15, -1416354905),
                i = l(i, o, a, n, t[m + 5], 21, -57434055),
                n = l(n, i, o, a, t[m + 12], 6, 1700485571),
                a = l(a, n, i, o, t[m + 3], 10, -1894986606),
                o = l(o, a, n, i, t[m + 10], 15, -1051523),
                i = l(i, o, a, n, t[m + 1], 21, -2054922799),
                n = l(n, i, o, a, t[m + 8], 6, 1873313359),
                a = l(a, n, i, o, t[m + 15], 10, -30611744),
                o = l(o, a, n, i, t[m + 6], 15, -1560198380),
                i = l(i, o, a, n, t[m + 13], 21, 1309151649),
                n = l(n, i, o, a, t[m + 4], 6, -145523070),
                a = l(a, n, i, o, t[m + 11], 10, -1120210379),
                o = l(o, a, n, i, t[m + 2], 15, 718787259),
                i = l(i, o, a, n, t[m + 9], 21, -343485551),
                n = h(n, u),
                i = h(i, d),
                o = h(o, p),
                a = h(a, g)
            }
            return Array(n, i, o, a)
        }
        function a(t, e, n, i, o, a) {
            return h(m(h(h(e, t), h(i, a)), o), n)
        }
        function s(t, e, n, i, o, s, c) {
            return a(e & n | ~e & i, t, e, o, s, c)
        }
        function c(t, e, n, i, o, s, c) {
            return a(e & i | n & ~i, t, e, o, s, c)
        }
        function r(t, e, n, i, o, s, c) {
            return a(e ^ n ^ i, t, e, o, s, c)
        }
        function l(t, e, n, i, o, s, c) {
            return a(n ^ (e | ~i), t, e, o, s, c)
        }
        function h(t, e) {
            var n = (65535 & t) + (65535 & e),
            i = (t >> 16) + (e >> 16) + (n >> 16);
            return i << 16 | 65535 & n
        }
        function m(t, e) {
            return t << e | t >>> 32 - e
        }
        function u(t) {
            for (var e = Array(), n = (1 << y) - 1, i = 0; i < t.length * y; i += y) e[i >> 5] |= (t.charCodeAt(i / y) & n) << i % 32;
            return e
        }
        function d(t) {
            for (var e = g ? "0123456789ABCDEF": "0123456789abcdef", n = "", i = 0; i < 4 * t.length; i++) n += e.charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + e.charAt(t[i >> 2] >> i % 4 * 8 & 15);
            return n
        }
        cc._RF.push(e, "e9bdeRcACdEX4W3zgRYZScL", "md5");
        var p = function() {
            var t = "",
            e = function() {
                this.hex_md5 = function(t) {
                    return i(t)
                }
            };
            return t ? {
                getInstant: t
            }: (t = new e, {
                getInstant: t
            })
        } ();
        e.exports = p;
        var g = 0,
        y = 8;
        cc._RF.pop()
    },
    {}],
    menu: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ca198VMZ7NLHIYA5rsLMV/a", "menu");
        var i = t("initObj"),
        o = i.player;
        cc.Class({
            "extends": cc.Component,
            properties: {
                clicksound: {
                    "default": null,
                    url: cc.AudioClip
                },
                isSound: !0,
                isMusic: !0,
                menu: {
                    type: cc.Node,
                    "default": null
                },
                mask: {
                    type: cc.Node,
                    "default": null
                },
                currentbgAudio: null,
                closeMenubutton: {
                    type: cc.Node,
                    "default": null
                },
                soundonbtn: {
                    type: cc.Node,
                    "default": null
                },
                soundoffbtn: {
                    type: cc.Node,
                    "default": null
                },
                musiconbtn: {
                    type: cc.Node,
                    "default": null
                },
                musicoffbtn: {
                    type: cc.Node,
                    "default": null
                },
                outgame: {
                    type: cc.Node,
                    "default": null
                }
            },
            onLoad: function() {
                cc.game.addPersistRootNode(this.node),
                this.listeninit()
            },
            soundonbtnClick: function() {
                this.soundCtrl(!1),
                this.playClickSound()
            },
            soundoffbtnClick: function() {
                this.soundCtrl(!0),
                this.playClickSound()
            },
            musiconbtnClick: function() {
                this.musciCtrl(!1),
                this.playClickSound()
            },
            musicoffbtnClick: function() {
                this.musciCtrl(!0),
                this.playClickSound()
            },
            initsound: function() {
                this.soundCtrl("false" !== o.isSound),
                this.musciCtrl("false" !== o.isMusic)
            },
            playClickSound: function() {
                o.isSound && cc.audioEngine.playEffect(this.clicksound, !1, !0)
            },
            soundCtrl: function(t) {
                o.isSound = t,
                this.soundonbtn.active = t,
                this.soundoffbtn.active = !t
            },
            musciCtrl: function(t) {
                o.isMusic = t,
                this.musiconbtn.active = t,
                this.musicoffbtn.active = !t,
                this.menuSoundCtrl(t)
            },
            setcurrentbgAudio: function(t) {
                this.currentbgAudio && cc.audioEngine.stopMusic(),
                this.currentbgAudio = t,
                this.initsound()
            },
            menuSoundCtrl: function(t) {
                t ? cc.audioEngine.playMusic(this.currentbgAudio, !0) : cc.audioEngine.stopMusic()
            },
            listeninit: function() {
                this.closeMenubutton.on("touchend",
                function(t) {
                    this.menuhide()
                },
                this),
                this.outgame.on("touchend",
                function(t) {
                    cc.log("退出游戏")
                },
                this)
            },
            menushow: function() {
                o.pause = !0;
                var t = cc.moveTo(.2, 40, 0),
                e = cc.moveTo(.5, -10, 0),
                n = cc.moveTo(.3, -0, 0);
                t.easing(cc.easeOut(2));
                var i = cc.sequence(t, e, n);
                this.menu.runAction(i),
                this.mask.active = !0
            },
            menuhide: function() {
                o.pause = !1;
                var t = cc.moveTo(.3, -30, 0),
                e = cc.moveTo(.3, 500, 0),
                n = cc.moveTo(0, -648, 0),
                i = cc.callFunc(function(t, e) {
                    this.mask.active = !1
                },
                this, 0);
                t.easing(cc.easeOut(1.5)),
                e.easing(cc.easeIn(5));
                var a = cc.sequence(t, e, i, n);
                this.menu.runAction(a)
            }
        }),
        cc._RF.pop()
    },
    {
        initObj: "initObj"
    }],
    miner: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2ac8f7HvVBLJ5GadijszYFH", "miner");
        var i = t("initObj"),
        o = i.player;
        cc.Class({
            "extends": cc.Component,
            properties: {
                gameNode: {
                    "default": null,
                    type: cc.Node
                },
                ropeNode: {
                    "default": null,
                    type: cc.Node
                },
                clawNode: {
                    "default": null,
                    type: cc.Node
                },
                claw0Node: {
                    "default": null,
                    type: cc.Node
                },
                claw1Node: {
                    "default": null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.animation = this.node.getComponent(cc.Animation),
                this.game = this.gameNode.getComponent("game"),
                this.rope = this.ropeNode.getComponent("rope"),
                this.claw = this.clawNode.getComponent("claw"),
                this.claw0 = this.claw0Node.getComponent("claw0"),
                this.claw1 = this.claw1Node.getComponent("claw1")
            },
            init: function() {
                this.texture = this.getComponent(cc.Sprite).spriteFrame,
                this.minerToRight()
            },
            minerToRight: function() {
                var t = 1,
                e = cc.moveTo(t, cc.p(0, i.miner.position.y));
                this.node.setPosition(i.miner.position),
                this.node.runAction(e),
                this.animation.play("miner-appear"),
                this.scheduleOnce(function() {
                    this.animation.stop(),
                    this.getComponent(cc.Sprite).spriteFrame = this.texture,
                    this.ropeRotate(),
                    this.game.gameRun()
                },
                t, this)
            },
            minerToleft: function() {
                var t = cc.callFunc(function(t) {
                    this.animation.stop(),
                    this.game.goNext()
                },
                this),
                e = cc.moveTo(1.5, i.miner.position);
                this.node.runAction(cc.sequence(e, t))
            },
            getAnimation: function(t) {
                this.animationType = "miner-pull-" + t.type,
                this.animation.play(this.animationType),
                this.getSpeend = t.numb
            },
            ropeRotate: function() {
                function t() {
                    var t = this.getSpeend;
                    this.ropeNode.height -= t,
                    this.clawNode.y += t,
                    this.clawNode.y >= r && (this.state = "rotate", this.clawNode.y = r, this.ropeNode.height = l, this.animation.stop(), this.getComponent(cc.Sprite).spriteFrame = this.texture, this.clawOpen(), this.game.minerUp())
                }
                function e() {
                    var t = 10;
                    this.ropeNode.height += t,
                    this.clawNode.y -= t
                }
                function n() {
                    a.rotation += c,
                    a.rotation > s && (c = -1),
                    a.rotation < -s && (c = 1)
                }
                var a = this.ropeNode,
                s = 75,
                c = 1,
                r = this.clawNode.y,
                l = this.ropeNode.height,
                h = !1,
                m = !1;
                this.state = "rotate",
                this.callback = function() {
                    if (o.isgamerun()) if (o.pause)"up" == this.state && (this.animation.pause(), h = !0);
                    else switch (this.state) {
                    case "down":
                        e.call(this);
                        break;
                    case "up":
                        h && (this.animation.play(this.animationType), h = !1),
                        t.call(this);
                        break;
                    default:
                        n.call(this)
                    } else "rotate" == this.state ? (o.preMoney = 0, this.minerToleft(), this.unschedule(this.callback)) : (m || (this.clawOpen(), this.claw.objHide(), this.state = "up", this.animation.stop(), this.getAnimation(i.fastSpeed), this.animation.play(this.animationType), m = !0), t.call(this))
                },
                this.schedule(this.callback, .01)
            },
            clawOpen: function() {
                var t = cc.rotateTo(.2, 0),
                e = cc.rotateTo(.2, 0);
                this.claw0Node.runAction(t),
                this.claw1Node.runAction(e)
            },
            clawClose: function() {
                var t = cc.rotateTo(.1, -15),
                e = cc.rotateTo(.1, 15);
                this.claw0Node.runAction(t),
                this.claw1Node.runAction(e)
            }
        }),
        cc._RF.pop()
    },
    {
        initObj: "initObj"
    }],
    obj: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "72466EtiZxELpNEUucFb6mM", "obj");
        var i = t("initObj");
        cc.Class({
            "extends": cc.Component,
            properties: {
                gold1: {
                    "default": null,
                    type: cc.Prefab
                },
                gold2: {
                    "default": null,
                    type: cc.Prefab
                },
                gold3: {
                    "default": null,
                    type: cc.Prefab
                },
                gold4: {
                    "default": null,
                    type: cc.Prefab
                },
                stone0: {
                    "default": null,
                    type: cc.Prefab
                },
                stone1: {
                    "default": null,
                    type: cc.Prefab
                }
            },
            init: function() {
                this.node.removeAllChildren();
                for (var t, e, n = i.getobj(), o = 0; o < n.length; o++) t = n[o],
                e = cc.instantiate(this[t.name]),
                e.parent = this.node,
                e.setPosition(t.x, t.y)
            }
        }),
        cc._RF.pop()
    },
    {
        initObj: "initObj"
    }],
    scoreItemTemplate: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d77c31Th61EdIwA2N9f57qA", "scoreItemTemplate"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                itemScore: cc.Label,
                itemTime: cc.Label
            },
            onLoad: function() {},
            init: function(t) {
                this.itemScore.string = "积分：" + t.score,
                this.itemTime.string = "时间：" + t.time
            }
        }),
        cc._RF.pop()
    },
    {}],
    start: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "75572lhRWBI77j+aFYea83E", "start"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                game_loading: cc.Node
            },
            onLoad: function() {
                var t = this.game_loading.getComponent(cc.Animation);
                t.play(),
                cc.director.preloadScene("PlaneMain")
            },
            startGame: function() {
                cc.director.loadScene("PlaneMain",
                function() {
                    console.log("PlaneMain is loaded")
                })
            }
        }),
        cc._RF.pop()
    },
    {}],
    state: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0c74bb4bpJFsKCeO2gOVJv1", "state");
        var i = t("initObj"),
        o = i.player;
        cc.Class({
            "extends": cc.Component,
            properties: {
                gameNode: {
                    type: cc.Node,
                    "default": null
                },
                levelTimeBanner: {
                    type: cc.Node,
                    "default": null
                },
                target: {
                    type: cc.Node,
                    "default": null
                },
                money: {
                    type: cc.Node,
                    "default": null
                },
                level: {
                    type: cc.Node,
                    "default": null
                },
                timer: {
                    type: cc.Node,
                    "default": null
                }
            },
            onLoad: function() {
                this.game = this.gameNode.getComponent("game")
            },
            init: function() {
                this.setLevel(),
                this.setTarget(),
                this.rMenuToBtn(),
                this.timeRun()
            },
            rMenuToBtn: function() {
                var t = cc.moveBy(.8, cc.p(0, -127));
                this.levelTimeBanner.setPosition(i.levelTimeBanner.position),
                this.scheduleOnce(function() {
                    this.levelTimeBanner.runAction(t)
                },
                .8)
            },
            timeRun: function() {
                var t = i.time;
                this.callback = function() {
                    o.pause || (t--, this.timer.getComponents(cc.Label)[0].string = t, t <= 0 && (this.game.gameEnd(), this.unschedule(this.callback)))
                },
                this.schedule(this.callback, 1)
            },
            setLevel: function() {
                this.level.getComponents(cc.Label)[0].string = o.level
            },
            setTarget: function() {
                this.target.getComponents(cc.Label)[0].string = o.getTarget()
            },
            addMoney: function() {
                var t = o.money - 0 + o.preMoney;
                o.money = t,
                this.money.getComponents(cc.Label)[0].string = t
            }
        }),
        cc._RF.pop()
    },
    {
        initObj: "initObj"
    }],
    ufoGroup: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f7adcLl3n1D4L4dDN8dTHuH", "ufoGroup");
        var i = cc.Class({
            name: "ufoG",
            properties: {
                name: "",
                freqTime: 0,
                prefab: cc.Prefab,
                initPoolCount: 0,
                minDelay: {
                    "default": 0,
                    tooltip: "最小延迟"
                },
                maxDelay: {
                    "default": 0,
                    tooltip: "最大延迟"
                }
            }
        });
        cc.Class({
            "extends": cc.Component,
            properties: {
                ufoG: {
                    "default": [],
                    type: i
                }
            },
            onLoad: function() {
                this.eState = D.commonInfo.gameState.none,
                D.common.batchInitObjPool(this, this.ufoG)
            },
            startAction: function() {
                this.eState = D.commonInfo.gameState.start;
                for (var t = 0; t < this.ufoG.length; ++t) {
                    var e = this.ufoG[t].freqTime,
                    n = "callback_" + t;
                    this[n] = function(t) {
                        this.randNewUfo(this.ufoG[t])
                    }.bind(this, t),
                    this.schedule(this[n], e)
                }
            },
            randNewUfo: function(t) {
                var e = Math.random() * (t.maxDelay - t.minDelay) + t.minDelay;
                this.scheduleOnce(function(t) {
                    this.getNewUfo(t)
                }.bind(this, t), e)
            },
            getNewUfo: function(t) {
                var e = t.name + "Pool",
                n = D.common.genNewNode(this[e], t.prefab, this.node),
                i = this.getNewUfoPositon(n);
                n.setPosition(i)
            },
            getNewUfoPositon: function(t) {
                var e = cc.randomMinus1To1() * (this.node.parent.width / 2 - t.width / 2),
                n = this.node.parent.height / 2 + t.height / 2;
                return cc.v2(e, n)
            },
            resumeAction: function() {
                this.enabled = !0,
                this.eState = D.commonInfo.gameState.start
            },
            pauseAction: function() {
                this.enabled = !1,
                this.eState = D.commonInfo.gameState.pause
            },
            ufoDied: function(t) {
                D.common.backObjPool(this, t)
            }
        }),
        cc._RF.pop()
    },
    {}],
    ufo: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "938421/E3BEAJgmoEF1/MpG", "ufo"),
        cc.Class({
            "extends": cc.Component,
            properties: {
                xMinSpeed: {
                    "default": 0,
                    type: cc.Integer
                },
                xMaxSpeed: {
                    "default": 0,
                    type: cc.Integer
                },
                yMinSpeed: {
                    "default": 0,
                    type: cc.Integer
                },
                yMaxSpeed: {
                    "default": 0,
                    type: cc.Integer
                },
                getUfoClip: cc.AudioClip
            },
            onLoad: function() {
                this.xSpeed = Math.random() * (this.xMaxSpeed - this.xMinSpeed) + this.xMinSpeed,
                this.ySpeed = cc.random0To1() * (this.yMaxSpeed - this.yMinSpeed) + this.yMinSpeed,
                this.ufoGroup = this.node.parent.getComponent("ufoGroup")
            },
            onCollision: function(t, e) {
                this.node.destroy(),
                cc.audioEngine.playEffect(this.getUfoClip, !1)
            },
            update: function(t) {
                this.ufoGroup.eState == D.commonInfo.gameState.start && (this.node.x += t * this.xSpeed, this.node.y += t * this.ySpeed, this.node.y < -this.node.parent.height / 2 && this.ufoGroup.ufoDied(this.node))
            }
        }),
        cc._RF.pop()
    },
    {}]
},
{},
["Colors", "Game", "Global", "Over", "Start", "Tile", "BdeAnimation", "BdeButtonClick", "BdeCard", "BdeChips", "BdeMain", "BdeNetWork", "BdePoint", "BdeSign", "BullAniamation", "BullButtonClick", "BullCard", "BullCoin", "BullMain", "BullNetWork", "BullPoint", "FindDifferentButtonClick", "FindDifferentFish", "FindDifferentMain", "BillBoard", "Bird", "BirdScoreLabel", "Bullet", "Canon", "Coin", "Destroy", "Explosion", "FishButtonClick", "FishNetWork", "GameMain", "Item", "Net", "Path", "Task", "GrabBullAniamation", "GrabBullButtonClick", "GrabBullCard", "GrabBullCoin", "GrabBullMain", "GrabBullNetWork", "GrabBullPoint", "HitFishButtonClick", "HitFishMain", "HitFishPb", "HorseButtonClick", "HorseMain", "GameUpdate", "HotUpdateButtonClick", "HotUpdateMain", "LIneGameLight", "LineGameButtonClick", "LineGameCoin", "LineGameEffect", "LineGameFirework", "LineGameFruit", "LineGameMain", "LineGameNetWork", "LoadingSceneMain", "LobbyBankSelect", "LobbyButtonClick", "LobbyMain", "LobbyMenu", "LobbyNetWork", "LobbyRegister", "MiniFarmButtonClick", "MiniFarmMain", "bullet", "bulletGroup", "common", "end", "enemy", "enemyGroup", "globals", "hero", "historyScore", "init", "main", "scoreItemTemplate", "start", "ufo", "ufoGroup", "PlayerInfo", "Socket.io", "md5", "ButtonScaler", "bg", "claw", "config", "game", "index", "initObj", "levelover", "menu", "miner", "obj", "state", "TwoEightAnimation", "TwoEightButtonClick", "TwoEightChips", "TwoEightMaJong", "TwoEightMain", "TwoEightNetWork", "TwoEightPoint", "TwoEightSign", "BackBtnCp", "BgRandomMove", "GameData", "LoadCp", "ScoreBtnCp", "StartBtnCp", "TipCp", "ZIndexSet", "App", "InitLBXFrame", "NewLBXKuai", "ButtonControl", "Util"]);