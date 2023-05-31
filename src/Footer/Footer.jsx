import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assats/monogram.png";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin,FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            
    <footer className="footer">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav_links">
                        <li>
                            <Link to="/">ہوم</Link>
                        </li>
                        <li>
                            <Link to="/about">تعارف</Link>
                        </li>
                        <li>
                            <Link to="/contact">رابطہ</Link>
                        </li>
                        <li>
                            <Link to="/galry">گیلری</Link>
                        </li>
        </ul>
        <div className="sociol_links">

        <FaFacebook size={35} style ={{color: "#fff",
                cursor:'pointer',marginRight:30}} />
                <FaInstagram size={35} style ={{color: "#fff",
                cursor:'pointer',marginRight:30}} />
                <FaTwitter size={35} style ={{color: "#fff",
                cursor:'pointer',marginRight:30}} />
                <FaLinkedin size={35} style ={{color: "#fff",
                cursor:'pointer',marginRight:30}} />
        </div>
    </footer>
        </div>
    )
}

export default Footer
