import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

    renderMessage() {
        let message ='CLICK AN EMOJI TO START THE GAME!'
        return <li>{message}</li>
    }

    render() {
        return (
            <nav className="pinned amber">
                <div>
                    <ul className="center navList">
                        <li className="logo"><i className="em em-three_button_mouse"></i> Clicky Game <i className="em em-lion_face"></i></li>
                        {this.renderMessage(this.props.message)}
                        <li className="Score">Score: {this.props.score} | High Score: {this.props.highScore}</li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Header;