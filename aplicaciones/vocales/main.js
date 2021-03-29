function buscadorDeVocales(texto){
    let vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í' , 'ó', 'ú', 'ü']
    let textoMinusculas = texto.toLowerCase()
    let textoSeparado = textoMinusculas.split('')
    let contador = 0
    textoSeparado.forEach(letra =>{
        vocales.forEach(vocal => {
            if(vocal === letra){
                contador++
            }
        })
    })
    console.log(contador)
    return contador
}
buscadorDeVocales('Las ideas que comunica un texto están contenidas en lo que se suele denominar «macroproposiciones», unidades estructurales de nivel superior o global, que otorgan coherencia al texto constituyendo su hilo central, el esqueleto estructural que cohesiona elementos lingüísticos formales de alto nivel, como los títulos y subtítulos, la secuencia de párrafos, etc. En contraste, las «microproposiciones» son los elementos coadyuvantes de la cohesión de un texto, pero a nivel más particular o local. Esta distinción fue realizada por Teun van Dijk en 1980.1​')