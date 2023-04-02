




function signupPage() {
    document.title = "Webket Quiz App | Sign up"
    sessionStorage.setItem("last", "signup")

    // document.querySelector(".left").style.left = "50%"
    // document.querySelector(".right").style.left = "0%"
    document.querySelector(".left").classList.add("sign-up-right")
    document.querySelector(".right").classList.remove("sign-up-right")
    if( window.innerWidth > 800 ) {
        setTimeout(() => {
            document.querySelector(".right").innerHTML = ""
            document.querySelector(".right").append( signupControls() )
        }, 150);
    }
    else {
        document.querySelector(".right").innerHTML = ""
        document.querySelector(".right").append( signupControls() )
    }
    document.querySelector(".signin-parent .left button").innerHTML = ""
    document.querySelector(".signin-parent .left button").append(
        Element("ion-icon", {
            name: "chevron-back",
            style: { fontSize: "23px", transform: "translate(-10px, -1px)" }
        }),
        "SIGN IN"
    )
    document.querySelector(".signin-parent .left button").setAttribute("onclick", "signinPage()")
}




function signupControls() {
    return div({
        children: [
            h2({
                children: ["Sign up"]
            }),
            div({
                children: [
                    Element("ion-icon", {name: "lock-closed"}),
                    input({ type: "text", placeholder: "full name" })
                ]
            }),
            div({
                children: [
                    Element("ion-icon", {name: "person"}),
                    input({ type: "text", placeholder: "username" })
                ]
            }),
            div({
                children: [
                    Element("ion-icon", {name: "lock-closed"}),
                    input({ type: "password", placeholder: "password" })
                ]
            }),
            button({
                children: ["SIGN UP"]
            }),
        ]
    })
}

























