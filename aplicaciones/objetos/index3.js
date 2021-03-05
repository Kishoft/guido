//Ejemplo objetos juegos
//Ejemplo de polimorfismo y getters & setters

class Personaje {
    nombre = "Ninguno";
    nivel = 1;
    experiencia = 0;
    rango = 0;
    dañoBase = 20;
    hp = 0;
    hpMax = 0;
    set cambiarHP(cantidad){
        if(cantidad <= 0){
            this.hp = 0;
            this.morir();
        }
        else if(cantidad > this.hpMax){
            this.hp = this.hpMax;
        }
        else {
            this.hp = cantidad;
            this.mostrarHP();
        }

    }

    constructor(nombre, rango, hpTotal) {
        this.nombre = nombre;
        this.rango = rango;
        this.hp = hpTotal;
        this.hpMax = hpTotal;
    }
    atacar(objetivo) {
        if(objetivo.hp <= 0){
            console.log(`El objetivo ya está muerto.`)
        }
        else{
            console.log(`${this.nombre} atacó a ${objetivo.nombre} y le hizo ${this.dañoBase} de daño.`)
            objetivo.cambiarHP = objetivo.hp - this.dañoBase;
        }
    }
    mostrarHP() {
        console.log(`${this.nombre} tiene ${this.hp} puntos de vida`)
    }
    saltar() {
        console.log(`${this.nombre} salta.`)
    }
    morir(){
        console.log(`${this.nombre} c mamó.`)
    }

}

class Druida extends Personaje {

    mana = 100;
    manaMax = 100;
    dañoConHechizos = 0;

    constructor(nombre, rango, hpTotal, dañoConHechizos) {
        super(nombre, rango, hpTotal);
        this.dañoConHechizos = dañoConHechizos;
    }

    curar(objetivo){
        if(objetivo.hp > 0){
            if(objetivo === this){
                console.log(`${this.nombre} se curó a si mismo por ${this.dañoConHechizos} de vida.`) 
            }
            else{
                console.log(`${this.nombre} curó a ${objetivo.nombre} y sanó ${this.dañoConHechizos} de vida.`)
            }
            objetivo.cambiarHP = objetivo.hp + (this.dañoConHechizos)
        }
    }

}
class Picaro extends Personaje {

    furia = 0;
    furiaMax = 120;
    dañoDeArma = 0;

    constructor(nombre, rango, hpTotal, dañoDeArma) {
        super(nombre, rango, hpTotal);
        this.dañoDeArma = dañoDeArma;
    }

    atacar(objetivo){
        super.atacar(objetivo);
        if(objetivo.hp > 0){
            console.log(`${this.nombre} atacó a ${objetivo.nombre} y le hizo ${this.dañoDeArma / 2} de daño de veneno.`)
            objetivo.cambiarHP = objetivo.hp - (this.dañoDeArma / 2)
        }
    }
}

let delarion = new Druida("Delarion", 300, 100, 40);
let ashura = new Picaro("Ashura", 100, 150, 30);

ashura.atacar(delarion)
ashura.atacar(delarion)
delarion.curar(delarion)
delarion.curar(delarion)
ashura.atacar(delarion)
ashura.atacar(delarion)
