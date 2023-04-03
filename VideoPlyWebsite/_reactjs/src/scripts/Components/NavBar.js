/**
 * 
 */
import "../../styles/Components/NavBar.css"

function SearchBox() {
    return (
        <div className="search-box">
            <input type="text" placeholder="Search videos ..." />
            <ion-icon name="search"></ion-icon>
        </div>
    )
}

function OtherLinks() {
    return (
        <div className="other-links">
            <button>Explore</button>
            <button>Events</button>
        </div>
    )
}

function NotificationButton() {
    return (
        <div className="notification-button">
            <ion-icon data-count="4" name="notifications-outline"></ion-icon>
        </div>
    )
}

function ActionButtons() {
    return (
        <div className="action-buttons">
            <button><ion-icon name="stop-circle-outline"></ion-icon> Record</button>
            <button><ion-icon name="cloud-upload-outline"></ion-icon> Upload</button>
        </div>
    )
}

export default function NavBar() {
    return (
        <div className="nav-bar">
            <SearchBox />
            <OtherLinks />
            <NotificationButton />
            <ActionButtons />
        </div>
    )
}