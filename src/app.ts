import * as angular from 'angular';
import heroes from './components/heroes';

var module = angular.module("mySuperAwesomeApp", [])
	.component('heroes', heroes);

angular.element(document).ready(function () {
	angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
