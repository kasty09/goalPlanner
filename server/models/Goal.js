const {Schema, model} = require('mongoose')

const goal = new Schema({
  title: {
    type: String,
    required: true
  },
  viewType: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Goal', goal)
