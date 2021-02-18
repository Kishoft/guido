let ws = new WebSocket('ws://localhost:8080')
let historial = document.getElementById("historial")
let chat = document.getElementById("chat");
let inputChat = document.getElementById("inputChat");
let usuario = document.getElementById("usuario")

ws.addEventListener("message", mensaje => {
    let mensajeRecibido = JSON.parse(mensaje.data)
    if(mensajeRecibido.hasOwnProperty("historial")){
        mensajeRecibido.historial.forEach(registro => {
            registro = JSON.parse(registro)
            historial.innerHTML += `
            <span class="mensajeRecibido">${registro.usuario} : ${registro.mensaje}</span>
        `
        })
    }
    else{
        historial.innerHTML += `
            <span class="mensajeRecibido">${mensajeRecibido.usuario} : ${mensajeRecibido.mensaje}</span>
        `
    }
})
document.addEventListener('keydown', (event) => {
    if(event.key === "Enter"){
        ws.send(JSON.stringify({ usuario : usuario.value, mensaje : inputChat.value}))
        inputChat.value = "";
    }
  });