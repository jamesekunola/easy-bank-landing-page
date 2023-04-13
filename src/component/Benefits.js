import React from "react";
import BenefitsCard from "./BenefitsCard";
import Result from "../result";

export default function Benefits() {
  // display all card
  const Cards = Result[0].map((card) => (
    <BenefitsCard key={card.id} {...card} />
  ));

  return (
    <div className="benefits_container">
      {/* benefits section title */}
      <div className="benefits_section--title">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      {/* benefits */}
      <div className="benefits-card_container">{Cards}</div>
    </div>
  );
}
