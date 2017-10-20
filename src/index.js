import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root/Root';
import registerServiceWorker from './registerServiceWorker';
import StoreFactory from './store/StoreFactory';

const store = StoreFactory.getStore();
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
