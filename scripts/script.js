/* Script - Laboratórios */
let menuUl = document.getElementsByClassName("menuUl")[0]

function mostrarMenu(){

    menuUl.style.display = "block"
    
}

function esconderMenu(){

    menuUl.style.display = "none"
    
}

/* Script - Agendamentos */
let slideItems = document.querySelectorAll("div.slide-item")

for (let i =0; i< slideItems.length; i++){

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
        
    })
}

function scrollL(){
    let left = document.querySelector(".slide")
    left.scrollBy(-350, 0)
}
function scrollR(){
    let right = document.querySelector(".slide")
    right.scrollBy(350, 0)
}

let muralItems = document.querySelectorAll("div.muralItem")

for(let i = 0; i < muralItems.length; i++){
    
    muralItems[i].addEventListener("click", (e) => {

        if(muralItems[i].id != "red"){
            muralItems[i].id = "red"
            muralItems[i].style.backgroundColor = "red"
            muralItems[i].style.color = "rgba(243, 243, 243, 1)"
        }else{
            muralItems[i].id = "white"
            muralItems[i].style.backgroundColor = "#fff"
            muralItems[i].style.color = "black"
        }
    })
}