let contador = 0;
//Guardamos en una variable un número aleatorio entre 0 y 100
let numeroParaAdivinar = Number((Math.random() * 100).toFixed(0))
//Porque quiero, arranco el número del adversario en 0
let numeroAdversario = 0;

do {
    numeroAdversario = Number((Math.random() * 100).toFixed(0))
    contador++
} 
while (numeroAdversario !== numeroParaAdivinar);

console.log(`Se demoró ${contador} intentos en descubrir el número aleatorio. El número era ${numeroParaAdivinar}`)