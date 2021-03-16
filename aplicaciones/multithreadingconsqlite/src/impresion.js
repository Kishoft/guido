class Impresora{
    static delay(segundos){
        return new Promise(resolve => {
            setTimeout(() => resolve(), segundos * 1000)
        })
    }
    static async imprimir(tarea){
        console.log(`Comenzando a imprimir ${tarea.content}`);
        await this.delay(4);
        console.log(`${tarea.content} impreso con éxito`);
        process.send(tarea);
    }
}

process.on('message', mensaje => {
    Impresora.imprimir(mensaje)
})