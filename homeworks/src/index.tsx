import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import { Provider } from 'react-redux';


// let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }

// rerenderEntireTree();

// store.subscribe(rerenderEntireTree);
//
// reportWebVitals();
