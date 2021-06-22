var milisegundos, segundos, minutos, horas;
var txtHora,txtMin, txtSeg, txtMil;
milisegundos = 0;
segundos = 0;
minutos = 0;
horas = 0;
estado = false;
var intervalo;
btIniciar = document.getElementById("btn-iniciar");
btVolta = document.getElementById("btn-volta");
btReset = document.getElementById("btn-reset");
textVolta = document.getElementById("volta");
textHora = document.getElementById("horas");
textMin = document.getElementById("minutos");
textSeg = document.getElementById("segundos");
textMili = document.getElementById("milisegundos");


function contarTempo() {
    milisegundos+=10;
    if (milisegundos == 1000) {
        milisegundos = 0;
        segundos++;
    }
    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos == 60) {
        minutos = 0;
        horas++;
    }
    if (horas == 24) {
        horas = 0;
        minutos = 0;
        segundos = 0;
        milisegundos = 0;
    }
    escreveTela();


}

btIniciar.onclick = function estadoContagem() {
    if (estado == false) {
        intervalo = setInterval(contarTempo, 10);
        btIniciar.innerHTML = "Pausar";
        estado = true;
    } else {
        clearInterval(intervalo);
        btIniciar.innerHTML = "Iniciar";
        estado = false;
    }
}

btReset.onclick = function resetValores() {
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0
    escreveTela();
    textVolta.innerHTML = "<h3></h3>"
}

btVolta.onclick = function salvaVolta(){
    if(horas<10){txtHora="0"+horas;}else{txtHora=horas;};
    if(minutos<10){txtMin="0"+minutos}else{txtMin=minutos}
    if(segundos<10){txtSeg="0"+segundos}else{txtSeg=segundos};
    if(milisegundos<10){txtMil="0"+milisegundos}else{txtMil=milisegundos};
    textVolta.innerHTML = "<h3>Tempo de volta:  " + txtHora + " : " + txtMin + " : " + txtSeg + " : " + txtMil +"</h3>";

}

function escreveTela() {
    textHora.innerHTML = "<h2>" + horas + "</h2>";
    textMin.innerHTML = "<h2>" + minutos + "</h2>";
    textSeg.innerHTML = "<h2>" + segundos + "</h2>";
    textMili.innerHTML = "<h1>" + milisegundos+ "</h1>";
    if (horas < 10) {
        textHora.innerHTML = "<h2>0" + horas + "</h2>";
    } else { textHora.innerHTML = "<h2>" + horas + "</h2>"; }
    if (minutos < 10) {
        textMin.innerHTML = "<h2>0" + minutos + "</h2>";
    } else {
        textMin.innerHTML = "<h2>" + minutos + "</h2>";
    }
    if (segundos < 10) {
        textSeg.innerHTML = "<h2>0" + segundos + "</h2>";
    } else {
        textSeg.innerHTML = "<h2>" + segundos + "</h2>";
    }
    if (milisegundos < 10) {
        textMili.innerHTML = "<h1>0" + milisegundos + "</h1>";
    } else { 
        textMili.innerHTML = "<h1>" + milisegundos + "</h1>";

    }
}
