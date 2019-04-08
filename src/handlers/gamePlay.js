const { allPlayersJoined, getGame } = require("../lib/gameStore");

const gamePlayHandler = async (req, h) => {
  const { gameId } = req.params;
  const game = getGame(gameId);
  if (!allPlayersJoined(game)) {
    return h.redirect(`/games/${gameId}/pending`);
  }

  // All players have joined
  // PART 1
  // Fetch 5 cards from the API, and then render them in the view
  const apiUrl = `https://deckofcardsapi.com/api/deck/${
    game.deck.id
  }/draw/?count=5`;
  // the format of the response is:
  // {
  //  "success": true,
  //  "cards": [
  //      {
  //          "image": "https://deckofcardsapi.com/static/img/KH.png",
  //          "value": "KING",
  //          "suit": "HEARTS",
  //          "code": "KH"
  //      },
  //      ...
  //  ],
  //  "deck_id":"3p40paa87x90",
  //  "remaining": 50
  //}

  // render the view
  return h.view("game", { gameId });
};

module.exports = gamePlayHandler;
