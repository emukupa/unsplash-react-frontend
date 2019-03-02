import React, { Component } from 'react';
import Images from './components/Images';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">Infinite Scroll</h1>
        </div>
        <Images />
      </div>
    );
  }
}

export default App;
