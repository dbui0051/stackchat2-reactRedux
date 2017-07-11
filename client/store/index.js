import {combineReducers, applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import messages from './messages';
import newMessageEntry from './newMessageEntry';


const reducer = combineReducers({
    messages,
    newMessageEntry
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware,
        createLogger()
    ))
);
export default store;

export * from './messages'
