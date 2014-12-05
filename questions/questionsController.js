angular
  .module('app')
  .controller('questionsController' , questionsController);

function questionsController($scope) {
    $scope.isCollapsed = true;
}
