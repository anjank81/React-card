import React, { Component } from "react";
import style from "./Card.module.css";
import Image1 from "./nature.jpg";
import Button from "./Button.js";
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
          return (
            <div className={style.main}>
              <div className={style.base}>
                <img
                  src={usr.avatar_url}
                  alt="Nature Image"
                  height="550px;"
                  width="317px"
                />
                <div className="container">
                  <div className={style.weather}>{"12°"}</div>
                  <div className={style.time}>
                    <div> 05:07</div>
                    <div className={style.convention}>{this.state.name}</div>
                    <br />
                    <div className={style.day}>{usr.login}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
