import * as express from 'express';
const slsHttp = require('serverless-http');

const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'HEY!' });
});

// Creates a handler to be used in the .yaml file
// and exports the app for testing
const handler = slsHttp(app);

export { app, handler };
