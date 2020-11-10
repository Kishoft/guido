//Objeto
//Una "cosa" o "contenedor" de variables y funciones, llamadas propiedades y métodos, respetivamente
//Cuando se crea un objeto a partir de una clase, esto se llama "instanciar"

/*

let persona = {
    edad : 28,
    nombre : "Fulano",
    habilidad : () => { console.log("Tiragoma") }
}

let automovil = {
    tocaClaxon : () => { console.log("Pi piii") },
    marca : "Chevrolet",
    modelo : "Corsa"
}
*/

//Clases : son plantillas para crear objetos

class Minion{

    name = "Carlitos"
    hp = 200
    ms = 300
    dmg = 20
    range = 200
    
    atacar(objetivo){
        //objetivo.hp = objetivo.hp - dmg
        objetivo.hp -= this.dmg

        if(objetivo.hp <= 0){
            console.log(`${this.name} ha matado a ${objetivo.name}`)
        }
        else{
            console.log(`${this.name} atacó a ${objetivo.name} y le hizo ${this.dmg} de daño, le quedan ${objetivo.hp} de vida.`)
        }

    }
    
    mostrarHP(){
        console.log(`${this.name} tiene ${this.hp} de vida.`)
    }

}

class Champion{

    name = "Ashe"
    hp = 1200
    ms = 400
    dmg = 80
    range = 1200
    
    atacar(objetivo){
        //objetivo.hp = objetivo.hp - dmg

        objetivo.hp -= this.dmg

        if(objetivo.hp <= 0){
            console.log(`${this.name} ha matado a ${objetivo.name}`)
        }
        else{
            console.log(`${this.name} atacó a ${objetivo.name} y le hizo ${this.dmg} de daño, le quedan ${objetivo.hp} de vida.`)
        }
    }
    mostrarHP(){
        console.log(`${this.name} tiene ${this.hp} de vida.`)
    }
}
/*
let minion = new Minion()

let personaje = new Champion()

personaje.atacar(minion)
personaje.atacar(minion)
personaje.atacar(minion)
*/

class Personaje{
    constructor(name, hp, ms, dmg, range){
        this.name = name;
        this.hp = hp;
        this.ms = ms;
        this.dmg = dmg;
        this.range = range;
    }

    atacar(objetivo){

        objetivo.hp -= this.dmg

        if(objetivo.hp <= 0){
            console.log(`${this.name} ha matado a ${objetivo.name}`)
        }
        else{
            console.log(`${this.name} atacó a ${objetivo.name} y le hizo ${this.dmg} de daño, le quedan ${objetivo.hp} de vida.`)
        }
    }
}
//Instanciamos
let ashe = new Personaje("Ashe", 800, 320, 80, 1000)
let minion = new Personaje("Carlitos", 200, 120, 20, 600)

ashe.atacar(minion)
minion.atacar(ashe)

//Herencia - Una clase, por ser extendida de otra, recibe sus propiedades y métodos automáticamente
class Druida extends Personaje {
    constructor(name, dmg, range){
        super(name, 400, 200, dmg, range)
    }
    curar(objetivo){

        objetivo.hp += this.dmg

        console.log(`${this.name} curó a ${objetivo.name} por ${this.dmg} de daño, le quedan ${objetivo.hp} de vida.`)
        
    }
}
//Polimorfismo - Pisar una función anterior, con otra
//Herencia selecta
class Picaro extends Personaje {
    constructor(name, dmg, range){
        super(name, 200, 250, dmg, range)
        this.dmgVeneno = 40
    }
    atacar(objetivo){

        super.atacar(objetivo)

        objetivo.hp -= this.dmgVeneno

        console.log(`${this.name} envenenó a ${objetivo.name} y le hizo ${this.dmgVeneno} de daño adicional, le quedan ${objetivo.hp} de vida.`)
        
    }
}

let dudu = new Druida("Delarion", 50, 1200)
let picaron = new Picaro("Wobse", 100, 200)

dudu.curar(minion)
picaron.atacar(dudu)

//Clases estáticas
//No hace falta instanciarlas para utilizar sus métodos/funciones o propiedades/variables

class Contabilidad{
    static IVA = 1.21
    static calcularIVA(base){
        return base * this.IVA
    }
}

let calculo = Contabilidad.calcularIVA(30)
console.log(calculo)
