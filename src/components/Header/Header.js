import React, { Component } from 'react'
import './Header.css'


class Header extends Component {
    
    componentDidmount() {
        window.clearTimeout(this.timeout)
    }

    renderMessage(correct, gameWon, clear = false) {
        let message, className
        if (clear) {
            className = ''
        }
        else if (correct === undefined) {
            message = 'CLICK AN EMOJI TO START THE GAME!'
            className = ''
        } else {
            message = gameWon ? 'AWESOME!!! YOU WON THE GAME!' : (correct ? 'CORRECT GUESSED! NEXT PLS!' : 'ALREADY CLICKED! TRY AGAIN!')
            className = correct ? 'correct' : 'incorrect'
        }

        window.clearTimeout(this.timeout)
        if (!clear & correct !== undefined) {
            this.timeout = window.setTimeout(this.renderMessage, gameWon ? 3000 : 1000, gameWon ? undefined : correct, false, true)
        }
        return <li key={Math.random()} className={className}>{message}</li>
    }

    render() {
        return (
            <nav className="pinned amber">
                <div>
                    <ul className="center navList">
                        <li className="logo"><i className="em em-three_button_mouse"></i> Clicky Game <i className="em em-lion_face"></i></li>
                        {this.renderMessage(this.props.correct, this.props.gameWon)}
                        <li className="Score">Score: {this.props.score} | High Score: {this.props.highScore}</li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Header;