import React, { Component } from 'react';
import Aids from './aids';
import Breast from './breast';
import Ocean from './ocean';

class awarenessContainer extends Component {
    state = {
        render: false,
        choice: ""
    }

    choice = e => {
         this.setState({
            render: true,
            choice: e.target.innerText
        })
    }

    option = () => {
        return (
            <div>
                <div onClick={this.choice}> Ocean </div>
                <div onClick={this.choice}> Breast Cancer </div>
                <div onClick={this.choice}> Aids </div>
            </div>
        )
    }

    rend = () => {
        if(this.state.choice === "Ocean") return <Ocean />
        if(this.state.choice === "Breast Cancer") return <Breast />
        if(this.state.choice === "Aids") return <Aids />
    }

    render() {
        return(
            <div>
                { this.state.render ? this.rend() : this.option() }
            </div>
        )
    }
}

export default awarenessContainer;