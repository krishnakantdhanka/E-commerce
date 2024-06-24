
var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-type': 'text-type'});
    res.write(" i AM HERE TO WRITE");
    res.end() ;
}).listen(8080);
 