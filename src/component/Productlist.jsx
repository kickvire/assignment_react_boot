import React from "react";
import "./Productlist.css";

export default function Productlist(props) {
  const { product_image, title, discount } = props;

  return (
    <div className="container">
      <span className="discount">{discount}</span>
      <img className="laptop" src={product_image} alt="laptop" />
      <span className="title">{title}</span>
     
    </div>
  );
}
