export interface Poste {
  id_recruteur: number,
  date_publication: number;
  reference: string,
  intitule: string,
  indice_salaire: string,
  salaire_min: number,
  salaire_max: number,
  type_contrat: string,
  resume: string,
  point_attention: string,
  lieu_travail: string,
  afficher_moyenne: number,
  organisation: string,
  equipe_concernee: string,
  "id":number
 // signale: boolean
}
