'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('./index.html', null, (erreur, data) => {
        if (erreur) {
            res.end('Erreur')
        } else {
            res.end(data)
        }
    })
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Serveur lancer ' + 'sur le port ' +res.connection.localPort +' .');
}).listen(port);
