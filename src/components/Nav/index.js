import React from "react";
import { NavLink } from 'react-router-dom';



function Nav() {
    return (
        <header>
            <div>
                <nav className="menu align-left">
                    <NavLink to="/" exact>
                        John
                    </NavLink>
                    <NavLink to="/about">
                        About Me
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    <NavLink to="/resume">
                        Resume
                    </NavLink>
                </nav>
            </div>
        </header>


    )
}

export default Nav;