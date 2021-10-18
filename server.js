// fs.readFile lire un fichier, fs.writeFile ecrire un fichier

let http = require('http')
let fs = require('fs')
let express = require('express')
let app = express()

app.use('/images', express.static('public'))
app.use('/js', express.static('public'))
app.use('/css', express.static('public'))

let server = http.createServer()
let port = 1337

server.on('request', (request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("Ce fichier n' existe pas.")
        } else{
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf - 8'
            })

            response.end(data)
        }
    })
})
server.listen(port)