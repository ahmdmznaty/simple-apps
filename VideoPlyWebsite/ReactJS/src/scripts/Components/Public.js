/**
 * 
 */
import "../../styles/Components/Public.css"
import Card from "./Card"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Virtual } from "swiper"

let cardsData = [
    {period:"03:51", picture:"./media/instant.jpg", title:"Minimal Photography", owner:"Instant", views:"4.7k", time:"2 hours"},
    {period:"03:51", picture:"./media/instant.jpg", title:"Minimal Photography", owner:"Webket", views:"4.7k", time:"2 hours"},
    {period:"03:51", picture:"./media/instant.jpg", title:"Minimal Photography", owner:"Smarix", views:"4.7k", time:"2 hours"},
    {period:"03:51", picture:"./media/instant.jpg", title:"Minimal Photography", owner:"Supercoder", views:"4.7k", time:"2 hours"},
    {period:"03:51", picture:"./media/instant.jpg", title:"Minimal Photography", owner:"Dipdux", views:"4.7k", time:"2 hours"},
    {period:"03:51", picture:"./media/instant.jpg", title:"Minimal Photography", owner:"Route", views:"4.7k", time:"2 hours"},
    {period:"03:51", picture:"./media/instant.jpg", title:"Minimal Photography", owner:"MillionPro", views:"4.7k", time:"2 hours"}
]

function slideMove(direction) {
    if( direction === "prev" ) document.querySelector(".public-section .swiper-button-prev").click()
    else if( direction === "next" ) document.querySelector(".public-section .swiper-button-next").click()
}

function SectionTop() {
    return (
        <div className="section-top">
            <h3>Public</h3>
            <div className="swiper-navigation">
                <button onClick={() => {slideMove("prev")}}><ion-icon name="chevron-back"></ion-icon></button>
                <button onClick={() => {slideMove("next")}}><ion-icon name="chevron-forward"></ion-icon></button>
            </div>
        </div>
    )
}

function CarouselSection() {
    return (
        <Swiper
            className="carousel"
            modules={[Navigation, Virtual]}
            spaceBetween={15}
            slidesPerView="auto"
            loop={true}
            navigation={{ clickable: true }}
        >
            {cardsData.map((card, index) => (
                <SwiperSlide key={card.owner} virtualIndex={index} style={{width: "auto"}}>
                    <Card key={card.owner} {...card}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default function Public() {
    return (
        <div className="public-section">
            <SectionTop />
            <CarouselSection />
        </div>
    )
}