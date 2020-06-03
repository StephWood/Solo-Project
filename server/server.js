const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const apiRouter = require('../routes/api');

// do I need to parse body?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static files
app.use('/assets', express.static(path.resolve(__dirname, './client/assets')));

// define route handlers
app.use('/api', apiRouter);

// respond with main app
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

//catch-all error handler
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
