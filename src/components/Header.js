import React from "react";

const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active);
  return (
    <React.Fragment>
      <h1>
        smartShop ever<span style={{ color: "green" }}>Green</span>
      </h1>
      <h2>interaktywne menu</h2>
      <h1>Wielkość zamówienia: {activeItems.length}</h1>
      <h2>
        {activeItems.length
          ? "do zapłaty: " + activeItems.length * 40 + "zł"
          : " nie kupujesz to nie płacisz"}
      </h2>
    </React.Fragment>
  );
};

export default Header;
