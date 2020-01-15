const router = require('express').Router()
const axios = require('axios')
const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET } = require('../../config').instance

router.post('/oauth/token', async function (req, res, next) {
  try {
    const { username, password } = req.body
    const payload = {
      username,
      password,
      client_id: AUTH0_CLIENT_ID,
      client_secret: AUTH0_CLIENT_SECRET,
      audience: `https://${AUTH0_DOMAIN}/api/v2/`,
      grant_type: 'password',
    }
    const { data } = await axios.post(`https://${AUTH0_DOMAIN}/oauth/token`, payload)

    res.json(data)
  } catch (err) {
    next(err.response.body.error_description)
  }
})

module.exports = router
