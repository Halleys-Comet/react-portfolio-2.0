import React from "react";
import webdev from "../../assets/0.png"


function Projects () {
    return (
        <section>
            <div className="card" style={{width: 300}}>
                <div className="card-divider">
                    Header
                </div>
                <img src={webdev} alt=""/>
                <div className="card-section">
                    <h4>something</h4>
                </div>
            </div>
        </section>
    )
}

export default Projects;