function saludar(nombre) 
{
    console.log("Hola, " + nombre)
}

saludar("Guido")

function calcularIVA(base) {

    let IVA = 1.21;
    
    return base * IVA

}

let IVA_calculado = calcularIVA(100)

console.log(IVA_calculado)

//Scope - Alcance
/* si yo creo una variable dentro de una función, ESA variable creada, solo se podrá ver desde dentro de la función
y NO desde afuera */

/*

console.log(IVA) <- no sería válido

*/

let chichito = "ASD"
console.log(chichito)
function cambiarChichito() {
    chichito = "DSA"
}
cambiarChichito()
console.log(chichito)