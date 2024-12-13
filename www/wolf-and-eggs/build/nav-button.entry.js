import { r as registerInstance, e as createEvent, h, f as Host } from './index-7b165c38.js';

const buttonCss = "button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;line-height:normal;outline:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none}:host{display:flex;flex-direction:column;justify-content:center;align-items:center}:host(:hover){cursor:pointer}:host(:hover) button{background-color:#580000}:host(:hover) button:after{border:solid 2px #580000}:host(:first-of-type){margin-bottom:32px}:host(:last-of-type){margin-bottom:16px}button{display:inline-block;position:relative;width:32px;min-height:32px;border-radius:50%;background-color:darkred;transition:background-color 0.4s ease}button:after{position:absolute;content:\"\";left:-4px;top:-4px;width:36px;height:36px;border-radius:50%;border:solid 2px darkred;transition:border-color 0.4s ease}button::-moz-focus-inner{border:0;padding:0}.nav-container{position:absolute;width:32px;height:32px}.nav{position:absolute;top:40px;left:8px;display:inline-block;border-style:solid;width:0;height:0;line-height:0px;border-width:32px 8px 0 8px;border-color:#000000 transparent transparent transparent}:host(.left-top){padding:40px 0 0 40px}:host(.left-top) .nav-container{transform:rotate(135deg)}:host(.left-bottom){padding:0 0 40px 40px}:host(.left-bottom) .nav-container{transform:rotate(45deg)}:host(.right-top){padding:40px 40px 0 0}:host(.right-top) .nav-container{transform:rotate(-135deg)}:host(.right-bottom){padding:0 40px 40px 0}:host(.right-bottom) .nav-container{transform:rotate(-45deg)}";

const MyComponent = class {
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
MyComponent.style = buttonCss;

export { MyComponent as nav_button };
