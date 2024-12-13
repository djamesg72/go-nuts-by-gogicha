import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyComponent {
    devMode: boolean;
    paused: boolean;
    /**
     * for dev-mode
     */
    gameStarted: boolean;
    score: number;
    lose: number;
    isWon: boolean;
    showRabbit: boolean;
    isGameOver: boolean;
    eggDuration: number;
    eggs: number;
    eggMoveDuration: number;
    isDifficult: boolean;
    /**
     * for dev-mode
     */
    gamePaused: EventEmitter<boolean>;
    gameOver: EventEmitter<void>;
    gameWon: EventEmitter<void>;
    gameTimer: number;
    eggsContainer: HTMLDivElement;
    loseContainer: HTMLDivElement;
    wolf: HTMLGWolfElement;
    gameOverWatcher(): void;
    gameWonWatcher(): void;
    changeTimer(): void;
    showRabitDuration(): void;
    increaseSpeed(): void;
    generateRandomNest(): number;
    createEgg(): void;
    createTimer(): void;
    deleteTimer(): void;
    resetGame(): void;
    continueGame(): void;
    startGame(isDiffucult: any): void;
    pauseGame(): void;
    minusPoint(): void;
    eggCatchedHandler(e: any): void;
    render(): any;
}
