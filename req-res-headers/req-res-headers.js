<<<<<<< HEAD
const express = require('express')
const app = express()

//REQUEST HEADERS

//1.The User-Agent request header is a characteristic string that lets servers and network peers 
//identify the application, operating system, vendor, and/or version of the requesting user agent.

app.get('/user', (req, res) => {
  res.send(req.header('user-agent'))
})

//2.The Accept request HTTP header advertises which content types, 
//expressed as MIME types, the client is able to understand.

app.get('/accept', (req, res) => {
  res.send(req.header('accept'))
})

//3.The Host request header specifies the host and port number of the server 
//to which the request is being sent.

app.get('/host', (req, res) => {
  res.send(req.header('host'))
})

//RESPONSE HEADERS

//1.The Content-Type entity header is used to indicate the media type of the resource.

app.get('/content', (req, res) => {
  res.send({ msg: 'Hello' })
})

//2.The Date general HTTP header contains the date and time at which the message was originated.

app.get('/date', (req, res) => {
  res.send('This is date header paragraph')
})

//3. Општото заглавие за конекција контролира дали мрежната врска останува или не 
//по завршувањето на тековната трансакција. 
//Ако испратената вредност е одржувана, врската е постојана и не е затворена, 
//дозволувајќи да се направат последователни барања до истиот сервер.

app.get('/connection', (req, res) => {
  res.send('This is connection header paragraph')
})


app.listen(5000, () => {
  console.log('Server started on 5000')
=======
const express = require('express')
const app = express()

//REQUEST HEADERS

//1.The User-Agent request header is a characteristic string that lets servers and network peers 
//identify the application, operating system, vendor, and/or version of the requesting user agent.

app.get('/user', (req, res) => {
  res.send(req.header('user-agent'))
})

//2.The Accept request HTTP header advertises which content types, 
//expressed as MIME types, the client is able to understand.

app.get('/accept', (req, res) => {
  res.send(req.header('accept'))
})

//3.The Host request header specifies the host and port number of the server 
//to which the request is being sent.

app.get('/host', (req, res) => {
  res.send(req.header('host'))
})

//RESPONSE HEADERS

//1.The Content-Type entity header is used to indicate the media type of the resource.

app.get('/content', (req, res) => {
  res.send({ msg: 'Hello' })
})

//2.The Date general HTTP header contains the date and time at which the message was originated.

app.get('/date', (req, res) => {
  res.send('This is date header paragraph')
})

//3. Општото заглавие за конекција контролира дали мрежната врска останува или не 
//по завршувањето на тековната трансакција. 
//Ако испратената вредност е одржувана, врската е постојана и не е затворена, 
//дозволувајќи да се направат последователни барања до истиот сервер.

app.get('/connection', (req, res) => {
  res.send('This is connection header paragraph')
})


app.listen(5000, () => {
  console.log('Server started on 5000')
>>>>>>> ce00669132c6eed66007bb1b07f186bc546dbb89
})