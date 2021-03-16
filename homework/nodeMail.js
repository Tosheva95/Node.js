const nodemailer = require('nodemailer');
const events = require('events');
const emitter = new events.EventEmitter();

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  host: 'smtp.office365.com',
  port: 587,
  tls: {
    rejectUnauthorized: false
  },
  auth: {
    user: 'toshevaivana@outlook.com',
    pass: '070233821*'
  }
});

const sendMail = (data) => {

  const email = {
    from: 'toshevaivana@outlook.com',
    to: 'toshevaivana@outlook.com',
    subject: `${data.subject}`,
    text: `${data.text}`
  };

  transporter.sendMail(email, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent:');
    }
  });
}

emitter
  .on('product_created', data => {
    sendMail(data);
  })
  .on('product_deleted', data => {
    sendMail(data);
  });

emitter.emit('product_created', {
  from: 'toshevaivana@outlook.com',
  to: 'toshevaivana@outlook.com',
  subject: 'New product!',
  text: 'This is content for the product created event.'
})

emitter.emit('product_deleted', {
  from: 'toshevaivana@outlook.com',
  to: 'toshevaivana@outlook.com',
  subject: 'Oh no! Product deleted!',
  text: "Don't over-React.js"
})
