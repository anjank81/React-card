import React, { Component } from "react";
import style from "../Card.module.css";
import Cardcomp from "../Cardcomp";

class Card extends Component {
  componentDidMount() {
    this.props && this.props.getCard();
  }
  render() {
    return (
      <div className={style.api}>
        {this.props.userData &&
          this.props.userData.userData &&
          this.props.userData.userData.map(usr => {
            return (
              <Cardcomp
                src={usr.avatar_url}
                login={usr.login}
                key={usr.login}
              />
            );
          })}
      </div>
    );
  }
}

export default Card;
