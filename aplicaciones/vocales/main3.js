function esVocal(letra) {
    let vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í' , 'ó', 'ú', 'ü']
    let encontrada = false
    vocales.forEach(vocal => {
        if (vocal === letra) encontrada = true
    })
    return encontrada
}

function buscadorDeVocales(texto) {
    console.log(texto.length)
    let a , e , i , o , u;
    a = e = i = o = u = 0
    let textoMinusculas = texto.toLowerCase()
    let textoSeparado = textoMinusculas.split('')
    let contadorDeVocales = 0,
        contadorDeConsonantes = 0,
        contadorDeEspacios = 0,
        contadorDeCaracteresEspeciales = 0
    textoSeparado.forEach(letra => {
        if (esVocal(letra)) contadorDeVocales++
        else if (letra === ' ') contadorDeEspacios++
        else if (letra === ',' || letra === '.') contadorDeCaracteresEspeciales++
        else contadorDeConsonantes++
        if(letra === 'a'|| letra === 'á') a++
        else if(letra === 'e'|| letra === 'é') e++
        else if(letra === 'i'|| letra === 'í') i++
        else if(letra === 'o'|| letra === 'ó') o++
        else if(letra === 'u'|| letra === 'ú'|| letra === 'ü') u++
    })
    let resultado = { contadorDeVocales, contadorDeConsonantes, contadorDeEspacios, contadorDeCaracteresEspeciales }
    let resultado2 = { a, e, i, o, u }
    console.log(resultado2)
    console.log(resultado)
    return resultado
}

buscadorDeVocales('Las ideas que comunica un texto están contenidas en lo que se suele denominar macroproposiciones, unidades estructurales de nivel superior o global, que otorgan coherencia al texto constituyendo su hilo central, el esqueleto estructural que cohesiona elementos lingüísticos formales de alto nivel, como los títulos y subtítulos, la secuencia de párrafos, etc. En contraste, las microproposiciones son los elementos coadyuvantes de la cohesión de un texto, pero a nivel más particular o local. Esta distinción fue realizada por Teun van Dijk en.​')