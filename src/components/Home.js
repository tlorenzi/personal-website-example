import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "./Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Tyler Lorenzi, a software engineer"]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}

export default Home;
