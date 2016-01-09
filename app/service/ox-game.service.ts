import {Injectable} from 'angular2/core';

@Injectable()
export class OxGameService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
	getById(id) {
		return Promise
		.resolve(HEROES
			.find( data => return data.id === id));
	}
}