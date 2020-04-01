import thunk from 'redux-thunk';
import rootReducer from '../reducers/RootReducer';
import storage from 'redux-persist/lib/storage';

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const presistedReducer = persistReducer(persistConfig, rootReducer);

const appMiddlewares = [thunk];

export default function configureStore(initialState = {}) {
  let reduxStore = createStore(
    presistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...appMiddlewares))
  );

  const persistedStore = persistStore(reduxStore);

  return { reduxStore, persistedStore };
}
