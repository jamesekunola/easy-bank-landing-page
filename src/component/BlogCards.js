import React from "react";

export default function BlogCards(props) {
  return (
    <div className="blog-cards">
      <img src={props.img} alt="currency notes" />
      <p className="blog-author">By {props.author}</p>
      <h3>{props.title}</h3>
      <p className="blog-description">{props.desc}</p>
    </div>
  );
}
