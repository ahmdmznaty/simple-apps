/**
 * 
 */
import "../../styles/Components/Card.css"

export default function Card({period, picture, title, owner, views, time}) {
    return (
        <div className="card">
            <img src={picture} alt="" />
            <div className="data-container">
                <h4>{title}</h4>
                <p className="owner">{owner}</p>
                <p className="views-time">
                    {views} views | {time} ago
                </p>
            </div>
            <button className="play-button"><ion-icon name="play"></ion-icon></button>
            <p className="perion-budge">{period}</p>
        </div>
    )
}