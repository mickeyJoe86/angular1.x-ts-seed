const heroes = {
	template: `
			<h1>{{ $ctrl.name }}</h1>
	`,
	controller: class HeroComponent {
		name: string;
		constructor() {
		}
		$onInit() {
			this.name = "Test";
		}
	},
	controllerAs: "$ctrl"
};

export default heroes;