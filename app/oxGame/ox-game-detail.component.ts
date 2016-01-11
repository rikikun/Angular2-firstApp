import {Component,
 OnInit,Input,OnChanges,
 SimpleChange, Output, EventEmitter
} from 'angular2/core';
import {OxGameService} from 'app/service/ox-game.service';
import {OxGame} from 'app/entity/oxGame/ox-game';
@Component({
  selector: 'ox-game-detail',
  templateUrl: 'app/oxGame/ox-game-detail.component.html',
  styleUrls: ['app/oxGame/ox-game-detail.component.css']
  // directives: [OxGameDetail],
  providers: [OxGameService]
})
export class OxGameDetailComponent implements OnInit {
	constructor(private _oxGameService:OxGameService) {}
	public title = 'OX Game Detail';
	public positionX:string;
	public positionY:string;
	public width = '100px';
	public height = '100px';
	public x:number;
	public y:number;
	public image:string;

	@Input()game:OxGame;
	@Input()part:number;
	@Input()parentStatus:string;
	@Output() bingo = new EventEmitter();


	ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {

    // Empty the changeLog whenever 'reset' property changes
    // hint: this is a way to respond programmatically to external value changes.
  //   if (changes['game']) { 
  //   	this.initialXY();
		// this.changeImage();
  //   }
  		this.initialXY();
		this.changeImage();
  	}	

	turnClick() {
		if(this.game.status === 'start' && this.game.state[this.x][this.y] === '') {
			this.game.state[this.x][this.y] = this.game.nextTurn;
			if(this.game.nextTurn === 'o') {
				this.game.nextTurn = 'x';
			}else {
				this.game.nextTurn = 'o';
			}
			this._oxGameService.checkState(this.game);
			if(this.game.status === 'end') {
				this.bingo.emit('event');
			}
			this.changeImage();
		}
	}

	changeImage() {
		switch(this.game.state[this.x][this.y]) {
			case '':
				this.image = 'assets/img/default.jpg';
				break;
			case 'o':
				this.image = 'assets/img/o.png';
				break;
			case 'x':
				this.image = 'assets/img/x.png';
				break;
			case 'xs':
				this.image = 'assets/img/s.png';
				break;
			case 'os':
				this.image = 'assets/img/s.png';
				break;
		}
	}

	initialXY() {
		switch(this.part){
			case 1:
				this.x = 0;
				this.y = 0;
				this.positionX = '0px';
				this.positionY = '0px';
				break;
			case 2:
				this.x = 1;
				this.y = 0;
				this.positionX = '100px';
				this.positionY = '0px';
				break;
			case 3:
				this.x = 2;
				this.y = 0;
				this.positionX = '200px';
				this.positionY = '0px';
				break;
			case 4:
				this.x = 0;
				this.y = 1;
				this.positionX = '0px';
				this.positionY = '100px';
				break;
			case 5:
				this.x = 1;
				this.y = 1;
				this.positionX = '100px';
				this.positionY = '100px';
				break;
			case 6:
				this.x = 2;
				this.y = 1;
				this.positionX = '200px';
				this.positionY = '100px';
				break;
			case 7:
				this.x = 0;
				this.y = 2;
				this.positionX = '0px';
				this.positionY = '200px';
				break;
			case 8:
				this.x = 1;
				this.y = 2;
				this.positionX = '100px';
				this.positionY = '200px';
				break;
			case 9:
				this.x = 2;
				this.y = 2;
				this.positionX = '200px';
				this.positionY = '200px';
				break;
		}
	}

	ngOnInit() {
		this.initialXY();
		this.changeImage();
	}
}




