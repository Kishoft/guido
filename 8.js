//Otras formas de escribir el bucle FOR

let palabras = ["Sandía", "Corcho", "Melón"]

//Son equivalentes

palabras.forEach(palabra => console.log(palabra))

for (let palabra of palabras) {
    console.log(palabra)
}