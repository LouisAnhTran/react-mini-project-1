import React from "react";

import './GoalItem.css';

const GoalItem=({content})=>{
    return(
        <li className="item" key={content.id}>{content.text}</li>
    );
}

export default GoalItem;