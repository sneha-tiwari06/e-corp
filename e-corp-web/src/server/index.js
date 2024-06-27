// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const multer = require('multer');

const db = require("./db"); 
require('dotenv').config();

const app = express();
const port = 5000;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use(bodyParser.json());


app.post('/send-email', (req, res) => {
  const { name, email, msg } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Query from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: error.toString() });
    }

    const query = 'INSERT INTO emails (name, email, subject, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, mailOptions.subject, msg], (err, result) => {
      if (err) {
        return res.status(500).send({ success: false, message: 'Failed to save email to database' });
      }
      res.status(200).send({ success: true, message: 'Email sent and saved: ' + info.response });
    });
  });
});
app.post('/submit', (req, res) => {
  const { username, email, phone, services, requirements } = req.body;
  console.log(req.body);

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
      },
  });

  const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Form Submission',
      text: `Form data: \n${JSON.stringify(req.body)}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return res.status(500).send({ success: false, message: error.toString() });
      }

      const servicesJsonString = JSON.stringify(services); // Convert services array to a JSON string
      const query = 'INSERT INTO form_submissions (name, email, phone, services, requirements) VALUES (?, ?, ?, ?, ?)';

      db.query(query, [username, email, phone, servicesJsonString, requirements], (err, result) => {
          if (err) {
              console.error('Database insertion error:', err); // Log the exact error
              return res.status(500).send({ success: false, message: 'Failed to save email to database', error: err.message });
          }
          res.status(200).send({ success: true, message: 'Email sent and saved: ' + info.response });
      });
  });
});
app.post('/apply-job', upload.single('file'), (req, res) => {
  const { nameForm, emailForm, phone } = req.body;
  const file = req.file;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Job Application',
    text: `Name: ${nameForm}\nEmail: ${emailForm}\nPhone: ${phone}`,
    attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: error.toString() });
    }

    const query = 'INSERT INTO job_applications (name, email, phone, file, submitted_at) VALUES (?, ?, ?, ?, NOW())';
  
    db.query(query, [nameForm, emailForm, phone, file ? file.buffer : null], (err, result) => {
      if (err) {
        console.error('Database insertion error:', err);
        return res.status(500).send({ success: false, message: 'Failed to save email to database' });
      }
      res.status(200).send({ success: true, message: 'Email sent and saved: ' + info.response });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
