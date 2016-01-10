import {Injectable} from 'angular2/core';
import {OxGame} from 'app/entity/oxGame/ox-game';
@Injectable()
export class OxGameService {
	initialGame(id) {
		return new OxGame(id,[['','',''],['','',''],['','','']);
	}
}