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
      randomPeople: '/api/peoples/random',
      searchCandidat: '/api/candidats/?name=${:term}',
      bannirCandidat: '/rest/candidat/ban/:id',
      unbanCandidat: '/rest/candidat/unban/:id',
      allComment: '/api/commentaires',
      oneComment: '/api/commentaires/:id',
      allPost:'/api/posts',
      allRecruteur: '/api/recruteurs',
      oneRecruteur: '/api/recruteurs/:id'
    }
  }
};
