import React from "react";
import "../css/Footer.css"
import logo from "../assets/logo.PNG"
function Footer(){
    return(
            <nav className="navbar navbar-expand navbar navbar-dark bg-black">
                <div className="container d-lg-flex d-none justify-content-between">
                    <p className="text-light m-0">Copyright &copy; 2020  www.pizzaBoss.com</p>
                    <a  href="#"><img  className="footer-logo p-0 m-0" src={logo} alt='logo'/></a>
                    <ul className="navbar-nav mx-5">
                        <li className="nav-item ">
                        <a className="nav-link social" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link social" href="#"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link social" href="#"><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link social" href="#"><i className="fa-brands fa-whatsapp"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="container d-flex d-lg-none flex-column justify-content-between">
                    <a  href="#"><img  className="footer-logo p-0 m-0" src={logo} alt='logo'/></a>
                    <p className="text-light mb-1 copy">Copyright&copy;2020 www.pizzaBoss.com</p>
                    <ul className="navbar-nav mx-5">
                        <li className="nav-item ">
                        <a className="nav-link social" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link social" href="#"><i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link social" href="#"><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link social" href="#"><i className="fa-brands fa-whatsapp"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Footer;