import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

//load modules
import base from './modules/base';
import contents from './modules/contents';

//configure middleware
const middlewares = [promiseMiddleware()];

//apply redux-logger when DEBUG mode 
// if(process.env.NODE_ENV === 'development'){
//     const logger = createLogger({});
//     middlewares.push(logger);
// }
const createStoreWithMiddleware = applyMiddleware( ... middlewares)(createStore);

/* combine the reduecers */
const reducer = combineReducers({
    base,
    contents
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default configureStore;