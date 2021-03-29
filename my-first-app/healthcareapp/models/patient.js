const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: ['Full name is a required field']
  },
  phone_number: {
    type: String,
    required: ['Phone number is a required field'],
    unique: true,
    validate: {
      validator: value => /^[0-9]{9}$/.test(value),
      message: props => `The phone number ${props.value} is invalid`
    }
  },
  personal_number: {
    type: String,
    required: ['Personal number is a required field'],
    unique: true,
    validate: {
      validator: value => /^[0-9]{13}$/.test(value),
      message: props => `The personal number ${props.value} is invalid`
    }
  },
  city: {
    type: String,
    required: ['City is a required field']
  }
});

module.exports = mongoose.model('Patient', patientSchema);