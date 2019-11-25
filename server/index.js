// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const morgan = require('morgan');

  const server = express();
  const port = 3000;

  server.use(cors());
  server.use(morgan('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));
  
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  

  server.use('/', router);
  // server.get('/name', (req, res) => {
  //   res.status(200).send('This is your get request, modify this file to use your router!')
  // })
  
  // server.post('/name', (req, res) => {
  //   res.status(200).send('This is your post request, modify this file to use your router!')
  // })
  
  // server.put('/name', (req, res) => {
  //   res.status(200).send('This is your put request, modify this file to use your router!')
  // })
  
  // server.delete('/name', (req, res) => {
  //   res.status(200).send('This is your delete request, modify this file to use your router!')
  // })

  server.listen(port, () => console.log(`Connected to port: ${port}.`))