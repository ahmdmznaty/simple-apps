



function activeOnAll() {
    let active = document.querySelector(".active")
    if(active) document.querySelector(".others").style.zIndex = 15
    else document.querySelector(".others").style.zIndex = 10
}

activeOnAll()


function toggleMenu() {
    let toggle = document.querySelector(".toggle")
    toggle.children[2].classList.toggle("closed")
    let arrow = document.querySelector(".arrow")
    if( arrow.style.transform == "rotateX(0deg)" ) arrow.style.transform = "rotateX(180deg)"
    else arrow.style.transform = "rotateX(0deg)"
    activeOnAll()
}





function choose(country) {
    let options = document.querySelectorAll(".option")
    for( let option of options ) {
        option.classList.remove("active")
        if( option.children[1].innerHTML == country ) {
            option.classList.add("active")
        }
    }
}

























