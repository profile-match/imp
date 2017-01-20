
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: 'localhost',
    port: '4200',
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
      searchMetier: '/api/metier/?intitule=${:intitule}',
      searchFonctionnelle: '/api/fonctionnelle/?intitule=${:intitule}',
      searchTechnique: '/api/technique/?intitule=${:intitule}',
      searchLinguistique: '/api/linguistique/?intitule=${:intitule}',
    }
  }
};
