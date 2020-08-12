const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const mockAPITitle = require('./mockAPITitle.js')
const bodyParser = require('body-parser')
const cors = require('cors')

// var json = {
//     'title': 'test json response',
//     'message': 'this is a message',
//     'time': 'now'
// }

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

app.get('/api/get/title', (req, res) => {
    res.json(mockAPITitle)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
