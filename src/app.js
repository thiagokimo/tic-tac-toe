var app = angular.module("TicTacToe", []);

app.controller("TicTacToeCtrl", function ($scope) {

  var game = new TicTacToe();

  $scope.board = buildUnicodeBoard(game.getBoard());


  $scope.set = function (e, position) {
    if(!game.getWinner()){
      angular.element(e.srcElement).removeClass("can-hover");
      game.mark(position);
      $scope.board = buildUnicodeBoard(game.getBoard());
    }
  };

  $scope.restart = function () {
    game.restartGame();
    $scope.board = buildUnicodeBoard(game.getBoard());
  };

  $scope.getCurrentPlayer = function() {
    if(game.getCurrentPlayer() === 'x')
      return "\u00D7";
    else
      return "\u25CB";
  };

  $scope.showHoverPlayer = function(e, pos) {
    var elem = angular.element(e.target);
    console.log(elem);

    if(elem.text() === "\xa0") {
      elem.text($scope.getCurrentPlayer());
    }
  };

  $scope.hideHoverPlayer = function(e, pos) {
    var elem = angular.element(e.target);
    elem.text($scope.board[pos]);
  };

  $scope.getWinner = function() {
    return game.getWinner();
  };

  function buildUnicodeBoard(array) {
    var unicodeBoard = [];

    // console.log(array);

    array.forEach(function(elem) {
      if(elem === "x")
        unicodeBoard.push("\u00D7");
      else if(elem === "o")
        unicodeBoard.push("\u25CB");
      else
        unicodeBoard.push("\xa0");
    });
    return unicodeBoard;
  }
});