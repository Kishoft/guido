//Config
const express = require('express');
const app = express();
const puerto = 3030;

//Imports
let { Lengua } = require('./controllers.js');
let colegio = require('./controllers.js');
colegio.Literatura.leer();
//app config
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/static', express.static('public'));

app.get('/api/mensajes', (req, res) => {
    if(req.query.mensaje) {
        res.send({ "mensaje" : Lengua.todoMayus(req.query.mensaje) }) 
    }
    else { res.send({"mensaje" : "Query inválida"}) }
})
app.get('/api/mensajes/:id', (req, res) => {
    console.log(req.params);
    res.send({ "mensaje" : req.params });
})
app.post('/api/mensajes', (req, res) => {
    console.log(req.body)
    res.send({"mensaje" : "todo ok"});
})
app.put('/api/mensajes', (req, res) => {

})
app.delete('/api/mensajes', (req, res) => {

})





app.listen(puerto, () => console.log(`La aplicación está funcionando en el puerto ${puerto}`));