var tabNavController = function ($scope, PageStateManagerService) {

    $scope.value="test";

    $scope.getSelectedSection = function (selectedSection) {
        if (PageStateManagerService.getState(selectedSection) == undefined) {
            PageStateManagerService.setState(selectedSection, "EducationalInfo");
        }
        console.log('Invoked');
        return PageStateManagerService.getState(selectedSection);
    };

    $scope.setSelectedSection = function (selectedSection, selectedValue) {
        PageStateManagerService.setState(selectedSection, selectedValue);
        console.log('Invoked');
    };

    $scope.test = function () {
        alert('Invoked');
    };
};

var navTab = function () {
    return {
        restrict: 'E',
        scope: {
            value: '@value',
            section: '@section',
            test : '&'
        },
        templateUrl: 'shared/directive/nav-tab.html'
    };
};