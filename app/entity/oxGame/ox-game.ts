export class OxGame {
	constructor(
		private id:number,
		private state:string[][],
		) {
		this.id = id;
		this.state = state;
	}
	private id: number;
	private state: string[][];
}