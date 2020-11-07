let edad = 28;
let nombre = "Ezequiel";
let apellido = "Regaldo";
let juegalolcito = true;


let nombre_completo = "Soy " + nombre + " " +  apellido + " y tengo " + edad + " años.";
let nombre_completo_ts = `Soy ${nombre} ${apellido} y tengo ${edad} años.`

console.log(nombre_completo)
console.log(nombre_completo_ts)

if (edad >= 18 && edad <= 70) 
{
    console.log(`${nombre}, reune los requisitos para conducir`)
}
else if(edad < 0)
{
    console.log(`${nombre}, todavía no naciste we`)
}
else 
{
    console.log(`${nombre}, no está habilitado para conducir`)
}

if(juegalolcito === true){
    console.log("Sos un terrible niño rata")
}
