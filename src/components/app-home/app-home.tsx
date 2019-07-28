import { Component, h } from '@stencil/core';
import style from './app-home.css.json'
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {

  render() {
    return (
      <div class={style.gameContainer}>

      </div>
    );
  }
}
