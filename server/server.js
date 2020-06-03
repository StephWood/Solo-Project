const express = require('express');
const path = require('path');
const app = express();

// static files
app.use('/assets', express.static(path.resolve(__dirname, './client/assets')));
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);
// app.get('/build/bundle.js', (req, res)=> res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js')))

//catch-all error handler
app.use((req, res) => res.sendStatus(404));

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
