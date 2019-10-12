import React, { Component } from 'react';

class Influencers extends Component {
    render() {
        return(
            <div className="item__container">
                <div className="influencer__container">
                    <div className="img ice"></div>
                    <div className="product l"> <p> Favorite  </p></div>
                    <div className="product r"> <p> Posts  </p></div>
                    <div></div>
                </div>

                <div className="gallery">
                    <div className="panda frame"></div>
                    <div className="grizzly frame"></div>
                    <div className="grizzly frame"></div>
                    <div className="panda frame"></div>
                    <div className="panda frame"></div>
                    <div className="grizzly frame"></div>
                </div>
            </div>
        )
    }
}

export default Influencers