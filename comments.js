// Create web server
// Load express module
var express = require('express');
var app = express();

// Load body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Load file system module
var fs = require('fs');

// Load comments.json file
var comments = require('./comments.json');

// Get comments from comments.json
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Post comment to comments.json
app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('./comments.json', JSON.stringify(comments, null, 4), function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(comments);
});

// Listen on port 3000
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});