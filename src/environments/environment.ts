// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: 'localhost',
    port: '8080',
    endpoints: {
      allCandidat: '/rest/candidat/get',//'/api/candidats',
      oneCandidat: '/rest/candidat/get/:id',
      searchCandidat: '/api/candidats/?name=${:term}',
      bannirCandidat: '/rest/candidat/ban/:id',   //bannir un candidat
      unbanCandidat: '/rest/candidat/unban/:id',
      nbFemelle: '/rest/candidat/getnbfemelle',
      nbMale: '/rest/candidat/getnbmale',
      banRecruteur: '/rest/recruteur/ban/:id',  //bannir un recruteur
      unBanRecruteur: '/rest/recruteur/unban/:id',
      allComment: '/api/commentaires',
      oneComment: '/api/commentaires/:id',
      allPost: '/api/posts',
      onePost: '/rest/recruteur/allDossier/:idRecruteur', //retourne les dossiers de poste a pouvoir pour un recruteur
      allRecruteur: '/api/recruteurs',
      oneRecruteur: '/api/recruteurs/:id',
      allUser: '/rest/utilisateur/get',
      createUser: '/rest/utilisateur/inscrire',
      searchMetier: '/rest/recruteur/completeMetier/:intitule',
      searchFonctionnelle: '/rest/recruteur/completeFonctionnelle/:intitule',
      searchTechnique: '/rest/recruteur/completeTechnique/:intitule',
      searchLinguistique: '/rest/recruteur/completeLangue/:intitule',
      searchFormation: '/rest/recruteur/completeFormation/:intitule',
      searchCertification: '/rest/recruteur/completeCertification/:intitule',
      addPoste: '/rest/recruteur/create',
      putPoste: '/rest/recruteur/updateDossier',
      getPost: '/rest/recruteur/dossier/:id',
      linkedinToken: '/rest/linkedin/gettoken/:code/:state',
    }
  }
};
