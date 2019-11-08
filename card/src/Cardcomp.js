import React, { Component } from "react";

import style from "./Card.module.css";

class Cardcomp extends Component {
  render() {
    return (
      <div>
        <div className={style.main}>
          <div className={style.base}>
            <img src={this.props.src} height="550px;" width="317px" />
            <div className="container">
              <div className={style.weather}>{"12°"}</div>
              <div className={style.time}>
                <div> 05:07</div>
                <div className={style.convention}>{this.props.name}</div>
                <br />
                <div className={style.day}>{this.props.login}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardcomp;
