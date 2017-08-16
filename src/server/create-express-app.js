const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const apiRouter = require('./api-router');

function createExpressApp(database) {
  const app = express();

//use the static midleware in the body parser midle ware
  app.use(express.static(path.join(_dirname, 'public')));
  app.use('/profiles', express.static(path.join(_dirname, 'profiles')));
  app.use(bodyParser.json());
  // Tell the expres to use the api router which taken the database connection
  app.use('/api', apiRouter(database));
  app.use('*', (req, res) => {
    return res.sendFile(path.join(_dirname, 'public/index.html'))
  });
  return app;

}
module.exports = createExpressApp;
