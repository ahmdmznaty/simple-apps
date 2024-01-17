import compo from '../../compo/html.js'
import { bestHotelsTop as topPart} from './bestHotels.js'
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••••••• The Data set of the arrticles cards ••••••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••
let cardsData = [
    {img: "../media/passport.png", title: "How to get passport 1", desc: "Lorem ipsum sit amet  elit. Quod iusto nobis, incidunt dolor sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt   elit. Quod iusto nobis, incidunt sapiente."},
    {img: "../media/passport.png", title: "How to get passport 2", desc: "Lorem ipsum sit amet  elit. Quod iusto nobis, incidunt dolor sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt   elit. Quod iusto nobis, incidunt sapiente."},
    {img: "../media/passport.png", title: "How to get passport 3", desc: "Lorem ipsum sit amet  elit. Quod iusto nobis, incidunt dolor sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt   elit. Quod iusto nobis, incidunt sapiente."},
    {img: "../media/passport.png", title: "How to get passport 4", desc: "Lorem ipsum sit amet  elit. Quod iusto nobis, incidunt dolor sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt   elit. Quod iusto nobis, incidunt sapiente."},
    {img: "../media/passport.png", title: "How to get passport 5", desc: "Lorem ipsum sit amet  elit. Quod iusto nobis, incidunt dolor sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt   elit. Quod iusto nobis, incidunt sapiente."},
    {img: "../media/passport.png", title: "How to get passport 6", desc: "Lorem ipsum sit amet  elit. Quod iusto nobis, incidunt dolor sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt sit amet  elit. Quod iusto nobis, incidunt   elit. Quod iusto nobis, incidunt sapiente."}
]
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••••••••••••••• Structure Cards parent ••••••••••••••••
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
export let cardsParent = ( cardsData ) => {
    let parent = compo.div({
        style: {
            width: "100%", overflowX: "auto", overflowY: "visible", padding: "40px",
            display: "flex", flexDirection: "row", flexWrap: "nowrap", gap: "40px"
        },
        class: "cardsParent",
        children: []
    })
    for( let oneCard of cardsData ) {
        parent.append(
            articalesBottom( oneCard )
        )
    }
    return parent
}
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// ••••••• Structure the boottom part of the Articales •••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
let articalesBottom = ( cardDetails ) => {
    let bottomPart = compo.div({
        class:"articlesCards",
        children:[
            compo.div({
                class:"articleCard",
                children:[
                    compo.img({src:cardDetails.img}),
                    compo.h3({text:cardDetails.title}),
                    compo.p({text:cardDetails.desc}),
                    compo.button({text:"Read more"})
                ]
            })
        ]
    })
    return bottomPart
}
// •••••••••••••••••••••••••••••••••••••••••••••••••
// ••••••• Export the final articles section •••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••
export default function articles() {
    let parent = compo.div({
        class: "articles",
        children: [topPart( "Articles" ), cardsParent( cardsData )]
    })
    return parent
}