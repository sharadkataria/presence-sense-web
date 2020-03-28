import React from 'react';
import AppRouter from './AppRouter';
import configureStore from './store/CreateStore';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import styles from './assets/styles/styles.scss';

const persistStore = configureStore();
const { reduxStore, persistedStore } = persistStore;

function App() {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
