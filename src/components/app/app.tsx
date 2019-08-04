import { Component, h, Host, State, Event, EventEmitter, Listen, Watch } from '@stencil/core';

@Component({
  tag: 'g-app',
  styleUrl: 'app.scss',
  shadow: true
})
export class MyComponent {
  // @Prop({ mutable: true }) nest: string;

  @State() paused: boolean = false;
  @State() gameStarted: boolean = false;
  @State() score: number = 0;
  @State() lose: number = 0;
  @State() isGameOver: boolean = false;
  @State() eggs: number = 0;

  @Event() gamePaused: EventEmitter<boolean>;
  @Event() gameOver: EventEmitter<void>;

  eggDuration = 6000;
  gameTimer: number;
  eggsContainer: HTMLDivElement;
  loseContainer: HTMLDivElement;
  wolf: HTMLGWolfElement;

  // eggs: Array<HTMLGEggElement> = [];

  @Watch('isGameOver')
  gameOverWatcher() {
    this.deleteTimer();
    this.gameOver.emit();
  }
  @Watch('eggs')
  increaseSpeed() {
    switch (this.eggs) {
      case 5:
        console.log('change game duration');
        this.eggDuration = 6000;
        this.changeDuration();
        break;
      case 10:
        console.log('change game duration');
        this.eggDuration = 5000;
        this.changeDuration();
        break;
      case 15:
        console.log('change game duration');
        this.eggDuration = 4000;
        this.changeDuration();
        break;
      case 20:
        console.log('change game duration');
        this.changeDuration();
        this.eggDuration = 3000
        break;
  }
 }

  generateRandomNest() {
    const minNestIndex = 1;
    const maxNestIndex = 4;
    let rand = minNestIndex + Math.random() * (maxNestIndex + 1 - minNestIndex);
    return Math.floor(rand);
  }

  createEgg() {
    if (this.eggs < 100) {
      let newEgg = document.createElement('G-EGG') as HTMLGEggElement;
      // newEgg.nest = 2;
      newEgg.nest = this.generateRandomNest();
      newEgg.wolfPosition = this.wolf.position;
      this.eggsContainer.append(newEgg);
      this.eggs++;
    }
  }

  changeDuration() {
    this.deleteTimer();
    this.createTimer();
  }

  createTimer() {
    this.gameTimer = window.setInterval(() => {
      console.log('hi');
      this.createEgg();
      console.log('egg', this.eggs);
    }, this.eggDuration);
  }

  deleteTimer() {
    window.clearInterval(this.gameTimer)
  }

  resetGame() {
    this.gameStarted = true;
    this.score = 0;
    this.lose = 0;
    this.loseContainer.innerHTML = '';
    this.deleteTimer;
    this.isGameOver = false;
    this.eggs = 0;
    this.eggsContainer.innerHTML = '';
    this.paused = false;
    this.eggDuration = 6000;
  }

  continueGame() {
    this.paused = false;

    // this.createEgg();
    this.createTimer();
  }

  startGame() {
    this.resetGame();

    this.createEgg();
    this.createTimer();
  }

  pauseGame() {
    this.paused = !this.paused;
    this.gamePaused.emit(this.paused);
    console.log('PAUSED');
    this.paused ? this.deleteTimer() : this.continueGame();
  }

  minusPoint() {
    if (this.lose <= 3) {
      let img = document.createElement('IMG') as HTMLImageElement;
      img.src = "assets/img/minuspoint.png";
      this.loseContainer.append(img);
    }
  }

  @Listen('eggIsCathced', { target: 'document' })
  eggCatchedHandler(e) {
    if (e.detail.catched) {
      this.score++;
      e.detail.el.remove(); // TODO: remove states for broken
    } else {
      this.lose++;
      if (this.lose === 3) {
        this.isGameOver = true;
      }
      this.minusPoint();
    }
  }

  render() {
    return(
      <Host class="game-container">
        <div class="game-container-left">
        <nav-button direction="left-top"></nav-button>
        <nav-button direction="left-bottom"></nav-button>
      </div>

      <div class="game-container-center">
        <div class="console"></div>
        <div class="border">
          <div class="border-left"></div>
          <div class="border-center">
            <div class="title">НУ, ПОГОДИ!</div>
          </div>
          <div class="border-right"></div>
        </div>
        <div class="screen">
          <div class="score">{ String(this.score).padStart(4, '0') } </div>
          <div class="lose" ref={(el) => this.loseContainer = el as HTMLDivElement}></div>
          {
            this.isGameOver && <div class="game-over">GAME OVER</div>
          }
          <g-wolf ref={(el) => this.wolf = el as HTMLGWolfElement}></g-wolf>
          <div class="eggs-container" ref={(el) => this.eggsContainer = el as HTMLDivElement}></div>
        </div>
      </div>

      <div class="game-container-right">
        <button onClick={ this.startGame.bind(this) }> НОВАЯ ИГРА</button>
        { this.gameStarted &&
            <button onClick={ this.pauseGame.bind(this) }> {this.paused? 'ПРОДОЛЖИТЬ' : 'ПАУЗА'} </button>
        }
        <nav-button direction="right-top"></nav-button>
        <nav-button direction="right-bottom"></nav-button>
      </div>
      </Host>
    );
  }
}
