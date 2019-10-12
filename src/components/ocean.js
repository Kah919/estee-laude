import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Ocean extends Component {
    state = {
        donate: false,
        dollar: 0,
        redirect: false,
        current: 67243
    }

    donate = () => {
        this.setState({
            donate: true,
            dollar: this.state.dollar += 1,
            current: this.state.current += 1
        })
    }

    redirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to={`/influencers`}/>
        }
    }


    render() {
        return(
            <div className="item__container ocean__container">
                {this.renderRedirect()}
                <div className="camera"></div>
                <div className="img__container ocean">
                    <div className="ocean__img"></div>
                    <div className="product"> <p> OCEAN FUND </p></div>
                </div>

                <div className="summary">
                    <div className="summary2 summary__ocean">
                        <h1>Our Mission</h1>
                        <p> We are committed to helping protect marine habitats across the globe. Through awareness-raising initiatives and charitable donations by the La Mer Blue Heart Oceans Fund in support of ocean conservation projects, we strive to ensure a future with flourishing seas for generations to come. </p>
                    </div>

                    <div className="border"></div>

                    <div className="summary3 summary__ocean">
                        <h1>La Mer Blue Heart</h1>
                        <p>Ocean's Fund</p>
                        <p>In 2017, we launched this new fund, which furthers the initiative of La Mer Blue Heart and helps support ocean conservation projects around the world.</p>
                    </div>

                    <div className="border"></div>

                    <div>
                        <h3>Oceans fund raised as of 2019</h3>
                        {this.state.donate ? <div className="thanks" onClick={this.redirect}></div> : null}
                        <div className="outer">
                            <div className="money">
                                <p className="current">$45,337</p>
                                <p className="now">${this.state.current}</p>
                                <p className="goal">$100,000</p>
                            </div>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            {this.state.donate ? <div className="bar3"></div> : null}
                        </div>
                        
                    </div>

                    <div className="sharks"></div>

                    <div className="donate_button">
                        <div className="donate" onClick={this.donate}> {this.state.donate ? <div className="donated"> ${this.state.dollar} </div> : null} Donate </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Ocean;