var app = angular.module("TicTacToe", []);

app.controller("TicTacToeCtrl", function ($scope) {

  var game = new TicTacToe();

  $scope.board = game.getBoard();

  $scope.set = function (position) {
    game.mark(position);
  };

  $scope.restart = function () {
    game.restartGame();
    $scope.board = game.getBoard();
  };

});
