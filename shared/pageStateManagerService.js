var pageStateManagerService = function () {

    this.pageState = {};

    this.setState = function (pageIdentifier, selectedPage) {
        this.pageState[pageIdentifier] = selectedPage;
    };

    this.getState = function (pageIdentifier) {
        return this.pageState[pageIdentifier];
    };
};
