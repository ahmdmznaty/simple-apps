
let oldScreen = ""
let operation = ""
let equal = false

function clearBu() {
    let screen = document.getElementById("screen")
    oldScreen = ""
    operation = ""
    equal = false
    screen.innerHTML = "00.0"
}

function pointBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "."
    }
    else {
        screen.innerHTML = screen.innerHTML + "."
    }
}
function oneBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "1"
    }
    else {
        screen.innerHTML = screen.innerHTML + "1"
    }
}
function twoBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "2"
    }
    else {
        screen.innerHTML = screen.innerHTML + "2"
    }
}
function threeBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "3"
    }
    else {
        screen.innerHTML = screen.innerHTML + "3"
    }
}
function fourBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "4"
    }
    else {
        screen.innerHTML = screen.innerHTML + "4"
    }
}
function fiveBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "5"
    }
    else {
        screen.innerHTML = screen.innerHTML + "5"
    }
}
function sixBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "6"
    }
    else {
        screen.innerHTML = screen.innerHTML + "6"
    }
}
function sevenBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "7"
    }
    else {
        screen.innerHTML = screen.innerHTML + "7"
    }
}
function eightBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "8"
    }
    else {
        screen.innerHTML = screen.innerHTML + "8"
    }
}
function nineBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "9"
    }
    else {
        screen.innerHTML = screen.innerHTML + "9"
    }
}
function zeroBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "0"
    }
    else {
        screen.innerHTML = screen.innerHTML + "0"
    }
}
function doubleBu() {
    let screen = document.getElementById("screen")
    if( screen.innerHTML == "00.0" ) {
        screen.innerHTML = "00"
    }
    else {
        screen.innerHTML = screen.innerHTML + "00"
    }
}
function deleteBu() {
    let screen = document.getElementById("screen")
    let newLength = screen.innerHTML.length - 1
    let newScreen = ""
    for( let i = 0; i < newLength; i++ ) {
        newScreen = newScreen + screen.innerHTML[i]
    }
    if( equal == true ) {
        screen.innerHTML = "00.0"
    }
    else {
        if(newLength == 0) {
            screen.innerHTML = "00.0"
        }
        else {
            screen.innerHTML = newScreen
        }
    }
}






function addBu() {
    let screen = document.getElementById("screen")
    oldScreen = screen.innerHTML
    operation = "+"
    screen.innerHTML = ""
}
function subtractBu() {
    let screen = document.getElementById("screen")
    oldScreen = screen.innerHTML
    operation = "-"
    screen.innerHTML = ""
}
function multiplyBu() {
    let screen = document.getElementById("screen")
    oldScreen = screen.innerHTML
    operation = "*"
    screen.innerHTML = ""
}
function divideBu() {
    let screen = document.getElementById("screen")
    oldScreen = screen.innerHTML
    operation = "/"
    screen.innerHTML = ""
}

function equalBu() {
    let screen = document.getElementById("screen")
    if( operation.length == 0 ) {
        if( screen.innerHTML != "00.0" ) {
            equal = true
            oldScreen = screen.innerHTML
            screen.innerHTML = screen.innerHTML
        }
    }
    else {
        equal = true
        if( operation == "+" ) {
            screen.innerHTML = Number(oldScreen) + Number(screen.innerHTML)
            oldScreen = screen.innerHTML
        }
        else if( operation == "-" ) {
            screen.innerHTML = Number(oldScreen) - Number(screen.innerHTML)
            oldScreen = screen.innerHTML
        }
        else if( operation == "*" ) {
            screen.innerHTML = Number(oldScreen) * Number(screen.innerHTML)
            oldScreen = screen.innerHTML
        }
        else if( operation == "/" ) {
            screen.innerHTML = Number(oldScreen) / Number(screen.innerHTML)
            oldScreen = screen.innerHTML
        }
    }
}

