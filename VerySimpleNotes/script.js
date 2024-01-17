

document.body.style.margin = "0"


let notes = document.createElement("div")
notes.id = "notes"
notes.style.display = "flex"
notes.style.flexDirection = "row"
notes.style.flexWrap = "wrap"
notes.style.justifyContent = "flex-start"
notes.style.alignItems = "center"
notes.style.width = "100%"
notes.style.height = "100%"
notes.style.position = "fixed"
notes.style.left = "0"
notes.style.top = "0"
notes.style.backgroundColor = "#eee"
document.body.append( notes )



let addButton = document.createElement("button")
addButton.innerHTML = "Create New Note"
addButton.style.width = "80%"
addButton.style.height = "60px"
addButton.style.backgroundColor = "blue"
addButton.style.color = "white"
addButton.style.fontSize = "24px"
addButton.style.cursor = "pointer"
addButton.style.position = "fixed"
addButton.style.bottom = "30px"
addButton.style.left = "10%"
addButton.setAttribute("onclick", "showBox()")
document.body.append( addButton )

function showBox() {
    document.getElementById("box").style.display = "block"
}



let box = document.createElement("div")
box.id = "box"
box.style.display = "none"
box.style.width = "96%"
box.style.height = "96%"
box.style.borderRadius = "6px"
box.style.boxShadow = "0 3px 13px 0 rgba(0, 0, 0, 0.2)"
box.style.position = "fixed"
box.style.left = "50%"
box.style.top = "50%"
box.style.transform = "translate(-50%, -50%)"
box.style.backgroundColor = "white"
document.body.append( box )

let titleBox = document.createElement("input")
titleBox.id = 'titleBox'
titleBox.setAttribute("placeholder", "title...")
titleBox.setAttribute("type", "text")
titleBox.style.width = "100%"
titleBox.style.height = "60px"
titleBox.style.fontSize = "22px"
titleBox.style.padding = "20px"
box.append( titleBox )

let noteBox = document.createElement("textarea")
noteBox.id = 'noteBox'
noteBox.setAttribute("placeholder", "note...")
noteBox.setAttribute("type", "text")
noteBox.style.width = "100%"
noteBox.style.height = "calc( 100% - 180px )"
noteBox.style.fontSize = "19px"
noteBox.style.padding = "20px"
box.append( noteBox )

let colorBox = document.createElement("input")
colorBox.id = 'colorBox'
colorBox.setAttribute("value", "#ffffff")
colorBox.setAttribute("type", "color")
colorBox.style.width = "100%"
colorBox.style.height = "60px"
box.append( colorBox )

let saveButton = document.createElement("button")
saveButton.setAttribute("onclick", "saveNote()")
saveButton.innerHTML = "Save"
saveButton.style.width = "100%"
saveButton.style.height = "60px"
saveButton.style.backgroundColor = "blue"
saveButton.style.color = "white"
saveButton.style.fontSize = "24px"
saveButton.style.cursor = "pointer"
box.append( saveButton )

function saveNote() {
    let title = document.getElementById("titleBox").value
    let content = document.getElementById("noteBox").value
    let bgColor = document.getElementById("colorBox").value
    closeBox()
    createNote( { bgColor, title, content } )
}

let closeButton = document.createElement("button")
closeButton.setAttribute("onclick", "closeBox()")
closeButton.innerHTML = "x"
closeButton.style.width = "60px"
closeButton.style.height = "60px"
closeButton.style.backgroundColor = "transparent"
closeButton.style.color = "black"
closeButton.style.fontSize = "28px"
closeButton.style.cursor = "pointer"
closeButton.style.position = "fixed"
closeButton.style.right = "50px"
closeButton.style.top = "50px"
closeButton.style.border = "0"
box.append( closeButton )

function closeBox() {
    document.getElementById("box").style.display = "none"
    document.getElementById("titleBox").value = ""
    document.getElementById("noteBox").value = ""
    document.getElementById("colorBox").value = "#ffffff"
}


function createNote( data ) {
    let note = document.createElement("div")
    note.style.display = "flex"
    note.style.flexDirection = "column"
    note.style.flexWrap = "wrap"
    note.style.justifyContent = "center"
    note.style.alignItems = "center"
    note.style.width = "300px"
    note.style.height = "300px"
    note.style.backgroundColor = data.bgColor
    note.style.fontSize = "21px"
    note.style.textAlign = "center"
    note.style.borderRadius = "5px"
    note.style.margin = "15px"
    let title = document.createElement("h2")
    title.innerHTML = data.title
    note.append( title )
    let content = document.createElement("p")
    content.innerHTML = data.content
    note.append( content )
    document.getElementById("notes").append( note )
}

// createNote( {bgColor: "red", title: "Welcome Webket", content: "lorem ispam"} )
// createNote( {bgColor: "blue", title: "Welcome 2", content: "lorem ispam 2"} )




