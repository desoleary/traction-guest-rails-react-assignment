import 'antd/dist/antd.css';

import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {Provider} from 'react-redux';
import {GooglePreview} from 'wix-style-react';
import {ErrorBoundary} from '../ErrorBoundary';
import apollo from '../graphql/apollo';
import {store} from '../redux';

import {quoteOptions} from './quoteOptions';
import QuoteOptions from './QuoteOptions/QuoteOptions';

const Main = () => <QuoteOptions quoteOptions={quoteOptions} />

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ApolloProvider client={apollo}>
          <GooglePreview title='Learn some react with Wix components' />
          <Main />
        </ApolloProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
