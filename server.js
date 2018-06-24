// Server
const express = require('express')
const app = express()


// Static files
app.use(express.static('public'))

// Select game to play
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Simple in-memory store
app.get('/play/:game', (request, response) => {
  response.send(request.param.game)
})




// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
