import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true);
        }
    };

    useEffect( () => {
        showButton()
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL
                    </Link>
                    {/**menu hamburguesa*/}
                    <div className="menu-icon" onClick={handleClick}>
                    {/**si no haces click es el menu hamburguesa y cuando clickeas son las barras*/}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    {/**cuando clickee q el navmenu desaparezca */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' 
                            className='nav-links-mobile' 
                            onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
