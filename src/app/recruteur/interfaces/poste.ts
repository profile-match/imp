export interface Poste {
  idRecruteur: number,
  reference: string,
  intitule: string,
  indice_salaire: string,
  salaire_min: number,
  salaire_max: number,
  afficher_moyenne: number,
  type_contrat: string,
  resume: string,
  point_attention: string,
  lieu_travail: string,
  organisation: string,
  equipe_concernee: string,
  signale: boolean
}
