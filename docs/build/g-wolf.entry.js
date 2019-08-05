import { r as registerInstance, c as createEvent, h } from './chunk-a57a5c40.js';

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.position = 'left-top';
        this.directionX = this.position.split('-')[0];
        this.directionY = this.position.split('-')[1];
        this.wolfDirectionChange = createEvent(this, "wolfDirectionChange", 7);
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
    static get style() { return ":host {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 35px;\n  -webkit-transform: translateX(85px);\n  transform: translateX(85px);\n}\n\ndiv {\n  width: 234px;\n  height: 133px;\n  background-repeat: no-repeat;\n  background: url(\"assets/img/left-top.png\");\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.left-top {\n  background-image: url(\"assets/img/left-top.png\");\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.left-bottom {\n  background-image: url(\"assets/img/left-bottom.png\");\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.right-top {\n  background-image: url(\"assets/img/right-top.png\");\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.right-bottom {\n  background-image: url(\"assets/img/right-bottom.png\");\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}"; }
}

export { MyComponent as g_wolf };
