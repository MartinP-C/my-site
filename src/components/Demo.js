import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';

import test from '../assets/images/test.png';

const Demo = (props) => (
    <div className="col-md-4">
    <div className="demo-container">
        <Interactive as={Link} to={`/testofSPA/demos/${props.demopage}`}>
            <img src={test} alt=""/>
            <div className="demo-rollover">
                <h3>{props.demoDescriptionHeading}</h3>
                <p dangerouslySetInnerHTML={
                    {__html: props.demoDescription}
                }></p>  
            </div>
        </Interactive>
    </div>
    </div>
)

export default Demo;