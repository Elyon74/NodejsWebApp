// fs.readFile lire un fichier, fs.writeFile ecrire un fichier

const http = require("http");
const fs = require('fs')
const express = require('express')
const app = express()

app.use('/images', express.static('public'))
app.use('/js', express.static('public'))
app.use('/css', express.static('public'))

const port = 3000
const server = http.createServer(function (req, res) {

    // A l'arrivée d'une requête
    res.write("Hello World!");
    res.end()

    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end("Ce fichier n' existe pas.")
        }
        else {
            res.writeHead(200, {
                'Content-type': 'text/html; charset=utf - 8'
            })
            res.end(data)
        }
    })
})

// Lancer le serveur
server.listen(port)