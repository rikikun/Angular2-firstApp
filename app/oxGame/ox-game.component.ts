import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';
import {OxGameService} from 'app/service/ox-game.service';
import {OxGame} from 'app/entity/oxGame/ox-game';
import {OxGameDetailComponent} from 'app/oxGame/ox-game-detail.component';

@Component({
  selector: 'ox-game',
  templateUrl: 'app/oxGame/ox-game.component.html',
  styleUrls: ['app/oxGame/ox-game.component.css']
  directives: [OxGameDetailComponent],
  providers: [OxGameService]
})
export class OxGameComponent implements OnInit {
	constructor(private _oxGameService:OxGameService) {}
	public title = 'OX Game';
	public status = 'start';
	public currentGame:OxGame;
	public runingId:number;
	public games:OxGame[];
	public parts = [1,2,3,4,5,6,7,8,9];

	@Output() refresh = new EventEmitter();

	ngOnInit() {
		this.runingId = 1;
	}

	bingo() {
		this.status = 'end';
	}

	startGame() {
		this.currentGame = this._oxGameService.initialGame(this.runingId++);
		this.status = 'start';
		if(this.games){
			this.games.unshift(this.currentGame);
		}else {
			this.games = [];
			this.games.unshift(this.currentGame);
		}
	}

	clearGame() {
		this.games = '';
		this.runingId = 1;
		this.currentGame = [];
		this.status = 'start';
	}

	onSelectGame(event, selectGame) {
		event.preventDefault();
		this.currentGame = selectGame;
		this.status = this.currentGame.status;
	}
}




