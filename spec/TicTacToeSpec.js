describe("TicTacToe", function () {

  describe("the game board", function () {
    it("should have 9 positions", function () {
      var game = new TicTacToe();
      expect(game.getBoard().length).toEqual(9);
    });
  });

  describe("#mark", function () {
    it("should marks the 5th position of the board with an X", function () {
      var game = new TicTacToe();
      game.mark("x",5);

      expect(game.getBoard()[5]).toEqual("x");
    });
  });

  describe("The Game itself", function () {
    it("should calculate the winner in a horizontal line", function () {
      var game = new TicTacToe();

      game.mark("x", 0);
      game.mark("x", 1);
      game.mark("x", 2);

      expect(game.getWinner()).toBeDefined();
      expect(game.getWinner()).toEqual("x");
    });

    it("should calculate the winner in a vertical line", function () {
      var game = new TicTacToe();

      game.mark("o", 1);
      game.mark("o", 4);
      game.mark("o", 7);

      expect(game.getWinner()).toBeDefined();
      expect(game.getWinner()).toEqual("o");
    });

    it("should calculate the winner in a diagonal line", function () {
      var game = new TicTacToe();

      game.mark("x", 2);
      game.mark("x", 4);
      game.mark("x", 6);

      expect(game.getWinner()).toBeDefined();
      expect(game.getWinner()).toEqual("x");
    });
  });
});
