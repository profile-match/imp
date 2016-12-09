/*export class Poste {
  constructor(
    public id: number,
    public reference: string,
    public intitule: string,
    public indice_salaire: number,
    public salaire_min: number,
    public salaire_max: number,
    public afficher_moyenne: number,
    public type_contrat: string,
    public resume: string,
    public point_attention: string,
    public lieu_travail: string,
    public organisation: string,
    public service: string,
    //Mettre les paramètres optionnels à la fin !
    public departement?: string,
    public equipe?: string
  ) {  }
}*/
"use strict";
var Poste = (function () {
    function Poste(id, reference, intitule, indice_salaire, salaire_min, salaire_max, afficher_moyenne, type_contrat, resume, point_attention, lieu_travail, organisation, service, 
        //Mettre les paramètres optionnels à la fin !
        departement, equipe) {
        this.id = id;
        this.reference = reference;
        this.intitule = intitule;
        this.indice_salaire = indice_salaire;
        this.salaire_min = salaire_min;
        this.salaire_max = salaire_max;
        this.afficher_moyenne = afficher_moyenne;
        this.type_contrat = type_contrat;
        this.resume = resume;
        this.point_attention = point_attention;
        this.lieu_travail = lieu_travail;
        this.organisation = organisation;
        this.service = service;
        this.departement = departement;
        this.equipe = equipe;
    }
    return Poste;
}());
exports.Poste = Poste;
//# sourceMappingURL=poste.js.map