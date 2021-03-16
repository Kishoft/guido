const express = require('express');
const app = express();

class GeneradorDeTareas{
    static generar(tarea){
        process.send(tarea);
    }
}

app.get('/imprimir/:tarea', (req,res) =>{
    GeneradorDeTareas.generar(req.params.tarea);
    res.send(`la tarea ${req.params.tarea} se está procesando`);
})

app.listen(8080, () => console.log("App funcionando en el puerto 8080"))


