const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {appConfig} = require('../config')

const reqString={
  type:String,
  required: true,
}

const EventSchema = new Schema({
  name: reqString,
  titleSideBar: String,
  title: String,
  textContent: [String],
  imageContentUrl: [String]
},{
  timestamps: true
})

EventSchema.methods.setImgUrl = function(files){
  const arrImgUrl = []
    files.forEach(
    el=>arrImgUrl.push(el.location))
    this.imageContentUrl = arrImgUrl
  }

const Event = mongoose.model('events', EventSchema)

module.exports = {
  Event,
  EventSchema
}