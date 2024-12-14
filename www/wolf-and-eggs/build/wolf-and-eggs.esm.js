import { b as bootstrapLazy } from './index-7b165c38.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-0ddd73d5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["g-app",[[1,"g-app",{"devMode":[4,"dev-mode"],"paused":[32],"gameStarted":[32],"score":[32],"lose":[32],"isWon":[32],"showRabbit":[32],"isGameOver":[32],"eggDuration":[32],"eggs":[32],"eggMoveDuration":[32],"isDifficult":[32]},[[4,"keydown","handleKeyDown"],[4,"eggIsCathced","eggCatchedHandler"]]]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["g-egg",[[1,"g-egg",{"nest":[1026],"wolfPosition":[1,"wolf-position"],"eggMoveDuration":[2,"egg-move-duration"],"step":[32],"birdIsShown":[32]},[[4,"gamePaused","pauseGame"],[4,"gameOver","deleteTimer"],[4,"gameWon","deleteTimer"],[4,"wolfDirectionChange","catchEggHandler"]]]]],["g-wolf",[[1,"g-wolf",{"position":[1025],"directionX":[32],"directionY":[32]},[[4,"gChooseDirection","chooseHandler"],[4,"keydown","handleKeyDown"]]]]],["nav-button",[[1,"nav-button",{"direction":[1]}]]]], options);
});
