import React from "react";
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';



function Nav() {
    return (
        <header>
            <div className="flex-container align-justify">
                <div className="menu">
                    <NavLink to="/" exact>
                        Home
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
                </div>
                <div>
                    <SocialIcon  url="https://github.com/Halleys-Comet" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon  url="https://www.linkedin.com/in/john-halley-7a0305a0/" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>


    )
}

export default Nav;