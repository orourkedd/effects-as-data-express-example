const express = require('express')
const bodyParser = require('body-parser')
const handlers = require('effects-as-data/lib/handlers/node')
const route = require('./route')(handlers)
const functions = require('./functions')
const app = express()

app.use(bodyParser.json())

app.get('/', route(functions.read))

app.post('/', route(functions.write))

app.listen(3456, function () {
  console.log('Effects-as-data example listening on port 3456!')
})
