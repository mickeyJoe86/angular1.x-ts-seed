"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var heroes_1 = require("./components/heroes");
var module = angular.module("mySuperAwesomeApp", [])
    .component('heroes', heroes_1.default);
angular.element(document).ready(function () {
    angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
