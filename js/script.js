window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      game.player.directionX = -1;
    } else if (event.code === "ArrowRight") {
      game.player.directionX = 1;
    }
    if (event.code === "ArrowUp") {
      game.player.directionY = -1;
    } else if (event.code === "ArrowDown") {
      game.player.directionY = 1;
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      game.player.directionX = 0;
    }
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      game.player.directionY = 0;
    }
  });
};
