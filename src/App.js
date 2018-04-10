import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import tasks from './mocks/tasks';
import {filter,includes} from 'lodash';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: '',
      orderBy  : 'name',
      orderDir  : 'asc',
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
    let itemOrigin =  this.state.items;
    let items = [];
    let elmForm = null;
    let isShowForm = this.state.isShowForm;
    let orderBy = this.state.orderBy;
    let orderDir = this.state.orderDir;

    const search = this.state.strSearch;

    items = filter(itemOrigin, (item) => {
        return includes(item.name.toLowerCase(), search);
    });
    if (isShowForm === true) {
        elmForm = <Form onClickCancel = {this.closeForm} />;
    }
    return (
      <div className="row">
        <Title />
        <Control
          orderBy = {orderBy}
          orderDir = {orderDir}
          onClickSearchGo = {this.handleSearch} 
          isShowForm = {isShowForm} 
          onClickAdd = {this.handleToogleForm} />
          {elmForm}
        <List items = {items} />
      </div>
    );
  }
}

export default App;