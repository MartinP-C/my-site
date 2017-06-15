import React from 'react';
import ReactDom from 'react-dom';

import PageHeading from '../components/PageHeading';
import gasketMaker from '../assets/scripts/gasketMaker';

class GasketPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        gasketMaker();
    }

    render() {
        return (
            <main className="gasket">
                <PageHeading>Gasket</PageHeading>
                <section>
                    <canvas id="myCanvas"></canvas>
                </section>
            </main>
        )
    }
}

export default GasketPage;