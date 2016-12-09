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

export class Poste {
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
}