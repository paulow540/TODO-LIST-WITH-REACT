import React from 'react';
import ReactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from './conponents/counter';

// const element = <h1>hello world</h1>;
ReactDom.render(<Counter/>, document.getElementById('root'));
// registerServiceWorker();