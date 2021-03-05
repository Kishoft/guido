let aElements = document.getElementsByTagName("a");

for (let a of aElements) {
    
    let elementoAnclado = document.getElementById(a.hash.slice(1))

    console.log(elementoAnclado)
}