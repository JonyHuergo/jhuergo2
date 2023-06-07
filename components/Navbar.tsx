import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [showSideMenu, setShowSideMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        
        window.addEventListener("resize", handleResize);
        
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const toggleSideMenu = () => {
        console.log(showSideMenu)
        showSideMenu ? setShowSideMenu(false) : setShowSideMenu(true)
    }
    return (
        <nav className={styles.navbarContainer}>
            {windowWidth > 800 ?
                <div className={styles.navbar}>
                    <div>
                        <a href="#home" className={styles.logo}>JH</a>
                    </div>
                    <div className={styles.navbarLinks}>
                        {/* <a href="#contact">Contacto</a> */}
                        <a href="#about">Acerca de mi</a>
                        <a href="#projects">Proyectos</a>
                    </div>
                </div>
            :
                <div className={styles.navbarLinksMobile}>
                    <span><a href="#home">JH</a></span>
                    {/* <a href="#contact">Contacto</a> */}
                    <span><a href="#about">Acerca de mi</a></span>
                    <span><a href="#projects">Proyectos</a></span>           
                </div>
            }
            
            {(windowWidth < 800 && toggleSideMenu && false) &&
                <div className={styles.navbarLinksMobile}>
                    {/* <a href="#contact">Contacto</a> */}
                    <span><a href="#about">Acerca de mi</a></span>
                    <span><a href="#projects">Proyectos</a></span>           
                </div>
            }
        </nav>
    );
}
 
export default Navbar;