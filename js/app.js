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

  // TODO: ***** Check for collision *****

  // function checkCollisions() {
  //   if ((Enemy.x === Player.x) && (Enemy.y === Player.y)){
  //   console.log('Smoosh!');
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
      // ***** Configure enemy speed and reset *****
      // this.x = this.x + (dt);
      // this.x = this.x + (Math.random() + 3) * (dt); // they stick together in a pack but speed up this way... why?
            this.x = this.x + (Math.floor(Math.random() + .033)) + (dt); // this makes them leapfrog -- why?

      // if the Enemy reaches the end of the canvas, move Enemy back to start to scurry again.
      if (this.x > 5) {
        this.x = -1;
      }
  }
};


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
      if (this.x < 0) {
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
}
update(dt) {
  if (this.y == 0){
    console.log('Huzzah! One hero has arrived!');
    // Flash a star and text to save player two?
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
        console.log('Your princess is in another castle');
        // modal();
        // reset
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
  }
};

// ***** Winning currently in update() *****

// ***** Instantiate Enemy and Player objects *****

const allEnemies = [...Array(3)].map((_, i) => new Enemy(-1, i + 1));
let player = new Player();
let player2 = new PlayerTwo(); // add to a function to come in after player 1 gets to top?


// ***** Sends Player keypresses to Player.handleInput() method. *****
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
    };

    player2.handleInput(allowedKeys[e.keyCode]);
});

// // TODO: add star or shield so when hit: if hasShield = true, removeShield keep going - else backToStart, reach the top, get a point, and game resets and speed increases.



// ***** Original way I added bugs *****
// let bug1 = new Enemy(.5, 1);
// let bug2 = new Enemy(-2, 2);
// let bug3 = new Enemy(-2.5, 3);
// let bug4 = new Enemy(-3.75, 1)
// const allEnemies = [bug1, bug2, bug3, bug4];
