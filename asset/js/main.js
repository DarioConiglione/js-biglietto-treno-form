console.log("It Works");

const distanceEL = document.getElementById("distance");
const ageEL = document.getElementById("age");
const buttonEL = document.getElementById("btn");


buttonEL.addEventListener("click", () => { 

    let prezzoBase =  Number(distanceEL.value) * 0.21;

    if (ageEL.value < 18){
       prezzoBase = prezzoBase - (prezzoBase * 0.20) 
    } else if (ageEL.value > 65){
       prezzoBase = prezzoBase - (prezzoBase * 0.40) 
    }     
    console.log(prezzoBase);
});



    









