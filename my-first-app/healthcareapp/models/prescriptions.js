const mongoose = require('mongoose')


const prescriptionSchema = mongoose.Schema({
  date: {
    type: String,
    required: ['Date is a required field'],
  //   validate: {
  //     validator: function (v) {
  //         return /\d{2}\/\d{2}\/\d{4}$/.test(v);
  //     },
  //     message: props => `${props.value} is not a valid date!`
  // }
  },
  patient: {
    type: mongoose.Types.ObjectId,
    ref: 'Patient'
  },
  medicine_name: {
    type: String,
    required: ['Name of medicine is a required field'],
  },
  directions: {
    type: String,
  },
  doctor: {
    type: mongoose.Types.ObjectId,
    ref: 'Doctor'
  }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);