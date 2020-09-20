import React from "react";

const Item = (props) => {
  const { title, desc, price } = props.details;
  return (
    <div className="App" onClick={props.click}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <strong>{price}</strong>
    </div>
  );
};

export default Item;
