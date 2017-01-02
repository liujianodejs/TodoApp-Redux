import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoComponents/TodoApp';

import { Provider } from 'react-redux';

import reducers from './reducers';

import { createStore,combineReducers,applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const composedReducer = combineReducers(reducers);
const store = createStoreWithMiddleware(composedReducer);



ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);




