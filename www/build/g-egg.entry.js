import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './chunk-a57a5c40.js';

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.eggIsCathced = createEvent(this, "eggIsCathced", 7);
    }
    changeTimer() {
        clearInterval(this.eggMoveTimer);
        this.startEggMoving();
    }
    checkCathcing(position) {
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
        this.checkCathcing(e.detail);
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
        this.checkCathcing(this.wolfPosition);
        this.generateStyleObject();
    }
    componentDidLoad() {
        this.startEggMoving();
    }
    componentDidUnload() {
        window.clearInterval(this.eggMoveTimer);
    }
    render() {
        return (h(Host, null, h("img", { style: this.stepStyleObject[this.step], src: "assets/img/egg.png", alt: "egg" }), h("div", { class: "bird-container" }, h("div", { class: `bird ${this.birdIsShown ? `bird-${this.xSide}` : ''}` }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "eggMoveDuration": ["changeTimer"]
    }; }
    static get style() { return ":host {\n  display: block;\n  position: relative;\n}\n:host img {\n  position: absolute;\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n  display: block;\n}\n\n.bird-container {\n  position: relative;\n}\n\n.bird {\n  position: absolute;\n  display: block;\n  width: 59px;\n  height: 31px;\n  -webkit-animation-duration: 3s;\n  animation-duration: 3s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: step-start;\n  animation-timing-function: step-start;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  background-position-x: center;\n  background-position-y: center;\n  background-repeat: no-repeat;\n}\n\n.bird-right {\n  right: 80px;\n  -webkit-animation-name: bird-right;\n  animation-name: bird-right;\n}\n\n.bird-left {\n  left: 80px;\n  -webkit-animation-name: bird-left;\n  animation-name: bird-left;\n}\n\n\@-webkit-keyframes bird-right {\n  0% {\n    background-image: url(\"assets/img/broken-egg.png\");\n    top: 210px;\n    opacity: 1;\n    right: 80px;\n  }\n  20% {\n    background-image: url(\"assets/img/broken-egg-1.png\");\n    top: 210px;\n    opacity: 1;\n    right: 80px;\n  }\n  30% {\n    background-image: url(\"assets/img/broken-egg-2.png\");\n    top: 210px;\n    opacity: 1;\n    right: 80px;\n  }\n  60% {\n    background-image: url(\"assets/img/right-bird-1.png\");\n    top: 190px;\n    right: 70px;\n    opacity: 1;\n  }\n  70% {\n    background-image: url(\"assets/img/right-bird-2.png\");\n    top: 210px;\n    right: 40px;\n    opacity: 1;\n  }\n  90% {\n    background-image: url(\"assets/img/right-bird-3.png\");\n    top: 210px;\n    right: 0;\n    opacity: 1;\n  }\n  100% {\n    background-image: url(\"assets/img/right-bird-3.png\");\n    top: 210px;\n    right: -40px;\n    opacity: 0;\n  }\n}\n\n\@keyframes bird-right {\n  0% {\n    background-image: url(\"assets/img/broken-egg.png\");\n    top: 210px;\n    opacity: 1;\n    right: 80px;\n  }\n  20% {\n    background-image: url(\"assets/img/broken-egg-1.png\");\n    top: 210px;\n    opacity: 1;\n    right: 80px;\n  }\n  30% {\n    background-image: url(\"assets/img/broken-egg-2.png\");\n    top: 210px;\n    opacity: 1;\n    right: 80px;\n  }\n  60% {\n    background-image: url(\"assets/img/right-bird-1.png\");\n    top: 190px;\n    right: 70px;\n    opacity: 1;\n  }\n  70% {\n    background-image: url(\"assets/img/right-bird-2.png\");\n    top: 210px;\n    right: 40px;\n    opacity: 1;\n  }\n  90% {\n    background-image: url(\"assets/img/right-bird-3.png\");\n    top: 210px;\n    right: 0;\n    opacity: 1;\n  }\n  100% {\n    background-image: url(\"assets/img/right-bird-3.png\");\n    top: 210px;\n    right: -40px;\n    opacity: 0;\n  }\n}\n\@-webkit-keyframes bird-left {\n  0% {\n    background-image: url(\"assets/img/broken-egg.png\");\n    top: 210px;\n    opacity: 1;\n    left: 80px;\n  }\n  20% {\n    background-image: url(\"assets/img/broken-egg-1.png\");\n    top: 210px;\n    opacity: 1;\n    left: 80px;\n  }\n  30% {\n    background-image: url(\"assets/img/broken-egg-2.png\");\n    top: 210px;\n    opacity: 1;\n    left: 80px;\n  }\n  60% {\n    background-image: url(\"assets/img/left-bird-1.png\");\n    top: 190px;\n    left: 70px;\n    opacity: 1;\n  }\n  70% {\n    background-image: url(\"assets/img/left-bird-2.png\");\n    top: 210px;\n    left: 40px;\n    opacity: 1;\n  }\n  90% {\n    background-image: url(\"assets/img/left-bird-3.png\");\n    top: 210px;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    background-image: url(\"assets/img/left-bird-3.png\");\n    top: 210px;\n    left: -40px;\n    opacity: 0;\n  }\n}\n\@keyframes bird-left {\n  0% {\n    background-image: url(\"assets/img/broken-egg.png\");\n    top: 210px;\n    opacity: 1;\n    left: 80px;\n  }\n  20% {\n    background-image: url(\"assets/img/broken-egg-1.png\");\n    top: 210px;\n    opacity: 1;\n    left: 80px;\n  }\n  30% {\n    background-image: url(\"assets/img/broken-egg-2.png\");\n    top: 210px;\n    opacity: 1;\n    left: 80px;\n  }\n  60% {\n    background-image: url(\"assets/img/left-bird-1.png\");\n    top: 190px;\n    left: 70px;\n    opacity: 1;\n  }\n  70% {\n    background-image: url(\"assets/img/left-bird-2.png\");\n    top: 210px;\n    left: 40px;\n    opacity: 1;\n  }\n  90% {\n    background-image: url(\"assets/img/left-bird-3.png\");\n    top: 210px;\n    left: 0;\n    opacity: 1;\n  }\n  100% {\n    background-image: url(\"assets/img/left-bird-3.png\");\n    top: 210px;\n    left: -40px;\n    opacity: 0;\n  }\n}"; }
}

export { MyComponent as g_egg };
