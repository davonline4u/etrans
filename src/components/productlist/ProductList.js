import React, { Component } from 'react';


class ProductList extends Component {
    state={
        products:[]
    }
    
    render(){
        return(
            <article className="products">
                <div className="img-container">
                    <img width="200px" src="https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
                <div className="product-info">
                    <h3>Toy</h3>
                    <h3>2000</h3>
                </div>
                

            </article>
        );
    }
}

export default ProductList
