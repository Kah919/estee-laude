import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


class productInfo extends Component {
    state = {
        redirect: false
    }

    redirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to={`/Ocean`}/>
        }
    }

    render() {
        return(
            <div className="item__container">
                {this.renderRedirect()}
                <div className="camera"></div>
                <div className="img__container">
                    <div className="img"></div>
                    <div></div>
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
                        <p>In our latest, limited-edition commemorative decor, this luxuriously rich cream deeply soothes and moisturizes to help heal dryness and leave skin looking naturally vibrant. Miracle Broth™—the legendary soothing elixir that flows through all of La Mer—infuses skin with sea-sourced renewing energies. Ideal for drier skin.</p>
                    </div>

                    <div className="border"></div>

                    <div className="summary3">
                        <h1>Ingredients</h1>
                        <p>Key Ingedients:  Miracle Broth™, Lime Tea</p>
                    </div>

                    <div className="border"></div>

                    <div className="summary5">
                        <div className="add__button" onClick={this.redirect}><p>Our Story</p></div>
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