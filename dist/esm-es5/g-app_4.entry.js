import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-f21896d3.js';
var appCss = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.game-container){position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:800px;height:450px;background-color:#ececec;border-radius:12px;-webkit-box-shadow:8px 8px 2px 1px;box-shadow:8px 8px 2px 1px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (max-width: 800px){:host(.game-container){width:90%;height:90%;-ms-flex-pack:center;justify-content:center}}.clearfix{display:none}@media (max-width: 800px){.clearfix{display:-ms-flexbox;display:flex;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}}.game-container-left{-ms-flex:1;flex:1;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;margin-top:auto}@media (max-width: 800px){.game-container-left{-ms-flex-order:1;order:1;-ms-flex:0 1 50%;flex:0 1 50%;margin-top:auto}}.game-container-right{-ms-flex:1;flex:1;height:100%;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}@media (max-width: 800px){.game-container-right{-ms-flex-order:1;order:1;-ms-flex:0 1 50%;flex:0 1 50%;margin-top:0}}.game-container-center{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 38px}@media (max-width: 800px){.game-container-center{padding:50px;margin:auto}}.screen{background-image:url(\"assets/img/background.jpg\");width:412px;height:270px;position:relative;background-size:cover;background-repeat:no-repeat;-webkit-box-shadow:inset 0px 0px 7px 1px rgba(0, 0, 0, 0.3);box-shadow:inset 0px 0px 7px 1px rgba(0, 0, 0, 0.3);border:solid 2px rgba(0, 0, 0, 0.3)}.console{display:block;position:absolute;width:488px;height:346px;border-radius:12px;-webkit-box-shadow:inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px, inset rgba(0, 0, 0, 0.5) -8px -8px 18px 5px;box-shadow:inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px, inset rgba(0, 0, 0, 0.5) -8px -8px 18px 5px}.border{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:absolute;width:452px;height:310px;border-radius:8px}.border-left{-ms-flex:1;flex:1;height:100%;border:solid 2px black;border-top-left-radius:8px;border-bottom-left-radius:8px;border-right:none}.border-center{height:100%;position:relative;border-bottom:solid 2px black}.border-right{-ms-flex:1;flex:1;height:100%;border:solid 2px black;border-top-right-radius:8px;border-bottom-right-radius:8px;border-left:none}.title{-webkit-transform:translateY(-10px);transform:translateY(-10px);display:inline-block;padding:0 4px;font-family:Arial, Helvetica, sans-serif;font-size:20px;font-weight:700;color:black}.score{position:absolute;top:15px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-family:\"Clock\";font-size:40px}.lose{position:absolute;width:94px;top:55px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.lose img{display:block}.game-over,.game-won{position:absolute;top:50%;text-align:center;width:100%;z-index:1000;font-size:40px;font-weight:700;font-family:\"Open Sans\"}.game-over{color:red;background:brown;-webkit-transform:translateY(-35px);transform:translateY(-35px);line-height:70px}.game-won{color:white;background-image:url(\"assets/img/win.gif\");height:100%;-webkit-transform:translateY(-133px);transform:translateY(-133px);background-size:cover;background-repeat:no-repeat}.eggs-container{position:absolute;width:100%;height:100%}.rabbit{position:absolute;display:block;background-size:contain;background-repeat:no-repeat;width:105px;height:98px;margin-left:53px;-webkit-animation-name:rabbit;animation-name:rabbit;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:4;animation-iteration-count:4}@-webkit-keyframes rabbit{0%{background-image:url(\"assets/img/rabbit1.png\")}50%{background-image:url(\"assets/img/rabbit2.png\")}100%{background-image:url(\"assets/img/rabbit1.png\")}}@keyframes rabbit{0%{background-image:url(\"assets/img/rabbit1.png\")}50%{background-image:url(\"assets/img/rabbit2.png\")}100%{background-image:url(\"assets/img/rabbit1.png\")}}.button-container{display:block;padding-top:53px;margin-bottom:auto}.button-container button:not(:last-of-type){margin-bottom:16px}@media (max-width: 800px){.button-container{display:-ms-flexbox;display:flex;padding-top:0}.button-container button:not(:last-of-type){margin-bottom:0;margin-right:8px}}.mode-button{display:block;margin:0 auto;background-color:darkred;color:white;border:0;border-radius:12px;padding:0 12px;line-height:24px;outline:none}.mode-button:hover,.mode-button :active,.mode-button :focus{cursor:pointer;background-color:#720000}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
        this.gamePaused = createEvent(this, "gamePaused", 7);
        this.gameOver = createEvent(this, "gameOver", 7);
        this.gameWon = createEvent(this, "gameWon", 7);
        this.devMode = false;
        this.paused = false;
        /**
         * for dev-mode
         */
        this.gameStarted = false;
        this.score = 0;
        this.lose = 0;
        this.isWon = false;
        this.showRabbit = false;
        this.isGameOver = false;
        this.eggDuration = 6000;
        this.eggs = 0;
        this.eggMoveDuration = 1000;
    }
    MyComponent.prototype.gameOverWatcher = function () {
        this.deleteTimer();
        this.gameOver.emit();
    };
    MyComponent.prototype.gameWonWatcher = function () {
        this.deleteTimer();
        this.gameWon.emit();
    };
    MyComponent.prototype.changeTimer = function () {
        if (this.gameStarted) {
            this.showRabbit = true;
            this.showRabitDuration();
        }
        this.deleteTimer();
        this.createTimer();
    };
    MyComponent.prototype.showRabitDuration = function () {
        var _this = this;
        var rabbit = setTimeout(function () {
            _this.showRabbit = false;
            clearTimeout(rabbit);
        }, 1200);
    };
    MyComponent.prototype.increaseSpeed = function () {
        var offset = this.isDifficult ? 0 : 10;
        switch (this.eggs) {
            case 1:
                this.eggDuration = 6000;
                break;
            case (6 + offset):
                this.eggDuration = 5000;
                break;
            case (11 + offset * 2):
                this.eggDuration = 4500;
                this.eggMoveDuration = 900;
                break;
            case (21 + offset * 3):
                this.eggDuration = 4000;
                this.eggMoveDuration = 800;
                break;
            case (26 + offset * 5):
                this.eggDuration = 3000;
                this.eggMoveDuration = 600;
                break;
            case (31 + offset * 6):
                this.eggDuration = 2700;
                this.eggMoveDuration = 900;
                break;
            case (36 + offset * 8):
                this.eggDuration = 2400;
                this.eggMoveDuration = 800;
                break;
            case (46 + offset * 9):
                this.eggDuration = 1800;
                this.eggMoveDuration = 600;
                break;
            case (56 + offset * 12):
                this.eggDuration = 1800;
                this.eggMoveDuration = 900;
                break;
            case (66 + offset * 14):
                this.eggDuration = 1600;
                this.eggMoveDuration = 800;
                break;
            case (81 + offset * 15):
                this.eggDuration = 1200;
                this.eggMoveDuration = 600;
                break;
        }
    };
    MyComponent.prototype.generateRandomNest = function () {
        var minNestIndex = 1;
        var maxNestIndex = 4;
        var rand = minNestIndex + Math.random() * (maxNestIndex + 1 - minNestIndex);
        return Math.floor(rand);
    };
    MyComponent.prototype.createEgg = function () {
        var newEgg = document.createElement('G-EGG');
        newEgg.nest = this.generateRandomNest();
        newEgg.wolfPosition = this.wolf.position;
        newEgg.eggMoveDuration = this.eggMoveDuration;
        this.eggsContainer.append(newEgg);
        this.eggs++;
    };
    MyComponent.prototype.createTimer = function () {
        var _this = this;
        this.gameTimer = window.setInterval(function () {
            _this.createEgg();
        }, this.eggDuration);
    };
    MyComponent.prototype.deleteTimer = function () {
        window.clearInterval(this.gameTimer);
    };
    MyComponent.prototype.resetGame = function () {
        this.gameStarted = false;
        this.eggDuration = 6000;
        this.eggMoveDuration = 1000;
        this.isGameOver = false;
        this.isWon = false;
        this.paused = false;
        this.eggs = 0;
        this.eggsContainer.innerHTML = '';
        this.score = 0;
        this.lose = 0;
        this.loseContainer.innerHTML = '';
        this.deleteTimer();
    };
    MyComponent.prototype.continueGame = function () {
        this.paused = false;
        this.createTimer();
    };
    MyComponent.prototype.startGame = function (isDiffucult) {
        this.isDifficult = isDiffucult;
        this.resetGame();
        this.gameStarted = true;
        this.createEgg();
        this.createTimer();
    };
    MyComponent.prototype.pauseGame = function () {
        this.paused = !this.paused;
        this.gamePaused.emit(this.paused);
        this.paused ? this.deleteTimer() : this.continueGame();
    };
    MyComponent.prototype.minusPoint = function () {
        if (this.lose <= 3) {
            var img = document.createElement('IMG');
            img.src = "assets/img/minuspoint.png";
            img.height = 30;
            img.width = 30;
            this.loseContainer.append(img);
        }
    };
    MyComponent.prototype.eggCatchedHandler = function (e) {
        if (e.detail.catched) {
            this.score++;
            if (this.score === 100) {
                this.isWon = true;
            }
            e.detail.el.remove();
        }
        else {
            this.lose++;
            if (this.lose === 3) {
                this.isGameOver = true;
            }
            this.minusPoint();
        }
    };
    MyComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: "game-container" }, h("div", { class: "game-container-left" }, h("nav-button", { direction: "left-top" }), h("nav-button", { direction: "left-bottom" })), h("div", { class: "game-container-center" }, h("div", { class: "console" }), h("div", { class: "border" }, h("div", { class: "border-left" }), h("div", { class: "border-center" }, h("div", { class: "title" }, "Go Nuts for Gogicha")), h("div", { class: "border-right" })), h("div", { class: "screen" }, h("div", { class: "score" }, String(this.score).padStart(3, '0'), " "), h("div", { class: "lose", ref: function (el) { return _this.loseContainer = el; } }), this.isGameOver && h("div", { class: "game-over" }, "\u10E8\u10D4\u10DC \u10DB\u10D4\u10D8\u10E1\u10DE\u10D4"), this.isWon && h("div", { class: "game-won" }, "YOU WON"), h("div", { class: this.showRabbit ? 'rabbit' : '' }), h("g-wolf", { ref: function (el) { return _this.wolf = el; } }), h("div", { class: "eggs-container", ref: function (el) { return _this.eggsContainer = el; } }))), h("div", { class: "clearfix" }), h("div", { class: "game-container-right" }, h("div", { class: "button-container" }, h("button", { class: "mode-button", onClick: this.startGame.bind(this, true) }, "Start"), this.devMode && this.gameStarted &&
            h("button", { class: "mode-button", onClick: this.pauseGame.bind(this) }, " ", this.paused ? 'Continue' : 'Pause', " ")), h("nav-button", { direction: "right-top" }), h("nav-button", { direction: "right-bottom" }))));
    };
    Object.defineProperty(MyComponent, "watchers", {
        get: function () {
            return {
                "isGameOver": ["gameOverWatcher"],
                "isWon": ["gameWonWatcher"],
                "eggDuration": ["changeTimer"],
                "eggs": ["increaseSpeed"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return MyComponent;
}());
MyComponent.style = appCss;
var eggCss = ":host{display:block;position:relative}:host img{position:absolute;-webkit-transform-origin:center center;transform-origin:center center;display:block}.bird-container{position:relative}.bird{position:absolute;display:block;width:59px;height:31px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:step-start;animation-timing-function:step-start;-webkit-animation-iteration-count:1;animation-iteration-count:1;background-position-x:center;background-position-y:center;background-repeat:no-repeat}.bird-right{right:80px}.bird-left{left:80px}.egg{height:30px;width:30px;background-image:url(\"./assets/img/egg.png\");background-size:contain;position:absolute}";
var MyComponent$1 = /** @class */ (function () {
    function MyComponent$1(hostRef) {
        registerInstance(this, hostRef);
        this.eggIsCathced = createEvent(this, "eggIsCathced", 7);
        this.eggMoveDuration = 1000;
        this.step = 1;
        this.birdIsShown = false;
        this.nestTitle = {
            1: 'left-top',
            2: 'right-top',
            3: 'left-bottom',
            4: 'right-bottom',
        };
        this.xSide = (this.nest === 1 || this.nest === 3)
            ? 'left'
            : 'right';
    }
    MyComponent$1.prototype.changeTimer = function () {
        clearInterval(this.eggMoveTimer);
        this.startEggMoving();
    };
    MyComponent$1.prototype.checkCatching = function (position) {
        return this.isCatching = this.nestTitle[this.nest] === position
            ? true : false;
    };
    MyComponent$1.prototype.pauseGame = function (e) {
        if (e.detail) {
            clearInterval(this.eggMoveTimer);
        }
        else {
            this.startEggMoving();
        }
    };
    MyComponent$1.prototype.deleteTimer = function () {
        clearInterval(this.eggMoveTimer);
    };
    MyComponent$1.prototype.catchEggHandler = function (e) {
        this.checkCatching(e.detail);
    };
    MyComponent$1.prototype.showBird = function () {
        var _this = this;
        var bird = setTimeout(function () {
            _this.birdIsShown = false;
            clearTimeout(bird);
        }, 3000);
    };
    MyComponent$1.prototype.startEggMoving = function () {
        var _this = this;
        this.eggMoveTimer = window.setInterval(function () {
            if (_this.step === 10) {
                clearInterval(_this.eggMoveTimer);
            }
            else {
                if (_this.step === 5) {
                    if (_this.isCatching) {
                        _this.eggIsCathced.emit({
                            catched: true,
                            el: _this.el
                        });
                    }
                    else {
                        _this.eggIsCathced.emit({
                            catched: false,
                            el: _this.el
                        });
                        _this.birdIsShown = true;
                        _this.showBird();
                    }
                    _this.step = 10;
                }
                else {
                    _this.step++;
                }
            }
        }, this.eggMoveDuration);
    };
    MyComponent$1.prototype.setDegree = function (degree) {
        if (this.nest === 2 || this.nest === 4) {
            return -1 * degree;
        }
        else
            return degree;
    };
    MyComponent$1.prototype.generateStyleObject = function () {
        var _a, _b, _c, _d, _e;
        var yOffset = (this.nest === 3 || this.nest === 4)
            ? (this.nest === 4)
                ? 58
                : 60
            : (this.nest === 2)
                ? -2
                : 0;
        this.stepStyleObject = {
            1: (_a = {},
                _a[this.xSide] = '22px',
                _a.top = 75 + yOffset + "px",
                _a.transform = "rotate(" + this.setDegree(45) + "deg)",
                _a),
            2: (_b = {},
                _b[this.xSide] = '35px',
                _b.top = 84 + yOffset + "px",
                _b.transform = "rotate(" + this.setDegree(90) + "deg)",
                _b),
            3: (_c = {},
                _c[this.xSide] = '50px',
                _c.top = 93 + yOffset + "px",
                _c.transform = "rotate(" + this.setDegree(135) + "deg)",
                _c),
            4: (_d = {},
                _d[this.xSide] = '65px',
                _d.top = 102 + yOffset + "px",
                _d.transform = "rotate(" + this.setDegree(-90) + "deg)",
                _d),
            5: (_e = {},
                _e[this.xSide] = '80px',
                _e.top = 111 + yOffset + "px",
                _e.transform = "rotate(" + this.setDegree(-25) + "deg)",
                _e),
            10: {
                display: 'none',
            }
        };
    };
    MyComponent$1.prototype.componentWillLoad = function () {
        this.checkCatching(this.wolfPosition);
        this.generateStyleObject();
    };
    MyComponent$1.prototype.componentDidLoad = function () {
        this.startEggMoving();
    };
    MyComponent$1.prototype.componentDidUnload = function () {
        window.clearInterval(this.eggMoveTimer);
    };
    MyComponent$1.prototype.render = function () {
        return (h(Host, null, h("div", { class: "egg", style: this.stepStyleObject[this.step] }), h("div", { class: "bird-container" }, h("div", { class: "bird " + (this.birdIsShown ? "bird-" + this.xSide : '') }))));
    };
    Object.defineProperty(MyComponent$1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyComponent$1, "watchers", {
        get: function () {
            return {
                "eggMoveDuration": ["changeTimer"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return MyComponent$1;
}());
MyComponent$1.style = eggCss;
var wolfCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;bottom:35px;-webkit-transform:translateX(85px);transform:translateX(85px)}div{width:234px;height:133px;background-repeat:no-repeat;background:url(\"assets/img/left-top.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease}.left-top{background-image:url(\"assets/img/left-top.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}.left-bottom{background-image:url(\"assets/img/left-bottom.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}.right-top{background-image:url(\"assets/img/right-top.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}.right-bottom{background-image:url(\"assets/img/right-bottom.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}";
var MyComponent$2 = /** @class */ (function () {
    function MyComponent$2(hostRef) {
        registerInstance(this, hostRef);
        this.wolfDirectionChange = createEvent(this, "wolfDirectionChange", 7);
        this.position = 'left-top';
        this.directionX = this.position.split('-')[0];
        this.directionY = this.position.split('-')[1];
    }
    MyComponent$2.prototype.changeDirectionX = function () {
        this.position = this.directionX + "-" + this.directionY;
        this.wolfDirectionChange.emit(this.position);
    };
    MyComponent$2.prototype.changeDirectionY = function () {
        this.position = this.directionX + "-" + this.directionY;
        this.wolfDirectionChange.emit(this.position);
    };
    MyComponent$2.prototype.chooseHandler = function (e) {
        var tempDirection = e.detail.split('-');
        this.directionX = tempDirection[0];
        this.directionY = tempDirection[1];
    };
    MyComponent$2.prototype.handleKeyDown = function (ev) {
        switch (ev.key) {
            case 'ArrowDown':
                this.directionY = 'bottom';
                break;
            case 'ArrowUp':
                this.directionY = 'top';
                break;
            case 'ArrowLeft':
                this.directionX = 'left';
                break;
            case 'ArrowRight':
                this.directionX = 'right';
                break;
        }
    };
    MyComponent$2.prototype.componentWillLoad = function () {
        this.wolfDirectionChange.emit(this.position);
    };
    MyComponent$2.prototype.render = function () {
        return (h("div", { class: this.position }));
    };
    Object.defineProperty(MyComponent$2, "watchers", {
        get: function () {
            return {
                "directionX": ["changeDirectionX"],
                "directionY": ["changeDirectionY"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return MyComponent$2;
}());
MyComponent$2.style = wolfCss;
var buttonCss = "button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;outline:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host(:hover){cursor:pointer}:host(:hover) button{background-color:#580000}:host(:hover) button:after{border:solid 2px #580000}:host(:first-of-type){margin-bottom:32px}:host(:last-of-type){margin-bottom:16px}button{display:inline-block;position:relative;width:32px;min-height:32px;border-radius:50%;background-color:darkred;-webkit-transition:background-color 0.4s ease;transition:background-color 0.4s ease}button:after{position:absolute;content:\"\";left:-4px;top:-4px;width:36px;height:36px;border-radius:50%;border:solid 2px darkred;-webkit-transition:border-color 0.4s ease;transition:border-color 0.4s ease}button::-moz-focus-inner{border:0;padding:0}.nav-container{position:absolute;width:32px;height:32px}.nav{position:absolute;top:40px;left:8px;display:inline-block;border-style:solid;width:0;height:0;line-height:0px;border-width:32px 8px 0 8px;border-color:#000000 transparent transparent transparent}:host(.left-top){padding:40px 0 0 40px}:host(.left-top) .nav-container{-webkit-transform:rotate(135deg);transform:rotate(135deg)}:host(.left-bottom){padding:0 0 40px 40px}:host(.left-bottom) .nav-container{-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host(.right-top){padding:40px 40px 0 0}:host(.right-top) .nav-container{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}:host(.right-bottom){padding:0 40px 40px 0}:host(.right-bottom) .nav-container{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}";
var MyComponent$3 = /** @class */ (function () {
    function MyComponent$3(hostRef) {
        registerInstance(this, hostRef);
        this.gChooseDirection = createEvent(this, "gChooseDirection", 7);
    }
    MyComponent$3.prototype.chooseDirection = function () {
        console.log('this.direction');
        this.gChooseDirection.emit(this.direction);
    };
    MyComponent$3.prototype.render = function () {
        return (h(Host, { class: this.direction, onClick: this.chooseDirection.bind(this) }, h("button", null), h("div", { class: "nav-container" }, h("div", { class: "nav" }))));
    };
    return MyComponent$3;
}());
MyComponent$3.style = buttonCss;
export { MyComponent as g_app, MyComponent$1 as g_egg, MyComponent$2 as g_wolf, MyComponent$3 as nav_button };
