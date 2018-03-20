import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row">
        <Title />
        <Control />
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
