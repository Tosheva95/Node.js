const Doctor = require('../models/doctor');
const Patient = require('../models/patient');


module.exports = {
  getCity: async (req, res) => {
    const patients = await Patient.find();
    let cityArray = []
    patients.forEach(patient => {
      cityArray.push(patient.city)
    })

    console.log(cityArray);
    res.send({patients: patients});
  }
}

