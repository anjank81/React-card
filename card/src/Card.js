import React, { Component } from "react";
import style from "./Card.module.css";
import Image1 from "./nature.jpg";
class Card extends Component {
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
      </div>
    );
  }
}

export default Card;
