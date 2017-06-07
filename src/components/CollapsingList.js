import React from 'react';
import ReactDom from 'react-dom';

const subList = [];

class collapsingList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li className="js-accord" onClick={this.>
                <h3>{this.props.title}</h3>
                <ul>
                    {
                        this.props.subList.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </li>
        )
    }
}

export default collapsingList;