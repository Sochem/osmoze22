import React from 'react'
import '../css/homepage.css'
import { NavLink } from 'react-router-dom'


const Navbar = () =>{
    return(
        <>
            <header id="header" class="d-flex align-items-center ">
                <div class="container-fluid container-xxl ">

                <div id="logo" class="me-auto ">
                    Osmoze
                    {/* <img src="public\assets\images\logo.png" alt="" title=""/> */}
                </div>

                <nav id="navbar" class="navbar order-last order-lg-0 d-flex justify-content-end">
                    <ul className="">
                    <li><NavLink class="nav-link scrollto active" to="/">Home</NavLink></li>
                    <li><a class="nav-link scrollto" href="#about">About Us</a></li>
                    <li><a class="nav-link scrollto" href="https://events.osmoze.in/#/events/main/dashboard">Events</a></li>
                    <li><NavLink class="nav-link scrollto" to="/announcement">Announcement</NavLink></li>
                    <li><NavLink class="nav-link scrollto" to="/team">Team</NavLink></li>
                    </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Navbar