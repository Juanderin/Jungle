import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './sessionReducer';
import { productsReducer } from './products';
import cartReducer from './cart';
import searhReducer from './search';
import reviewReducer from './review';

const rootReducer = combineReducers({
  session: userReducer,
  products: productsReducer,
  carts: cartReducer,
  search: searhReducer,
  reviews: reviewReducer
});



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
