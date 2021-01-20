// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'swapi',
      url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}