import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return ( 
        <nav className={styles.navbar}>
            <div>
                <a href="#home" className={styles.logo}>JH</a>
            </div>
            <div className={styles.navbarLinks}>
                <a href="#contact">Contacto</a>
                <a href="#about">Acerca de mi</a>
                <a href="#projects">Proyectos</a>
            </div>
            {/* <a href="javascript:void(0);" className="navbar-icon" onclick="myFunction()">
                <i className="fa fa-bars"></i>
            </a> */}
        </nav>
    );
}
 
export default Navbar;