import React from 'react';
import ReactDom from 'react-dom';

import CollapsingComponent from './baseComponents/CollapsingComponent'

const subList = [];

class CollapsingList extends CollapsingComponent {
    constructor() {
        super();
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
            <li className={this.state.collapsedClassName}>
                <h3 onClick={this.handleClick.bind(this)}>{this.props.heading}</h3>
                <ul>
                    { this.renderSubList(this.props) }
                </ul>
            </li>
        )
    }
}

export default CollapsingList;