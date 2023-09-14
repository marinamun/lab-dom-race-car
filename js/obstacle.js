class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 300 + 70);
    this.top = 600;
    this.width = 100;
    this.height = 150;
    this.element = document.createElement("img");

    this.element.src = "../images/redCar.png";
    this.element.style.position = "absolute";

    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;

    this.gameScreen.appendChild(this.element);
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  move() {
    this.top += 3;
    this.updatePosition();
  }
}
