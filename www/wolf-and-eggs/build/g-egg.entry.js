import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-3102a2da.js';

const eggCss = ":host{display:block;position:relative}:host img{position:absolute;transform-origin:center center;display:block}.bird-container{position:relative;width:100%}.bird{position:absolute;display:block;width:59px;height:31px;bottom:20px;animation-duration:1.5s;animation-iteration-count:1;background-position-x:center;background-position-y:center;background-repeat:no-repeat}.bird-right{right:80px;top:200px;animation-name:donutCrash}.bird-left{left:80px;top:200px;animation-name:donutCrash}.egg{height:30px;width:30px;background-image:url(\"./assets/img/egg.png\");background-size:contain;position:absolute}@keyframes donutCrash{1%{background-image:url(\"./assets/img/broken-egg.png\")}33%{background-image:url(\"./assets/img/broken-egg-1.png\")}66%{background-image:url(\"./assets/img/broken-egg-2.png\")}}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.eggIsCathced = createEvent(this, "eggIsCathced", 7);
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
        return (h(Host, null, h("div", { class: "egg", style: this.stepStyleObject[this.step] }), h("div", { class: "bird-container" }, h("div", { class: `bird ${this.birdIsShown ? `bird-${this.xSide}` : ''}` }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "eggMoveDuration": ["changeTimer"]
    }; }
};
MyComponent.style = eggCss;

export { MyComponent as g_egg };
