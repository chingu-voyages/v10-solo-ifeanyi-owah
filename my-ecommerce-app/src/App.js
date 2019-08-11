import React, { Component } from 'react';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
     <h1>my Ecommerce app</h1>
     <Home />
    </div>
  );
}
}

export default App;
