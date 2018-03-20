import React, { Component } from 'react';
import Item from './Item';
class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.items;
    const elmItem = items.map((item, index) => {
        return (
          <Item key={index} item={item} index={index} />
        )
      }
    )
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
        	{elmItem}
        </tbody>
      </table>
    </div>
    );
  }
}
export default List;
