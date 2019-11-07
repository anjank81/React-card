import React, { Component } from "react";
import style from "./Card.module.css";
import Image1 from "./nature.jpg";
import Button from "./Button.js";
import Cardcomp from "./Cardcomp";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "a.m", users: [], isLoading: true };
  }
  componentDidMount = async () => {
    const result = await fetch("https://api.github.com/users");
    const resultJson = await result.json();
    this.setState({
      users: resultJson,
      isLoading: false
    });
  };
  handle = () => {
    this.setState({ name: "p.m" });
  };
  render() {
    return (
      <div className={style.api}>
        {this.state.users.map(usr => {
          return <Cardcomp src={usr.avatar_url} login={usr.login} />;
        })}
      </div>
    );
  }
}

export default Card;
