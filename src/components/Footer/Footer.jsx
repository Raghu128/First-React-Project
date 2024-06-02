import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Footer.css'

export default function Header() {
    return (
        <footer>
            <div className="top-footer-box">
                <div className="footer-log-box">
                    <img src="https://images.unsplash.com/photo-1716321952293-caa23fcd4d96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
                </div>
            
            <div className="all-links-grid-box">
                <div className="links-box">
                    <h2>RESOURCES</h2>

                    <h3>Home</h3>
                    <h3>About</h3>
                </div>

                <div className="links-box">
                    <h2>FOLLOW US</h2>

                    <h3>Github</h3>
                    <h3>Discord</h3>
                </div>

                <div className="links-box">
                    <h2>LEGAL</h2>

                    <h3>Privacy Policy</h3>
                    <h3>Terms & Conditions</h3>
                </div>


            </div>

            </div>
            <div className="bottom-footer-box">
                <p>© 2024 RaghuKumar</p>
            </div>
        </footer>


    );
}