import { Component, Prop, State, h, Listen, Watch, Event } from '@stencil/core';
export class MyComponent {
    constructor() {
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
    static get is() { return "g-wolf"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["wolf.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["wolf.css"]
    }; }
    static get properties() { return {
        "position": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "WolfPosition",
                "resolved": "\"left-bottom\" | \"left-top\" | \"right-bottom\" | \"right-top\"",
                "references": {
                    "WolfPosition": {
                        "location": "import",
                        "path": "./wolf.model"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "position",
            "reflect": false,
            "defaultValue": "'left-top'"
        }
    }; }
    static get states() { return {
        "directionX": {},
        "directionY": {}
    }; }
    static get events() { return [{
            "method": "wolfDirectionChange",
            "name": "wolfDirectionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "WolfPosition",
                "resolved": "\"left-bottom\" | \"left-top\" | \"right-bottom\" | \"right-top\"",
                "references": {
                    "WolfPosition": {
                        "location": "import",
                        "path": "./wolf.model"
                    }
                }
            }
        }]; }
    static get watchers() { return [{
            "propName": "directionX",
            "methodName": "changeDirectionX"
        }, {
            "propName": "directionY",
            "methodName": "changeDirectionY"
        }]; }
    static get listeners() { return [{
            "name": "gChooseDirection",
            "method": "chooseHandler",
            "target": "document",
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "handleKeyDown",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
