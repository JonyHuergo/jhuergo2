import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        
        window.addEventListener("resize", handleResize);
        
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true) 
    };
    return (
        <nav className={styles.navbarContainer}>
            {windowWidth > 800 ?
                <div className={styles.navbar}>
                    <div>
                        <a href="#home" className={styles.logo}>JH</a>
                    </div>
                    <div className={styles.navbarLinks}>
                        <a href="#contact">Contacto</a>
                        <a href="#about">Acerca de mi</a>
                        <a href="#projects">Proyectos</a>
                    </div>
                </div>
            :
                <div className={styles.navbarLinksMobile}>
                    <div>
                        <span className={styles.dropMenuIcon} onClick={toggleMenu}><AiOutlineMenu/></span>
                    </div>
                    <div className={showMenu? styles.dropMenu : styles.hide}>
                        <span><a href="#projects">Proyectos</a></span> 
                        <span><a href="#about">Acerca de mi</a></span>
                        <span><a href="#contact">Contacto</a></span>
                    </div>      
                </div>
            }
        </nav>
    );
}
 
export default Navbar;