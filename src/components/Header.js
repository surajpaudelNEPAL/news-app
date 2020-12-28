import React, { Component } from 'react'
import "./topHeading.css"
import logo from "../image/news_logo.png";
import {Link} from "react-router-dom";
 class Header extends Component {
    render() {
        return (
            <header className="header">
            <img src={logo} alt="logo" className="logoimg" />

            <nav className="navbar">
                <ul className="navlist">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="topheadline">Top-Headlines</Link></li>
                    <li><Link to="technology">technology</Link></li>
                    <li><Link to="business">business</Link></li>
                    <li><Link to="business">more</Link> </li>
                    
                   
                </ul>
            </nav>
            <button >login</button>
        </header>
        )
    }
}
export default Header;
