"use strict";

var http = require('http');

var fs = require('fs');

function hello(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('./index.html', null, function (error, data) {
    /* reading html file from server*/
    if (error) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }

    res.end();
  });
}

http.createServer(hello).listen(8000);