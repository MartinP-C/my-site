import React from 'react';
import ReactDom from 'react-dom';

import PageHeading from '../components/PageHeading';

const gasketPage = () => (
    <main className="gasket">
        {/*<Head>*/}
            <script src="/static/scripts/gasketMaker.js"></script>
        {/*</Head>*/}
        <PageHeading>Gasket</PageHeading>
        <section>
            <canvas id="myCanvas"></canvas>
        </section>
    </main>
);

export default gasketPage;