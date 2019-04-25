
const express = require('express');
const expressStaticGzip = require('express-static-gzip');

const path = require('path');

const query = require('./modals/query.js');

const app = express();
const port = 3001;

app.use(expressStaticGzip(path.join(__dirname, 'client/dist')));


//app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/range/company/:id', (req, res) => {
  const id = JSON.parse(req.params.id);
  query.get(id, (err, docs) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(JSON.stringify(docs));
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log('Failed to connect');
  } else {
  console.log('We are live on 3001');
  }
})
