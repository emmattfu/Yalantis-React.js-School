import React from 'react'
import {NavLink} from "react-router-dom"

import "../styles/header.css"

const Header = () => {
    return (
        <div className="header">
            <nav className="header__nav">
                <NavLink to="/"><span>Home</span></NavLink>
                <NavLink to="/employees"><span>Employees</span></NavLink>
            </nav>
        </div>
    )
}

export default Header
