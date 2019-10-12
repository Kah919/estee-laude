import React, { Component } from 'react';

class Influencers extends Component {
    render() {
        return(
            <div className="item__container">
                <div className="camera"></div>

                <div className="influencer__container">
                    <div className="img ten"></div>
                    <div className="product l"> <p> Favorite  </p></div>
                    <div className="product r"> <p> Posts  </p></div>
                    <div></div>
                </div>

                <div className="gallery">
                    <div className="one frame"></div>
                    <div className="two frame"></div>
                    <div className="three frame"></div>
                    <div className="pink frame"></div>
                    <div className="smile frame"></div>


                </div>
            </div>
        )
    }
}

export default Influencers