import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Hero} from 'app/entity/hero';
import {HeroService} from 'app/service/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/heroDetail/hero-detail.component.html',
  styleUrls: ['app/heroDetail/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	// @Input() hero: Hero;
	constructor(
		private __router:Router,
		private _routeParams:RouteParams,
		private _heroService:HeroService) {}
	public hero: Hero;
	private heroId: string;

	ngOnInit() {
		this.heroId = this._routeParams.get('id');
		let id = this.heroId;
		this._heroService.getById(id).then(hero => {
			console.log(hero);
			this.hero = hero;
		});
	}

	back() {
		console.log(window.history);
		window.history.back();
		// this._router.navigate(['HeroDetail', { id: hero.id }]);
	}
}