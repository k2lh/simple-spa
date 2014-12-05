angular
  .module('app')
  .controller('forumsContentController' , forumsContentController);

function forumsContentController($scope) {
    $scope.votes = 151;
    $scope.upVote = true;
    $scope.downVote = true;

    $scope.plusVote = function(){
        $scope.votes = $scope.votes + 1;
        $scope.upVote = false;
        $scope.downVote = true;
    }
    $scope.minusVote = function(){
        $scope.votes = $scope.votes - 1;
        $scope.upVote = true;
        $scope.downVote = false;
    }

}
