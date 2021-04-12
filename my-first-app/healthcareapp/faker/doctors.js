const mongoose = require('mongoose')
const Doctor = require('../models/doctor')
const faker = require('faker');

mongoose.connect('mongodb://localhost/healthcareapp', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true 
});

const randomLicenceNumber = () => String.fromCharCode(71, 86, 71, 45 + Math.floor(Math.random()) * 26)
const specialization = ['Neuro', 'Anastesiology', 'Surgery', 'Cardiologist', 'Dermatologist', 'Pediatric']
const cities = ['Skopje', 'Gevgelija', 'Struga', 'Stip', 'Ohrid', 'Veles']
let doctors = []

for (let i = 0; i < 10; i++) {
  doctors.push({
    full_name: faker.fake("{{name.lastName}} {{name.firstName}}"),
    licence_number: `${randomLicenceNumber()}${faker.datatype.number({min: '10000000000'})}`,
    city: cities[Math.floor(Math.random() * cities.length)],
    specialization: specialization[Math.floor(Math.random() * specialization.length)]
  })
}

Doctor.insertMany(doctors)
.then(res => {
  console.log(res);
  console.log('Faker doctors')
})
.catch(err => {
  console.log(err);
})