//agradecimientos
/*
creator = "Yoimar Andres julio Salcedo"
creatorC = "Yoimar"
console.log(`Esta pagina fue creada por ${creator}`);
alert(`${creatorC} le sugiere visitar la pagina desde un Ordenador`)
*/
//modo oscuro
let botonWBback = document.getElementById("botonWBback");
let tema = document.getElementById("tema");
let tema2 = document.getElementById("tema2");
let botonWBcircle = document.getElementById("botonWBcircle")
botonWBback.addEventListener("click", bgtema);

function bgtema(){
    tema.classList.toggle("tema-oscuro");
    tema2.classList.toggle("tema-oscuro2");

    if(tema.classList.contains("tema-oscuro")){
        botonWBcircle.style.right = "10%"
    }
    else{
        botonWBcircle.style.right = "40%"
    }
}