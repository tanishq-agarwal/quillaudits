import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <header className='' data-aos="fade-right">
                <nav className='container'>
                    <div className={showNavbar ? "navbar mobile-navbar" : "navbar"}>
                        <div className='navLeft '>
                            <NavLink to="/" className='navlink mNavLink'>
                                <div className='nav-heading'>
                                    <div className='navheader'><img src="./img/logo.svg" alt="logo"></img></div>
                                   
                                </div>
                            </NavLink>
                            <div className='hamburger-menu' onClick={() => setShowNavbar(!showNavbar)}>
                                <NavLink to="#"><GiHamburgerMenu /></NavLink>
                            </div>
                        </div>

                        <div className='navRight'>
                            <ul className={showNavbar ? "navbar-nav mobile-navbar-nav" : "navbar-nav"}>
                                <li className='nav-item'>
                                    <select name="services" id="services">
                                        <option value="KYC">Audit Services</option>
                                        <option value="Ethereum Audit">Ethereum Audit</option>
                                        <option value="Polgon Audit">Polgon Audit</option>
                                        <option value="Solana Audit">Solana Audit</option>
                                    </select>
                                </li>
                                <li className='nav-item'><NavLink to="/price">Pricing</NavLink></li>
                                <li className='nav-item' ><NavLink to="/blog">Blogs</NavLink></li>
                                <li className='nav-item'>
                                    <select name="resources" id="resources">
                                        <option value="QuillAudits Brand Ambassador">Resources</option>
                                        <option value="blockchain security">Blockchain</option>
                                        <option value="blog">Blog</option>
                                        <option value="courses">Courses</option>
                                    </select></li>
                            </ul>
                        </div>
                        <div className={showNavbar ? "sign-up mobile-sign-up" : "sign-up"}>
                            <Link to="/signup"><button className="btn btn-style" >Portfolio</button></Link>
                            <Link to="/login"><button className="btn btn-style" id="audiobtn">Request An Audio</button></Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;