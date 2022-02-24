import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {store} from "./redux/redux-store";
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";



let rerenderEntireTree = () => {
    ReactDOM.render(
             <BrowserRouter>
        <Provider store={store}>
                <App/>
            </Provider>
                 </BrowserRouter>,

    document.getElementById('root')
    );
}

 rerenderEntireTree();

// store.subscribe(rerenderEntireTree);
//
// reportWebVitals();

