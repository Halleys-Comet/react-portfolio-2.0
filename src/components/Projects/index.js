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
                    <p>GitHub: <a href="https://github.com/mwpx777/webdev-gifts"> WebDev Gifts</a></p>
                </div>
            </div>
            <div className="card grid-2" style={{width: 500}}>
                <div className="card-divider">
                    Happy Hour
                </div>
                <img src={cocktail} alt=""/>
                <div className="card-section">
                    <h4>Drink UP!</h4>
                    <p>GitHub: <a href="https://github.com/IsiBee/cocktail-challenge"> Happy Hour</a></p>
                </div>
            </div>
            <div className="card grid-3" style={{width: 500}}>
                <div className="card-divider">
                    Shop-Shop
                </div>
                <img src={shop} alt=""/>
                <div className="card-section">
                <p>GitHub: <a href="https://github.com/Halleys-Comet/shop-shop"> Shop-Shop</a></p>
                    <p>stuff</p>
                </div>
            </div>
            <div className="card grid-4" style={{width: 500}}>
                <div className="card-divider">
                    Budget Tracker
                </div>
                <img src={budget} alt=""/>
                <div className="card-section">
                <p>GitHub: <a href="https://github.com/Halleys-Comet/budget-tracker"> Budget Tracker</a></p>
                </div>
            </div>
            
        </section>
    )
}

export default Projects;