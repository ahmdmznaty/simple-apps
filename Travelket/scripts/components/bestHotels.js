import compo from '../../compo/html.js'
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••••••• The Data set of the best hotels cards ••••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••
let cardsData = [
    {img: "../media/hotel.jpg", title: "Abo Ashraf Hotel 1", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rate: 70, price: 200},
    {img: "../media/hotel.jpg", title: "Abo Ashraf Hotel 2", desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", rate: 30, price: 100},
    {img: "../media/hotel.jpg", title: "Abo Ashraf Hotel 1", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rate: 70, price: 200},
    {img: "../media/hotel.jpg", title: "Abo Ashraf Hotel 2", desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", rate: 30, price: 100},
    {img: "../media/hotel.jpg", title: "Abo Ashraf Hotel 1", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rate: 70, price: 200},
    {img: "../media/hotel.jpg", title: "Abo Ashraf Hotel 2", desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", rate: 30, price: 100},
    {img: "../media/hotel.jpg", title: "Abo Ashraf Hotel 1", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", rate: 70, price: 200},
    {img: "../media/hotel.jpg", title: "Abo Ashraf Hotel 2", desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", rate: 30, price: 100},
]
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••••• Structure the top part of the Best hotels ••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••
export let bestHotelsTop = ( text ) => {
    let topPart = compo.h2({ text: text })
    return topPart
}
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••••••••••••••• Structure Cards parent ••••••••••••••••
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
export let cardsParent = ( cards ) => {
    let parent = compo.div({
        style: {
            width: "100%", overflowX: "auto", overflowY: "visible", padding: "40px",
            display: "flex", flexDirection: "row", flexWrap: "nowrap", gap: "40px"
        },
        class: "cardsParent",
        children: []
    })
    for( let card of cards ) {
        parent.append(
            bestHotelsBottom( card )
        )
    }
    return parent
}
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// •••••• Structure the bottom part of the Best hotels ••••••
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
export let bestHotelsBottom = ( card ) => {
    let bottomPart = compo.div({
        class: "bestHotelsCard",
        children: [
            compo.img({ class: "hotelImg", src: card.img }),
            compo.div({
                class: "cardRight",
                children: [
                    compo.h3({ text: card.title }),
                    compo.p({ class: "descriptionCard", text: card.desc }),
                    compo.div({
                        class: "parentRate",
                        children: [
                            compo.Element("ion-icon", { name: "star", }),
                            compo.Element("ion-icon", { name: "star", }),
                            compo.Element("ion-icon", { name: "star", }),
                            compo.Element("ion-icon", { name: "star", }),
                            compo.Element("ion-icon", { name: "star", }),

                            compo.span({
                                style: { width: card.rate + "%" }
                            }),
                        ]
                    }),
                    compo.p({
                        class: "price",
                        text: card.price,
                        children: [compo.span({ text: "/night" })]
                    })
                ]
            })
        ]
    })
    return bottomPart
}
// •••••••••••••••••••••••••••••••••••••••••••••••••
// •••••• Export the final bestHotels section ••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••
export default function bestHotels() {
    let parent = compo.div({
        class: "bestHotels",
        children: [
            bestHotelsTop( "Best rated hotels" ),
            cardsParent( cardsData )
        ]
    })
    return parent
}
// •••••••••••••••••
// •••••• End ••••••
// •••••••••••••••••