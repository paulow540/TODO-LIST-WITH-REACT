import React from 'react';
import ReactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Counters from './conponents/counters';

// const element = <h1>hello world</h1>;
ReactDom.render(<Counters/>, document.getElementById('root'));
// registerServiceWorker();