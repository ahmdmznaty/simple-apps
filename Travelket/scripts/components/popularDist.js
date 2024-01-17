import compo from "../../compo/html.js";
import { bestHotelsTop as topPart } from './bestHotels.js'
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// ••••• The Data set of the popular destinations cards •••••
// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
let cardsData = [
    {img: "../../media/pyramids.png", title: "Giza pyramids", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", place: "Giza government, Egypt", loved: true},
    {img: "../../media/pyramids.png", title: "Giza pyramids 2", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.", place: "Giza, Cairo", loved: false},
    {img: "../../media/pyramids.png", title: "Giza pyramids", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", place: "Giza government, Egypt", loved: true},
    {img: "../../media/pyramids.png", title: "Giza pyramids 2", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.", place: "Giza, Cairo", loved: false},
    {img: "../../media/pyramids.png", title: "Giza pyramids", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", place: "Giza government, Egypt", loved: true},
    {img: "../../media/pyramids.png", title: "Giza pyramids 2", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.", place: "Giza, Cairo", loved: false},
    {img: "../../media/pyramids.png", title: "Giza pyramids", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", place: "Giza government, Egypt", loved: true},
    {img: "../../media/pyramids.png", title: "Giza pyramids 2", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.", place: "Giza, Cairo", loved: false},
]
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
    for( let oneCard of cards ) {
        parent.append(
            card( oneCard )
        )
    }
    return parent
}
// •••••••••••••••••••••••••••••••••••••••••••••••••••
// ••••••• The popular destination card design •••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••••
let card = ( cardDetails ) => {
  return compo.div({
    class: "popDistCarde",
    onclick: popup,
    children: [
      compo.img({
        src: cardDetails.img,
      }),
      compo.div({
        class: "deteals",
        children: [
          compo.h2({
            text: cardDetails.title,
          }),
          compo.p({
            text: cardDetails.desc,
          }),
          compo.div({
            class: "rate",
            children: [
              compo.Element("ion-icon", {
                name: "star",
                class: "golde",
              }),
              compo.Element("ion-icon", {
                name: "star",
                class: "golde",
              }),
              compo.Element("ion-icon", {
                name: "star",
                class: "golde",
              }),
              compo.Element("ion-icon", {
                name: "star",
                class: "golde",
              }),
              compo.Element("ion-icon", {
                name: "star",
                class: "star",
              }),
            ],
          }),
          compo.p({
            text: cardDetails.place,
            class: "adress",
          }),
        ],
      }),
      compo.div({
        class: "heart",
        onclick: love,
        children: [
          compo.Element("ion-icon", {
            name: "heart",
            class: cardDetails.loved ? "blackHeart love active" : "blackHeart love",
          }),
        ],
      }),
    ],
  });
};
// •••••••••••••••••••••••••••••••••••••••••••••••••••
// ••••••••••••••• Open the popup menu •••••••••••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••••
function popup(e) {
    if( !e.target.classList.contains("love") ) {
        document.querySelector(".blackArea").classList.add("active");
    }
}
// •••••••••••••••••••••••••••••••••••••••••••••••••••
// ••••••••••••••• make the heart blue •••••••••••••••
// •••••••••••••••••••••••••••••••••••••••••••••••••••

function love( e ) {
    if( e.target.classList.contains("love") ) {
        document.querySelector(".blackHeart").classList.toggle("active")
    }
}

// ••••••••••••••••••••••••••••••••••••••••••••••••••••
// ••••••• Export the final popularDist section •••••••
// ••••••••••••••••••••••••••••••••••••••••••••••••••••
export default function popularDist() {
  let parent = compo.div({
    class: "popularDist",
    children: [
        topPart( "Popular Destinations" ),
        cardsParent( cardsData )
    ],
  });
  return parent;
}
