import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyComponent {
    el: HTMLGEggElement;
    nest: number;
    wolfPosition: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
    eggMoveDuration: number;
    step: number;
    birdIsShown: boolean;
    eggIsCathced: EventEmitter;
    stepStyleObject: {};
    eggMoveTimer: number;
    nestTitle: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    isCatching: boolean;
    xSide: string;
    changeTimer(): void;
    checkCatching(position: any): boolean;
    pauseGame(e: any): void;
    deleteTimer(): void;
    catchEggHandler(e: any): void;
    showBird(): void;
    startEggMoving(): void;
    setDegree(degree: any): any;
    generateStyleObject(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    render(): any;
}
