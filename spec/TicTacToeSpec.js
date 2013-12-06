describe("Tic Tac Toe", function () {

  it("should have a board", function () {
    var game = new TicTacToe();
    expect(game.getBoard()).toBeDefined();
  });

  it("the board must have 9 positions", function () {
    var game = new TicTacToe();
    expect(game.getBoard().length).toEqual(9);
  });

  it("the first player plays with an X", function () {
    var game = new TicTacToe();
    expect(game.getCurrentPlayer()).toEqual("x");
  });

  describe("#mark", function () {
    it("should marks the 5th position of the board", function () {
      var game = new TicTacToe();
      game.mark(5);

      expect(game.getBoard()[5]).toEqual("x");
    });

    it("should not override a marked position in the board", function () {
      var game = new TicTacToe();
      game.mark(5);
      game.mark(5);

      expect(game.getBoard()[5]).toEqual("x");
    });
  });

  describe("#winner", function () {

    // THE BOARD
    // 0 | 1 | 2
    //---|---|---
    // 3 | 4 | 5
    //---|---|---
    // 6 | 7 | 8


    it("should calculate the winner in a horizontal line", function () {
      var game = new TicTacToe();

      // x | x | x
      //---|---|---
      // o | o |
      //---|---|---
      //   |   |

      game.mark(0);
      game.mark(3);
      game.mark(1);
      game.mark(4);
      game.mark(2);

      expect(game.getWinner()).toBeDefined();
      expect(game.getWinner()).toEqual("x");
    });

    it("should calculate the winner in a vertical line", function () {
      var game = new TicTacToe();

      // x | o | x
      //---|---|---
      // x | o |
      //---|---|---
      //   | o |

      game.mark(0);
      game.mark(1);
      game.mark(2);
      game.mark(4);
      game.mark(3);
      game.mark(7);

      expect(game.getWinner()).toBeDefined();
      expect(game.getWinner()).toEqual("o");
    });

    it("should calculate the winner in a diagonal line", function () {
      var game = new TicTacToe();

      // o | o | x
      //---|---|---
      //   | x |
      //---|---|---
      // x |   |

      game.mark(2);
      game.mark(1);
      game.mark(4);
      game.mark(0);
      game.mark(6);

      expect(game.getWinner()).toBeDefined();
      expect(game.getWinner()).toEqual("x");
    });
  });
});
