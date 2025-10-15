console.log("It Works");

const distanceEL = document.getElementById("distance");
const ageEL = document.getElementById("age");
const buttonEL = document.getElementById("btn");
const costoEl = document.getElementById("costo");
const formEl = document.getElementById("form");

const totalEl = document.getElementById("costo");

const recapAgeEl = document.getElementById("recapAge");
const recapKmEl = document.getElementById("recapKm");

/*
const riepilogokm = document.createElement("p");
const riepilogoage = document.createElement("p");

totalEl.appendChild("riepilogokm");
totalEl.appendChild("riepilogoage");
*/



formEl.addEventListener("submit", (event) => { 

    let prezzoBase =  Number(distanceEL.value) * 0.21;

    if (ageEL.value < 18){
       prezzoBase = prezzoBase - (prezzoBase * 0.20) 
    } else if (ageEL.value > 65){
       prezzoBase = prezzoBase - (prezzoBase * 0.40) 
    }     
    console.log(prezzoBase);
    event.preventDefault()

    recapAgeEl.innerText = "l'età inserita è " + ageEL.value;
    recapKmEl.innerText = "la distanza inserita è " + distanceEL.value;

    totalEl.innerText = "il costo del biglietto è € " + prezzoBase; 
});



// start second milestone

// INSERIRE UN FORM CON DUE INPUT PER KM E ETA'

// CREARE UNA SEZIONE PER RESTITUIRE IL CALCOLO

// FORMATTARE IL RISULTATO IN MODO CHE SI VEDA SOLO I PRIMI DUE NUMERI DECIMALI


/*  
buttonEL.addEventListener("click", () => { 

    let prezzoBase =  Number(distanceEL.value) * 0.21;

    if (ageEL.value < 18){
       prezzoBase = prezzoBase - (prezzoBase * 0.20) 
    } else if (ageEL.value > 65){
       prezzoBase = prezzoBase - (prezzoBase * 0.40) 
    }     
    console.log(prezzoBase);
}); */








