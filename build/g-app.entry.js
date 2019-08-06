import { r as registerInstance, c as createEvent, h, H as Host } from './chunk-a57a5c40.js';

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.gamePaused = createEvent(this, "gamePaused", 7);
        this.gameOver = createEvent(this, "gameOver", 7);
        this.gameWon = createEvent(this, "gameWon", 7);
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
        return (h(Host, { class: "game-container" }, h("div", { class: "game-container-left" }, h("nav-button", { direction: "left-top" }), h("nav-button", { direction: "left-bottom" })), h("div", { class: "game-container-center" }, h("div", { class: "console" }), h("div", { class: "border" }, h("div", { class: "border-left" }), h("div", { class: "border-center" }, h("div", { class: "title" }, "\u041D\u0423, \u041F\u041E\u0413\u041E\u0414\u0418!")), h("div", { class: "border-right" })), h("div", { class: "screen" }, h("div", { class: "score" }, String(this.score).padStart(4, '0'), " "), h("div", { class: "lose", ref: (el) => this.loseContainer = el }), this.isGameOver && h("div", { class: "game-over" }, "GAME OVER"), this.isWon && h("div", { class: "game-won" }, "YOU WON"), h("div", { class: this.showRabbit ? 'rabbit' : '' }), h("g-wolf", { ref: (el) => this.wolf = el }), h("div", { class: "eggs-container", ref: (el) => this.eggsContainer = el }))), h("div", { class: "clearfix" }), h("div", { class: "game-container-right" }, h("div", { class: "button-container" }, h("button", { class: "mode-button", onClick: this.startGame.bind(this, true) }, "\u0418\u0413\u0420\u0410 A"), h("button", { class: "mode-button", onClick: this.startGame.bind(this, false) }, "\u0418\u0413\u0420\u0410 \u0411"), this.devMode && this.gameStarted &&
            h("button", { class: "mode-button", onClick: this.pauseGame.bind(this) }, " ", this.paused ? 'ПРОДОЛЖИТЬ' : 'ПАУЗА', " ")), h("nav-button", { direction: "right-top" }), h("nav-button", { direction: "right-bottom" }))));
    }
    static get watchers() { return {
        "isGameOver": ["gameOverWatcher"],
        "isWon": ["gameWonWatcher"],
        "eggDuration": ["changeTimer"],
        "eggs": ["increaseSpeed"]
    }; }
    static get style() { return "*,\n::after,\n::before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host(.game-container) {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 800px;\n  height: 450px;\n  background-color: #ececec;\n  border-radius: 12px;\n  -webkit-box-shadow: 8px 8px 2px 1px;\n  box-shadow: 8px 8px 2px 1px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\@media (max-width: 800px) {\n  :host(.game-container) {\n    width: 90%;\n    height: 90%;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n}\n\n.clearfix {\n  display: none;\n}\n\@media (max-width: 800px) {\n  .clearfix {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n}\n\n.game-container-left {\n  -ms-flex: 1;\n  flex: 1;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n  margin-top: auto;\n}\n\@media (max-width: 800px) {\n  .game-container-left {\n    -ms-flex-order: 1;\n    order: 1;\n    -ms-flex: 0 1 50%;\n    flex: 0 1 50%;\n    margin-top: auto;\n  }\n}\n\n.game-container-right {\n  -ms-flex: 1;\n  flex: 1;\n  height: 100%;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\@media (max-width: 800px) {\n  .game-container-right {\n    -ms-flex-order: 1;\n    order: 1;\n    -ms-flex: 0 1 50%;\n    flex: 0 1 50%;\n    margin-top: 0;\n  }\n}\n\n.game-container-center {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding: 0 38px;\n}\n\@media (max-width: 800px) {\n  .game-container-center {\n    padding: 50px;\n    margin: auto;\n  }\n}\n\n.screen {\n  background-image: url(\"assets/img/background.jpg\");\n  width: 412px;\n  height: 270px;\n  position: relative;\n  -webkit-box-shadow: inset 0px 0px 7px 1px rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0px 0px 7px 1px rgba(0, 0, 0, 0.3);\n  border: solid 2px rgba(0, 0, 0, 0.3);\n}\n\n.console {\n  display: block;\n  position: absolute;\n  width: 488px;\n  height: 346px;\n  border-radius: 12px;\n  -webkit-box-shadow: inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px, inset rgba(0, 0, 0, 0.5) -8px -8px 18px 5px;\n  box-shadow: inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px, inset rgba(0, 0, 0, 0.5) -8px -8px 18px 5px;\n}\n\n.border {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  position: absolute;\n  width: 452px;\n  height: 310px;\n  border-radius: 8px;\n}\n\n.border-left {\n  -ms-flex: 1;\n  flex: 1;\n  height: 100%;\n  border: solid 2px black;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-right: none;\n}\n\n.border-center {\n  height: 100%;\n  position: relative;\n  border-bottom: solid 2px black;\n}\n\n.border-right {\n  -ms-flex: 1;\n  flex: 1;\n  height: 100%;\n  border: solid 2px black;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-left: none;\n}\n\n.title {\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n  display: inline-block;\n  padding: 0 4px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n}\n\n.score {\n  position: absolute;\n  top: 15px;\n  right: 80px;\n  font-family: \"Clock\";\n  font-size: 40px;\n}\n\n.lose {\n  position: absolute;\n  width: 94px;\n  top: 55px;\n  right: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n.lose img {\n  display: block;\n}\n\n.game-over,\n.game-won {\n  position: absolute;\n  top: 50%;\n  text-align: center;\n  width: 100%;\n  z-index: 1000;\n  font-size: 40px;\n  font-weight: 700;\n  font-family: \"Open Sans\";\n}\n\n.game-over {\n  color: red;\n  background: brown;\n  -webkit-transform: translateY(-35px);\n  transform: translateY(-35px);\n  line-height: 70px;\n}\n\n.game-won {\n  color: white;\n  background-image: url(\"assets/img/win.gif\");\n  height: 100%;\n  -webkit-transform: translateY(-133px);\n  transform: translateY(-133px);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.eggs-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.rabbit {\n  position: absolute;\n  display: block;\n  width: 105px;\n  height: 98px;\n  margin-left: 53px;\n  -webkit-animation-name: rabbit;\n  animation-name: rabbit;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: 4;\n  animation-iteration-count: 4;\n}\n\n\@-webkit-keyframes rabbit {\n  0% {\n    background-image: url(\"assets/img/rabbit1.png\");\n  }\n  50% {\n    background-image: url(\"assets/img/rabbit2.png\");\n  }\n  100% {\n    background-image: url(\"assets/img/rabbit1.png\");\n  }\n}\n\n\@keyframes rabbit {\n  0% {\n    background-image: url(\"assets/img/rabbit1.png\");\n  }\n  50% {\n    background-image: url(\"assets/img/rabbit2.png\");\n  }\n  100% {\n    background-image: url(\"assets/img/rabbit1.png\");\n  }\n}\n.button-container {\n  display: block;\n  padding-top: 53px;\n  margin-bottom: auto;\n}\n.button-container button:not(:last-of-type) {\n  margin-bottom: 16px;\n}\n\@media (max-width: 800px) {\n  .button-container {\n    display: -ms-flexbox;\n    display: flex;\n    padding-top: 0;\n  }\n  .button-container button:not(:last-of-type) {\n    margin-bottom: 0;\n    margin-right: 8px;\n  }\n}\n\n.mode-button {\n  display: block;\n  margin: 0 auto;\n  background-color: darkred;\n  color: white;\n  border: 0;\n  border-radius: 12px;\n  padding: 0 12px;\n  line-height: 24px;\n  outline: none;\n}\n.mode-button:hover,\n.mode-button :active,\n.mode-button :focus {\n  cursor: pointer;\n  background-color: #720000;\n}"; }
}

export { MyComponent as g_app };
