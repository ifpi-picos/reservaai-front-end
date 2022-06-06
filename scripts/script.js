/* Script - Laboratórios */
let menuUl = document.getElementsByClassName("menuUl")[0]

function mostrarMenu(){

    menuUl.style.display = "block"
    
}

function esconderMenu(){

    menuUl.style.display = "none"
    
}

/* Script - Agendamentos */
function scrollL(){
    let left = document.querySelector(".slide")
    left.scrollBy(-350, 0)
}
function scrollR(){
    let right = document.querySelector(".slide")
    right.scrollBy(350, 0)
}