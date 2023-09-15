class Obstacle {
  constructor(gameScreen, left, top, height, width) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");

    this.element.src = "../images/redCar.png";
    this.element.style.position = "absolute";

    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;

    this.gameScreen.appendChild(this.element);
  }
  
  move() {
    this.updatePosition();
    this.element.style.top = `${this.top}`
  }
  updatePosition() {
    this.top += 1
  }
}
