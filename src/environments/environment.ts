
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
      allCandidat: '/api/candidats',
      oneCandidat: '/api/candidats/:id',
      randomPeople: '/api/peoples/random',
      searchCandidat: '/api/candidats/?name=${:term}',
      bannirCandidat: '/api/candidats/bannir/:id',
      allComment: '/api/commentaires',
      oneComment: '/api/commentaires/:id',
      allPost:'/api/posts',
      allRecruteur: '/api/recruteurs',
      oneRecruteur: '/api/recruteurs/:id',
      searchMetier: '/rest/recruteur/completeMetier/:intitule',
      searchFonctionnelle: '/rest/recruteur/completeFonctionnelle/:intitule',
      searchTechnique: '/rest/recruteur/completeTechnique/:intitule',
      searchLinguistique: '/rest/recruteur/completeLangue/:intitule',
      searchFormation: '/rest/recruteur/completeFormation/:intitule',
      searchCertification: '/rest/recruteur/completeCertification/:intitule',
      addPoste: '/rest/recruteur/create',
      putPoste : '/rest/recruteur/updateDossier',
      getPost :'/rest/recruteur/dossier/:id',

    }
  }
};
