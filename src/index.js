const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const { DEBUG, LOG_FORMAT, MONGO_URI, PORT } = require('./config').instance
const logger = require('./logger')

const app = express()

app.use(cors())
app.use(morgan(LOG_FORMAT)({ stream: logger.stream }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useCreateIndex', true)
mongoose.set('debug', Boolean(DEBUG))
require('./models')

app.use(require('./routes'))

app.listen(PORT, () => console.log(`Express server listening on ${PORT}`))
