const os = require('os');
const fs = require('fs');

console.log("Su arquitectura es de " + os.arch())
console.log("Su procesador tiene " + os.cpus().length + " núcleos")


let persona1 = "Fulano"
let persona2 = "Mengano"


let cuerpoContrato = `${persona1} desea tirarse un pedo en la cara de ${persona2} y para estar seguros de que ${persona2} no efectuará una devolución del tipo legal, da su consentimiento a través de este contrato.`


fs.writeFile("./caca.txt", cuerpoContrato, (err) => {
    if(err) console.log(err)
    console.log("Archivo escrito")
})