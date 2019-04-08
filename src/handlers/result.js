const { getGame } = require("../lib/gameStore");

const resultHandler = (req, h) => {
  const { gameId } = req.params;
  const game = getGame(gameId);

  h.view("result", { game, gameId });
};

module.exports = resultHandler;
