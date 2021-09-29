import React from 'react';

class Two extends React.Component {
    render() {
        return (
            <div>
                <h2>Props</h2>
                <hr/>
                <h3>{this.props.header}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Two;