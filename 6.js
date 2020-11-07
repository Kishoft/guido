//Valores por defecto en una función
function validarFormulario(nombre, apellido, dni = "no tiene") {

    console.log(`Su nombre es ${nombre} ${apellido} y su dni es ${dni}`)    

}
validarFormulario("Ezequiel", "Regaldo", 33432523532)

function contarParametros(nombre, ...elResto) {

    console.log(nombre + " escribió " + elResto)

}

contarParametros("Ezequiel", "Hola", "mundo", 34234, true, "Guido", "lolcito")

//los 3 puntos indican que el resto de parámetros que se ingresen como sobrantes, irán en la misma bolsa (arreglo)

//arreglos

let palabras = ["Sandía", "Corcho", "Melón"]

for (let i = 0; i < palabras.length; i++) 
{
    console.log(`La palabra que está en la posición ${i} es : ${palabras[i]}`)
}
