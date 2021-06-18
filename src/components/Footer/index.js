import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return(
        <footer> 
        <SocialIcon url="https://github.com/Halleys-Comet" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.linkedin.com/in/john-halley-7a0305a0/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
        {/* <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} /> */}
    </footer>
    )
}

export default Footer;