angular
  .module('app')
  .controller('categoriesController' , categoriesController);

function categoriesController($scope) {
  $scope.isCollapsed = true;
}
