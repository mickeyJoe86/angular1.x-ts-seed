const heroes = {
	bindings: {
		hero: '<'
	},
	template: `
		<hero>
			<h1>{{ $ctrl.name }}</h1>
		</hero>
	`,
	controller() { 
		this.name = "Test";
	},
	controllerAs: "$ctrl"
};

var module = angular.module("mySuperAwesomeApp", [])
	.component('heroes', heroes);

angular.element(document).ready(function () {
	angular.bootstrap(document, ["mySuperAwesomeApp"]);
});
