class Game {
  // code to be added
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");

    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.player = new Player(this.gameScreen, 220, 520, 50, 100);
    this.obstacle = new Obstacle(this.gameScreen);
  }
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver === true) {
      return;
    }
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    this.player.move();
  }
}
