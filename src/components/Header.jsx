import React from 'react'
import {NavLink} from "react-router-dom"

import "../styles/header.css"

const Header = () => {
    return (
        <div className="header">
            <nav className="header__nav">
                <NavLink exact to="/" activeClassName="link-active">Home</NavLink>
                <NavLink exact to="/employees" activeClassName="link-active">Employees</NavLink>
            </nav>
        </div>
    )
}

export default Header
