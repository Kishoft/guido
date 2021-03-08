class Lengua{
    static todoMayus(texto){
        return String(texto).toUpperCase();
    }
}

class Literatura{
    static leer(texto){
        return "No sé leer";
    }
}

module.exports = { Lengua, Literatura }