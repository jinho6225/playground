const expect = require("chai").expect;

//peding -> xdescribe() or remove callback function
describe("GAME INSTANCE FUNCTION", () => {
  describe("checkGameStatus", () => {
    //peding -> xit() or remove callback function
    const checkGameStatus = require("../game_logic/game_instance.js")
      .checkGameStatus;
    it("should tell me when the game is over", () => {
      let players = [
        {
          ships: [
            {
              locations: [[0, 0]],
              damage: [[0, 0]],
            },
          ],
        },
      ];
      let actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });

  describe("takeTurn", () => {
    const takeTurn = require("../game_logic/game_instance").takeTurn;
    let guess, player;

    beforeEach(() => {
      guess = function () {
        return [0, 0];
      };
      player = {
        ships: [
          {
            locations: [[0, 0]],
            damage: [],
          },
        ],
      };
    });

    it("should return false if the game ends", () => {
      let actual = takeTurn(player, guess);
      expect(actual).to.be.false;
    });
  });

  function saveGame(callback) {
    setTimeout(() => {
      callback();
    }, 1000);
  }

  describe("saveGame", () => {
    it("should update save status", (done) => {
      let status = "game not saved...";
      saveGame(() => {
        status = "game saved!";
        expect(status).to.equal("game saved!");
        done();
      });
    });
  });
});
