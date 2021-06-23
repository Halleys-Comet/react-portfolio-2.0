import React from "react";
import me from "../../assets/2.jpg";

function Home () {
    return (
        <div>
        <h1 className="h1-home">John H</h1>
        <p className="p-home"> Welcome! My Name is John Halley, and I am a full stack developer. Feel free to take a look around!</p>
        <img className="img-1" src={me} alt=""/>
        </div>
    )
}

export default Home;