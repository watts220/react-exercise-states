import React from 'react';
import Score from './Score.js';

const Game = (props) => {
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${props.value1} + ${props.value2} + ${props.value3} = ${props.proposedAnswer}`}</p>
        </div>
        <button onClick={() => props.onAnswer(true)}>True</button>
        <button onClick={() => props.onAnswer(false)}>False</button>
        <Score numCorrect={props.numCorrect} numQuestions={props.numQuestions} />
      </div>
    );
}

export default Game;