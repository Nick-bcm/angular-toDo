var app = angular.module('app', []);

var model = {
  items: [
    { name: "Хлеб", isDone: false },
    { name: "Масло", isDone: false },
    { name: "Картофель", isDone: true },
    { name: "Сыр", isDone: false }
  ]
};

app.controller("appContr", function($scope) {
  $scope.list = model;
  $scope.addItem = function(text) {
    $scope.list.items.push({ name: text, isDone: false });
  };
  $scope.remItem = function(index) {
    $scope.list.items.splice(index, 1);
  };
})
