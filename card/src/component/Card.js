import React, { Component } from "react";
import style from "../Card.module.css";
import Cardcomp from "../Cardcomp";

class Card extends Component {
  componentDidMount() {
    this.props && this.props.getCard();
  }
  render() {
    console.log("git user props", this.props);
    console.log(
      "userData",
      this.props.userData &&
        this.props.userData.userData &&
        this.props.userData.userData[0]
    );
    return (
      <div className={style.api}>
        {this.props.userData &&
          this.props.userData.userData &&
          this.props.userData.userData.map(usr => {
            return (
              <Cardcomp
                src={usr.avatar_url}
                login={usr.login}
                name={this.props.name}
                key={usr.login}
              />
            );
          })}
        HI
      </div>
    );
  }
}

export default Card;
