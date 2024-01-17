
let content = document.querySelector(".content")
content.addEventListener('click', (e) => {
    let div = document.createElement("div")
    div.classList.add("bubble")
    div.style.left = e.x + "px"
    div.style.top = e.y + "px"
    content.append( div )
    setTimeout(() => { div.remove() }, 400)
})