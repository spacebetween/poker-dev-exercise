const { addPlayer } = require("../lib/gameStore");

const joinGameHandler = async (req, h) => {
  const gameState = addPlayer(req.payload.gameId, req.state.player);
  return h.redirect(`/games/${req.payload.gameId}`);
};

module.exports = joinGameHandler;
