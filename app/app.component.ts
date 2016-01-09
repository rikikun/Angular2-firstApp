import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './entity/hero';
import {HeroService} from './service/hero.service';
import {HeroDetailComponent} from './heroDetail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HerosComponent} from './heroes/heroes.component';
import {OxGameComponent} from './oxGame/ox-game.component';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService]
})
@RouteConfig([
  {path:'/dashboard', component: DashboardComponent, name: 'Dashboard'},
  {path:'/heroes', component: HerosComponent, name: 'Heroes', useAsDefault: true},
  {path:'/hero/:id', component: HeroDetailComponent, name: 'HeroDetail'}
  {path:'/play', component: OxGameComponent, name: 'OxGame'}
])
export class AppComponent implements OnInit {
	constructor(private _heroService: HeroService) {}
	public title = 'Tour of Heros 2';
	public selectedHero: Hero;
	public heroes: Hero[];

	onSelect(hero: Hero) { this.selectedHero = hero; }

	getHeroes() {
	  this._heroService.getHeroes().then(heroes => {
	  	this.heroes = heroes;
	  });
	}

	ngOnInit() {
		this.getHeroes();
  }
}




