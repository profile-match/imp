import {Savoir} from "./savoir";
export interface Poste {
  id: number,
  id_recruteur: number,
  date_publication: number,
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
  savoir_specifications: Savoir[],
  savoir_faires: Savoir[],
  savoir_etres: Savoir[],
  metiers: Savoir[],
  fonctionnelles: Savoir[],
  techniques: Savoir[],
  langues: Savoir[],
  certifications: Savoir[],
  formations: Savoir[]
  // signale: boolean

}
