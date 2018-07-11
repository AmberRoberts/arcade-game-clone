// ***** Create Entity class as referenced in engine.js to add Enemies and Player to gameboard
class Entity {
  constructor() {
    this.sprite = "images/";
    this.x = 2;
    this.y = 5;
  }

  // ***** Draw the Entities on screen *****
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }
}

// ***** Enemies our player must avoid *****
class Enemy extends Entity {
  constructor(x, y) {
    super();
    this.sprite += "enemy-bug.png";
    this.x = x;
    this.y = y;
    this.speed = 3 + Math.random() * 3;
  }


  // ***** Update the enemy's position *****
  // Parameter: dt, a time delta between ticks. Movement multiplied by DT to ensure the game runs at the same speed for all computers

  update(dt) {
    // ***** Configure enemy speed and reset *****
    this.x += this.speed * dt;

// ***** Collision Checker *****
// when enemy (this) is close enough to player's x/y location, move player back to start!
    if (player.x - this.x <= 0.25 && player.x - this.x > -0.25 && this.y === player.y) {
       console.log('SMOOSH!!!');
       player.x = 2;
       player.y = 5;
       // console.log(player.x player.y this.x this.y);
       // player.x = 202;
       // player.y = 400;
   }

    if (this.x > 5) {
      this.x = -1;
    }
  }
}

// ***** Create Player class *****
// This class uses an update(), render() and
// a handleInput() method.

class Player extends Entity {
  constructor() {
    super(); // super constructor to alter the original class
    this.sprite += "char-horn-girl.png"; // adds character image
    this.x = 2;
    this.y = 5;
    this.lives = 5; // if collides with bug, totalLives -- via textContent in checkCollisions
  }

  // ***** keypress input for movement *****
  handleInput(keypress) {
    if (keypress == "left") {
      this.x = this.x - 1;
      if (this.x < 0) {
        this.x = 0;
      }
    } else if (keypress == "right") {
      this.x = this.x + 1;
      if (this.x > 4) {
        this.x = 4;
      }
    } else if (keypress == "down") {
      this.y = this.y + 1;
      if (this.y > 5) {
        this.y = 5;
      }
    } else if (keypress == "up") {
      this.y = this.y - 1;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  }

  update(dt) {
    // ***** Winning *****
    if (this.y === 0) {
      console.log("Huzzah! Our hero has arrived!");
      let modal = document.getElementById("winnerModal");
      let button = document.getElementById("again");

      // ***** Winner modal *****
      modal.style.display = "block";
      button.addEventListener("click", function(e) {
        modal.style.display = "none";
        player.x = player.x;  // Starts player over in the x location they ended in
        player.y = 5;
        // Enemy.speed
        // document.querySelector(".lives").textContent = totalLives;
      });
    }
  }
}

// ***** Instantiate Enemy and Player objects *****

// Create an array of allEnemies with 3 bug entities, for each new Enemy, start them off the screen at x -1
const allEnemies = [...Array(3)].map((_, i) => new Enemy(-1, i + 1));
let player = new Player();

// ***** Sends Player keypresses to Player.handleInput() method. *****
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    32: "space"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
