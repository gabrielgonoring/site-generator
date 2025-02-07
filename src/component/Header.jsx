import logo from '../assets/gonolab-logo-1.png';
import Logo from './Logo';


function Header() {
    return (
        <nav className="navbar bg-white sticky-top border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Logo />
                </a>
            </div>
        </nav>
    );
}

export default Header;