import React, { Component } from 'react';

class Dimmer extends Component {
    render() {
        const {viewFlag,onClick} = this.props;
        if(!viewFlag) return null;
        return (
            <div className="dimmer" onClick={onClick}>
                
            </div>
        );
    }
}

export default Dimmer;