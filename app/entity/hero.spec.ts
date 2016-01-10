import {Hero} from './hero';
describe('Hero', () => {
  it('has name given in the constructor', () => {
  	let hero:Hero;
    hero = {
    	id: '123',
    	name: 'Hero name'
    };
    expect(hero.name).toEqual('Hero name');
    expect(hero.id).toEqual('123');
  });
})