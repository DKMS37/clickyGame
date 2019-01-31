import React from "react";
import "./style.css";

function EmojiCard(props) {
    return (
        <div className="card col-md-2 mt-4 mr-4 ml-4 mb-4">
            <img className="card-img-top" alt={props.name} src={props.image} />
        </div>
    );
}

export default EmojiCard;
