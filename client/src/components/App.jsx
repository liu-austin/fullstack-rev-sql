// jshint esversion:6
import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      selected: null
    };
    this.getProducts = this.getProducts.bind(this);
    this.getSelected = this.getSelected.bind(this);
    this.getSelectedByName = this.getSelectedByName.bind(this);
  }

  getProducts() {
    axios.get(`/products`)
    .then(results => results.data)
    .then(data => {
      console.log(data);
      this.setState({products: data});
    })
    .catch(err => console.log(err));
  }

  getSelected(id) {
    axios.get(`/products/${id}`)
    .then(results => results.data)
    .then(data => {
      this.setState({selected: data[0]});
    }).catch(err => console.log(err));
  }

  getSelectedByName(name) {
    axios.get(`/products/${name}`)
    .then(results => results.data)
    .then(data => this.setState({selected: data[0]}))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render(){
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search products={this.state.products} getSelected={this.getSelected}/>
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer getSelected={this.getSelected} selected={this.state.selected} getProducts={this.getProducts}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList getSelected={this.getSelected} products={this.state.products}/>
          </div>
        </div>
      </div>
    )
  }
}