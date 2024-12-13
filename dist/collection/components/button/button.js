import { Component, Prop, h, Host, Event } from '@stencil/core';
// import { format } from '../../utils/utils';
export class MyComponent {
    chooseDirection() {
        console.log('this.direction');
        this.gChooseDirection.emit(this.direction);
    }
    render() {
        return (h(Host, { class: this.direction, onClick: this.chooseDirection.bind(this) },
            h("button", null),
            h("div", { class: "nav-container" },
                h("div", { class: "nav" }))));
    }
    static get is() { return "nav-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "direction": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'",
                "resolved": "\"left-bottom\" | \"left-top\" | \"right-bottom\" | \"right-top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "direction",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "gChooseDirection",
            "name": "gChooseDirection",
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
}
