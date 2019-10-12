import React, { Component } from 'react';
import { Redirect } from "react-router-dom";


class productInfo2 extends Component {
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
                        <h1>Viva Glam I Lipstick Intense brownish blue-red (Matte)
</h1>
                        <h3>$18.50 | 0.1oz</h3>
                        <p>Every cent of the selling price of VIVA GLAM is donated to the M·A·C AIDS Fund 
</p>
                    </div>

                    <div className="border"></div>

                    <div className="summary3">
                        <h1>Description</h1>
                        <p>In 1994, M·A·C introduced VIVA GLAM, an outspoken deep red. In 1997, VIVA GLAM II was created – a pinked mauve. VIVA GLAM III, a foxy brown plum, launched in 2000. VIVA GLAM IV, a heartful rose charged with gold, was introduced in 2002. In 2004, VIVA GLAM V made its debut – a pure neutral pink with a Lustre finish. The newest VIVA GLAM VI is a warm terracotta-plum with a pearl finish. </p>
                    </div>

                    <div className="border"></div>

                    <div className="summary3">
                        <h1>Ingredients</h1>
                        <p>Key Ingedients:  Octyldodecanol, Ricinus Communis (Castor) Seed Oil, Silica, Tricaprylyl Citrate, Ozokerite, Isononyl Isononanoate, Paraffin, Phenyl Trimethicone, Microcrystalline Wax \Cera Microcristallina\Cire Microcristalline, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Copernicia Cerifera (Carnauba) Wax\Cera Carnauba\Cire De Carnauba, Ascorbyl Palmitate, Tocopherol, Vanillin, Acrylates Copolymer, Polyethylene Terephthalate, Stearyl Stearoyl Stearate, [+/- Mica, Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491, Ci 77492, Ci 77499), Blue 1 Lake (Ci 42090), Carmine (Ci 75470), Red 6 (Ci 15850), Red 6 Lake (Ci 15850), Red 7 Lake (Ci 15850), Red 21 Lake (Ci 45380), Red 28 Lake (Ci 45410), Red 30 Lake (Ci 73360), Red 33 Lake (Ci 17200), Yellow 5 Lake (Ci 19140), Yellow 6 Lake (Ci 15985), Yellow 10 Lake (Ci 47005)]</p>
                    </div>

                    <div className="border"></div>

                    <div className="summary5">
                        <div className="add__button" onClick={this.redirect}><p>Add to Cart</p></div>
                        <div className="gift__button" onClick={this.redirect}><p>Add to Gift Box</p></div>
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

export default productInfo2;