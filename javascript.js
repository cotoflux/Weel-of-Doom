var nombres = ["Alexandro", "Amau", "Camilo","Carlos", "Delfina","Enric", "Erik","Ferran","Franco", "Janina","Jason", "Kavan", "Manuela","Nathalia", "Nellay", "Noelia", "Nuria", "Raul", "Sergi", "Shuangjie", "Solomon", "Unai","Andres", "Thierry"];
var muertos = [];
var longitud;
var nomRandom;
var div;  
var nuevoH1; 
var texto;
var colocarH1;
var valorRandom;
var apariencia;
var fantasmas;


function reseleccionar(){  
    nomRandom = Math.floor(Math.random() * nombres.length);
    div = document.getElementById("colocar");//cojer el elemento con Id "colocar"

    div.innerHTML = nombres[nomRandom];

    for (var i = 0; i < nombres.length; i++){
        if(nombres[i] === nombres[nomRandom]) {
            var dato = nombres.splice(i, 1);
                muertos.push(dato);
        }
    }
    
    fantasmas();
}



function fantasmas(){
console.log(apariencia);
    apariencia = document.getElementById("nombresLista");
    apariencia.innerHTML = "";
    for (var i = 0; i < muertos.length; i++){
        apariencia.innerHTML += "<li>"+muertos[i]+"</li>";
        console.log[i];
    }
    console.log(fantasmas);
}

function reload(){
    window.location.reload();

}

reseleccionar();