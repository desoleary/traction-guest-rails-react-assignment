import React from 'react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from '../ErrorBoundary';
import { GooglePreview } from 'wix-style-react';

import { store } from '../redux';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <GooglePreview title="Learn some react with Wix components" />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
