import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {OxGameService} from 'app/service/ox-game.service';
import {OxGame} from 'app/entity/oxGame/ox-game';
@Component({
  selector: 'ox-game',
  templateUrl: 'app/oxGame/ox-game.component.html',
  // styleUrls: ['app/oxGame/ox-game.component.css']
  providers: [OxGameService]
})
export class OxGameComponent implements OnInit {
	constructor(private _oxGameService:OxGameService) {}
	public title = 'My Heroes';
	public oxGame:OxGame;

	ngOnInit() {
		this.oxGame = this._oxGameService.initialGame();
		console.log(this.oxGame);
	}
}




