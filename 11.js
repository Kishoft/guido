//Promesas

function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Soy la función número 1")
            resolve()
        }, 5000)
    })
}

function func2() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Soy la función número 2")
            resolve()
        }, 2000)
    })
}

function func3() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Soy la función número 3")
            resolve()
        }, 3000)
    })
}

//Promesas sin encadenar // En paralelo
/*

func1()
func2()
func3()

*/


//Forma funcional para encadenar promesas
/*
func1()
.then(() => func2())
.then(() => func3())
.then(() => console.log("Trabajo terminado"))
*/
//Forma heredada de notación de objetos para encadenar promesas

async function programa() {

    await func1()
    await func2()
    await func3()
    console.log("Trabajo terminado")
}

//programa()

Promise.all([
    func1(),
    func2(),
    func3()
])
.then(() => console.log("Sonar la alarma"))

//Procesamiento paralelo