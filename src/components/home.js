import React, { Component } from 'react';
import Product from './product';

class Home extends Component {
    state = {
        name: "estee"
    }
    
    render() {
        return(
            <div> 
                <div> Estee Lauder </div>
                <Product name={this.state.name} />
            </div>
        )
    }
}

export default Home;