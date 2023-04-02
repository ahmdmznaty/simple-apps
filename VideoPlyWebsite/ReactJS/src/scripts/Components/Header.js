/**
 * 
 */
import "../../styles/Components/Header.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Virtual, Autoplay } from "swiper"

let slidesData = [
    {img: "webket.jpg", title: "The World Of 'ket'", owner: "webket", time: "10 mins"},
    {img: "smarix.jpg", title: "What a great matrix!", owner: "smarix", time: "13 mins"},
    {img: "supercoder.jpg", title: "Generate the future", owner: "supercoder", time: "15 mins"},
    {img: "instant.jpg", title: "We're here for you", owner: "instant", time: "27 mins"},
    {img: "dipdux.jpg", title: "Try it now!", owner: "dipdux", time: "32 mins"}
]

function slideMove(direction) {
    if( direction === "prev" ) document.querySelector(".header-section .swiper-button-prev").click()
    else if( direction === "next" ) document.querySelector(".header-section .swiper-button-next").click()
}

function SectionTop() {
    return (
        <div className="section-top">
            <h3>New Uploads</h3>
            <div className="swiper-navigation">
                <button onClick={() => {slideMove("prev")}}><ion-icon name="chevron-back"></ion-icon></button>
                <button onClick={() => {slideMove("next")}}><ion-icon name="chevron-forward"></ion-icon></button>
            </div>
        </div>
    )
}

function Slide( {data} ) {
    return (
        <div className="slide">
            <img src={`./media/${data.img}`} alt="" />
            <h4>{data.title}</h4>
            <p>By {data.owner} | {data.time} ago</p>
            <button className="swiper-close"><ion-icon name="close"></ion-icon></button>
            <button className="watch-now">
                <ion-icon name="play"></ion-icon>
                <span>Watch Now</span>
            </button>
        </div>
    )
}

function CarouselSection() {
    return (
        <Swiper
            className="carousel"
            modules={[Navigation, Pagination, Virtual, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
        >
            {slidesData.map((slide, index) => (
                <SwiperSlide key={slide.owner} virtualIndex={index}>
                    <Slide key={slide.owner} data={slide}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default function Header() {
    return (
        <div className="header-section">
            <SectionTop />
            <CarouselSection />
        </div>
    )
}