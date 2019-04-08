const { allPlayersExchanged } = require("../lib/gameStore");

const exchangeCheckHandler = (req, h) => {
  if (!allPlayersExchanged(req.params.gameId)) {
    return h.response("Waiting for all players to exchange").code(202);
  }

  return h.response("OK");
};

module.exports = exchangeCheckHandler;
