import React from 'react';

class One extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: 'From state',
            content: 'State is mutable' 
        };
    }

    render() {
        return (
          <div>
            <h2>State</h2>
            <hr />
            <h3>{this.state.header}</h3>
            <p>{this.state.content}</p>
          </div>
        );
    }
}

export default One;