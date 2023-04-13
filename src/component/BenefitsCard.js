import React from "react";

export default function BenefitsCard(props) {
  console.log(props);
  return (
    <div className="benefits_card--container">
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}
