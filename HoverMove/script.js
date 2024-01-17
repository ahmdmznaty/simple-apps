

document.querySelector(".parent").addEventListener("mousemove", e => {
    let place = Math.ceil(e.offsetY / 280 * 100)
    e.target.querySelector(".cover").style.top = `calc(${place}% - 280px)`
})
document.querySelector(".parent").addEventListener("mouseleave", e => {
    e.target.querySelector(".cover").style.top = `calc(50% - 280px)`
})

