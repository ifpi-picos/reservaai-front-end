/* ---- Script - Laboratórios ---- */
let menuUl = document.getElementsByClassName("menuUl")[0]

function mostrarMenu(){

    menuUl.style.display = "block"
    
}

function esconderMenu(){

    menuUl.style.display = "none"
    
}

/* ---- Script - Agendamentos ---- */

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

    if (cont == 1){

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

/* ---- Script - Minhas Reservas ---- */

/* Adicionando descrição */
let btnPlus = document.querySelectorAll("img.btnPlus")

for (let i = 0; i < btnPlus.length; i++){

    btnPlus[i].addEventListener("click", (e) => {

        let element = e.target.parentElement.parentElement

        let textSend = element.children[1]
        textSend.style.fontSize = "1rem"

        let contentInput = element.children[3].children[1].value

        if (contentInput.length > 4 & contentInput != "     "){

            textSend.innerText += contentInput
            textSend.innerHTML += "<br>"
        }else{

            alert("A descrição precisa ter pelo menos 5 caracteres!")
        }

        element.children[3].children[1].value = ''
    })
}

/* Excluindo reserva */
let btnTrash = document.querySelectorAll("img.btnTrash")

for (let i = 0; i < btnTrash.length; i++){

    btnTrash[i].addEventListener("click", (e) => {
        console.log(e.target.parentElement.parentElement)

        let divTrash = e.target.parentElement.parentElement
        
        divTrash.remove()
    })
}