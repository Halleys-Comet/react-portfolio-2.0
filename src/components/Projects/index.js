import React from "react";
import webdev from "../../assets/0.png";
import cocktail from "../../assets/1.png";


function Projects () {
    return (
        <section>
            <div className="card" style={{width: 500}}>
                <div className="card-divider">
                    WebDev
                </div>
                <img src={webdev} alt=""/>
                <div className="card-section">
                    <h4>something</h4>
                </div>
            </div>
            <div className="card" style={{width: 500}}>
                <div className="card-divider">
                    Happy Hour
                </div>
                <img src={cocktail} alt=""/>
                <div className="card-section">
                    <h4>Drink UP!</h4>
                    <p>The best app for when you are trying to find the perfect drink</p>
                </div>
            </div>
            <div className="card" style={{width: 500}}>
                <div className="card-divider">
                    Happy Hour
                </div>
                <img src={cocktail} alt=""/>
                <div className="card-section">
                    <h4>Drink UP!</h4>
                </div>
            </div>
            <div className="card" style={{width: 500}}>
                <div className="card-divider">
                    Happy Hour
                </div>
                <img src={cocktail} alt=""/>
                <div className="card-section">
                    <h4>Drink UP!</h4>
                </div>
            </div>
            
        </section>
    )
}

export default Projects;