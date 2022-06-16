import React, { useEffect, useState } from "react";
import "../css/Navbar.css"
import logo from "../assets/logo.PNG"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props){
   const  [Navlin,setNavlin] = useState([])
   const  [navstate,setNavstate] = useState(true)
   const cart = useSelector((state) => state.pizza.cart);


    useEffect(
        ()=>{
            const  navbarLink = document.querySelectorAll(".links");
            setNavlin(navbarLink)
        },[]
    )

       const activeLink = (e) =>{

        for (let x = 0;x < Navlin.length;x++) {
            Navlin[x].classList.remove("active")
        }
        e.target.classList.add("active")
        }

        const sections = ['carouselExampleIndicators','menu','about','contact']
        document.addEventListener("scroll", ()=>{
            let scollPosition = document.documentElement.scrollTop
    
            sections.forEach((section)=>{
                if(scollPosition + 200 >= document.getElementById(section).offsetTop &&
                scollPosition + 200  < document.getElementById(section).offsetTop + document.getElementById(section).offsetHeight){

                    for (let x = 0;x < Navlin.length;x++) {
                        Navlin[x].classList.remove("active")
                    }
                    let selector = `a[href='#${section}']`
                    document.querySelector(selector).classList.add("active")
                }
        })
        });

        const navigation = (value)=>{
            setNavstate(value)
            }
        

    return(

        // <nav className="navbar navbar-dark bg-dark">
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-black">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"  onClick={()=>navigation(true)}><img  className="logo p-0 m-0" src={logo} alt='logo'/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    
                    <ul className={`${!navstate?'hide':''} navbar-nav m-auto mb-2 mb-lg-0`}>
                        <li  className="nav-item mx-2">
                        <a onClick={activeLink} className="nav-link links active" aria-current="page" href="#carouselExampleIndicators">Home</a>
                        </li>

                        <li  className="nav-item mx-2">
                        <a onClick={activeLink} className="nav-link links" href="#menu">Menu</a>
                        </li>

                        <li  className="nav-item mx-2">
                        <a onClick={activeLink} className="nav-link links" href="#about">About</a>
                        </li>

                        <li  className="nav-item mx-2">
                        <a onClick={activeLink} className="nav-link links" href="#contact">Contact</a>
                        </li>
                    </ul>
                
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/favorite" onClick={()=>navigation(false)}><i className="fa-regular fa-heart"></i></NavLink>
                        </li>
                        <li className="nav-item ">
                        <NavLink className="nav-link" to="/cart" onClick={()=>navigation(false)}><i className="fa-solid fa-cart-shopping">{cart.length?<div className="cart_num">{cart.length}</div>:''}</i></NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        // </nav>
    )
}

export default Navbar;