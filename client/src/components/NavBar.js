import logo from '../images/logo.png';
import HamburgerMenu from './mobile/HamburgerMenu';

export default function NavBar(props){
    return (
        <nav className="nav">
            <div className="nav-logo-items">
                <img src={logo} className="nav-logo" alt="crosshair/coordinate-plane styled logo"/>
                <h1 className="nav-title">{props.title}</h1>
            </div>
            <HamburgerMenu/>
            <ul className="nav-items">
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}