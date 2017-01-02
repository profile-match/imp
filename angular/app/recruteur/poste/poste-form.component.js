"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var poste_1 = require('./poste');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var PosteFormComponent = (function () {
    function PosteFormComponent(http) {
        this.http = http;
        this.class = "icheckbox_flat-green";
        this.poste = new poste_1.Poste("ref", "sdq", "qsd", 5, 2, 0, "tz", "qdqs", "test", "lux", "orga", "dep", "serv", "equipe", ["test"]);
        this.query = '';
        this.savoirSpe = ["test", "test2"];
    }
    //"","","","",""
    PosteFormComponent.prototype.onSubmit = function () {
        alert(this.poste.reference + "ref");
        alert(this.poste.intitule + "int");
        alert(this.poste.indice_salaire + "indsal");
        alert(this.poste.salaire_min + "min");
        alert(this.poste.salaire_max + "max");
        alert(this.poste.afficher_moyenne + "affmoy");
        alert(this.poste.type_contrat + "typecontrat");
        alert(this.poste.resume + "resumé");
        alert(this.poste.point_attention + "ptsattention");
        alert(this.poste.lieu_travail + "lieutrav");
        alert(this.poste.organisation + "orga");
        alert(this.poste.departement + "departement");
        alert(this.poste.service + "service");
        alert(this.poste.equipe + "equipeee");
    };
    PosteFormComponent.prototype.filter = function (term) {
        alert(term);
        if (term != "") {
            this.http.get("https://jsonplaceholder.typicode.com/posts")
                .map(function (response) { return response.json(); })
                .subscribe(function (r) { return console.log(r); });
        }
    };
    PosteFormComponent.prototype.searchSavoirSpecifique = function () {
    };
    PosteFormComponent.prototype.getClass = function () {
        if (this.poste.afficher_moyenne == 0) {
            this.poste.afficher_moyenne = 1;
            this.class = "icheckbox_flat-green checked";
        }
        else {
            this.poste.afficher_moyenne = 0;
            this.class = "icheckbox_flat-green form-group";
        }
    };
    PosteFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'poste-form',
            templateUrl: 'poste-form.component.html',
            styles: ["\n    .ng-valid { border-color: green; }\n    .ng-invalid { border-color: red; }\n  "]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PosteFormComponent);
    return PosteFormComponent;
}());
exports.PosteFormComponent = PosteFormComponent;
//# sourceMappingURL=poste-form.component.js.map