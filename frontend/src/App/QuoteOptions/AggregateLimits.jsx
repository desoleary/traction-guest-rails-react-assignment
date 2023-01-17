import React from 'react';

import {
  QuoteOptionsRowLayout,
  MatrixLayout,
  Content
} from './QuoteOptionsLayout';

const aggregateLimitTitles = [
  [
    { content: 'Limit #1' },
    { content: 'Limit #2' },
    { content: 'Limit #3' },
    { content: 'Limit #4' }
  ]
];

const aggregateLimits = [
  [
    { content: '1000000' },
    { content: '2000000' },
    { content: '3000000' },
    { content: '5000000' }
  ]
];

const AggregateLimits = () => (
  <div>
    <QuoteOptionsRowLayout
      first={null}
      second={
        <MatrixLayout
          matrixOfProps={aggregateLimitTitles}
          Component={Content}
        />
      }
    />
    <QuoteOptionsRowLayout
      first={<div>Aggregate Limits</div>}
      second={
        <MatrixLayout matrixOfProps={aggregateLimits} Component={Content} />
      }
    />
  </div>
);

export default AggregateLimits;
