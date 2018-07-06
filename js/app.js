// ***** Create Entity class as referenced in engine.js to add Enemies and Player
  class Entity {
    constructor() {
      this.sprite = 'images/';
      this.x = 200;
      this.y = 500;
    }

    // ***** Draw the Entities on screen *****
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  }

  // ***** Check for collision *****
  //
  // function checkCollisions() {
  //   if ((Enemy.x === Player.x) && (Enemy.y === Player.y)){
  //   console.log('Smoosh!'); // // TODO: why does this keep repeating??
  // }
  // }

// ***** Enemies our player must avoid *****
  class Enemy extends Entity {
    constructor(x, y) {
      super();
      this.sprite += 'enemy-bug.png';
      this.x = x;
      this.y = y;
    }
    // ***** Update the enemy's position *****
    // Parameter: dt, a time delta between ticks. Movement multiplied by DT to ensure the game runs at the same speed for all computers

    update(dt) {
      // Enemy speed
      this.x = this.x + (100 * dt);
      // if the Enemy reaches the end of the canvas, move Enemy back to start to scurry again.
      if (this.x > 500){
        this.x = 0;
      }
  }
};

// Draw the enemy on the screen, required method for game


// ***** Create Player class *****
// This class uses an update(), render() and
// a handleInput() method.

class Player extends Entity {
  constructor() {
  super(); // super constructor to alter the original class
  this.sprite += 'char-horn-girl.png'; // adds character image
  this.x = 200;
  this.y = 400;
}

// ***** keypress input for movement *****
handleInput(keypress) {
  if (keypress ==  'left') {
    this.x = this.x - 50;
      if (this.x < 0){
        this.x = 0;
      }

  else if (keypress == 'right') {
    this.x = this.x + 50;
      if (this.x > 405) {
        this.x = 405;
      }
  }
  }

  else if (keypress == 'up') {
    this.y = this.y - 100;
  }

  else if (keypress == 'down') {
    this.y = this.y + 100;
      if (this.y = 400) {
        this.y = 400;
      }
  }
  // else if (keypress == 'space') {
  //   this.y = this.y - 150;
  // }

  // winning();
}
update(dt) {
  // if (this.y == 0){
  //   // modal();
  //   console.log('Huzzah! Our Hero has succeeded in its quest!');
  // }
}
};


// ***** Winning *****

function winning() {
if (Player.y <= 0) {
  console.log('winning');
}
}


// ***** Check for collision *****
//
// checkCollisions(Player, Enemy) {
//   if (Enemy.x == Player.x) {
//     console.log('Squash!');
//   } else {
//     console.log('Move along');
//   }
// }

// ***** Instantiate Enemy and Player objects *****

const allEnemies = [...Array(3)].map((_, i) => new Enemy(0,i +1));
let player = new Player();



// This listens for key presses and sends the keys to Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// // TODO: add star or shield so when hit: if hasShield = true, removeShield keep going - else backToStart, reach the top, get a point, and game resets and speed increases.



// ***** Enemies our player must avoid *****
// let Enemy = function() {
//    this.sprite = 'images/enemy-bug.png';
//    this.x = 15;
//    this.y = 20;
//  };
