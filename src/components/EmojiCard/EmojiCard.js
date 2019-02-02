import React from "react";
import "./style.css";
import { CardPanel } from 'react-materialize';

const EmojiCard = props => (
    <div className="card col-md-2 mt-1 mr-4 ml-5 mb-2 hoverable">
    <CardPanel onClick={() => props.clickHandler(props.emoji.id)}
        className={(props.correct === false ? "shake" : "")}>
        <img className="card-img-top" alt="emmoji" src={props.image} />
    </CardPanel>
    </div>
)
export default EmojiCard;

