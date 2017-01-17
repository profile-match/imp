import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let candidats = [
      {id: 11, photo: "http://fr.web.img6.acsta.net/c_300_300/medias/nmedia/18/69/05/08/19649926.jpg", name: 'Mr. Nice', email: 'nice', password: 'ni'},
      {id: 12, photo: "http://op-spe-cdn.20mn.fr/magazine/wp-content/uploads/sites/109/2015/08/sipa_00174880_000001-200x300.jpg", name: 'Narco', email: 'nice', password: 'ni'},
      {id: 13, photo: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5NzAyNDUyNF5BMl5BanBnXkFtZTcwMjYxMjAyOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg", name: 'Bombasto', email: 'nice', password: 'ni'},
      {id: 14, photo: "http://image.noelshack.com/fichiers/2014/21/1400699747-tumblr-mu1l8y4f3l1qzhbz1o4-250.gif", name: 'Celeritas', email: 'nice', password: 'ni'},
      {id: 15, photo: "http://3.bp.blogspot.com/-SZVGz9efpTU/T4a983pTIQI/AAAAAAAABhQ/aWMXNFJVpBw/s1600/Magneta.jpg", name: 'Magneta', email: 'nice', password: 'ni'},
      {id: 16, photo: "http://akns-images.eonline.com/eol_images/Entire_Site/2012922/1024.Monsters.ahs.mh.102212.jpg", name: 'RubberMan', email: 'nice', password: 'ni'},
      {id: 17, photo: "https://randomuser.me/portraits/women/59.jpg", name: 'Dynama', email: 'nice', password: 'ni'},
      {id: 18, photo: "http://www.dhresource.com/albu_1073581236_00-1.260x260/wholesale-drop-8-inch-cute-dr-slump-iq-figure.jpg", name: 'Dr IQ', email: 'nice', password: 'ni'},
      {id: 19, photo: "http://pre01.deviantart.net/fdaf/th/pre/i/2011/052/4/3/magma_pool_by_mandyseley-d3a3kbl.png", name: 'Magma', email: 'nice', password: 'ni'},
      {id: 20, photo: "http://orig10.deviantart.net/e433/f/2009/233/2/a/mega_man__tornado_man_by_superjustinbros.jpg", name: 'Tornado', email: 'nice', password: 'ni'}
    ];

    let commentaires = [
      {id: 11, idCandidat: 11, contenu: 'Mr. Nice le bg', signale: true},
      {id: 12, idCandidat: 11, contenu: 'poste de dingue', signale: false},
      {id: 13, idCandidat: 11, contenu: 'bonne boite', signale: false},
      {id: 14, idCandidat: 12, contenu: 'pay 20 k pas mal', signale: false},
      {id: 15, idCandidat: 12, contenu: 'on est venu claqué du biff', signale: true},
      {id: 16, idCandidat: 13, contenu: 'un jour de mon salaire c\'est leurs assurance vie', signale: true},
      {id: 17, idCandidat: 14, contenu: 'excellent', signale: false},
      {id: 18, idCandidat: 15, contenu: 'peu mieux faire', signale: false},
      {id: 19, idCandidat: 16, contenu: 'reputation a revoir', signale: false},
      {id: 20, idCandidat: 20, contenu: 'sopra baba', signale: true},
      {id: 21, idCandidat: 16, contenu: 'reputation 10/10', signale: false},
      {id: 22, idCandidat: 20, contenu: 'pas de wifi dans les locaux', signale: false}
    ]

    let recruteurs = [
      {id: 11, photo: "http://www.actu-maroc.com/wp-content/uploads/2016/11/d759dbca59736b62049c186f2f52a97f.jpg", name: 'Mr. Recruteur', email: 'recrute', password: 're'},
      {id: 12, photo: "http://adenine-rh.com/images/fichiers/bg-module-home.png", name: 'Rh bg', email: 'recrute', password: 're'},
      {id: 13, photo: "http://cdn11.ne.be/ckContents/images//Janvier/richard-schiff.jpg", name: 'RecruteMan', email: 'recrute', password: 're'},
      {id: 14, photo: "http://i.skyrock.net/6873/69366873/pics/2767480862_1.png", name: 'RoH2f', email: 'recrute', password: 'ni'},
      {id: 15, photo: "http://3.bp.blogspot.com/-SZVGz9efpTU/T4a983pTIQI/AAAAAAAABhQ/aWMXNFJVpBw/s1600/Magneta.jpg", name: 'Magneta', email: 'recrute', password: 'ni'},
      {id: 16, photo: "http://akns-images.eonline.com/eol_images/Entire_Site/2012922/1024.Monsters.ahs.mh.102212.jpg", name: 'RubberMan', email: 'recrute', password: 'ni'},
      {id: 17, photo: "https://randomuser.me/portraits/women/59.jpg", name: 'Dynama', email: 'nice', password: 'ni'},
      {id: 18, photo: "http://www.dhresource.com/albu_1073581236_00-1.260x260/wholesale-drop-8-inch-cute-dr-slump-iq-figure.jpg", name: 'Dr IQ', email: 'recrute', password: 'ni'},
      {id: 19, photo: "http://mediamass.net/jdd/public/documents/celebrities/2338.jpg", name: 'Mami', email: 'recrute', password: 'ni'}
    ];

    let posts = [
      {idRecruteur: 11, reference: "#12316", intitule: "stage angular2", indice_salaire: "2", salaire_min: 100, salaire_max: 1000, afficher_moyenne: 520, type_contrat: "stage", resume: "taper du code", point_attention: "string", lieu_travail: "luxembourg", organisation: "ssii", equipe_concernee: "dev", signale: false},
      {idRecruteur: 11, reference: "#52364", intitule: "hotesse de caisse", indice_salaire: "1", salaire_min: 2000, salaire_max: 3000, afficher_moyenne: 520, type_contrat: "stage", resume: "conter de l'argent", point_attention: "string", lieu_travail: "belgique", organisation: "banque", equipe_concernee: "com", signale: true},
      {idRecruteur: 12, reference: "#92117", intitule: "chef de projet", indice_salaire: "2", salaire_min: 500, salaire_max: 5000, afficher_moyenne: 520, type_contrat: "stage", resume: "taper du code", point_attention: "string", lieu_travail: "france", organisation: "ssii", equipe_concernee: "dev", signale: false},
      {idRecruteur: 13, reference: "#06316", intitule: "stage j2e", indice_salaire: "5", salaire_min: 5000, salaire_max: 12000, afficher_moyenne: 520, type_contrat: "stage", resume: "taper du code", point_attention: "string", lieu_travail: "luxembourg", organisation: "ssii", equipe_concernee: "dev", signale: false},
      {idRecruteur: 13, reference: "#82318", intitule: "expert compatble", indice_salaire: "2", salaire_min: 250, salaire_max: 1500, afficher_moyenne: 520, type_contrat: "stage", resume: "taper du code", point_attention: "string", lieu_travail: "UK", organisation: "cabinet audit", equipe_concernee: "dev", signale: true},
      {idRecruteur: 14, reference: "#72717", intitule: "technicien de surface", indice_salaire: "3", salaire_min: 500, salaire_max: 2000, afficher_moyenne: 520, type_contrat: "stage", resume: "ramener le café", point_attention: "string", lieu_travail: "US", organisation: "strat up", equipe_concernee: "dev", signale: true}
    ]
    return {candidats, commentaires, recruteurs, posts};
  }

}
