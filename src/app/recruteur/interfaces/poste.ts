import {Savoir} from "../classes/savoir";
export interface Poste {
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
  savoirSpe: Savoir[],
  savoirFaire: Savoir[],
  savoirEtre: Savoir[],
  metier: Savoir[]
}
