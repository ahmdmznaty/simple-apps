



function signinPage() {
    document.title = "Webket Quiz App | Sign in"

    if( sessionStorage.getItem("last") == "signup" ) {
        sessionStorage.setItem("last", "signin")
        // document.querySelector(".left").style.left = "0%"
        // document.querySelector(".right").style.left = "50%"
        document.querySelector(".left").classList.remove("sign-up-right")
        document.querySelector(".right").classList.add("sign-up-right")
        // document.querySelector(".right").style.left = "50%"
        if( window.innerWidth > 800 ) {
            setTimeout(() => {    
                document.querySelector(".right").innerHTML = ""
                document.querySelector(".right").append( signinControls() )
            }, 150);
        }
        else {
            document.querySelector(".right").innerHTML = ""
            document.querySelector(".right").append( signinControls() )
        }
        document.querySelector(".signin-parent .left button").innerHTML = ""
        document.querySelector(".signin-parent .left button").append(
            "SIGN UP",
            Element("ion-icon", {
                name: "chevron-forward",
                style: { fontSize: "23px", transform: "translate(10px, -1px)" }
            })
        )
        document.querySelector(".signin-parent .left button").setAttribute("onclick", "signupPage()")
    }
    else {
        document.body.innerHTML = ""
        sessionStorage.setItem("last", "signin")
        document.body.append(
            div({
                class: "signin-parent",
                children: [
                    div({
                        class: "left",
                        children: [
                            img({src: "media/quiz.png"}),
                            h1({ children: ["Webket Quiz"] }),
                            button({
                                onclick: "signupPage()",
                                children: [
                                    "SIGN UP",
                                    Element("ion-icon", {
                                        name: "chevron-forward",
                                        style: { fontSize: "23px", transform: "translate(10px, -1px)" }
                                    })
                                ]
                            })
                        ]
                    }),
                    div({ class: "right sign-up-right", children: [ signinControls() ] })
                ]
            })
        )
    }
}




function signinControls() {
    return div({
        children: [
            h2({
                children: ["Sign in"]
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
                children: ["SIGN IN"]
            }),
            a({
                onclick: "forgetPassword()",
                children: ["Forget Password?"]
            })
        ]
    })
}


























