import React from "react";

const Item = (props) => {
  return <li onClick={() => props.click(props.id)}>{props.item.name}</li>;
};

export default Item;
