const heroes = {
	bindings: {
		hero: '<'
	},
	template: "<hero><h1>{{ $ctrl.name }}</h1?</hero>",
	controller: function herosController() { 
		this.name = "Test";
	},
	controllerAs: "$ctrl"
};

export default heroes;