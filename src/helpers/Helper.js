class Helper {
  static randomizeBoard(player) {
    player.reset();
    for (let i = 0; i < player.shipsList.length; i++) {
      while (player.shipsList[i].length > 0) {
        const n = Math.floor(Math.random() * 100);
        const ship = player.shipsList[i][0];
        const rotate = Math.random() > 0.5;
        if (rotate) ship.rotate();
        if (player.board.place(ship, [Math.floor(n / 10), n % 10]))
          player.shipsList[i].shift();
      }
    }
  }
}

export default Helper;
