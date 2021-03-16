const generadorDeTareas = require('child_process').fork('./generadorDeTareas.js');
const servicioDeImpresion = require('child_process').fork('./impresion.js');

const sqlite = require('sqlite3').verbose();
let db = new sqlite.Database('./db/queue.db', (err) => {if(err)console.log(err)})

class Queue {

    imprimiendo = false;
    
    constructor(){
        this.trabajoPendiente().then(pendiente => {
            if(pendiente){
                console.log("Retomando trabajo pendiente");
                this.imprimiendo = true;
                this.siguienteTarea().then(tarea => {
                    servicioDeImpresion.send(tarea)
                });
            }
        })
    }

    eliminarExcedente(){
        return new Promise((resolve, reject) => {
            db.all(`SELECT id FROM queue ORDER BY id ASC`, (err, data) => {
                if(err) reject(err)
                if(data){
                    if(data.length > 100){
                        db.exec(`DELETE FROM queue WHERE id = ${data[0].id}`, err => reject(err))
                    }                    
                    resolve()
                }
            })
        })
    }

    trabajoPendiente(){
        return new Promise((resolve, reject) => {
            db.all('SELECT state FROM queue WHERE state = 0', (err, data) => {
                if(data) {
                    if(data.length > 0) resolve(true)
                    else resolve(false)
                };
                if(err) reject(err);
            })
        })
    }

    agregarTarea(tarea) {
        return new Promise((resolve, reject) => {
            db.exec(`INSERT INTO queue (content, state, timestamp) VALUES ('${tarea}', 0, datetime('now', 'localtime'));`, (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }

    siguienteTarea() {
        return new Promise((resolve, reject) => {
            db.get('SELECT id, content, state, timestamp FROM queue WHERE state = 0 ORDER BY id ASC', (err, data) => {
                if(err) reject(err);
                resolve(data);
            })
        })
    }

    marcarTareaComoFinalizada(tarea){
        return new Promise((resolve, reject) => {
            db.exec(`UPDATE queue SET state = 1 WHERE id = ${tarea.id}`, err => {
                if(err) reject(err)
                resolve();
            });
        })
    }

    historialDeTareas(){
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM queue ORDER BY id DESC', (err, data) => {
                if(err) reject(err);
                resolve(data);
            })
        })
    }
}

let colaDeImpresion = new Queue();


generadorDeTareas.on('message',async mensaje => {
    //Llegan los trabajos desde el emisor
    await colaDeImpresion.agregarTarea(mensaje);
    if(!colaDeImpresion.imprimiendo){
        colaDeImpresion.imprimiendo = true;
        let tarea = await colaDeImpresion.siguienteTarea();
        servicioDeImpresion.send(tarea);
    }
})

servicioDeImpresion.on('message', async mensaje => {
    //La impresora avisa cuando termina el trabajo
    colaDeImpresion.imprimiendo = false;
    await colaDeImpresion.marcarTareaComoFinalizada(mensaje);
    await colaDeImpresion.eliminarExcedente();
    let trabajoPendiente = await colaDeImpresion.trabajoPendiente();
    if(trabajoPendiente){
        colaDeImpresion.imprimiendo = true;
        let tarea = await colaDeImpresion.siguienteTarea();
        servicioDeImpresion.send(tarea);
    }
})