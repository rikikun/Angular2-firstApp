import {Component, OnInit, Input} from 'angular2/core';
import {OxGameService} from 'app/service/ox-game.service';
import {OxGame} from 'app/entity/oxGame/ox-game';
@Component({
  selector: 'ox-game-detail',
  templateUrl: 'app/oxGame/ox-game-detail.component.html',
  // styleUrls: ['app/oxGame/ox-game.component.css']
  // directives: [OxGameDetail],
  providers: [OxGameService]
})
export class OxGameDetailComponent implements OnInit {
	constructor(private _oxGameService:OxGameService) {}
	public title = 'OX Game Detail';
	@Input()game:OxGame;

	ngOnInit() {
	}
}




