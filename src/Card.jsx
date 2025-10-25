import React from "react";

function Card(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      width: "250px",
      margin: "10px",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
