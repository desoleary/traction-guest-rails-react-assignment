import React from 'react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from '../ErrorBoundary';
import { GooglePreview } from 'wix-style-react';
import apollo from '../graphql/apollo';
import { ApolloProvider } from '@apollo/client';

import { store } from '../redux';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ApolloProvider client={apollo.ge}>
          <GooglePreview title='Learn some react with Wix components' />
        </ApolloProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
