import React from "react";
import "./style.css";

function projectCard(props) {
    return(
        <div>
            <img src={"images/"+props.picture+".PNG"} alt={props.caption} />
            <p><a href={props.link}>{props.caption}</a></p>
        </div>
    )
}

export default projectCard;