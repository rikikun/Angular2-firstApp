export class OxGame {
	constructor(
		private id:number,
		private name:string
		) {
		this.id = id;
		this.name = name;
	}
	private id: number;
	private name: string;

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}
}