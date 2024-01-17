import nav from "./components/nav.js"
import header from "./components/header.js"
import popularDist from "./components/popularDist.js"
import bestHotels from "./components/bestHotels.js"
import articles from "./components/articles.js"
import oneDist from "./components/oneDist.js"

export default function homePage() {
    document.body.innerHTML = ""
    document.body.append( nav(), header(), popularDist(), bestHotels(), articles(), oneDist() )
}