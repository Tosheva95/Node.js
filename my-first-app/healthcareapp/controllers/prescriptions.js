const Prescription = require('../models/prescriptions');
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = {
  getAll: async (req, res) => {
    if (req.query.search) {
      const regex = new RegExp(escapeRegex(req.query.search), 'gi');
      await Prescription.find({
        $or: [
          { medicine_name: regex },
          { directions: regex},
          { date: regex},
        ]
      }, function (err, prescriptions) {
        if (err) {
          console.log(err);
        } else {
          res.render("prescriptions/index", { prescriptions: prescriptions });
        }
      }).populate('doctor').populate('patient');
    } else {
      await  Prescription.find({}, function (err, prescriptions) {
        if (err) {
          console.log(err);
        } else {
          res.render("prescriptions/index", { prescriptions: prescriptions });
        }
      }).populate('doctor').populate('patient');
    }
  },
  getOne: async (req, res) => {
    const prescription = await Prescription.findById(req.params.id)
    const doctors = await Doctor.find()
    const patients = await Patient.find()

    res.render('prescriptions/update', {
      prescription,
      doctors,
      patients
    })
  },
  create: async (req, res) => {
    const patients = await Patient.find()
    const doctors = await Doctor.find()
    res.render('prescriptions/create', { 
      doctors: doctors, 
      patients: patients })
  },
  postCreate: async (req, res) => {
    try {
      if (req.body.doctor == '') {
        delete req.body.doctor;
      }
      if (req.body.patient == '') {
        delete req.body.patient
      }

      const prescription = new Prescription(req.body);
      await prescription.save();

      res.redirect('/prescriptions');
    } catch (error) {
      console.log(error);
      res.render('prescriptions/create', {
        ...req.body,
        error: error.message
      });
    }
  },
  postUpdate: async (req, res) => {
    try {
      if (req.body.doctor == '') {
        req.body.doctor = null
      }
      if (req.body.patient == '') {
        req.body.patient = null
      }

      await Prescription.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
      res.redirect('/prescriptions')
    } catch (error) {
      res.render('prescriptions/update', {
        ...req.body,
        _id: req.params.id,
        error: error.message
      })
    }
  },
  delete: async (req, res) => {
    await Prescription.findByIdAndRemove(req.params.id)

    res.send({
      error: false,
      message: `Prescription with id #${req.params.id} removed`
    });
  },
};