const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const ReservationSchema = new mongoose.Schema({
  people: {
    type: Number,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Reserv', ReservationSchema)