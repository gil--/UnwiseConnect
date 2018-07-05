import React, { Component } from 'react';
import Item from './Item';
import SearchBar from './Search';

class List extends Component {

	      
	render() {
		return (
			<div>
			 <h2> List View </h2>
			 <SearchBar 
          filter={this.props.filter}
          fields={this.props.fields}
          onFilter={this.props.onFilter}
        />
        {this.props.items.map(item => 
          item.isVisible && (
          <Item 
            item={item}
            fields={this.props.fields}
            onEdit={this.props.onEdit}
            onDelete={this.props.onDelete}
            key={item.id}
          />
        ))}
      </div>
		);
	}
}

export default List;