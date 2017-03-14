export const environment = {
  production: false,
  header: {
    json: {'Content-Type': 'application/json'}
  },
  backend: {
    protocol: 'http',
    host: 'localhost',
    port: '8080',
    endpoints: {
      allCandidat: '/rest/candidat/get',//'/api/candidats',
      oneCandidat: '/rest/candidat/get/:id',
      postPhotoCandidat: '/rest/candidat/photo/',
      getPhotoCandidat: '/rest/candidat/photo/:id',
      searchCandidat: '/api/candidats/?name=${:term}',
      bannirCandidat: '/rest/candidat/ban/:id',   //bannir un candidat
      unbanCandidat: '/rest/candidat/unban/:id',
      deleteCandidat: '/rest/candidat/delete/:id',
      nbFemelle: '/rest/candidat/getnbfemelle',
      nbMale: '/rest/candidat/getnbmale',
      banRecruteur: '/rest/recruteur/ban/:id',  //bannir un recruteur
      unBanRecruteur: '/rest/recruteur/unban/:id',
      allComment: '/api/commentaires',
      oneComment: '/api/commentaires/:id',
      allPost: '/rest/recruteur/allDossier',
      onePost: '/rest/recruteur/dossierRecruteur/:idRecruteur', //retourne les dossiers de poste a pouvoir pour un recruteur
      allRecruteur: '/rest/recruteur/get',
      oneRecruteur: '/rest/recruteur/get/:id',
      allUser: '/rest/utilisateur/get',
      oneUser: '/rest/utilisateur/getUtilisateur',
      createUserCand: '/rest/utilisateur/inscrireCand', //create candidat
      createUserRec: '/rest/utilisateur/inscrireRec', //create recruteur
      searchMetier: '/rest/recruteur/completeMetier/:intitule',
      searchFonctionnelle: '/rest/recruteur/completeFonctionnelle/:intitule',
      searchTechnique: '/rest/recruteur/completeTechnique/:intitule',
      searchLinguistique: '/rest/recruteur/completeLangue/:intitule',
      searchFormation: '/rest/recruteur/completeFormation/:intitule',
      searchCertification: '/rest/recruteur/completeCertification/:intitule',
      addPoste: '/rest/recruteur/create',
      putPoste: '/rest/recruteur/updateDossier',
      getPost: '/rest/recruteur/dossier/:id',
      allOffers: '/rest/recruteur/dossierRecruteur/:id',
      creerCandidat: '/rest/candidat/create',
      modifierCandidat: '/rest/candidat/update',
      getCandidat: '/rest/candidat/get/:id',
      linkedinToken: '/rest/linkedin/gettoken/:code/:state/:genre',
      suspendCandidat: '/rest/candidat/suspend/:id',
      deletePoste: '/rest/recruteur/deleteDossier/:id',
      unsuspendCandidat: '/rest/candidat/unsuspend/:id',
      getCompetences: '/rest/competence/get/:comp',
      sendMail: '/rest/serviceMail/envoyer',
      getCv: '/rest/candidat/cv/:id',
      matchingDossierCandidatComp: '/rest/match/dossierCandidatComp/:iddossier/:idcandidat',
      matchingDossierCandidatCert: '/rest/match/dossierCandidatCert/:iddossier/:idcandidat',
      matchingDossierCandidatForm: '/rest/match/dossierCandidatForm/:iddossier/:idcandidat',
      matchingDossier: '/rest/match/dossier/:iddossier/:borneinf/:bornesup',
      createAvis: '/rest/recruteur/avis',
      updateCandPost: '/rest/candidat/update/:id',
      updateRecruteur: '/rest/recruteur/update',
      updateMdpRecruteur: '/rest/recruteur/updateMdp',
      getPhoto: '/rest/candidat/photo/:id',
      linkedinConnexion: '/rest/linkedin/connexion/:code/:state'
    }
  },
  frontend: {
    protocol: 'http',
    host: 'localhost',
    port: '4200'
  }
};
