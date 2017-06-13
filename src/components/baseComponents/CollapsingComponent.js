import React from 'react';
import ReactDom from 'react-dom';

const jsClassName = 'js-collapse';
const stateClassName = 'is-collapsed';

class CollapsingComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
            collapsedClassName: `${jsClassName} ${stateClassName}`
        }
    }

    handleClick(e) {
        const newState = {};

        newState.collapsed = this.state.collapsed ? false : true,
        newState.collapsedClassName= `${jsClassName} ${newState.collapsed ? stateClassName : ''}`

        this.setState(newState);
    }
}

export default CollapsingComponent;