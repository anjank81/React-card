import React from "react";
import Card from "./Card";
import style from "./Card.module.css";
class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Card />
      </div>
    );
  }
}

export default App;
