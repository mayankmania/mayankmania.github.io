var pageStateManagerService = function () {

    var pageState = {};

    this.setState = function (pageIdentifier, selectedPage) {
        pageState[pageIdentifier] = selectedPage;
    };

    this.getState = function (pageIdentifier) {
        return pageState[pageIdentifier];
    };
};
