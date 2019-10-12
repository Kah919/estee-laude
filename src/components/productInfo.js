import React, { Component } from 'react';

class productInfo extends Component {
    render() {
        return(
            <div className="item__container">
                <div className="img__container">
                    <div className="img"></div>
                    <div className="product"> <p> PRODUCT </p></div>
                </div>

                <div className="summary">
                    <div className="summary2">
                        <h1>Blue Heart Creme de la Mer</h1>
                        <h3>$490 | 100ml</h3>
                        <p>Deep Moisture that heal dryness in an excluesive collectible design</p>
                    </div>

                    <div className="border"></div>

                    <div className="summary3">
                        <h1>Description</h1>
                        <p>BIG LOREM IPSUM AYOOOOOOOOOOOO</p>
                    </div>

                    <div className="border"></div>

                    <div className="summary4">
                        <h1>Ingredients</h1>
                        <p>BIG LOREM IPSUM AYOOOOOOOOOOOO</p>
                    </div>

                    <div className="border"></div>

                    <div className="summary5">
                        <div className="add__button"><p>Add to Cart</p></div>
                        <div className="gift__button"><p>Add to Gift Box</p></div>
                    </div>

                </div>

                <h3 className="more__caption"> More products you might like </h3>

                <div className="more__products">
                    <div className="more__items frame"></div>
                    <div className="more__items frame"></div>
                    <div className="more__items frame"></div>
                </div>
            </div>
        )
    }
}

export default productInfo;