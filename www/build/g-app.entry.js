import { r as registerInstance, e as createEvent, h, f as Host } from './index-3102a2da.js';

const appCss = "*,::after,::before{box-sizing:border-box}:host(.game-container){position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;border-radius:12px;box-sizing:border-box}@media (max-width: 800px){:host(.game-container){width:90%;height:90%;justify-content:center}}.clearfix{display:none}.game-container-left{flex:1;position:relative;display:flex;flex-direction:column;align-items:center;margin-top:auto}@media (max-width: 800px){.game-container-left{order:1;flex:0 1 50%;margin-top:auto}}.game-container-right{flex:1;height:100%;position:relative;display:flex;flex-direction:column;align-items:center}@media (max-width: 800px){.game-container-right{order:1;flex:0 1 50%;margin-top:0}}.game-container-center{position:relative;display:flex;align-items:center;justify-content:center;padding:0 38px}@media (max-width: 800px){.game-container-center{padding:50px;margin:auto}}.screen{background-image:url(\"assets/img/background.jpg\");width:412px;height:270px;transform:scale(1.55, 1.77);position:relative;background-size:cover;background-repeat:no-repeat;box-shadow:inset 0px 0px 7px 1px rgba(0, 0, 0, 0.3);border:solid 2px rgba(0, 0, 0, 0.3)}.console{display:block;position:absolute;width:488px;height:346px;border-radius:12px;box-shadow:inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px, inset rgba(0, 0, 0, 0.5) -8px -8px 18px 5px}.border{display:flex;justify-content:space-between;position:absolute;width:452px;height:310px;border-radius:8px}.border-left{flex:1;height:100%;border:solid 2px black;border-top-left-radius:8px;border-bottom-left-radius:8px;border-right:none}.border-center{height:100%;position:relative;border-bottom:solid 2px black}.border-right{flex:1;height:100%;border:solid 2px black;border-top-right-radius:8px;border-bottom-right-radius:8px;border-left:none}.title{transform:translateY(-10px);display:inline-block;padding:0 4px;font-family:Arial, Helvetica, sans-serif;font-size:20px;font-weight:700;color:black}.score{position:absolute;top:15px;left:50%;transform:translateX(-50%);font-family:\"Clock\";font-size:40px}.lose{position:absolute;width:94px;top:55px;left:50%;transform:translateX(-50%);display:flex;flex-wrap:nowrap}.lose img{display:block}.game-over,.game-won{position:absolute;top:50%;text-align:center;width:100%;z-index:1000;font-size:40px;font-weight:700;font-family:\"Open Sans\"}.game-over{color:red;background:brown;transform:translateY(-35px);line-height:70px}.game-won{color:white;background-image:url(\"assets/img/win.gif\");height:100%;transform:translateY(-133px);background-size:cover;background-repeat:no-repeat}.eggs-container{position:absolute;width:100%;height:100%}.rabbit{position:absolute;display:block;background-size:contain;background-repeat:no-repeat;width:105px;height:98px;margin-left:53px;animation-name:rabbit;animation-duration:2s;animation-fill-mode:forwards;animation-iteration-count:4}@keyframes rabbit{0%{background-image:url(\"assets/img/rabbit1.png\")}50%{background-image:url(\"assets/img/rabbit2.png\")}100%{background-image:url(\"assets/img/rabbit1.png\")}}.button-container{display:block;padding-top:53px;margin-bottom:auto}.button-container button:not(:last-of-type){margin-bottom:16px}@media (max-width: 800px){.button-container{display:flex;padding-top:0}.button-container button:not(:last-of-type){margin-bottom:0;margin-right:8px}}.mode-button{display:block;margin:0 auto;background-color:darkred;color:white;border:0;border-radius:12px;padding:0 12px;line-height:24px;outline:none}.mode-button:hover,.mode-button :active,.mode-button :focus{cursor:pointer;background-color:#720000}";

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
    handleKeyDown(event) {
        if (event.code === 'Space') {
            console.log('Spacebar was pressed!');
            this.startGame(true);
        }
    }
    render() {
        return (h(Host, { class: "game-container" }, h("div", { class: "game-container-center" }, h("div", { class: "console" }), h("div", { class: "screen" }, h("div", { class: "score" }, String(this.score).padStart(3, '0'), " "), h("div", { class: "lose", ref: (el) => this.loseContainer = el }), this.isGameOver && h("div", { class: "game-over" }, "\u10E8\u10D4\u10DC \u10DB\u10D4\u10D8\u10E1\u10DE\u10D4"), this.isWon && h("div", { class: "game-won" }, "YOU WON"), h("div", { class: this.showRabbit ? 'rabbit' : '' }), h("g-wolf", { ref: (el) => this.wolf = el }), h("div", { class: "eggs-container", ref: (el) => this.eggsContainer = el }))), h("div", { class: "clearfix" })));
    }
    static get watchers() { return {
        "isGameOver": ["gameOverWatcher"],
        "isWon": ["gameWonWatcher"],
        "eggDuration": ["changeTimer"],
        "eggs": ["increaseSpeed"]
    }; }
};
MyComponent.style = appCss;

export { MyComponent as g_app };
