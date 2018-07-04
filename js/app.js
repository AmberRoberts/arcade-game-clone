// Enemies our player must avoid
let Enemy = function() {
   this.sprite = 'images/enemy-bug.png';
   this.x = 15;
   this.y = 20;
 };
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
//     render() {
//       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
//     }
// };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x = this.x + (50 * dt);
  if (this.x > 500){
    this.x = 0;
  }
  // if the canvas = 500, move enemy back to 0 position
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
class Player {
  constructor() {
  this.sprite = 'images/char-horn-girl.png';
  this.x = 200;
  this.y = 400;
}
handleInput(keypress) {
  if (keypress ==  'left') {
    this.x = this.x - 50;
      if (this.x < 0){
        this.x = 0;
      }
  } else if (keypress == 'up') {
    this.y = this.y - 100;
  }
      if (this.y > 350) {
        this.y = 350;
      }
  if (keypress == 'right') {
    this.x = this.x + 50;
  }
    if (this.x > 410){
      this.x = 410;
    }
  if (keypress == 'down') {
    this.y = this.y + 100;
  }
  // add size stipulation via bugs
}
render() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
};
// This class requires an update(), render() and
// a handleInput() method.
// switch statement also possible here

Player.prototype.update = function(dt) {
}

// collision(enemy, player) {
//
// }

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [new Enemy()];
let player = new Player();

// TODO: WHY won't this work??
// function newEnemy() {
//   if (allEnemies <= 2) {
//     allEnemies.push(new Enemy);
//   }
// }



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// add star or shield so when hit: if hasShield = true, removeShield keep going - else backToStart

// if (this.y = -50) {
//   winner();
// }
