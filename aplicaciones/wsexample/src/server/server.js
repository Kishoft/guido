const WebSocket = require('ws');
const puerto = 8080;
const wss = new WebSocket.Server({ port: puerto });
let database = [];

wss.on('connection', (ws) => {

  ws.on('message', (message) => {
    database.push(message)
    wss.clients.forEach(client => { client.send(message) })
  });
  
  ws.send(JSON.stringify({ historial : database }))
  
});
console.log(`Server corriedno en el puerto ${puerto}`)