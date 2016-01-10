import {OxGame} from 'app/entity/oxGame/ox-game';
import {OxGameService} from 'app/service/ox-game.service';
describe('OxGame service', () => {

	let _oxGameService:OxGameService;

	beforeEach(() => {
    	_oxGameService = new OxGameService();
  	});


  it('initialGame should return OxGame object', () => {
  	let oxGame = _oxGameService.initialGame();
  	expect(oxGame instanceof OxGame).toEqual(true);
  });
})