let parts = ["All", "Web Design", "Front End", "Back End", "Full Stack", "wiuehjdiuewjhfiouwejf"]
let projects = [
    {parts: ["Web Design", "Front End"], img: "1.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["Web Design", "Back End"], img: "2.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["Full Stack"], img: "3.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["Full Stack", "Front End"], img: "4.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["Web Design", "Back End"], img: "5.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["Full Stack", "Front End"], img: "6.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["Full Stack", "Back End"], img: "7.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["Web Design"], img: "8.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["Front End"], img: "9.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
    {parts: ["Front End", "wiuehjdiuewjhfiouwejf"], img: "9.png", title: "Sign in to smarix", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti reprehenderit debitis pariatur sequi facilis libero explicabo veniam tempore dolore?"},
]









appendCards( "All" )

function appendCards( activePart ) {
    let projectsNav = document.querySelector(".projects .nav")
    projectsNav.innerHTML = ""
    for( let part of parts ) { projectsNav.append( button({ class: part == activePart ? "active" : "", text: part, onclick: `appendCards('${part}')` }) ) }
    let projectsParent = document.querySelector(".projects .cards")
    projectsParent.innerHTML = ""
    for( let project of projects ) {
        if( project.parts.includes(activePart) ) {
            projectsParent.append( div({ class: "project", children: [ img({src: 'media/' + project.img, draggable: "false"}), h2({text: project.title}), p({text: project.text}), button({text: "View Project"}) ] }) )
        }
        else if( activePart == "All" ) {
            projectsParent.append( div({ class: "project", children: [ img({src: 'media/' + project.img, draggable: "false"}), h2({text: project.title}), p({text: project.text}), button({text: "View Project"}) ] }) )
        }
    }
}















// document.body.innerHTML = ""

// document.body.append(
//     button({
//         class: "active normal",
//         id: "welcome",
//         onclick: "activeCards('wedfwe')",
//         style: {width: "200px", height: "60px", background: "red"},
//         text: "Welcome",
//         children: [
//             h1({text: "Hello"})
//         ]
//     })
// )




// let btn = document.createElement("button")   // button()

// btn.classList.add("active")
// btn.classList.add("normal")
// btn.id = "welcome"
// btn.setAttribute("onclick", "activeCards('wedfwe')")
// btn.style.width = "200px"
// btn.style.height = "60px"
// btn.style.background = "red"
// btn.innerHTML = "Welcome"

// let h = document.createElement("h1")
// h.innerHTML = "Hello"

// btn.append( h )

// document.body.append(btn)




// style(".project .nav", {

// })

// style(".project .nav:hover", {

// })









