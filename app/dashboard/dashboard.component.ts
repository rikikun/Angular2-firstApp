import {Component, OnInit} from 'angular2/core';
import {Hero} from 'app/entity/hero';
import {HeroService} from 'app/service/hero.service';
import {Router} from 'angular2/router';
@Component({
	selector: 'dashboard',
	templateUrl: 'app/dashboard/dashboard.component.html',
	styleUrls: ['app/dashboard/dashboard.component.css'],
	providers: [HeroService]
})
export class DashboardComponent implements OnInit {
	constructor(private _heroService: HeroService, private _router: Router) {}
	public title = 'Top Heros';
	public topHeros: Hero;

	ngOnInit() {
		this._heroService.getHeroes().then( response => {
			this.topHeros = response.slice(1,5);
		});
	}

	onChooseHero(hero) {
		console.log(hero);
		this._router.navigate(['HeroDetail', { id: hero.id }]);
	}
}