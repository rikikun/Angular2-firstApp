import {Injectable} from 'angular2/core';
import {OxGame} from 'app/entity/oxGame/ox-game';
@Injectable()
export class OxGameService {
	initialGame(id) {
		return new OxGame(id,[['','',''],['','',''],['','','']);
	}

	checkState(game:OxGame) {
		if(!this.checkBingo(game)) {
			this.checkEndDraw(game);
		}
	}

	checkBingo(game:OxGame) {
		let state = game.state;
		let flag = false;
		for(let v in state) {
			if(state[v][0] && state[v][0] === state[v][1] && state[v][1] === state[v][2]) {
				flag = true;
				game.status = 'end';
				let data = game.state[v][0] + 's';
				game.state[v][0] = data;
				game.state[v][1] = data;
				game.state[v][2] = data;
			}
			if(state[0][v] && state[0][v] === state[1][v] && state[1][v] === state[2][v]) {
				flag = true;
				game.status = 'end';
				let data = game.state[0][v] + 's';
				game.state[0][v] = data;
				game.state[1][v] = data;
				game.state[2][v] = data;
			}
		}
		if(state[0][0] && state[0][0] === state[1][1] && state[1][1] === state[2][2]) {
				flag = true;
				game.status = 'end';
				let data = game.state[0][0] + 's';
				game.state[0][0] = data;
				game.state[1][1] = data;
				game.state[2][2] = data;
		}
		if(state[0][2] && state[0][2] === state[1][1] && state[1][1] === state[2][0]) {
				flag = true;
				game.status = 'end';
				let data = game.state[0][v] + 's';
				game.state[0][v] = data;
				game.state[1][v] = data;
				game.state[2][v] = data;
		}

		return flag;
	}

	checkEndDraw(game:OxGame) {
		let state = game.state;
		let flag = true;
		for(let v in state) {
			for(let v2 in state[v]) {
				if(state[v][v2] === '') {
					flag = false;
				}
			}
		}
		if(flag) {
			game.status = 'end';
		}
	}
}