function Element(elem, args) {
    let element = document.createElement(elem);
    if (args && args[0]) {
        for (let attr in args[0]) {
        element.setAttribute(attr, args[0][attr]);
        }
    }
    if (args && args[1]) {
        element.append(...Array(...args).slice(1));
    }
    return element;
}

function showBox(type) {
    let textBox = Element("div", [
        { id: "textBox" },
        Element("button", [{ id: "closeBox", onclick: "closePostBox()" }, "X"]),
        Element("h2", [{}, "Create A Post"]),
        Element("textarea", [
        { id: "TextForPost", placeholder: "What's On Your Mind?" },
        ]),
    ]);
    if (type == "video" || type == "photo") {
        textBox.append(
        Element("div", [
            {
            style: `
            background:#444; color: #aaa; font: 14px sans-serif; text-align: center;
            line-height: 24px; position: relative; left: 50%; top: -13px; width: 150px;
            height: 24px; border-radius: 30px; transform: translate(-50%, 0);
            `,
            },
            type + " uploaded",
        ])
        );
        textBox.style.height = "285px";
    }
    textBox.append(
        Element("button", [
        { class: "postcreatebutton", onclick: `AddPost('${type}')` },
        "Post",
        ])
    );

    document.body.append(Element("div", [{ id: "cover" }]), textBox);
    textBox.querySelector("textarea").focus();
}
function closePostBox() {
    document.getElementById("cover").remove();
    document.getElementById("textBox").remove();
}

function Like(checkbox) {
    if (checkbox.checked) {
        checkbox.parentElement.children[0].style.animation = "anim 0.4s";
        setTimeout(() => {
        checkbox.parentElement.children[0].src = "./media/like-blue.png";
        checkbox.parentElement.children[0].style.filter = "invert(0)";
        checkbox.parentElement.children[1].style.color = "#0178ff";
        }, 200);
    } else {
        checkbox.parentElement.children[0].style.animation = "";
        checkbox.parentElement.children[0].src = "./media/like-outline.png";
        checkbox.parentElement.children[0].style.filter = "invert(1)";
        checkbox.parentElement.children[1].style.color = "#999";
    }
}

function AddPost(type) {
    let myText = document.getElementById("TextForPost").value;
    if (type == "photo" || type == "video") {
        let x = new FileReader();
        x.onload = function (e) {
        document
            .getElementById("postsBox")
            .append(newPost(myText, type, e.target.result));
        };
        if (type == "photo") {
        x.readAsDataURL(document.getElementById("photoInput").files[0]);
        } else {
        x.readAsDataURL(document.getElementById("videoInput").files[0]);
        }
    } else {
        document.getElementById("postsBox").append(newPost(myText, type, ""));
    }
    closePostBox();
}

function newPost(text, type, src) {
    let d = new Date();
    return Element("div", [
        { class: "post" },
        Element("div", [
        { class: "header" },
        Element("img", [{ class: "profilePic", src: "./media/person.jpg" }]),
        Element("span", [{}, "Ahmed M. Zanaty"]),
        Element("span", [
            {},
            `${d.toLocaleString("en-us", {
            dateStyle: "medium",
            timeStyle: "short",
            })}`,
        ]),
        Element("img", [{ src: "./media/menu.png" }]),
        ]),
        Element("p", [{}, text]),
        Element("div", [
        { class: "media" },
        type != "text"
            ? Element(type == "photo" ? "img" : "video", [
                { src: src, controls: true },
            ])
            : "",
        ]),
        Element("div", [
        { class: "controlButtons" },
        Element("label", [
            {},
            Element("img", [{ src: "./media/like-outline.png" }]),
            Element("span", [{}, "Like"]),
            Element("input", [
            { type: "checkbox", style: "display:none", onchange: "Like(this)" },
            ]),
        ]),
        Element("button", [
            {},
            Element("img", [{ src: "./media/comment-outline.png" }]),
            Element("span", [{}, "Comment"]),
        ]),
        Element("button", [
            {},
            Element("img", [{ src: "./media/share-outline.png" }]),
            Element("span", [{}, "Share"]),
        ]),
        ]),
    ]);
}
