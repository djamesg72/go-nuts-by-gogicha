import { Component, Element, Prop, State, h, Host, Watch, Listen, Event } from '@stencil/core';
export class MyComponent {
    constructor() {
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
                this.el.remove;
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
        return (h(Host, null,
            h("div", { class: "egg", style: this.stepStyleObject[this.step] }),
            h("div", { class: "bird-container" },
                h("div", { class: `bird ${this.birdIsShown ? `bird-${this.xSide}` : ''}` }))));
    }
    static get is() { return "g-egg"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["egg.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["egg.css"]
    }; }
    static get properties() { return {
        "nest": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "nest",
            "reflect": false
        },
        "wolfPosition": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'",
                "resolved": "\"left-bottom\" | \"left-top\" | \"right-bottom\" | \"right-top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "wolf-position",
            "reflect": false
        },
        "eggMoveDuration": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "egg-move-duration",
            "reflect": false,
            "defaultValue": "1000"
        }
    }; }
    static get states() { return {
        "step": {},
        "birdIsShown": {}
    }; }
    static get events() { return [{
            "method": "eggIsCathced",
            "name": "eggIsCathced",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "eggMoveDuration",
            "methodName": "changeTimer"
        }]; }
    static get listeners() { return [{
            "name": "gamePaused",
            "method": "pauseGame",
            "target": "document",
            "capture": false,
            "passive": false
        }, {
            "name": "gameOver",
            "method": "deleteTimer",
            "target": "document",
            "capture": false,
            "passive": false
        }, {
            "name": "gameWon",
            "method": "deleteTimer",
            "target": "document",
            "capture": false,
            "passive": false
        }, {
            "name": "wolfDirectionChange",
            "method": "catchEggHandler",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
