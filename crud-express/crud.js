const express = require('express');
const app = express();

app.use(express.json());

let countries = [
  {
    "name": "Macedonia",
    "capital": "Skopje",
    "population": "2333444"
  }
];

app
  .get('/countries', (req, res) => {
    res.send(countries);
  })
  .post('/countries', (req, res) => {
    countries.push(req.body)

    res.send({
      message: "You have successfully created a new country",
      country: req.body
    });
  })
  .delete('/countries', (req, res) => {
    countries = countries.filter(country => {
      return country.name != req.body.name
    });

    res.send(countries);
  })
  .patch('/countries/:name', (req, res) => {
    const countryRes = {
      error: false,
      message: 'The product is successfully updated',
      items: countries
    }

    const findCountry = name => {
      return countries.find(country => country.name == name)
    }

    const country = findCountry(req.params.name)

    if (country) {
      if (req.body.name) country.name = req.body.name
      if (req.body.capital) country.capital = req.body.capital
      if (req.body.population) country.population = req.body.population
    } else {
      countryRes.error = true
      countryRes.message = "We couldn't find a country with the specified name"
    }

    res.send(countryRes)
  })
  .put('/countries/:name', (req, res) => {
    const countryRes = {
      error: false,
      message: 'The product is successfully updated',
      items: countries
    }
    const reqUpdate = req.params.name;
    const findName = countries.findIndex((country) => country.name === reqUpdate);
    if (findName > -1) {

      countries[findName].name = req.body.name;
      countries[findName].capital = req.body.capital;
      countries[findName].population = req.body.population;
    } else {
      countryRes.error = true
      countryRes.message = "We couldn't find a country with the specified name"
    }
    res.send(countryRes);
  })


app.listen(3000, () => {
  console.log('App is running on port 3000...');
});
