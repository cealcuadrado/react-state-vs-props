import React from 'react';
import One from '../body/One';
import Two from '../body/Two';

class Layout extends React.Component {
    render() {
        return (
          <div className="container my-2">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <One />
                </div>
                <div className="col-12 col-lg-6">
                    <Two header="From props" content="Props are immutables"/>
                </div>
            </div>
          </div>
        );
    }
}

export default Layout;