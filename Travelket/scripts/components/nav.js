import compo from '../../compo/html.js'
// •••••••••••••••••••••••••••••••••••••••••••••••••
// ••••••• Structure the top part of the nav •••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••
let navTop = () => {
    let topPart = compo.div({
        class: "navTop",
        children: [
            compo.span({text:"t", class:'logo'}),
            compo.Element("ion-icon", {name: "home", class:'active'}),
            compo.Element("ion-icon", {name: "grid",}),
            compo.Element("ion-icon", {name: "heart",}),
            compo.Element("ion-icon", {name: "camera",}),
            compo.Element("ion-icon", {name: "send",}),
        ],
        
    })
    return topPart
}
// ••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••• Structure the bottom part of the nav ••••••
// ••••••••••••••••••••••••••••••••••••••••••••••••••
let navBottom = () => {
    let bottomPart = compo.img({class: "navBottom", src:"../media/abdoAwad.jpg",
    })
    return bottomPart
}
// ••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••••••••• Export the final nav bar ••••••••••••
// ••••••••••••••••••••••••••••••••••••••••••••••••••
export default function nav() {
    let parent = compo.div({
        class: "nav",
        children: [ navTop(), navBottom() ]
    })
    return parent
}