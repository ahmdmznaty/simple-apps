/**
 * 
 */
import "../../styles/Components/PopularTags.css"

let tags = ["Slack", "Dribbble", "Photography", "Starbucks", "Iphone XS", "Minimal barnding", "Photograhpy branding", "UI Designer", "Training sales"]

function Tags() {
    let spread = tags.map(item => (<div key={item} className="tag-budge">{item}</div>))
    return (
        <div className="tags">{spread}</div>
    )
}

export default function PopularTags() {
    return (
        <div className="popular-tags-section">
            <div className="section-top"><h3>Popular Tags</h3></div>
            <Tags />
        </div>
    )
}