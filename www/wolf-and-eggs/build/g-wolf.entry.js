import { r as registerInstance, e as createEvent, h } from './index-7b165c38.js';

const wolfCss = ":host{display:inline-flex;align-items:center;justify-content:center;position:absolute;bottom:35px;transform:translateX(85px)}div{width:234px;height:133px;background-repeat:no-repeat;background:url(\"assets/img/left-top.png\");transition:all 0.4s ease}.left-top{background-image:url(\"assets/img/left-top.png\");transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}.left-bottom{background-image:url(\"assets/img/left-bottom.png\");transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}.right-top{background-image:url(\"assets/img/right-top.png\");transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}.right-bottom{background-image:url(\"assets/img/right-bottom.png\");transition:all 0.4s ease;background-size:contain;background-repeat:no-repeat}";

const MyComponent = class {
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
MyComponent.style = wolfCss;

export { MyComponent as g_wolf };
