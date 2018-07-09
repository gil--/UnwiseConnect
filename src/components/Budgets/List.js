import React, { Component } from 'react';
import Item from './Item';
import SearchBar from './Search';
import { connect } from 'react-redux';

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
        {this.props.visibleItems.map(item => 
          <Item 
            item={item}
            fields={this.props.fields}
            onEdit={this.props.onEdit}
            onDelete={this.props.onDelete}
            key={item.id}
          />
        )}
      </div>
		);
	}
}

const mapStateToProps = state => ({
  fields: state.budgets.fields,
  visibleItems: state.budgets.visibleItems,
});


export default connect(mapStateToProps)(List);