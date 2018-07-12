var path = require('path')
var express = require('express')
var app = express()
let config = require('../config/index.js');
let _config = config();

const IP = _config.buildtime.origin_server.ip;
const PORT = _config.buildtime.origin_server.port;

// app.get('*.js', function(req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/javascript');
//   next();
// });

// app.get('*.css', function(req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/css');
//   next();
// });

// express.static托管静态文件
app.use(express.static(path.join(__dirname, '../dist/')));

app.get('/config', function(req, res){
  res.json(_config.runtime);
})

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/'));
})

app.listen(PORT, function () {
  console.log('The app server is working at ' + PORT)
})
