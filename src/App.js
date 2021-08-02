import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/productlist/ProductList';
import './App.css';
import Items from './Items'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/pages/LandingPageGuest';
import LandingPageUser from './components/pages/LandingPageUser';
import LandingPageGuest  from './components/pages/Products';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Products from './components/pages/Products';

class App extends Component {
  state = {
    items: [
      {id: 1, content: 'API GOES HERE...'},
      {id: 2, content: 'API GOES HERE...'}
    ]
  }
  deleteItem = (id) =>{
    const items = this.state.items.filter(item => {
      return item.id !== id
    });
    this.setState({
      items
    }); 

   
  }
  
  render(){
    return (
      <Router>
      <div className="App">
        
        <Router />
        <Route path="/Home">
          <home />
        </Route>
        <Route path="/login">
          <login />
        </Route>
        <Route path="/register">
        <register />
      </Route>
        <Navbar />
        <Home />
        <LandingPageGuest />
        <LandingPageUser />
        <Products />
      
        <h1> ITEMS </h1>
        <Items items={this.state.items} deleteItem={this.deleteItem} resp={this.products} />
        
      </div>
      </Router>
      );
  }
}


export default App;
