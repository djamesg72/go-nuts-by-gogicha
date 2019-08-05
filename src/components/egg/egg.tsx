import { Component, Element, Prop, State, h, Host, Watch, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'g-egg',
  styleUrl: 'egg.scss',
  shadow: true
})
export class MyComponent {
  @Element() el: HTMLGEggElement;

  @Prop({ mutable: true }) nest: number;
  @Prop() wolfPosition: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  @Prop() eggMoveDuration = 1000;

  @State() step = 1;

  @Event() eggIsCathced: EventEmitter;

  stepStyleObject: {};
  eggMoveTimer: number;
  nestTitle = {
    1: 'left-top',
    2: 'right-top',
    3: 'left-bottom',
    4: 'right-bottom',
  }
  isCatching: boolean;

  @Watch('eggMoveDuration')
  changeTimer() {
    console.log('EGG change game duration EGG ', this.eggMoveDuration);
    clearInterval(this.eggMoveTimer);
    this.startEggMoving();
  }

  checkCathcing(position) {
    return this.isCatching = this.nestTitle[this.nest] === position
      ? true : false;
  }

  @Listen('gamePaused', { target: 'document' })
  pauseGame(e) {
    if (e.detail) {
      clearInterval(this.eggMoveTimer);
    } else {
      this.startEggMoving();
    }
  }

  @Listen('gameOver', { target: 'document' })
  @Listen('gameWon', {target: 'document'})
  deleteTimer() {
    clearInterval(this.eggMoveTimer);
  }

  @Listen('wolfDirectionChange', {target : 'document'})
  catchEggHandler(e) {
    this.checkCathcing(e.detail);
  }

  startEggMoving() {
    console.log('EGG duration EGG ', this.eggMoveDuration);
    this.eggMoveTimer = window.setInterval(() => {
        if (this.step === 6) {
          clearInterval(this.eggMoveTimer);
          this.el.remove;
        } else {
          if (this.step === 5) {
            if (this.isCatching) {
              this.eggIsCathced.emit({
                catched: true,
                el: this.el
              });
            } else {
              this.eggIsCathced.emit({
                catched: false,
                el: this.el
              });
            }
          }
          this.step++;
        }
    }, this.eggMoveDuration);
  }

  setDegree(degree)  {
    if (this.nest === 2 || this.nest === 4) {
      return -1 * degree
    } else return degree
  }

  generateStyleObject() {
    let xSide = (this.nest === 1 || this.nest === 3)
      ? 'left'
      : 'right';
    let yOffset = (this.nest === 3 || this.nest === 4)
      ? (this.nest === 4 )
        ? 58
        : 60
      : (this.nest === 2 )
        ? -2
        : 0;

    this.stepStyleObject = {
      1: {
        [xSide]: '22px',
        top: `${ 75 + yOffset }px`,
        transform: `rotate(${this.setDegree(45)}deg)`,
      },
      2: {
        [xSide]: '35px',
        top: `${ 84 + yOffset}px`,
        transform: `rotate(${this.setDegree(90)}deg)`
      },
      3: {
        [xSide]: '50px',
        top: `${ 93 + yOffset}px`,
        transform: `rotate(${this.setDegree(135)}deg)`
      },
      4: {
        [xSide]: '65px',
        top: `${ 102 + yOffset}px`,
        transform: `rotate(${this.setDegree(-90)}deg)`
      },
      5: {
        [xSide]: '80px',
        top: `${ 111 + yOffset}px`,
        transform: `rotate(${this.setDegree(-25)}deg)`
      },
      6: {
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
    // console.log('render');
    return(
      <Host class={ this.nestTitle[this.nest] } style={this.stepStyleObject[this.step]}>
        <img src="assets/img/egg.png" alt="egg"/>
      </Host>
    );
  }
}
