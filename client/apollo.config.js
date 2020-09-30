// Apollo retrieves the schema of our application from the url provided here
module.exports = {
  client: {
    service: {
      name: 'server',
      url: 'http://localhost:4000',
      // optional disable SSL validation check
      skipSSLValidation: true
    }
  }
};
