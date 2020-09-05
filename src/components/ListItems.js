import React from "react";
import Item from "./Item";

const ListItems = (props) => {
  const items = props.items.map((item) => (
    <Item
      key={item.id}
      item={item}
      active={item.active}
      click={props.click}
      id={item.id}
    />
  ));
  return <ul>{items}</ul>;
};
export default ListItems;
