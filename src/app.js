var heroes = {
    bindings: {
        hero: '<'
    },
    template: "<hero>\n\t\t<h1>{{ $ctrl.name }}</h1>\n\t</hero>\n\t",
    controller: function () {
        this.name = "Test";
    },
    controllerAs: "$ctrl"
};
var module = angular.module("mySuperAwesomeApp", [])
    .component('heroes', heroes);
angular.element(document).ready(function () {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
