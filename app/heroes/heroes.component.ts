import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from 'app/entity/hero';
import {HeroService} from 'app/service/hero.service';
@Component({
  selector: 'heroes',
  templateUrl: 'app/heroes/heroes.component.html',
  styleUrls: ['app/heroes/heroes.component.css']
})
export class HerosComponent implements OnInit {
	constructor(private _heroService:HeroService, private _router: Router) {}
	public title = 'My Heroes';
	public myHero: Hero;
	public heroes: Hero[];

	ngOnInit() {
		this._heroService.getHeroes().then( heros => 
			this.heroes=heros;
		);
	}

	onSelect(hero) {
		this.myHero = hero;
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.myHero.id }]);
	}
}




