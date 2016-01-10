import {OxGame} from 'app/entity/oxGame/ox-game';
import {OxGameService} from 'app/service/ox-game.service';
describe('OxGame service', () => {

	let _oxGameService:OxGameService;

	beforeEach(() => {
    	_oxGameService = new OxGameService();
  	});

	describe('initialGame()', () => {
		it('should return OxGame object', () => {
		  	let oxGame = _oxGameService.initialGame();
	  		expect(oxGame instanceof OxGame).toEqual(true);
	  	});
	  	it('should return OxGame object that reset state', () => {
	  		let oxGame = _oxGameService.initialGame(1);
	  		let initalState = [['','',''],['','',''],['','',''];
	  		expect(oxGame instanceof OxGame).toEqual(true);
	  		expect(oxGame.state).toEqual(initalState);
	  		expect(oxGame.id).toEqual(1);
	  	});	
	}
})