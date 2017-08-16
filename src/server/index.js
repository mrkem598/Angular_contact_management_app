const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-Parser');
const path = require('path');
const createExpressApp = require('./create-express-app');

require('dotenv').config();
// create a database connection
MongoClient.connect(process.env.DB_CONN, (err, db) => {
  console.log('connected to mongodb...');
// once we create a database connection
  createExpressApp(db)
  // we tell the server to listen port 3000
  .listen(3000, () => {
    database = db;
    console.log('listening on port 3000...');
  });

});
