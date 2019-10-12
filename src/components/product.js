import React, { Component } from 'react';
import Awareness from './awarenessContainer';

class Product extends Component {
    render() {
        return(
            <div className="product__container">
                <div className="column1">
                    <div className="product__info">
                        <h1>Name</h1>
                        <p>askjd</p>
                    </div>

                    <div className="product__info">
                        <h1>Ingredients</h1>
                        <p>askjd</p>
                        <p>askjd</p>
                    </div>
                </div>

                <div className="column2">
                    <div className="product__image">

                    </div>
                </div>

                <div className="column3">
                    <div className="purchase__container">
                        <div className="add__button"> <p> Add to Cart </p> </div>
                        <div className="gift__button"> <p> Add to Giftbox </p> </div>
                    </div>

                    <div className="product__info">
                        <h1>NAME</h1>
                        <p>hihihi</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;