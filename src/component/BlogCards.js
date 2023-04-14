import React from "react";

export default function BlogCards(props) {
  return (
    <div className="blog-cards">
      <img src={props.img} alt="currency notes" />
      <div className="blog--text">
        <p className="blog-author">By {props.author}</p>
        <a href="#"> {props.title}</a>
        <p className="blog-description">{props.desc}</p>
      </div>
    </div>
  );
}
