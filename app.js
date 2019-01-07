// Require the express module
const express = require('express');
const path = require('path');
const flexjson = require('jsonflex')();
// Create a new web server
const app = express();
app.use(flexjson);
// Tell the web server to serve files
// from the www folder
app.use(express.static('www'));
// Serve index.html on all routes
app.get(/^[^\.]*$/, (req, res) => {
  res.sendFile(__dirname + '/www/index.html');
});
// Start the web server on port 3000
app.listen(3000,() => console.log('Listening on port 3000'));