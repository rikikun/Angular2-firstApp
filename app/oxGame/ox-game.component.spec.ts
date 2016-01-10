import {OxGame} from 'app/entity/oxGame/ox-game';
describe('OxGame component', () => {
  it('has name and id given in the constructor', () => {
  	let oxGame = new OxGame(1,'abc');
    expect(oxGame.name).toEqual('abc');
    expect(oxGame.id).toEqual(1);
  });
})