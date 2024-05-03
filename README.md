## GAMES!
A website where you can play 3 different games.

### Website Overall Style
We wanted the website to look intentionally low effort as it gives an overall cuter theme with the drawn icons.

With more time we are planning to add fake handdrawn ads and easter eggs with animations.

### Sliding Puzzle
Made by Judith Nuno Garcia.

### Magic Bakery
Inspired by Cookie Clicker, click the cake to gain cake stock it, sell your cake to insatiable cake connoisseurs, and buy power ups with your earnings to increase your cake output.
Made by Krystal Chau.

There is no "win" to Magic Bakery. The goal is to click to ones content just as one plays Cookie Clicker. The more you play the easier it is to gain cake.

With more time I planned to make more power ups, add different varieties of cake that sells for higher costs, and helping hands that would collect cake while the user is idle.

### Dinosaur Run
Originally by [georgephillips](https://github.com/CloudCannon/Dinosaur-Chrome-Game).
The classic Dinosaur Chrome Game only with an internet connection!

#### Scripts

[`game-objects.js`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/master/js/objects/game-object.js)

This script is used to make draw and initialize GameObject so that they may be able to collide with other objects. For instance, the dinosaur, cactus, and score scripts all use GameObject.

[`dinosaur.js`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/master/js/objects/dinosaur.js), [`cactus.js`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/master/js/objects/cactus.js), [`score.js`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/master/js/objects/score.js), and [`background.js`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/master/js/objects/background.js)

These scripts are used to draw out the shape of the object on the canvas. They all consist of lengthy block of code, seen [here](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/84972abdfab8d913bd173fa4304782847bea4673/js/objects/dinosaur.js#L71), that fill out the shape of said object one rectangle at a time. This also means that most of the objects on this game's page are made with javascript and simply added onto the html.

[`game.js`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/master/js/game.js)

This script is where the objects are all made and the game logic is actually played. 
- [`updateCacti()`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/84972abdfab8d913bd173fa4304782847bea4673/js/game.js#L66) is where the cactus's arm lengths and size are randomized and the cactus is moved on the screen.
- [`removeOldCacti()`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/84972abdfab8d913bd173fa4304782847bea4673/js/game.js#L88) is where a cactus is deleted off-screen
- [`checkCactusHit()`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/84972abdfab8d913bd173fa4304782847bea4673/js/game.js#L113) is where the dinosaur dies after touching a cactus
- [`step()`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/84972abdfab8d913bd173fa4304782847bea4673/js/game.js#L128) is the game loop which checks all of the above and completes animations

[`helpers.js`](https://github.com/CloudCannon/Dinosaur-Chrome-Game/blob/master/js/helpers.js) simply consists of a single helper function `rand()` that randomizes number. It is used in both `background.js` and `game.js`, so the function could not be moved into another file.

#### Changes Made
Mostly made style changes to the html (adding the header and footer), changed all `vars` to `let` or `const`, and made a few code clean ups. 




