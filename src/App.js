import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import EmojiCard from "./components/EmojiCard";
import emoji from "./emoji.json";

class App extends Component {
  state = {
    emoji: emoji
  }
  render() {
    return (
      <Wrapper>

        {this.state.emoji.map(emoji => (
          <EmojiCard
            key={emoji.id}
            id={emoji.id}
            image={emoji.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;