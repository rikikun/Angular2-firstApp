System.register(['angular2/core', 'app/entity/hero'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', (typeof (_a = typeof hero_1.Hero !== 'undefined' && hero_1.Hero) === 'function' && _a) || Object)
                ], HeroDetailComponent.prototype, "hero", void 0);
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n  <div *ngIf=\"hero\">\n\t      <h2>{{hero.name}} details!</h2>\n\t\t  <div><label>id: </label>{{hero.id}}</div>\n\t\t  <div>\n\t\t  <label>name: </label>\n\t\t  <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n  \t</div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroDetailComponent);
                return HeroDetailComponent;
                var _a;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map