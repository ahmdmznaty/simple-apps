import compo from '../../compo/html.js'
import { bestHotelsBottom as card } from './bestHotels.js'
// ••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••••••••••• Close the popup menu ••••••••••••••
// ••••••••••••••••••••••••••••••••••••••••••••••••••
function popup( e ) {
    if( e.target.classList.contains("active") ) {
        document.querySelector(".blackArea").classList.remove("active")
    }
}
function close( e ) {
        document.querySelector(".blackArea").classList.remove("active")
}
// ••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••••• Export the final oneDist section ••••••••
// ••••••••••••••••••••••••••••••••••••••••••••••••••
export default function oneDist() {
    let parent = compo.div({
        class: "blackArea ", 
        onclick: popup,
        children: [
            compo.div({
                id: "oneDist",
                children: [
            compo.h3({
                class:"popular",
                text:"POPULAR NOW"
            }),
            compo.img({
                src:"../../media/map.png",
                class:"map",
            }),
            compo.div({
                class:'mediam',
                children:[
                    compo.div({
                        class:"top",
                        children:[
                            compo.h2({
                                text:"Giza Pyramids",
                            }),
                            compo.div({
                                class:"weather",
                                children:[
                                    compo.Element("ion-icon",{
                                        name:"cloud", 
                                        class:"cloud"
                                        }),
                                       compo.p({
                                        text:"27"
                                       })
                                ]
                            })
                        ],
                    }),
                    compo.div({
                        class:"center",
                        children:[
                            compo.p({
                                text:"Giza government Egypt",
                            }),
                            compo.div({
                                class:"allowed",
                                children:[
                                    compo.Element("ion-icon",{
                                        name:"arrow-up", 
                                        class:"arrow"
                                        }),
                                       compo.p({
                                        text:"allowed"
                                       })
                                ]
                            })
                        ],
                    }),
                    compo.div({
                        class:"low",
                        children:[
                            compo.button({ class:"mark", text:"Mark as visited"}),
                            compo.button({ class:"see", text:"See Gallary"})
                        ]

                    })
                ],
            }),
            compo.div({
                class:"bottom",
                children:[
                    compo.h3({
                        text:"Best hotel in Giza",
                    }),
                    card( {img: "../media/hotel.jpg", title: "Abo Ashraf Hotel 1", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rate: 70, price: 200} )
                ],
            }),
            compo.button({
                text:"SEE MORE",
                class:"seemore"
            }),
            compo.div({
                class:"x",
                onclick: close,
                children:[
                    compo.Element("ion-icon",{
                        name:"close", 
                        class:"close",
                        }),
                ]
            })
                ]
            })
        ]
    })
    return parent
}