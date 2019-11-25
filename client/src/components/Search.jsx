// jshint esversion:6
import React from 'react';
  
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.products.length) {
      if (this.state.term.length) {
        let filtered = this.props.products.filter(product => product.item.includes(this.state.term));
        if (filtered.length) {
          this.props.getSelected(filtered[0].id);
        }
      }
    } 
  }
  
  handleChange(e) {
    this.setState({term: e.target.value});
  }

  render() {
    return (
      <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={this.handleChange} value={this.state.term}/>
      <button onClick={this.handleClick} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
    );
  }
};

export default Search;