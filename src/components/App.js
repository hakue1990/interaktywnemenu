import React from "react";
import "./App.css";
import Header from "./Header";
import ListItems from "./ListItems";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "ROYAL GORILLAA", active: false },
      { id: 2, name: "NORTHERN LIGHT", active: false },
      { id: 3, name: "AMNESIA HAZE", active: false },
      { id: 4, name: "GREEN GELATO", active: false },
      { id: 5, name: "SWEET ZZ", active: false },
      { id: 6, name: "WHITE WIDOW", active: false },
      { id: 7, name: "SKUNK XL", active: false },
      { id: 8, name: "FAT BANANA", active: false },
      { id: 9, name: "OG KUSH", active: false },
      { id: 10, name: "SOUR DIESEL", active: false },
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
      <div className="container">
        <Header items={this.state.items} />
        <ListItems items={this.state.items} click={this.handleClick} />
        <h4>Created by Ah</h4>
      </div>
    );
  }
}

export default App;
