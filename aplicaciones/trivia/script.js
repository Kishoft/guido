let puntajeOutput = document.getElementById("puntaje")
let progresoOutput = document.getElementById("progreso")
let preguntasContainer = document.getElementById("preguntasContainer")
let formulario = document.getElementById("trivia")


class Trivia {
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

    static preguntasRealizadas = [];
    static puntaje = 0;
    static progreso = 0;
    static cantidadDePreguntas = 4;

    static generarIndiceAleatorio(){

        let indiceDeLaPregunta;

        do {
            indiceDeLaPregunta = Number((Math.random() * 10).toFixed(0))
        } 
        while (this.items.length <= indiceDeLaPregunta);
        
        this.preguntasRealizadas.push(indiceDeLaPregunta)

        return indiceDeLaPregunta
    }

    static generarPregunta(){

        let preguntaElegida = this.generarIndiceAleatorio()

        return this.items[preguntaElegida]

    }

    static inyectarPregunta(){
        let preguntaSeleccionada = this.generarPregunta()

        preguntasContainer.innerHTML = `<legend>${preguntaSeleccionada.pregunta}</legend>`


        for (let i = 0; i < preguntaSeleccionada.respuestas.length; i++) {
            let label = document.createElement("label")
            label.textContent = preguntaSeleccionada.respuestas[i].valor
            label.htmlFor = `pregunta${i}`
            let input = document.createElement("input")
            input.required = true
            input.id = `pregunta${i}`
            input.type = "radio"
            input.name = "respuesta"
            input.value = preguntaSeleccionada.respuestas[i].puntaje

            preguntasContainer.append(input, label)
            
        }

        preguntasContainer.innerHTML += '<br><input type="submit" value="Contestar">'
    }

    static finalizarJuego(){

        let legend = document.createElement("legend")
        legend.textContent = "Juego finalizado";
        let input = document.createElement("input")
        input.type = "submit";
        input.value = "Jugar otra vez";
        input.addEventListener("click", e => {
            e.preventDefault()
            this.preguntasRealizadas = [];
            this.puntaje = 0;
            this.progreso = 0;
            this.inyectarPregunta()
        })

        preguntasContainer.innerHTML = "";
        preguntasContainer.append(legend, input)

    }

    static actualizarProgreso(){
        this.progreso++
        if(this.progreso >= this.cantidadDePreguntas){
            this.finalizarJuego()
        }
        else{
            this.inyectarPregunta()
        }

        this.inyectarProgreso()

    }
    static inyectarProgreso(){
        progresoOutput.textContent = `${this.progreso} / ${this.cantidadDePreguntas}`
    }
    static actualizarPuntaje(puntos){
        puntos = Number(puntos);
        this.puntaje += puntos;
        puntajeOutput.value = this.puntaje;
        this.actualizarProgreso()
    }
}

formulario.addEventListener("submit", e => {
    
    e.preventDefault();

    Trivia.actualizarPuntaje(formulario.respuesta.value)
})

Trivia.inyectarPregunta()
Trivia.inyectarProgreso()