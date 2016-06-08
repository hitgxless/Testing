angular.module('myApp', [])
.controller('myCtrl', function($scope) {
    $scope.items = [
        {content: 'content 1'},
        {content: 'content 2'}];
        
    $scope.status = true;
    
    $scope.data = 1;
});
