import { Component, h, Host, Prop, State, Event, EventEmitter, Listen, Watch } from '@stencil/core';

@Component({
  tag: 'g-app',
  styleUrl: 'app.scss',
  shadow: true
})
export class MyComponent {
  @Prop() devMode: boolean = false;

  @State() paused: boolean = false;
  /**
   * for dev-mode
   */
  @State() gameStarted: boolean = false;
  @State() score: number = 0;
  @State() lose: number = 0;
  @State() isWon: boolean = false;
  @State() showRabbit: boolean = false;
  @State() isGameOver: boolean = false;
  @State() eggDuration: number = 6000;
  @State() eggs: number = 0;
  @State() eggMoveDuration = 1000;
  @State() isDifficult: boolean;

  /**
   * for dev-mode
   */
  @Event() gamePaused: EventEmitter<boolean>;
  @Event() gameOver: EventEmitter<void>;
  @Event() gameWon: EventEmitter<void>;

  gameTimer: number;
  eggsContainer: HTMLDivElement;
  loseContainer: HTMLDivElement;
  wolf: HTMLGWolfElement;

  @Watch('isGameOver')
  gameOverWatcher() {
    this.deleteTimer();
    this.gameOver.emit();
  }

  @Watch('isWon')
  gameWonWatcher() {
    this.deleteTimer();
    this.gameWon.emit();
  }

  @Watch('eggDuration')
  changeTimer() {
    if (this.gameStarted) {
      this.showRabbit = true;
      this.showRabitDuration();
    }

    this.deleteTimer();
    this.createTimer();
  }

  showRabitDuration() {
    let rabbit = setTimeout(() => {
      this.showRabbit = false;
      clearTimeout(rabbit);
    }, 1200);
  }

  @Watch('eggs')
  increaseSpeed() {
   let offset = this.isDifficult ? 0 : 10;
    switch (this.eggs) {
      case 1 :
        this.eggDuration = 6000;
        break;
      case (6 + offset):
        this.eggDuration = 5000;
        break;
      case (11 + offset * 2):
        this.eggDuration = 4500;
        this.eggMoveDuration = 900;
        break;
      case (21 + offset * 3):
        this.eggDuration = 4000;
        this.eggMoveDuration = 800;
        break;
      case (26 + offset * 5):
        this.eggDuration = 3000;
        this.eggMoveDuration = 600;
        break;
      case (31 + offset * 6):
        this.eggDuration = 2700;
        this.eggMoveDuration = 900;
        break;
      case (36 + offset * 8):
        this.eggDuration = 2400;
        this.eggMoveDuration = 800;
        break;
      case (46 + offset * 9):
        this.eggDuration = 1800;
        this.eggMoveDuration = 600;
        break;
      case (56 + offset * 12):
        this.eggDuration = 1800;
        this.eggMoveDuration = 900;
        break;
      case (66 + offset * 14):
        this.eggDuration = 1600;
        this.eggMoveDuration = 800;
        break;
      case (81 + offset * 15):
        this.eggDuration = 1200;
        this.eggMoveDuration = 600;
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
    let newEgg = document.createElement('G-EGG') as HTMLGEggElement;
    newEgg.nest = this.generateRandomNest();
    newEgg.wolfPosition = this.wolf.position;
    newEgg.eggMoveDuration = this.eggMoveDuration;
    this.eggsContainer.append(newEgg);
    this.eggs++;
  }

  createTimer() {
    this.gameTimer = window.setInterval(() => {
      this.createEgg();
    }, this.eggDuration);
  }

  deleteTimer() {
    window.clearInterval(this.gameTimer)
  }

  resetGame() {
    this.gameStarted = false;
    this.eggDuration = 6000;
    this.eggMoveDuration = 1000;
    this.isGameOver = false;
    this.isWon = false;
    this.paused = false;
    this.eggs = 0;
    this.eggsContainer.innerHTML = '';
    this.score = 0;
    this.lose = 0;
    this.loseContainer.innerHTML = '';
    this.deleteTimer();
  }

  continueGame() {
    this.paused = false;

    this.createTimer();
  }

  startGame(isDiffucult) {
    this.isDifficult  = isDiffucult;
    this.resetGame();

    this.gameStarted = true;
    this.createEgg();
    this.createTimer();
  }

  @Listen('keydown', {target: 'document' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.code == 'Space') {
      this.startGame(true);
    }
  }

  pauseGame() {
    this.paused = !this.paused;
    this.gamePaused.emit(this.paused);
    this.paused ? this.deleteTimer() : this.continueGame();
  }

  minusPoint() {
    if (this.lose <= 3) {
      let img = document.createElement('IMG') as HTMLImageElement;
      img.src = "assets/img/minuspoint.png";
      img.height = 30;
      img.width = 30;
      this.loseContainer.append(img);
    }
  }

  @Listen('eggIsCathced', { target: 'document' })
  eggCatchedHandler(e) {
    if (e.detail.catched) {
      this.score++;
      if (this.score === 51) {
        this.isWon = true;
      }
      e.detail.el.remove();
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
        <div class="game-container-center">
          <div class="console"></div>
          {/* <div class="border">
            <div class="border-left"></div>
            <div class="border-center">
              <div class="title">Go Nuts for Gogicha</div>
            </div>
            <div class="border-right"></div>
          </div> */}
          <div class="screen">
            {/* <div class="score">{ String(this.score).padStart(4, '0') } </div> */}
            <div class="score">{ String(this.score).padStart(3, '0') } </div>
            <div class="lose" ref={(el) => this.loseContainer = el as HTMLDivElement}></div>
            {
              this.isGameOver && <div class="game-over">შენ მეისპე</div>
            }
            {
              this.isWon && <div class="game-won">YOU WON</div>
            }
            <div class={this.showRabbit ? 'rabbit' : ''}></div>
            <g-wolf ref={(el) => this.wolf = el as HTMLGWolfElement}></g-wolf>
            <div class="eggs-container" ref={(el) => this.eggsContainer = el as HTMLDivElement}></div>
          </div>
        </div>
        <div class="clearfix"></div>
      </Host>
    );
  }
}
