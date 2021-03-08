console.log("holis")

let botoncito = document.getElementById('botoncito');
let botoncito2 = document.getElementById('botoncito2');

let texto = document.getElementById('texto');


botoncito.addEventListener('click', e => {

    e.preventDefault();
    let textoParaEnviar = encodeURI(texto.value)

    fetch(`/api/mensajes?id=${textoParaEnviar}`, { 
        method : "GET", 
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(resJSON => console.log(resJSON.id))
})

botoncito2.addEventListener('click', e => {

    e.preventDefault();
    let textoParaEnviar = texto.value

    fetch(`/api/mensajes`, { 
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({ mensaje : textoParaEnviar })
    })
    .then(response => response.json())
    .then(resJSON => console.log(resJSON))
})