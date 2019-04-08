const { isReadyToStart } = require("../lib/gameStore");

const gamePlayHandler = async (req, h) => {
  const { gameId } = req.params;
  if (!isReadyToStart(gameId)) {
    return h.redirect(`/games/${gameId}/pending`);
  }

  // all players have joined - fetch the cards from the deck, deal them out to the players and then
  // render the view
  return h.view("game", { gameId });
};

module.exports = gamePlayHandler;
