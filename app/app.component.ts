import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
    	<label>id: </label>{{hero.id}}
    </div>
    	<div>
    		<label>name: </label>{{hero.name}}
    		<div>
    			<input [(ngModel)]="hero.name" placeholder="name">

    		</div>
    	</div>
    `
})
export class AppComponent {
	public title = 'Tour of Heros 2';
	public hero = {
		id: 1,
		name: 'korn'
	};
}

interface Hero {
	id: number;
	name: string;
}
