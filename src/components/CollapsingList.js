import React from 'react';
import ReactDom from 'react-dom';

const subList = [];

class collapsingList extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,

        }
    }

    handleClick() {
        const newState = {};

        newState.collapsed = this.state.collapsed ? false : true;

        this.setState(newState);
    }

    renderSubList(props) {
        const returningSubList = [];

        if (props.subList !== undefined) {
            props.subList.map((item, index) => {
                returningSubList.push(<li key={index}>{item}</li>);
            });

            return returningSubList;
        } else {
            return props.children;
        }

    }

    render() {
        return (
            <li className={`js-accordian ${this.state.collapsed ? 'is-collapsed' : ''}`}>
                <h3 onClick={this.handleClick.bind(this)}>{this.props.heading}</h3>
                <ul>
                    { this.renderSubList(this.props) }
                </ul>
            </li>
        )
    }
}

export default collapsingList;