import React, { Component } from "react";
import EmojiCard from "./components/EmojiCard";
import emoji from "./emoji.json";
import { Row, CardPanel } from 'react-materialize';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";


class App extends Component {
  state = {
    emojis: emoji.sort(this.randomize),
    clicked: [],
    score: 0,
    highScore: 0,
    correct: undefined,
    gameWon: false
  }
  randomize = () => Math.random() > .5 ? -1 : 1

  clickHandler = emoji => {
    if (this.state.clicked.indexOf(emoji) === -1) {
      let score = this.state.clicked.length + 1,
        clicked = score === this.state.emojis.length ? [] : [...this.state.clicked, emoji]

      this.setState({
        emojis: this.state.emojis.sort(this.randomize),
        clicked: clicked,
        score: score,
        highScore: Math.max(this.state.highScore, score),
        correct: true,
        gameWon: score === this.state.emojis.length
      })
    } else {
      this.setState({
        emojis: this.state.emojis.sort(this.randomize),
        clicked: [],
        score: 0,
        correct: false,
        gameWon: false
      })
    }
  }
  render() {
    return (

      <div >

        <div className="header">
          <Header correct={this.state.correct} gameWon={this.state.gameWon}
            score={this.state.score} highScore={this.state.highScore} />
        </div>
        <Row>
          <div className="container-fluid brown darken-4" >
            <CardPanel className="grey lighten-3">
              <h5 className="text-center">Click an EM <i className="em em-smiley"></i> JI to earn POINTS, but make sure you don't click the same one Twice!</h5>
            </CardPanel>
          </div>
        </Row>
        <div className="container">
          <Row>
            {this.state.emojis.map(emoji => <EmojiCard correct={this.state.correct} key={emoji.id}
              emoji={emoji} image={emoji.image} clickHandler={this.clickHandler} />)}
          </Row>
        </div>
        <div className="row">
          <Footer />
        </div>

      </div >

    );
  }
}

export default App;