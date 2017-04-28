'use strict'

const _ = require('lodash')
const moment = require('moment')

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

// const low = require('lowdb')

// const db = low('db.json')

app.get('/', function (req, res) {
  res.send('Hello, World!')
})

io.on('connection', function (socket) {
  console.log('a user connected')
  socket.on('disconnect', function () {
    console.log('user disconnected')
  })

  socket.on('login', function (data) {
    socket.emit('login_success')
    // socket.emit('update_contacts', robots)
  })

  socket.on('client_message', function (message) {
    socket.broadcast.emit('server_message', message)
  })
})

// app.post('/register', function (req, res) {
//   const user = db.get('users').find({username: req.params.username}).value()
//   res.send({status:(typeof user === 'undefined')})
// })

http.listen(3000, function () {
  console.log('app listen on port 3000!')
})
