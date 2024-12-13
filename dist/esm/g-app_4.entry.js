import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-f21896d3.js';

const appCss = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.game-container){position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:800px;height:450px;background-color:#ececec;border-radius:12px;-webkit-box-shadow:8px 8px 2px 1px;box-shadow:8px 8px 2px 1px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (max-width: 800px){:host(.game-container){width:90%;height:90%;-ms-flex-pack:center;justify-content:center}}.clearfix{display:none}@media (max-width: 800px){.clearfix{display:-ms-flexbox;display:flex;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}}.game-container-left{-ms-flex:1;flex:1;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;margin-top:auto}@media (max-width: 800px){.game-container-left{-ms-flex-order:1;order:1;-ms-flex:0 1 50%;flex:0 1 50%;margin-top:auto}}.game-container-right{-ms-flex:1;flex:1;height:100%;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}@media (max-width: 800px){.game-container-right{-ms-flex-order:1;order:1;-ms-flex:0 1 50%;flex:0 1 50%;margin-top:0}}.game-container-center{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 38px}@media (max-width: 800px){.game-container-center{padding:50px;margin:auto}}.screen{background-image:url(\"assets/img/background.jpg\");width:412px;height:270px;position:relative;background-size:cover;background-repeat:no-repeat;-webkit-box-shadow:inset 0px 0px 7px 1px rgba(0, 0, 0, 0.3);box-shadow:inset 0px 0px 7px 1px rgba(0, 0, 0, 0.3);border:solid 2px rgba(0, 0, 0, 0.3)}.console{display:block;position:absolute;width:488px;height:346px;border-radius:12px;-webkit-box-shadow:inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px, inset rgba(0, 0, 0, 0.5) -8px -8px 18px 5px;box-shadow:inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px, inset rgba(0, 0, 0, 0.5) -8px -8px 18px 5px}.border{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:absolute;width:452px;height:310px;border-radius:8px}.border-left{-ms-flex:1;flex:1;height:100%;border:solid 2px black;border-top-left-radius:8px;border-bottom-left-radius:8px;border-right:none}.border-center{height:100%;position:relative;border-bottom:solid 2px black}.border-right{-ms-flex:1;flex:1;height:100%;border:solid 2px black;border-top-right-radius:8px;border-bottom-right-radius:8px;border-left:none}.title{-webkit-transform:translateY(-10px);transform:translateY(-10px);display:inline-block;padding:0 4px;font-family:Arial, Helvetica, sans-serif;font-size:20px;font-weight:700;color:black}.score{position:absolute;top:15px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-family:\"Clock\";font-size:40px}.lose{position:absolute;width:94px;top:55px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.lose img{display:block}.game-over,.game-won{position:absolute;top:50%;text-align:center;width:100%;z-index:1000;font-size:40px;font-weight:700;font-family:\"Open Sans\"}.game-over{color:red;background:brown;-webkit-transform:translateY(-35px);transform:translateY(-35px);line-height:70px}.game-won{color:white;background-image:url(\"assets/img/win.gif\");height:100%;-webkit-transform:translateY(-133px);transform:translateY(-133px);background-size:cover;background-repeat:no-repeat}.eggs-container{position:absolute;width:100%;height:100%}.rabbit{position:absolute;display:block;background-size:contain;background-repeat:no-repeat;width:105px;height:98px;margin-left:53px;-webkit-animation-name:rabbit;animation-name:rabbit;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:4;animation-iteration-count:4}@-webkit-keyframes rabbit{0%{background-image:url(\"assets/img/rabbit1.png\")}50%{background-image:url(\"assets/img/rabbit2.png\")}100%{background-image:url(\"assets/img/rabbit1.png\")}}@keyframes rabbit{0%{background-image:url(\"assets/img/rabbit1.png\")}50%{background-image:url(\"assets/img/rabbit2.png\")}100%{background-image:url(\"assets/img/rabbit1.png\")}}.button-container{display:block;padding-top:53px;margin-bottom:auto}.button-container button:not(:last-of-type){margin-bottom:16px}@media (max-width: 800px){.button-container{display:-ms-flexbox;display:flex;padding-top:0}.button-container button:not(:last-of-type){margin-bottom:0;margin-right:8px}}.mode-button{display:block;margin:0 auto;background-color:darkred;color:white;border:0;border-radius:12px;padding:0 12px;line-height:24px;outline:none}.mode-button:hover,.mode-button :active,.mode-button :focus{cursor:pointer;background-color:#720000}";

const MyComponent = class {
    constructor(hostRef) {
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
    gameOverWatcher() {
        this.deleteTimer();
        this.gameOver.emit();
    }
    gameWonWatcher() {
        this.deleteTimer();
        this.gameWon.emit();
    }
    changeTimer() {
        if (this.gameStarted) {
            this.showRabbit = true;
            this.showRabitDuration();
        }
        this.deleteTimer();
        this.createTimer();
    }
    showRabitDuration() {
        let rabbit = setTimeout(() => {
            this.showRabbit = false;
            clearTimeout(rabbit);
        }, 1200);
    }
    increaseSpeed() {
        let offset = this.isDifficult ? 0 : 10;
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
    }
    generateRandomNest() {
        const minNestIndex = 1;
        const maxNestIndex = 4;
        let rand = minNestIndex + Math.random() * (maxNestIndex + 1 - minNestIndex);
        return Math.floor(rand);
    }
    createEgg() {
        let newEgg = document.createElement('G-EGG');
        newEgg.nest = this.generateRandomNest();
        newEgg.wolfPosition = this.wolf.position;
        newEgg.eggMoveDuration = this.eggMoveDuration;
        this.eggsContainer.append(newEgg);
        this.eggs++;
    }
    createTimer() {
        this.gameTimer = window.setInterval(() => {
            this.createEgg();
        }, this.eggDuration);
    }
    deleteTimer() {
        window.clearInterval(this.gameTimer);
    }
    resetGame() {
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
    }
    continueGame() {
        this.paused = false;
        this.createTimer();
    }
    startGame(isDiffucult) {
        this.isDifficult = isDiffucult;
        this.resetGame();
        this.gameStarted = true;
        this.createEgg();
        this.createTimer();
    }
    pauseGame() {
        this.paused = !this.paused;
        this.gamePaused.emit(this.paused);
        this.paused ? this.deleteTimer() : this.continueGame();
    }
    minusPoint() {
        if (this.lose <= 3) {
            let img = document.createElement('IMG');
            img.src = "assets/img/minuspoint.png";
            img.height = 30;
            img.width = 30;
            this.loseContainer.append(img);
        }
    }
    eggCatchedHandler(e) {
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
    }
    render() {
        return (h(Host, { class: "game-container" }, h("div", { class: "game-container-left" }, h("nav-button", { direction: "left-top" }), h("nav-button", { direction: "left-bottom" })), h("div", { class: "game-container-center" }, h("div", { class: "console" }), h("div", { class: "border" }, h("div", { class: "border-left" }), h("div", { class: "border-center" }, h("div", { class: "title" }, "Go Nuts for Gogicha")), h("div", { class: "border-right" })), h("div", { class: "screen" }, h("div", { class: "score" }, String(this.score).padStart(3, '0'), " "), h("div", { class: "lose", ref: (el) => this.loseContainer = el }), this.isGameOver && h("div", { class: "game-over" }, "\u10E8\u10D4\u10DC \u10DB\u10D4\u10D8\u10E1\u10DE\u10D4"), this.isWon && h("div", { class: "game-won" }, "YOU WON"), h("div", { class: this.showRabbit ? 'rabbit' : '' }), h("g-wolf", { ref: (el) => this.wolf = el }), h("div", { class: "eggs-container", ref: (el) => this.eggsContainer = el }))), h("div", { class: "clearfix" }), h("div", { class: "game-container-right" }, h("div", { class: "button-container" }, h("button", { class: "mode-button", onClick: this.startGame.bind(this, true) }, "Start"), this.devMode && this.gameStarted &&
            h("button", { class: "mode-button", onClick: this.pauseGame.bind(this) }, " ", this.paused ? 'Continue' : 'Pause', " ")), h("nav-button", { direction: "right-top" }), h("nav-button", { direction: "right-bottom" }))));
    }
    static get watchers() { return {
        "isGameOver": ["gameOverWatcher"],
        "isWon": ["gameWonWatcher"],
        "eggDuration": ["changeTimer"],
        "eggs": ["increaseSpeed"]
    }; }
};
MyComponent.style = appCss;

const eggCss = ":host{display:block;position:relative}:host img{position:absolute;-webkit-transform-origin:center center;transform-origin:center center;display:block}.bird-container{position:relative}.bird{position:absolute;display:block;width:59px;height:31px;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:step-start;animation-timing-function:step-start;-webkit-animation-iteration-count:1;animation-iteration-count:1;background-position-x:center;background-position-y:center;background-repeat:no-repeat}.bird-right{right:80px}.bird-left{left:80px}.egg{height:30px;width:30px;background-image:url(\"./assets/img/egg.png\");background-size:contain;position:absolute}";

const MyComponent$1 = class {
    constructor(hostRef) {
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
    changeTimer() {
        clearInterval(this.eggMoveTimer);
        this.startEggMoving();
    }
    checkCatching(position) {
        return this.isCatching = this.nestTitle[this.nest] === position
            ? true : false;
    }
    pauseGame(e) {
        if (e.detail) {
            clearInterval(this.eggMoveTimer);
        }
        else {
            this.startEggMoving();
        }
    }
    deleteTimer() {
        clearInterval(this.eggMoveTimer);
    }
    catchEggHandler(e) {
        this.checkCatching(e.detail);
    }
    showBird() {
        let bird = setTimeout(() => {
            this.birdIsShown = false;
            clearTimeout(bird);
        }, 3000);
    }
    startEggMoving() {
        this.eggMoveTimer = window.setInterval(() => {
            if (this.step === 10) {
                clearInterval(this.eggMoveTimer);
            }
            else {
                if (this.step === 5) {
                    if (this.isCatching) {
                        this.eggIsCathced.emit({
                            catched: true,
                            el: this.el
                        });
                    }
                    else {
                        this.eggIsCathced.emit({
                            catched: false,
                            el: this.el
                        });
                        this.birdIsShown = true;
                        this.showBird();
                    }
                    this.step = 10;
                }
                else {
                    this.step++;
                }
            }
        }, this.eggMoveDuration);
    }
    setDegree(degree) {
        if (this.nest === 2 || this.nest === 4) {
            return -1 * degree;
        }
        else
            return degree;
    }
    generateStyleObject() {
        let yOffset = (this.nest === 3 || this.nest === 4)
            ? (this.nest === 4)
                ? 58
                : 60
            : (this.nest === 2)
                ? -2
                : 0;
        this.stepStyleObject = {
            1: {
                [this.xSide]: '22px',
                top: `${75 + yOffset}px`,
                transform: `rotate(${this.setDegree(45)}deg)`,
            },
            2: {
                [this.xSide]: '35px',
                top: `${84 + yOffset}px`,
                transform: `rotate(${this.setDegree(90)}deg)`
            },
            3: {
                [this.xSide]: '50px',
                top: `${93 + yOffset}px`,
                transform: `rotate(${this.setDegree(135)}deg)`
            },
            4: {
                [this.xSide]: '65px',
                top: `${102 + yOffset}px`,
                transform: `rotate(${this.setDegree(-90)}deg)`
            },
            5: {
                [this.xSide]: '80px',
                top: `${111 + yOffset}px`,
                transform: `rotate(${this.setDegree(-25)}deg)`
            },
            10: {
                display: 'none',
            }
        };
    }
    componentWillLoad() {
        this.checkCatching(this.wolfPosition);
        this.generateStyleObject();
    }
    componentDidLoad() {
        this.startEggMoving();
    }
    componentDidUnload() {
        window.clearInterval(this.eggMoveTimer);
    }
    render() {
        return (h(Host, null, h("div", { class: "egg", style: this.stepStyleObject[this.step] }), h("div", { class: "bird-container" }, h("div", { class: `bird ${this.birdIsShown ? `bird-${this.xSide}` : ''}` }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "eggMoveDuration": ["changeTimer"]
    }; }
};
MyComponent$1.style = eggCss;

const wolfCss = ":host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;bottom:35px;-webkit-transform:translateX(85px);transform:translateX(85px)}div{width:234px;height:133px;background-repeat:no-repeat;background:url(\"assets/img/left-top.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease}.left-top{background-image:url(\"assets/img/left-top.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}.left-bottom{background-image:url(\"assets/img/left-bottom.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}.right-top{background-image:url(\"assets/img/right-top.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}.right-bottom{background-image:url(\"assets/img/right-bottom.png\");-webkit-transition:all 0.4s ease;transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}";

const MyComponent$2 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.wolfDirectionChange = createEvent(this, "wolfDirectionChange", 7);
        this.position = 'left-top';
        this.directionX = this.position.split('-')[0];
        this.directionY = this.position.split('-')[1];
    }
    changeDirectionX() {
        this.position = `${this.directionX}-${this.directionY}`;
        this.wolfDirectionChange.emit(this.position);
    }
    changeDirectionY() {
        this.position = `${this.directionX}-${this.directionY}`;
        this.wolfDirectionChange.emit(this.position);
    }
    chooseHandler(e) {
        let tempDirection = e.detail.split('-');
        this.directionX = tempDirection[0];
        this.directionY = tempDirection[1];
    }
    handleKeyDown(ev) {
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
    }
    componentWillLoad() {
        this.wolfDirectionChange.emit(this.position);
    }
    render() {
        return (h("div", { class: this.position }));
    }
    static get watchers() { return {
        "directionX": ["changeDirectionX"],
        "directionY": ["changeDirectionY"]
    }; }
};
MyComponent$2.style = wolfCss;

const buttonCss = "button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;outline:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host(:hover){cursor:pointer}:host(:hover) button{background-color:#580000}:host(:hover) button:after{border:solid 2px #580000}:host(:first-of-type){margin-bottom:32px}:host(:last-of-type){margin-bottom:16px}button{display:inline-block;position:relative;width:32px;min-height:32px;border-radius:50%;background-color:darkred;-webkit-transition:background-color 0.4s ease;transition:background-color 0.4s ease}button:after{position:absolute;content:\"\";left:-4px;top:-4px;width:36px;height:36px;border-radius:50%;border:solid 2px darkred;-webkit-transition:border-color 0.4s ease;transition:border-color 0.4s ease}button::-moz-focus-inner{border:0;padding:0}.nav-container{position:absolute;width:32px;height:32px}.nav{position:absolute;top:40px;left:8px;display:inline-block;border-style:solid;width:0;height:0;line-height:0px;border-width:32px 8px 0 8px;border-color:#000000 transparent transparent transparent}:host(.left-top){padding:40px 0 0 40px}:host(.left-top) .nav-container{-webkit-transform:rotate(135deg);transform:rotate(135deg)}:host(.left-bottom){padding:0 0 40px 40px}:host(.left-bottom) .nav-container{-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host(.right-top){padding:40px 40px 0 0}:host(.right-top) .nav-container{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}:host(.right-bottom){padding:0 40px 40px 0}:host(.right-bottom) .nav-container{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}";

const MyComponent$3 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gChooseDirection = createEvent(this, "gChooseDirection", 7);
    }
    chooseDirection() {
        console.log('this.direction');
        this.gChooseDirection.emit(this.direction);
    }
    render() {
        return (h(Host, { class: this.direction, onClick: this.chooseDirection.bind(this) }, h("button", null), h("div", { class: "nav-container" }, h("div", { class: "nav" }))));
    }
};
MyComponent$3.style = buttonCss;

export { MyComponent as g_app, MyComponent$1 as g_egg, MyComponent$2 as g_wolf, MyComponent$3 as nav_button };
