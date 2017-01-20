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
      creerCandidat: '/rest/candidat/create',
      getCandidat: '/rest/candidat/get/:id',
      informer_moderateur: '/rest/candidat/messagesignalementcandidat'
    }
  }
};
