var pageStateManagerService = function () {

    var pageState = this.pageState || intialize();

    this.setState = function (pageIdentifier, selectedPage) {
        pageState[pageIdentifier] = selectedPage;
    };

    this.getState = function (pageIdentifier) {
        return pageState[pageIdentifier];
    };

    var intialize = function (params) {
        pageState = {};
    }
};