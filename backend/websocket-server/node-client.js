const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:3000')
ws.on('open', () => {
  console.log('Connected! ')
})

ws.on('message', (message) => {
  console.log('Received: ', message.toString())
})

ws.on('close', () => {
  console.log('Disconnected')
})

setInterval(() => {
  ws.send('Hello')
}, 3000)
