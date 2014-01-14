angular.module('testApp', ['angular-ui-addons.inclist'])

    .controller('InclistTestCtrl', ["$scope", function ($scope) {

      // This to be extended
      $scope.list = [
        {id: "1", name: "Elephant"},
        {id: "2", name: "Monkey"},
        {id: "3", name: "Tiger"},
        {id: "4", name: "Zebra"}
      ];

      // Dunno why but this may be the "main's" scope variable
      $scope.propSelection = "";

    }]);
