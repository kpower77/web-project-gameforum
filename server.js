//All modules we  will be using 
var http = require('http');
var path = require('path');
var express = require('express');
var xslt = require('node_xslt');
var fs = require("fs");

var router = express();
var server = http.createServer(router);


router.use(express.static(path.resolve(__dirname, 'client')));

router.get('/', function(req, res){
  res.render('index');
});

 //This will write to the file test1.txt and will replace the file with the string specified
  fs.appendFile('test1.txt', 'This is some additional text I have appended to the file', function(err){
    if(err) throw err;
    console.log('File has been written to');
  });


router.get('/xml', function(req, res) {
  var stylesheet = xslt.readXsltFile('topic.xsl');
  var doc = xslt.readXmlFile('topic.xml');
  var result = xslt.transform(stylesheet, doc, []);
  res.send(result);
});



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});