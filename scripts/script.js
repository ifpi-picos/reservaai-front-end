/* Script - Laboratórios */
let menuUl = document.getElementsByClassName("menuUl")[0]

function mostrarMenu(){

    menuUl.style.display = "block"
    
}

function esconderMenu(){

    menuUl.style.display = "none"
    
}

/* Script - Agendamentos */

/* Slide horizontal */
function scrollL(){
    let left = document.querySelector(".slide")
    left.scrollBy(-350, 0)
}
function scrollR(){
    let right = document.querySelector(".slide")
    right.scrollBy(350, 0)
}

/* Função para limitar o número de itens selecionados */
function maxRed(mult){
    let cont = 0

    for (let i = 0; i < mult.length; i++){

        if(mult[i].id == "red"){
            cont += 1
        }
    }

    if (cont == 3){

        for (let i = 0; i < mult.length; i++){

            if(mult[i].id != "red"){

                mult[i].style.pointerEvents = "none"
            }
        }
        console.log("Não é permitido marcar mais que três itens!")

    }else{
        for (let i = 0; i < mult.length; i++){

            if(mult[i].id != "red"){

                mult[i].style.pointerEvents = "all"
            }
        }
    }
}

/* Selecionando itens do slide */
let slideItems = document.querySelectorAll("div.slide-item")

for (let i = 0; i< slideItems.length; i++){

    slideItems[i].addEventListener("click", (e) => {

        if(e.target.id != "red"){
            slideItems[i].id = "red"
            slideItems[i].style.backgroundColor = "red"
            slideItems[i].style.color = "rgba(243, 243, 243, 1)"
        }else{
            slideItems[i].id = "white"
            slideItems[i].style.backgroundColor = "#fff"
            slideItems[i].style.color = "black"
        }

        maxRed(slideItems)
        
    })
}
/* Selecionando itens do mural*/
let muralItems = document.querySelectorAll("div.muralItem")

for (let i = 0; i < muralItems.length; i++){
    
    muralItems[i].addEventListener("click", (e) => {

        if(e.target.id != "red"){
            muralItems[i].id = "red"
            muralItems[i].style.backgroundColor = "red"
            muralItems[i].style.color = "rgba(243, 243, 243, 1)"
        }else{
            muralItems[i].id = "white"
            muralItems[i].style.backgroundColor = "#fff"
            muralItems[i].style.color = "black"
        }

        maxRed(muralItems)
    })
}