import React from 'react';
import { Provider } from 'react-redux';
import Store from './Customer/Redux/Stores/Store';
import AppContent from './AppContent';

const App = () => (
  <Provider store={Store}>
    <AppContent />
  </Provider>
);

export default App;
