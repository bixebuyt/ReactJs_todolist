import React, { Component } from 'react';
import Item from './Item';
class List extends Component {
  render() {
    return (
    <div className="panel panel-success" >
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th className="text-center order">#</th>
            <th>Task</th>
            <th className="text-center level">Level</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
        	<Item />
        	<Item />
        	<Item />
        </tbody>
      </table>
    </div>
    );
  }
}
export default List;
