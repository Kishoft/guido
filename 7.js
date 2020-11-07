//Funciones anónimas y funciones flechas

//función flecha simplemente 
//tiene otra forma de escribirse, funciona igual que una común

function soyUnaFuncion(parametro) {
    //Lo que vos quieras    
}

//En este estilo de función, se crea una variable que equivale
//A los parámetros de una función, seguido de una flecha y las clásicas llaves
//Podemos prescindir de los paréntesis SIEMPRE Y CUANDO tengamos SOLAMENTE 1 solo parámetro

//También podemos prescindir de las llaves, SOLAMENTE si se opera con una sola línea

let soyOtraFuncion1 = (uno, dos) => console.log("holis")
let soyOtraFuncion2 = () => console.log("holis")
let soyOtraFuncion3 = uno => console.log("holis")
let soyOtraFuncion4 = uno => { console.log("holis") }

soyOtraFuncion4()

