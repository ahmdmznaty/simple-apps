



let cards = document.querySelectorAll(".card")

for( let card of cards ) {
    card.addEventListener("click", () => {
        card.classList.toggle("checked")
        updateCount()
        updateAll()
    })
}


document.querySelector(".top button").addEventListener("click", () => {
    let checked = document.querySelectorAll(".checked")
    let cards = document.querySelectorAll(".card")
    if( checked.length == cards.length ) checked.forEach( (elem) => {elem.classList.remove("checked")} )
    else {
        cards.forEach( (elem) => { if( !elem.classList.contains("checked") ) elem.classList.add("checked") })
    }
    updateCount()
    updateAll()
})





function updateCount() { document.querySelector("#count").innerHTML = document.querySelectorAll(".checked").length }
function updateAll() {
    let bu = document.querySelector(".top button")
    if( document.querySelectorAll(".checked").length == 6 ) bu.innerHTML = "Deselect all"
    else bu.innerHTML = "Select all"
}










