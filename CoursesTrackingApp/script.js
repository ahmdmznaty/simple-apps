


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



window.onload = () => {
    let mydate = document.querySelector(".mydate");
    mydate.style.fontFamily = "helvetica";
    let today = new Date();
    let date = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    let day = days[today.getDay()];
    mydate.innerHTML = `${date} ${month} ${year}, ${day}`;
}



function openSide(){
    let openimg = document.querySelector("#openside");
    let bodyRight = document.querySelector(".body-right");
    if(openimg.getAttribute("name") == "menu"){
        openimg.setAttribute("name", "close");
        openimg.style.color = "black";
        openimg.style.zIndex = "100000";
        bodyRight.style.display = "block";
        bodyRight.style.zIndex = "100";
    }
    else if(openimg.getAttribute("name") == "close"){
        openimg.setAttribute("name", "menu");
        openimg.style.color = "white";
        if(window.innerWidth <= 450) {
            bodyRight.style.display = "none";
        }
        console.log(window.innerWidth);
    }
}




















