import { r as registerInstance, c as createEvent, h, H as Host } from './chunk-a57a5c40.js';

// import { format } from '../../utils/utils';
class MyComponent {
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
    static get style() { return "button {\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  outline: none;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n}\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n:host(:hover) {\n  cursor: pointer;\n}\n:host(:hover) button {\n  background-color: #580000;\n}\n:host(:hover) button:after {\n  border: solid 2px #580000;\n}\n\n:host(:first-of-type) {\n  margin-bottom: 32px;\n}\n\n:host(:last-of-type) {\n  margin-bottom: 16px;\n}\n\nbutton {\n  display: inline-block;\n  position: relative;\n  width: 32px;\n  min-height: 32px;\n  border-radius: 50%;\n  background-color: darkred;\n  -webkit-transition: background-color 0.4s ease;\n  transition: background-color 0.4s ease;\n}\nbutton:after {\n  position: absolute;\n  content: \"\";\n  left: -4px;\n  top: -4px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: solid 2px darkred;\n  -webkit-transition: border-color 0.4s ease;\n  transition: border-color 0.4s ease;\n}\nbutton::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.nav-container {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n}\n\n.nav {\n  position: absolute;\n  top: 40px;\n  left: 8px;\n  display: inline-block;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  line-height: 0px;\n  border-width: 32px 8px 0 8px;\n  border-color: #000000 transparent transparent transparent;\n}\n\n:host(.left-top) {\n  padding: 40px 0 0 40px;\n}\n:host(.left-top) .nav-container {\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n\n:host(.left-bottom) {\n  padding: 0 0 40px 40px;\n}\n:host(.left-bottom) .nav-container {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n:host(.right-top) {\n  padding: 40px 40px 0 0;\n}\n:host(.right-top) .nav-container {\n  -webkit-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n\n:host(.right-bottom) {\n  padding: 0 40px 40px 0;\n}\n:host(.right-bottom) .nav-container {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}"; }
}

export { MyComponent as nav_button };
