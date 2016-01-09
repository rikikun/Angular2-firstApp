import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from 'app/entity/hero';
import {HeroService} from 'app/service/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/heroDetail/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
	// @Input() hero: Hero;
	constructor(private _routeParams:RouteParams, private _heroService:HeroService) {}
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
}