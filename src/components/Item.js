import React from "react";

const Item = (props) => {
  return (
    <li
      style={props.active ? { fontWeight: "bold", color: "white" } : {}}
      onClick={() => props.click(props.id)}>
      {props.item.name}
    </li>
  );
};

export default Item;
