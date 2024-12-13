import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyComponent {
    direction: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';
    gChooseDirection: EventEmitter;
    chooseDirection(): void;
    render(): any;
}
