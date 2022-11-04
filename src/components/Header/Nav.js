//navigation bar for the header
//useState and useEffect are hooks
//use Nav.module.css for styling
//no import of buttons just link to them


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };
    
    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);
    
    return (
        <>
        <nav className={style.navbar}>
            <div className={style.navbarContainer}>
            <Link to='/' className={style.navbarLogo} onClick={closeMobileMenu}>
                AKCL
                <i class='fab fa-typo3' />
            </Link>
            <div className={style.menuIcon} onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={style.navItem}>
                <li>
                <Link to='/' className={style.navLinks} onClick={closeMobileMenu}>
                    Home
                </Link>
                </li>
                <li>
                <Link
                    to='/about'
                    className={style.navLinks}
                    onClick={closeMobileMenu}
                >
                    About
                </Link>
                </li>
                <li>
                <Link
                    to='/project'
                    className={style.navLinks}
                    onClick={closeMobileMenu}
                >
                    Project
                </Link>
                </li>
                <li>
                <Link
                    to='/contact'
                    className={style.navLinks}
                    onClick={closeMobileMenu}
                >
                    Contact
                </Link>
                </li>
            </ul>
            </div>
        </nav>
        </>
    );
    }

export default Navbar;

