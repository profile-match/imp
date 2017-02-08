export const environment = {
  production: false,
  header: {
    json: {'Content-Type': 'application/json'}
  },
  backend: {
    protocol: 'https',
    host: 'pm-core.bober.ovh',
    port: '8080',
    endpoints: {
      creerCandidat: '/rest/candidat/create',
      modifierCandidat:'/rest/candidat/update',
      getCandidats:'/rest/candidat/get',
      getCandidat:'/rest/candidat/get/:id',
      getCompetences:'/rest/competence/get/:comp'
    }
  }
};
