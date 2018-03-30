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
      isShowForm: false,
    };
    this.handleToogleForm = this.handleToogleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleToogleForm() {
      this.setState({
         isShowForm: !this.state.isShowForm
      }) 
  }
  handleSearch(value) {
    this.setState({
      strSearch: value
    })
  }
  closeForm() {
      this.setState({
         isShowForm: false
      })     
  }
  render() {
    console.log(this.state.strSearch);
    let elmForm = null;
    let isShowForm = this.state.isShowForm;
    if (isShowForm === true) {
        elmForm = <Form onClickCancel = {this.closeForm} />;
    }
    let items = this.state.items;
    return (
      <div className="row">
        <Title />
        <Control
          onClickSearchGo={this.handleSearch} 
          isShowForm={isShowForm} 
          onClickAdd={this.handleToogleForm} />
        {elmForm}
        <List items={items} />
      </div>
    );
  }
}

export default App;