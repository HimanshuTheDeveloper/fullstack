import { Link } from "react-router-dom";
const Topbar = () => {

    return (
        <header id="header" className="header-top">
        <div className="container">
        <h1><Link to="/">Himanshu Singh</Link></h1>
        <h2>I'm a passionate <span>Web Developer</span> from India</h2>
        <nav id="navbar" className="navbar">
            <ul>
                <li>
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/resume">Resume</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/home">Contact</Link>
                </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="social-links">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
        </div>
    </header>
    );

}
export default Topbar;