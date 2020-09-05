import React from "react";

const Item = (props) => {
  return (
    <li
      onClick={() => props.click(props.id)}
      style={
        props.active
          ? {
              fontWeight: "bold",
              fontSize: "20px",
              color: "green",
            }
          : {}
      }>
      {props.item.name}
    </li>
  );
};

export default Item;
