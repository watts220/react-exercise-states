import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  	state = {
		value1: value1,
      	value2: value2,
      	value3: value3,
      	proposedAnswer: proposedAnswer,
      	numQuestions: numQuestions,
      	numCorrect: numCorrect
 	} 
  	checkAnswer = (answer) => {
      const sum = this.state.value1+this.state.value2+this.state.value3;
      const correctAnswer = sum === proposedAnswer ? true : false;
      
      this.setState((prevState) => ({
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer: Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3,
        numQuestions: prevState.numQuestions + 1,
        numCorrect: correctAnswer === answer ? prevState.numCorrect + 1 : prevState.numCorrect
      }))
    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">ReactND - Coding Practice</h1>
            </header>
            <Game value1={this.state.value1} value2={this.state.value2} value3={this.state.value3} proposedAnswer={this.state.proposedAnswer} numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} onAnswer={this.checkAnswer} />
          </div>
        );
    }
}

export default App;
