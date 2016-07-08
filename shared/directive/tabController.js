var navTab = function (PageStateManagerService) {
    return {
        restrict: 'E',
        scope: {
            value: '@value',
            section: '@section',
            default: '@default'
        },
        link: function (scope, iElement, iAttrs) {
            scope.getSelectedSection = function () {
                if (PageStateManagerService.getState(scope.section) == undefined) {
                    PageStateManagerService.setState(scope.section, scope.default);
                }
                return PageStateManagerService.getState(scope.section);
            };

            scope.setSelectedSection = function () {
                PageStateManagerService.setState(scope.section, scope.value);
            };
        },
        replace: true,
        templateUrl: 'shared/directive/nav-tab.html'
    };
};

var tabPane = function (PageStateManagerService) {
    return {
        restrict: 'E',
        scope: {
            value: '@value',
            section: '@section',
            default: '@default'
        },
        transclude: true,
        link: function (scope, iElement, iAttrs) {
            scope.getSelectedSection = function () {
                if (PageStateManagerService.getState(scope.section) == undefined) {
                    PageStateManagerService.setState(scope.section, scope.default);
                }
                return PageStateManagerService.getState(scope.section);
            };
        },
        replace: true,
        templateUrl: 'shared/directive/tab-pane.html'
    };
};

// In directives to pass the value as a string from the element we need to pass it as '@'