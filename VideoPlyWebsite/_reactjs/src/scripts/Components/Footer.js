/**
 * 
 */
import "../../styles/Components/Footer.css"

function Links() {
    return (
        <div className="bottom-links">
            <button>Terms of service</button>
            <button>Privacy policy</button>
            <button>Help</button>
        </div>
    )
}

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="copyright">
                Powered by video.ply. &copy; 2018
            </div>
            <Links />
        </div>
    )
}