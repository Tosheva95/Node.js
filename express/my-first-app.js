const express = require('express')
const app = express()

//request handler

app.get('/about', (req, res) => {
  res.send('Ova e about page')
})

app.get('/profile', (req, res) => {
  res.send('Ova e profile page')
})

app.get('/history', (req, res) => {
  res.send('Ova e history page')
})

app.post('/home', (req, res) => {
  res.send('Ova e home page')
})

app.put('/updatehome', (req, res) => {
  res.send('Ova e updated home page')
})

app.patch('/updatedhome', (req, res) => {
  res.send('Ova e updated home page')
})

app.listen(3000, () => {
  console.log('Aplikacijata e startuvana na porta 3000...');
})