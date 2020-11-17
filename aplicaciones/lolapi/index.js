//Declaraciones de dependencias o herramientas, librerías, frameworks, etc
const https = require('https');
//instanciamos express
const express = require('express');
const app = express();
const cors = require('cors')
//Habilitamos a express para que SOLAMENTE responda en formato JSON
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
//Configuramos los cors para que la app confíe
//en una ip o puerto diferente al del servidor
app.use(cors({ origin : "http://127.0.0.1:5500" }));

let URL = "https://la2.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/DIAMOND/I?page=1&api_key=RGAPI-1140fde4-37f4-4b2e-915d-c0d1451e7953"


//hyper text transfer protocol

//Chunk -> fragmento de respuesta
//Se acumulan en un stream -> Acumulador de chunks
let cache = "";

//Hacemos la petición de información a los servidores de RIOT y la guardamos en "acumulador"
https.get(URL, respuesta => {   

    respuesta.on("data", pedacito => {

        cache += pedacito

    })

    respuesta.on("end", () => {

        console.log("Información cargada")

    })

}).on("error", e => console.log(e))

//Configurar app de express

app.get('/', (request, response) => {
    response.send(cache)
})

app.listen(69, () => console.log("App funcionando en el puerto 69"))