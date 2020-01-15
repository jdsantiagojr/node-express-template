const jwt = require('express-jwt')
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa')
const { AUTH0_DOMAIN, AUTH0_CLIENT_ID } = require('../config').instance

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: AUTH0_CLIENT_ID,
  issuer: `https://${AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

module.exports = {
  checkJwt,
  jwtAuthz
}
