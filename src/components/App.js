import React from "react";
import "./App.css";
import Header from "./Header";
import ListItems from "./ListItems";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "ROYAL GORILLA", active: false },
      { id: 2, name: "NORTHERN LIGHT", active: false },
      { id: 3, name: "AMNESIA HAZE", active: true },
      { id: 4, name: "GREEN GELATO", active: true },
      { id: 5, name: "SWEET ZZ", active: false },
      { id: 6, name: "WHITE WIDOW", active: true },
      { id: 7, name: "SKUNK XL", active: true },
      { id: 8, name: "FAT BANANA", active: true },
      { id: 9, name: "OG KUSH", active: true },
      { id: 10, name: "SOUR DIESEL", active: true },
    ],
  };
  handleClick = (id) => {
    const items = this.state.items.map((item) => {
      if (item.id === id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems items={this.state.items} click={this.handleClick} />
        <br />
        <br />
        <h4>Created by Ah</h4>
      </React.Fragment>
    );
  }
}

export default App;
