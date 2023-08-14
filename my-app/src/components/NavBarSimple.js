import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, guest!",
      buttonText: "Log out",
    };
  }

  handleClick() {
    this.setState((prevState, prevProps) => {
      return {
        message:
          prevState.message === "Hello, guest!"
            ? "Weclome back, user!"
            : "Hello, guest!",
        buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
      };
    });
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallary</h1>
        <span>{this.state.message}</span>
        <button onClick={() => this.handleClick()}>Log in</button>
      </div>
    );
  }
}

export default NavBarSimple;
