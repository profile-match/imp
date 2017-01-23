import {experiencePro} from "./experiencePro";
import {competence} from "./competence";
import {formation} from "./formation";
/**
 * Created by antoine on 20/01/17.
 */
export interface Candidat {
  "id": number;
  "email": string;
  "banned": number;
  "loisirs": string;
  "nom": string;
  "isMale" : boolean;
  "photo": string;
  "prenom": string;
  "experiencePro": experiencePro;
  "formation": formation;
  "competence":competence[];
}
