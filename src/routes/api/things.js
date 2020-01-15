const router = require('express').Router()
const mongoose = require('mongoose')
const Thing = mongoose.model('Thing')

router.get('/', async function (req, res, next) {
  const r = await Promise.resolve({ msg: 'hello world' })
  res.json(r)
})

router.post('/', function () {

})

router.delete('/:id', function () {

})

router.patch('/:id', function () {

})

router.get('/:id', function () {

})

module.exports = router
