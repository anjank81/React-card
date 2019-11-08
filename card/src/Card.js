import React, { Component } from "react";
import style from "./Card.module.css";
import Cardcomp from "./Cardcomp";
import axios from "axios";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], isLoading: true };
  }
  componentDidMount() {
    axios.get("https://api.github.com/users").then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div className={style.api}>
        {this.state.users &&
          this.state.users.map(usr => {
            return (
              <Cardcomp
                src={usr.avatar_url}
                login={usr.login}
                name={this.state.name}
                key={usr.login}
              />
            );
          })}
      </div>
    );
  }
}

export default Card;
