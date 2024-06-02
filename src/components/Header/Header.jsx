import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header id='top-header'>
            <nav className="header-nav-container">

                <div className="img-container">
                    <img src="https://images.unsplash.com/photo-1716321952293-caa23fcd4d96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
                </div>

                <div className="pages-routes-conainer">
                    <NavLink to='/' className='linked-pages-names' >Home</NavLink>
                    <NavLink to='/about' className='linked-pages-names'>About</NavLink>
                    <NavLink to='/contact' className='linked-pages-names'>Contact</NavLink>
                    <NavLink to='/github' className='linked-pages-names'>Github</NavLink>
                </div>

                <div className="login-box-container">
                    <div className="login-box">
                        <h3>Log in</h3>
                    </div>

                    <div className="Get-started-box">
                        <h3>Get started</h3>
                    </div>
                </div>
            </nav>
        </header>
    );
}