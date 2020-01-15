const router = require('express').Router()

router.use('/things', require('./things'))
router.use('/users', require('./users'))

router.use(function (err, req, res, next) {
  let response

  if (err.name === 'ValidationError') {
    response = res.status(422).json({
      errors: Object.keys(err.errors).reduce(function (errors, key) {
        errors[key] = err.errors[key].message

        return errors
      }, {})
    })
  } else if (err.name === 'UnauthorizedError') {
    response = res.status(err.status).json({ msg: err.message })
  } else {
    response = next(err)
  }

  return response
})

module.exports = router
