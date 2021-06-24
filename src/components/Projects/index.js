import React from "react";
import webdev from "../../assets/0.png";
import cocktail from "../../assets/1.png";
import shop from "../../assets/3.png";
import budget from "../../assets/4.png";


function Projects () {
    return (
        <section className ="grid-container">
            <div className="card grid-1" style={{width: 500}}>
                <div className="card-divider">
                    WebDev
                </div>
                <img src={webdev} alt=""/>
                <div className="card-section">
                    <h4>something</h4>
                </div>
            </div>
            <div className="card grid-2" style={{width: 500}}>
                <div className="card-divider">
                    Happy Hour
                </div>
                <img src={cocktail} alt=""/>
                <div className="card-section">
                    <h4>Drink UP!</h4>
                    <p>The best app for when you are trying to find the perfect drink</p>
                </div>
            </div>
            <div className="card grid-3" style={{width: 500}}>
                <div className="card-divider">
                    Shop-Shop
                </div>
                <img src={shop} alt=""/>
                <div className="card-section">
                </div>
            </div>
            <div className="card grid-4" style={{width: 500}}>
                <div className="card-divider">
                    Budget Tracker
                </div>
                <img src={budget} alt=""/>
                <div className="card-section">
                    <h4>Figure out your finances!</h4>
                </div>
            </div>
            
        </section>
    )
}

export default Projects;