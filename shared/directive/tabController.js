var navTab = function (PageStateManagerService) {
    return {
        restrict: 'E',
        scope: {
            value: '@value',
            section: '@section'
        },
        link: function (scope, iElement, iAttrs) {
            scope.getSelectedSection = function () {
                return PageStateManagerService.getState(scope.section);
            };

            scope.setSelectedSection = function () {
                console.log(scope.value);    
                PageStateManagerService.setState(scope.section, scope.value);
            };
        },
        replace: true,
        templateUrl: 'shared/directive/nav-tab.html'
    };
};