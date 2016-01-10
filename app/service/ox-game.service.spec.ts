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

	describe('checkState(game)', () => {
		it('should be state when game still not finish', () => {
			let state = [['x','o','o'],
						['o','o','x'],
						['x','x','']];
			let oxGame = new OxGame(1,state);
		  	_oxGameService.checkState(oxGame);
	  		expect(oxGame.status).toEqual('start');
	  	});
	});

	describe('checkEndDraw(oxGame:OxGame)', () => {
		it('should be state when game still not finish', () => {
			let state = [['x','o','o'],
						['o','o','x'],
						['x','x','']];
			let oxGame = new OxGame(1,state);
		  	_oxGameService.checkEndDraw(oxGame);
	  		expect(oxGame.status).toEqual('start');
	  	});

	  	it('should change status to end when game finish', () => {
			let state = [['x','o','o'],
						['o','o','x'],
						['x','x','o']];
			let oxGame = new OxGame(1,state);
		  	_oxGameService.checkEndDraw(oxGame);
	  		expect(oxGame.status).toEqual('end');
	  	});
	});

	describe('checkBingo(oxGame:OxGame)', () => {
		it('should change status be end and state to xs or ox when bingo 1', () => {
			let state = [['x','x','o'],
						['o','x','x'],
						['o','o','x']];
			let oxGame = new OxGame(1,state);
		  	_oxGameService.checkBingo(oxGame);
	  		expect(oxGame.status).toEqual('end');
	  		expect(oxGame.state).toEqual(
	  					[['xs','x','o'],
						['o','xs','x'],
						['o','o','xs']]);
	  	});
	  	it('should change status be end and state to xs or ox when bingo 2', () => {
			let state = [['o','o','o'],
						['','',''],
						['','','']];
			let oxGame = new OxGame(1,state);
		  	_oxGameService.checkBingo(oxGame);
	  		expect(oxGame.status).toEqual('end');
	  		expect(oxGame.state).toEqual(
	  					[['os','os','os'],
						['','',''],
						['','','']]);
	  	});
	  	it('should change status be end and state to xs or ox when bingo 2', () => {
			let state = [['o','x','x'],
						['o','',''],
						['o','','']];
			let oxGame = new OxGame(1,state);
		  	_oxGameService.checkBingo(oxGame);
	  		expect(oxGame.status).toEqual('end');
	  		expect(oxGame.state).toEqual(
	  					[['os','x','x'],
						['os','',''],
						['os','','']]);
	  	});
	});

	
})