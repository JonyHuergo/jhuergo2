import styles from '../styles/Home.module.css'

const Navbar = () => {
    return ( 
        <nav>
            <div>
                <a href="#home" className="logo">JH</a>
            </div>
            <div className="nav-links">
                <a href="#about">Acerca de mi</a>
                <a href="#contact">Contacto</a>
            </div>
            {/* <a href="javascript:void(0);" className="navbar-icon" onclick="myFunction()">
                <i className="fa fa-bars"></i>
            </a> */}
        </nav>
    );
}
 
export default Navbar;