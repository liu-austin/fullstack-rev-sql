// jshint esversion:6
import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bid: '',
      id: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({bid: e.target.value});
  }

  handleSubmit(e) {
    axios.put(`/products/${this.props.selected.id}`, {
      curr_bid: this.state.bid,
      old_bid: this.props.selected.curr_bid
    }).then(results => alert(`Thank you for your successful bid of $${this.state.bid} dollars.`))
    .then(() => this.setState({bid: '', id: this.props.selected.id}))
    .then(() => this.props.getProducts())
    .then(() => this.props.getSelected(this.state.id))
    .catch(err => alert(`There was an error with submitting your bid. ${err}.`));

    e.preventDefault();
  }
  
  render(){
    return(
      <div className = 'product-viewer'>
      {
        this.props.selected ? 
        (
          <div>
          <img src={this.props.selected.image}/>
          <h1>{this.props.selected.item}</h1>
        <div className='product-viewer-details'>
          <span>{`Current Bid: $${this.props.selected.curr_bid}`}</span>
          <br/>
          <span>{`Original Posting Price: $${this.props.selected.min_cost}`}</span>
          <br/>
          <span>{`Bidding Ends In ${this.props.selected.ends_in} Day(s)`}</span>
          <form onSubmit={this.handleSubmit}>
          <label>
            New Bid:
            <input onChange={this.handleChange} value={this.state.bid}></input>
            <input type='submit' value='Submit'/>
          </label>
          </form>
        </div>
        </div>
        ) 
        : 
        (
          null
        )
      }
      </div>
    )
  }
}