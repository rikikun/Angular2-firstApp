import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
@Component({
  selector: 'ox-game',
  templateUrl: 'app/oxGame/ox-game.component.html',
  // styleUrls: ['app/oxGame/ox-game.component.css']
})
export class OxGameComponent implements OnInit {
	constructor() {}
	public title = 'My Heroes';
	public myHero: Hero;
	public heroes: Hero[];

	ngOnInit() {
		
	}
}




