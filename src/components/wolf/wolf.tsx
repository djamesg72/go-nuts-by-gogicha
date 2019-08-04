import { Component, Prop, State, h, Listen, Watch, Event, EventEmitter } from '@stencil/core';
import { WolfPosition } from './wolf.model'

@Component({
  tag: 'g-wolf',
  styleUrl: 'wolf.scss',
  shadow: true
})
export class MyComponent {
  @Prop({ mutable: true }) position: WolfPosition = 'left-top';

  @State() directionX: string = this.position.split('-')[0];
  @State() directionY: string = this.position.split('-')[1];

  @Event() wolfDirectionChange: EventEmitter<WolfPosition>

  @Watch('directionX')
  changeDirectionX() {
    this.position = `${this.directionX}-${this.directionY}` as WolfPosition;
    this.wolfDirectionChange.emit(this.position);
  }

  @Watch('directionY')
  changeDirectionY() {
    this.position = `${this.directionX}-${this.directionY}` as WolfPosition;
    this.wolfDirectionChange.emit(this.position);
  }

  @Listen('gChooseDirection', { target: 'document' })
  chooseHandler(e: CustomEvent) {
    let tempDirection = e.detail.split('-');
    this.directionX = tempDirection[0];
    this.directionY = tempDirection[1];
  }

  @Listen('keydown', {target: 'document' })
  handleKeyDown(ev: KeyboardEvent) {
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
    console.log('wolf', this.position);
    this.wolfDirectionChange.emit(this.position);
  }

  render() {
    return(
      <div class={ this.position }>
      </div>
    );
  }
}
