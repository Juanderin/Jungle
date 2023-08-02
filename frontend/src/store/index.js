import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './sessionReducer'
import userReducer from './sessionReducer';
import { productsReducer } from './products';
import cartReducer from './cart';

const rootReducer = combineReducers({
  session: userReducer,
  products: productsReducer,
  carts: cartReducer
});

// const enhancer = applyMiddleware(thunk)


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore
