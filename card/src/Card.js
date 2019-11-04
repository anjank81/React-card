import React, { Component } from "react";
import style from "./Card.module.css";
import Image1 from "./nature.jpg";
import Button from "./Button.js";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "a.m" };
  }
  handle = () => {
    this.setState({ name: "p.m" });
  };
  render() {
    return (
      <div className={style.base}>
        <img src={Image1} alt="Nature Image" height="550px;" width="317px" />
        <div className="container">
          <div className={style.weather}>{"12°"}</div>
          <div className={style.time}>
            <div> 05:07</div>
            <div className={style.convention}>{this.state.name}</div>
            <br />
            <div className={style.day}>{"Saturday"}</div>
          </div>
        </div>
        <button onClick={this.handle}>Change am to pm</button>
      </div>
    );
  }
}

export default Card;
