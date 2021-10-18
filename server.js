/*
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('./index.html', null, (erreur, html) => {
        if (erreur) {
            res.writeHeader(200, { 'Content-Type': 'text/html' });
            response.write(html);
            res.end('Serveur lancer ' + 'sur le port ' + res.connection.localPort + ' .');
        }).listen(port);
}); */
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index');
});
app.listen(1337);