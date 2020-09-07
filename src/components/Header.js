import React from "react";

const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active);
  return (
    <React.Fragment>
      <h3>
        smartShop ever<span style={{ color: "green" }}>Green</span>
      </h3>
      <h4>Wielkość zamówienia: {activeItems.length}</h4>
      <h5>
        {activeItems.length
          ? "do zapłaty: " + activeItems.length * 40 + "zł"
          : " nie kupujesz to nie płacisz"}
      </h5>
    </React.Fragment>
  );
};

export default Header;
