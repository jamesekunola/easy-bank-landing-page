import React from "react";

export default function BenefitsCard(props) {
  return (
    <div className="benefits_card">
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
