import compo from '../../compo/html.js'


// •••••••••••••••••••••••••••••••••••••••••••••••••
// •••••••• Export the final header section ••••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••
function img() {
    let img =compo.img({
        class:"headerImg",
        src:"../../media/airplane.png",
    })
    return img
}
function span() {
    let span = compo.div({
        children:[
            compo.span({
                text:"travel",
                class:'travel'
            }),
            compo.span({
                text:"ket",
                class:'ket'
            }),
        ],
    })
    return span
}
function input() {
    let input =compo.div({
        class:"input",
        children:[
            compo.input({
                class:"input",
                placeholder:'Search...'
            }),
            compo.Element("ion-icon",{
                name:"search",
                class:"searsh"
            }),
            compo.button({
                text:'Search'
            })
        ],
    })
    return input
}



export default function header() {
    let parent = compo.div({
        class: "header",
        children: [
            img(),
            span(),
            input(),
        ]
    })
    return parent
}