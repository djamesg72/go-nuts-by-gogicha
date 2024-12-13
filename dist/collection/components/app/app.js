import { Component, h, Host, Prop, State, Event, Listen, Watch } from '@stencil/core';
export class MyComponent {
    constructor() {
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
        return (h(Host, { class: "game-container" },
            h("div", { class: "game-container-left" },
                h("nav-button", { direction: "left-top" }),
                h("nav-button", { direction: "left-bottom" })),
            h("div", { class: "game-container-center" },
                h("div", { class: "console" }),
                h("div", { class: "border" },
                    h("div", { class: "border-left" }),
                    h("div", { class: "border-center" },
                        h("div", { class: "title" }, "Go Nuts for Gogicha")),
                    h("div", { class: "border-right" })),
                h("div", { class: "screen" },
                    h("div", { class: "score" },
                        String(this.score).padStart(3, '0'),
                        " "),
                    h("div", { class: "lose", ref: (el) => this.loseContainer = el }),
                    this.isGameOver && h("div", { class: "game-over" }, "\u10E8\u10D4\u10DC \u10DB\u10D4\u10D8\u10E1\u10DE\u10D4"),
                    this.isWon && h("div", { class: "game-won" }, "YOU WON"),
                    h("div", { class: this.showRabbit ? 'rabbit' : '' }),
                    h("g-wolf", { ref: (el) => this.wolf = el }),
                    h("div", { class: "eggs-container", ref: (el) => this.eggsContainer = el }))),
            h("div", { class: "clearfix" }),
            h("div", { class: "game-container-right" },
                h("div", { class: "button-container" },
                    h("button", { class: "mode-button", onClick: this.startGame.bind(this, true) }, "Start"),
                    this.devMode && this.gameStarted &&
                        h("button", { class: "mode-button", onClick: this.pauseGame.bind(this) },
                            " ",
                            this.paused ? 'Continue' : 'Pause',
                            " ")),
                h("nav-button", { direction: "right-top" }),
                h("nav-button", { direction: "right-bottom" }))));
    }
    static get is() { return "g-app"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["app.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["app.css"]
    }; }
    static get properties() { return {
        "devMode": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "dev-mode",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "paused": {},
        "gameStarted": {},
        "score": {},
        "lose": {},
        "isWon": {},
        "showRabbit": {},
        "isGameOver": {},
        "eggDuration": {},
        "eggs": {},
        "eggMoveDuration": {},
        "isDifficult": {}
    }; }
    static get events() { return [{
            "method": "gamePaused",
            "name": "gamePaused",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "for dev-mode"
            },
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            }
        }, {
            "method": "gameOver",
            "name": "gameOver",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }, {
            "method": "gameWon",
            "name": "gameWon",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "void",
                "resolved": "void",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "isGameOver",
            "methodName": "gameOverWatcher"
        }, {
            "propName": "isWon",
            "methodName": "gameWonWatcher"
        }, {
            "propName": "eggDuration",
            "methodName": "changeTimer"
        }, {
            "propName": "eggs",
            "methodName": "increaseSpeed"
        }]; }
    static get listeners() { return [{
            "name": "eggIsCathced",
            "method": "eggCatchedHandler",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
