import {Injectable} from 'angular2/core';
import {OxGame} from 'app/entity/oxGame/ox-game';
@Injectable()
export class OxGameService {
	initialGame() {
		return new OxGame(1,'test');
	}
}