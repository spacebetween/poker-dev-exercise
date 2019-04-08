const { getGame } = require("../lib/gameStore");

const cardsHandler = (req, h) => {
  const game = getGame(req.params.gameId);
  const playerId = req.state.player;

  return game.players[playerId].cards;
};

module.exports = cardsHandler;
