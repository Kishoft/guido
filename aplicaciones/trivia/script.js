let puntajeOutput = document.getElementById("puntaje")
let progresoOutput = document.getElementById("progreso")
let preguntasContainer = document.getElementById("preguntasContainer")
let formulario = document.getElementById("trivia")


class Trivia {

    constructor(){

        Trivia.inyectarPregunta()
        Trivia.inyectarProgreso()
    }

    //Objeto que tiene las preguntas, sus respuestas y qué puntaje otorga cada respuesta
    static items = [
        {
            pregunta : "¿De qué color era el caballo blanco de San Martín?",
            respuestas : [
                {
                    valor : "¿Tenía caballo?",
                    puntaje : 0
                },
                {
                    valor : "Azul",
                    puntaje : 10
                },
                {
                    valor : "Blanco",
                    puntaje : 40
                }
            ]
        },
        {
            pregunta : "¿Qué significa HTML?",
            respuestas : [
                {
                    valor : "Hyper Text Markup Language",
                    puntaje : 40
                },
                {
                    valor : "Hijo, Tomaste Merca huehueheu",
                    puntaje : 0
                },
                {
                    valor : "Hyper Text Mega Language",
                    puntaje : 0
                }
            ]
        },
        {
            pregunta : "¿Cuál es el día de la lealtad peronista?",
            respuestas : [
                {
                    valor : "2 de octubre",
                    puntaje : 0
                },
                {
                    valor : "17 de octubre",
                    puntaje : 40
                },
                {
                    valor : "20 de octubre",
                    puntaje : 0
                }
            ]
        },
        {
            pregunta : "¿Dónde está chuka?",
            respuestas : [
                {
                    valor : "Trabajando",
                    puntaje : 40
                },
                {
                    valor : "Pervirtiendo gente",
                    puntaje : 10
                },
                {
                    valor : "En el bambi",
                    puntaje : 20
                }
            ]
        }
    ]
    //Inicializamos unas variables para que funcione el programa. Le damos un estado inicial
    static puntaje = 0;
    static progreso = 0;
    static cantidadDePreguntas = 4;
    //Generamos aleatoriamente un índice para seleccionar "aleatoriamente" una pregunta
    //Simplemente nos devolverá un número 
    static generarIndiceAleatorio(){
        //Creamos el valor del índice dentro de la función así se recicla y no interfiere con otra parte de la aplicación
        let indiceDeLaPregunta = 0;

        do {
            //Nos da un número entre 0 y 1, luego * 10 para desplazar la coma, y el tofixed para quitarle las decimales, y como eso devuelve un string, lo convertimos a number
            indiceDeLaPregunta = Number((Math.random() * 10).toFixed(0))
            //En el bucle, nos estamos asegurando de que el número corresponda a un índice válido de nuestro arreglo de preguntas y respuestas
        } 
        while (this.items.length <= indiceDeLaPregunta);
        //Devolvemos el resultado
        return indiceDeLaPregunta
    }

    static generarPregunta(){

        let preguntaElegida = this.generarIndiceAleatorio()

        return this.items[preguntaElegida]

    }

    static inyectarPregunta(){
        //Nos traemos una pregunta de forma aleatoria
        let preguntaSeleccionada = this.generarPregunta()
        //Metemos un título de fieldset con la pregunta (texto)
        preguntasContainer.innerHTML = `<legend>${preguntaSeleccionada.pregunta}</legend>`
        //Iteramos las posibles respuestas
        for (let i = 0; i < preguntaSeleccionada.respuestas.length; i++) {
            //Creamos en memoria un elemento label con sus propiedades/atributos
            let fieldsetContainer = document.createElement("div")
            fieldsetContainer.classList.add("inputContainer")
            let label = document.createElement("label")
            label.textContent = preguntaSeleccionada.respuestas[i].valor
            label.htmlFor = `pregunta${i}`
            //Lo mismo que el anterior pero con un input
            let input = document.createElement("input")
            input.required = true
            input.id = `pregunta${i}`
            input.type = "radio"
            input.name = "respuesta"
            input.value = preguntaSeleccionada.respuestas[i].puntaje
            //Llamamos a la función append para inyectar los elementos de la memoria a la web
            fieldsetContainer.append(input, label)
            preguntasContainer.append(fieldsetContainer)
        }
        //Y para finalizar inyectamos con html crudo un botón que sirve para enviar la información del formulario
        preguntasContainer.innerHTML += '<input type="submit" value="Continuar">'
    }

    static finalizarJuego(){
        //Creamos elementos en memoria
        let legend = document.createElement("legend")
        legend.textContent = "Juego finalizado";
        let input = document.createElement("input")
        input.type = "submit";
        input.value = "Jugar otra vez";
        //Le estamos agregando una escucha de evento al botón para que limpie las variables de nuestra aplicación
        input.addEventListener("click", e => {
            e.preventDefault()
            this.puntaje = 0;
            this.progreso = 0;
            this.inyectarPregunta()
            this.inyectarPuntaje()
            this.inyectarProgreso()
        })
        //Limpiamos la vista (web, html) del contenedor
        preguntasContainer.innerHTML = "";
        //Luego inyectamos el aviso de que finalizó el juego
        preguntasContainer.append(legend, input)

    }

    static actualizarProgreso(){
        //Aumenta la variable progreso en una unidad
        this.progreso++
        //Luego verifica que no hayamos llegado al límite de preguntas por partida
        if(this.progreso >= this.cantidadDePreguntas){
            this.finalizarJuego()
        }
        else{
            //Si no llega al límite, continúa con la siguiente pregunta
            this.inyectarPregunta()
        }
        //Refresca el progreso
        this.inyectarProgreso()

    }
    static inyectarProgreso(){
        progresoOutput.textContent = `${this.progreso} / ${this.cantidadDePreguntas}`
    }
    static actualizarPuntaje(puntos){
        puntos = Number(puntos);
        this.puntaje += puntos;
        this.inyectarPuntaje()
        this.actualizarProgreso()
    }
    static inyectarPuntaje(){
        puntajeOutput.value = this.puntaje;
    }
}

//Vamos a escuchar el evento submit del formulario, quiere decir que cuando haya un input del tipo submit y sea clickeado, sucederá
//Lo que dice esta función. 

formulario.addEventListener("submit", e => {
    //Prevenimos que se envíe el formulario porque vamos a manipular la información nosotros
    e.preventDefault();
    //Actualizamos el puntaje
    Trivia.actualizarPuntaje(formulario.respuesta.value)
})
//Inicialización de la aplicación

new Trivia