import React, { Component } from 'react';
import InfiniteScroll from './components/InfiniteScroll';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Infinite Scroll</h1>
        <InfiniteScroll />
      </div>
    );
  }
}

export default App;
