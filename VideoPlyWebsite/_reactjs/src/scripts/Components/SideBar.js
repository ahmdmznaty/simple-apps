/**
 * 
 */
import "../../styles/Components/SideBar.css"

let pages = {
    general: [
        {icon: "home", title: "Home", active: true},
        {icon: "heart", title: "Favorites"},
        {icon: "play", title: "My Contents"},
        {icon: "albums", title: "Playlists"},
        {icon: "time", title: "History"}
    ],
    private: [
        {icon: "lock-closed", title: "Kim Demo"},
        {icon: "lock-closed", title: "Learning & Education"}
    ],
    public: [
        {icon: "folder-open", title: "Public"},
        {icon: "folder-open", title: "Training Sales"}
    ]
}

function LandingPageButton() {
    return (
        <div className="landing-page-button">
            <ion-icon name="play"></ion-icon>
            <h2>Video.<span>ply</span></h2>
        </div>
    )
}

function ProfileButton() {
    return (
        <div className="profile-button">
            <img src="mine.jpg" alt=""/>
            <div>
                <h3>
                    <span>Ahmed Znaty</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </h3>
                <p>Egypt</p>
            </div>
        </div>
    )
}

function SideButton({icon, title, active}) {
    return (
        <div className={"side-button" + (active ? " active" : "")}>
            <ion-icon name={icon}></ion-icon>
            <span>{title}</span>
        </div>
    )
}

function GeneralButtons() {
    let buttons = pages.general.map(obj => {
        return <SideButton key={obj.title} icon={obj.icon} title={obj.title} active={obj.active}/>
    })
    return (
        <div className="general-buttons">{buttons}</div>
    )
}

function PrivateButtons() {
    let buttons = pages.private.map(obj => {
        return <SideButton key={obj.title} icon={obj.icon} title={obj.title}/>
    })
    return (
        <div className="private-buttons">
        <div className="section-top">
            <span>PRIVATE</span>
            <button><ion-icon name="add"></ion-icon></button>
        </div>
        {buttons}
    </div>
    )
}

function PublicButtons() {
    let buttons = pages.public.map(obj => {
        return <SideButton key={obj.title} icon={obj.icon} title={obj.title}/>
    })
    return (
        <div className="public-buttons">
            <div className="section-top">
                <span>PUBLIC</span>
                <button><ion-icon name="add"></ion-icon></button>
            </div>
            {buttons}
        </div>
    )
}

export default function SideBar() {
    return (
        <div className="side-bar">
            <LandingPageButton />
            <ProfileButton />
            <GeneralButtons />
            <PrivateButtons />
            <PublicButtons />
            <button className="invite-button">Invite Team</button>
        </div>
    )
}