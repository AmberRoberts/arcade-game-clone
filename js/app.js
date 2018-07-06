// ***** Create Entity class as referenced in engine.js to add Enemies and Player
  class Entity {
    constructor() {
      this.sprite = 'images/';
      this.x = 2;
      this.y = 5;
    }

    // ***** Draw the Entities on screen *****
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
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
      this.x = this.x + (dt);
      // if the Enemy reaches the end of the canvas, move Enemy back to start to scurry again.
      if (this.x > 5){
        this.x = -1;
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
  this.x = 2;
  this.y = 5;
}

// ***** keypress input for movement *****
handleInput(keypress) {
  if (keypress ==  'left') {
    this.x = this.x - 1;
      if (this.x < 0){
        this.x = 0;
      }
    }

  else if (keypress == 'right') {
    this.x = this.x + 1;
      if (this.x > 4) {
        this.x = 4;
      }
  }

  else if (keypress == 'down') {
    this.y = this.y + 1;
      if (this.y > 5) {
        this.y = 5;
      }
  }

  else if (keypress == 'up') {
    this.y = this.y - 1;
  }

  // else if (keypress == 'space') {
  //   this.y = this.y - 2;
  // }

  // winning();
}
update(dt) {
  if (this.y == 0){
    // modal();
    console.log('Huzzah! One hero has arrived!');
  }
}
};

class PlayerTwo extends Entity {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
    this.x = 1;
    this.y = 5;
  }

  update(dt) {
      if (this.y == 0){
        // modal();
        console.log('Your princess is in another castle');
      }
  }
  handleInput(keypress) {
    if (keypress ==  'left') {
      this.x = this.x - 1;
        if (this.x < 0){
          this.x = 0;
        }
      }

    else if (keypress == 'right') {
      this.x = this.x + 1;
        if (this.x > 4) {
          this.x = 4;
        }
    }

    else if (keypress == 'down') {
      this.y = this.y + 1;
        if (this.y > 5) {
          this.y = 5;
        }
    }

    else if (keypress == 'up') {
      this.y = this.y - 1;
    }

    // else if (keypress == 'space') {
    //   this.y = this.y - 2;
    // }

    // winning();
  }
};


// ***** Winning *****

// winning happens in update(dt)

// function winning() {
//   if (Player.y == 0) {
//     console.log('winning');
//   }
// }


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

const allEnemies = [...Array(3)].map((_, i) => new Enemy(0, i + 1));
let player = new Player();
let player2 = new PlayerTwo();



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

// ***** PlayerTwo keycodes *****
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        65: 'left',
        87: 'up',
        68: 'right',
        83: 'down',
        // 32: 'space'
    };

    player2.handleInput(allowedKeys[e.keyCode]);
});

// // TODO: add star or shield so when hit: if hasShield = true, removeShield keep going - else backToStart, reach the top, get a point, and game resets and speed increases.



// ***** Enemies our player must avoid *****
// let Enemy = function() {
//    this.sprite = 'images/enemy-bug.png';
//    this.x = 15;
//    this.y = 20;
//  };
