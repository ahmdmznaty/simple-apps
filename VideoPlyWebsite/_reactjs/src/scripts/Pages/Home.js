/**
 * 
 */
import "../../styles/Pages/Home.css"
import SideBar from "../Components/SideBar"
import NavBar from "../Components/NavBar"
import Header from "../Components/Header"
import Public from "../Components/Public"
import Trending from "../Components/Trending"
import PopularTags from "../Components/PopularTags"
import Footer from "../Components/Footer"

export default function Home() {
    return (
        <div className="home-page">
            <SideBar />
            <div className="page-content">
                <NavBar />
                <Header />
                <Public />
                <Trending />
                <PopularTags />
                <Footer />
            </div>
        </div>
    )
}