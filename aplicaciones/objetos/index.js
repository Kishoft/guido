let arr = ["texto1", "texto2", 3];

let objeto = { clave : "valor" };

//Objetos -> "cosas", con propiedaes(variables) y métodos(funciones)
//Clases -> plantillas para fabricar objetos

class Automovil{
    marca = "Ninguna";
    modelo = "Ninguno";
    color = "Ninguno";

    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    mostrarDetalles(){
        console.log(`El automovil ${this.marca} ${this.modelo} es de color ${this.color} `)
    }
}

let autoDeEze = new Automovil("McLaren", "720S", "Naranja");
let autoDeGuido = new Automovil("Audi", "R8", "Negro");

console.log(objeto)
autoDeEze.mostrarDetalles();
autoDeGuido.mostrarDetalles();