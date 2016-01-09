System.register(['angular2/core', 'angular2/router', 'app/service/hero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                // @Input() hero: Hero;
                function HeroDetailComponent(_routeParams, _heroService) {
                    this._routeParams = _routeParams;
                    this._heroService = _heroService;
                }
                HeroDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.heroId = this._routeParams.get('id');
                    var id = this.heroId;
                    this._heroService.getById(id).then(function (hero) {
                        console.log(hero);
                        _this.hero = hero;
                    });
                };
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        templateUrl: 'app/heroDetail/hero-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, (typeof (_a = typeof hero_service_1.HeroService !== 'undefined' && hero_service_1.HeroService) === 'function' && _a) || Object])
                ], HeroDetailComponent);
                return HeroDetailComponent;
                var _a;
            })();
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
//# sourceMappingURL=hero-detail.component.js.map