import React from "react";
import Card from "./component/Card";
import style from "./Card.module.css";
import CardContainer from "./container/CardContainer";
class App extends React.Component {
  render() {
    return (
      <div className={style.mainbase}>
        <CardContainer />
      </div>
    );
  }
}

export default App;
