const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const apiRouter = require('./api-router');

function createExpressApp(database) {
  const app = express();

  app.use(express.static(path.join(_dirname, 'public')));
  app.use('/profiles', express.static(path.join(_dirname)));
  app.use(bodyParser.json());
  app.use('/api', apiRouter(database));
  app.use('*', (req, res) => {
    return res.sendFile(path.join(_dirname, 'public/index.html'))
  });
  return app;

}
module.exports = createExpressApp;
