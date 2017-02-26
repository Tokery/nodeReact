import React from 'react';
import ReactDOM from 'react-dom';


import data from './testData';
import App from './components/App';


ReactDOM.render(
    <App initialContests={window.initialData.contests} />,
    document.getElementById('root')
);


