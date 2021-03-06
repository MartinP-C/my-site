import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';

import test from '../assets/images/test.png';

const Demo = (props) => (
    <div className="col-md-4">
        <div className="demo-container">
            <Link to={`/demos/${props.demoPage}`}>
                <img src={test} alt=""/>
                <div className="demo-rollover">
                    <h3>{props.demoDescriptionHeading}</h3>
                    <p
                        dangerouslySetInnerHTML={
                            {__html: props.demoDescription}
                        }
                    ></p>  
                </div>
            </Link>
        </div>
    </div>
)

export default Demo;