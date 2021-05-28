import React, { useState } from "react";
import "./card.css";
function Card(props) {
  const {
    dividerWidth,
    heading,
    headingColor,
    dropdown,
    amount,
    conversion_rate,
    background,
    positionalClass,
  } = props;
  return (
    <div
      className={`card ${positionalClass}`}
      style={{ background: background ? background : null }}
    >
      <div className={"card-header"}>
        <div
          className={"card-heading"}
          style={{ color: headingColor ? headingColor : null }}
        >
          {heading}
        </div>
        <div>{dropdown ? dropdown : null}</div>
      </div>
      <hr
        className={"divider"}
        style={{ width: dividerWidth ? dividerWidth : null }}
      />
      <div className={"card-content"}>
        <h2 className={"amount"}>${amount}</h2>
        <p className={"conversion-rate"}>{conversion_rate}</p>
      </div>
    </div>
  );
}

export default Card;
