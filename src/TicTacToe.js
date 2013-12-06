function TicTacToe() {

  var board = ["","","","","","","","",""];
  var winner = undefined;
  var currentPlayer = "x";

  this.getBoard = function() {
    return board;
  };

  this.mark = function (position) {
    if(board[position] !== "x" && board[position] !== "o") {
      board[position] = currentPlayer;
      changeCurrentPlayer();
      calculateWinner();
    }
  };

  this.getWinner = function () {
    return winner;
  };

  this.getCurrentPlayer = function () {
    return currentPlayer;
  };

  function changeCurrentPlayer() {
    if (currentPlayer === "x") {
      currentPlayer = "o";
    } else {
      currentPlayer = "x";
    }
  };

  function calculateWinner () {

    //horizontal
    if ( (board[0] === board[1] && board[1] === board[2]) && (board[0] !== "" && board[1] !== "" && board[2] !== "") ) {
      winner = board[0];
    } else if ( (board[3] === board[4] && board[4] === board[5]) && (board[3] !== "" && board[4] !== "" && board[5] !== "") ) {
      winner = board[3];
    } else if ( (board[6] === board[7] && board[7] === board[8]) && (board[6] !== "" && board[7] !== "" && board[8] !== "") ) {
      winner = board[6];
    }

    //vertical
    else if ( (board[0] === board[3] && board[3] === board[6]) && (board[0] !== "" && board[3] !== "" && board[6] !== "") ) {
      winner = board[0];
    } else if ( (board[1] === board[4] && board[4] === board[7]) && (board[1] !== "" && board[4] !== "" && board[7] !== "") ) {
      winner = board[1];
    } else if ( (board[2] === board[5] && board[5] === board[8]) && (board[2] !== "" && board[5] !== "" && board[8] !== "") ) {
      winner = board[2];
    }

    //diagonal
    else if ( (board[0] === board[4] && board[4] === board[8]) && (board[0] !== "" && board[4] !== "" && board[8] !== "") ) {
      winner = board[0];
    } else if ( (board[2] === board[4] && board[4] === board[6]) && (board[2] !== "" && board[4] !== "" && board[6] !== "") ) {
      winner = board[2];
    }
  };
};
