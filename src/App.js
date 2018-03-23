import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mocks/tasks';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
      isShowForm: true,
    };
    this.handleToogleForm = this.handleToogleForm.bind(this);
  }
  handleToogleForm() {
      this.setState({
         isShowForm: !this.state.isShowForm
      }) 
  }
  render() {
    let elmForm = null;
    let isShowForm = this.state.isShowForm;
    if (isShowForm === true) {
        elmForm = <Form />;
    }
    let items = this.state.items;
    return (
      <div className="row">
        <Title />
        <Control onClickAdd={this.handleToogleForm} />
        {elmForm}
        <List items={items} />
      </div>
    );
  }
}

export default App;