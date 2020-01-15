const mongoose = require('mongoose')

const ThingSchema = new mongoose.Schema({
  name: { type: String }
})

mongoose.model('Thing', ThingSchema)
