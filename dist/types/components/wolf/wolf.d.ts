import { EventEmitter } from '../../stencil-public-runtime';
import { WolfPosition } from './wolf.model';
export declare class MyComponent {
    position: WolfPosition;
    directionX: string;
    directionY: string;
    wolfDirectionChange: EventEmitter<WolfPosition>;
    changeDirectionX(): void;
    changeDirectionY(): void;
    chooseHandler(e: CustomEvent): void;
    handleKeyDown(ev: KeyboardEvent): void;
    componentWillLoad(): void;
    render(): any;
}
