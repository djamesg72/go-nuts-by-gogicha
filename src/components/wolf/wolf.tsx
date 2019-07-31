import { Component, Prop, h, Listen } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'g-wolf',
  styleUrl: 'wolf.scss',
  shadow: true
})
export class MyComponent {
  @Prop() position: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom';

  @Listen('gChooseDirection', { target: 'document' })
  chooseHandler(e: CustomEvent) {
    this.position = e.detail;
  }

  render() {
    return(
      <div class={ this.position }>

      </div>
    );
  }
}
