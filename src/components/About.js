import React from "react";

function About(props){
    const defaultImage = "https://via.placeholder.com/215";
    const realImage = props.image;
    
    return(
        <aside>
            {realImage ? ( <img src={realImage}  alt="blog logo"/>) : (<img src={defaultImage} alt="blog logo" />) }
            <p>{props.about}</p>
        </aside>
    )
};

export default About;