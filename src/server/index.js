const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
//use body parser to parse data in to the body of the request
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();
app.use(bodyParser.json());

let database;
//prepend api to follow the api convention
app.get('/api/contacts', (req, res) => {
  const contactsCollection = database.collection('contacts');

  contactsCollection.find({}).toArray((err, docs) => {
    return res.json(docs);
  });
});
app.post('/api/contacts', (req, res) => {
const user = req.body;

const contactsCollection = database.collection('contacts');

contactsCollection.insertOne(user, (err, r) => {
  if (err) {
    // if its error send status code 500 which is a server code error
    return res.status(500).json({ error: 'Error inseting new record.'});

  }
  const newRecord = r.ops[0];
// status 201 means created!
  return res.status(201).json(newRecord);
});
});
MongoClient.connect(process.env.DB_CONN, (err, db) => {
  console.log('connected to mongodb...');

  app.listen(3000, () => {
    database = db;
    console.log('listening on port 3000..');
  });
});
