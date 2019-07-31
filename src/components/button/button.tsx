import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'nav-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class MyComponent {
  @Prop() direction: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';
  @Event() gChooseDirection: EventEmitter;

  chooseDirection() {
    console.log('this.direction');
    this.gChooseDirection.emit(this.direction);
  }

  render() {
    return(
      <Host class={ this.direction } onClick={ this.chooseDirection.bind(this) }>
        <button></button>
        <div class="nav-container">
          <div class="nav"></div>
        </div>
      </Host>
    );
  }
}
