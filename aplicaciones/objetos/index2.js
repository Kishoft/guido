//Herencia
class Persona{

    nombre = "Sin nombre";
    apellido = "Sin apellido";
    edad = 0;

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar(){
        console.log(`${this.nombre} dice hola.`);
    }
}
//Hacemos la herencia
class Empleado extends Persona{

    trabajo = "Ninguno";

    constructor(nombre, apellido, edad, trabajo){
        super(nombre, apellido, edad);
        this.trabajo = trabajo;
    }
}

let empleado1 = new Empleado("Juan Carlos", "De la nalga", 30);

empleado1.saludar();