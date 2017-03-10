import {experiencePro} from "./experiencePro";
import {formation} from "./formation";
import {competence} from "./competence";

import {certificationCandidat} from "./CertificationCandidat";

/**
 * Created by antoine on 20/01/17.
 */
export interface candidat {
  "id": number;
  "email": string;
  "banned": number;
  "loisirs": string;
  "nom": string;
  "naissance":string;
  "isMale" : boolean;
  "suspended": boolean;
  "photo": string;
  "prenom": string;
  "adresse": string;
  "telfix": string;
  "telperso": string;
  "experiencePro": experiencePro[];
  "formation": formation[];
  "competence":competence[];
  "certifications":certificationCandidat[];
}
