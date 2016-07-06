var tabNavController = function ($scope, PageStateManagerService) {
    $scope.selectedSection = '';
    $scope.selectedValue = '';
    $scope.setSelectedSection = function () {
        PageStateManagerService.setState($scope.selectedSection, $scope.selectedValue);
    };
};

var navTab = function () {
    return {
        restrict: 'E',
        templateUrl: 'shared/directive/nav-tab.html',
        scope:
        {
            value:"=value"
        }
    };
};