import { experience } from './experience';
import { formation } from './formation';
import { competence } from "./competence";

export interface candidat {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  loisirs: string,
  photo: any;
  adresse: string;
  telfix: string;
  telperso: string;
  experiencePro: experience[];
  formation: formation[];
  competence: competence[];
  isMale: boolean;
  banned: boolean;
  suspended: boolean;
}
