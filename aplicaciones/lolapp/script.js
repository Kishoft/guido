let tabla = document.getElementById("informacion")

class LolInfo {
    static obtenerInformacion(){

        return fetch("http://127.0.0.1:69", {
            method : "GET",
            headers : { "Content-Type" : "application/json" }
        })
        .then(info => { 
            if(info.ok){ 
                return info.json()
            }
            else{ 
                console.log("Error al extraer info del server") 
            }
        })
        .catch(e => alert("Error del servidor"))
    }
}

LolInfo.obtenerInformacion()
.then(infoJSON => {

    let infoParaLaTabla = ""

    //Ordenamos el arreglo de forma descendente por LP
    infoJSON.sort((a, b) => {
        return b.leaguePoints - a.leaguePoints
    })

    //Recorremos el arreglo con un bucle for para
    //procesar la data que contiene

    infoJSON.forEach(summoner => {
        //Rellenamos la Variable
        infoParaLaTabla += `
            <tr>
                <td>${summoner.summonerName}</td>
                <td>${summoner.tier} ${summoner.rank}</td>
                <td>${summoner.wins}</td>
                <td>${summoner.losses}</td>
                <td>${summoner.leaguePoints % 2 === 0 ? summoner.leaguePoints : `<span style="color: blue">${summoner.leaguePoints}</span>`}</td>
            </tr>
        `
    })
    //Luego de que termina de ejecutarse el bucle
    //metemos en la tabla la info, así cruda
    tabla.innerHTML = infoParaLaTabla
})