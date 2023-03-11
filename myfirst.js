var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
        fs.readFile('demofile.html', function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });

                res.write(data);
                return res.end();
        });

        // res.write('date and time ' + dt.myDateTime(), 'utf-8');
        // res.write(req.url);
        // var q = url.parse(req.url, true).query;
        // var txt = q.year + ' ' + q.month;
}).listen(8080);
