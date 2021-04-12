const mongoose = require('mongoose')
const Patient = require('../models/patient')
const faker = require('faker');

mongoose.connect('mongodb://localhost/healthcareapp', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true 
});

const cities = ['Skopje', 'Gevgelija', 'Struga', 'Stip', 'Ohrid', 'Veles']

let patients = []

for (let i = 0; i < 10; i++) {
  patients.push({
    full_name: faker.fake("{{name.lastName}} {{name.firstName}}"),
    phone_number: faker.phone.phoneNumber('###-###-###'),
    personal_number: faker.datatype.number({min: '10000000000000'}),
    city: cities[Math.floor(Math.random() * cities.length)]
  })
}

Patient.insertMany(patients)
.then(res => {
  console.log(res);
  console.log('Faker patients')
})
.catch(err => {
  console.log(err);
})