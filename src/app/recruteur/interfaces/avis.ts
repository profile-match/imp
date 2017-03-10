import {Recruteur} from "./recruteur";
import {candidat} from "app/Candidat/interfaces/candidat";
/**
 * Created by Misternutz on 09/03/2017.
 */
export interface Avis {
  id: number,
  description: string,
  note: number,
  recruteur: Recruteur,
  candidat: candidat

}
