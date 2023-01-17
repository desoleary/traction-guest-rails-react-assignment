import { arrayOf, shape, bool, number } from 'prop-types';
import React from 'react';
import { Row, Col } from 'antd';

import AggregateLimits from './AggregateLimits';
import NumberOfNotifiedIndividuals from './NumberOfNotifiedIndividuals';
import RetentionOptions from './RetentionOptions';
import Premiums from './Premiums';

import { listToMatrix } from './utils';

const QuoteOptions = ({ quoteOptions }) => {
  const quoteOptionsMatrix = listToMatrix(quoteOptions);
  const firstQuoteOptionsMatrix = quoteOptionsMatrix.slice(0, 1);

  return (
    <div>
      <AggregateLimits />
      <NumberOfNotifiedIndividuals
        quoteOptionsMatrix={firstQuoteOptionsMatrix}
      />
      <Row>
        <Col span={8}>
          <RetentionOptions quoteOptionsMatrix={quoteOptionsMatrix} />
        </Col>
        <Col span={16}>
          <Premiums quoteOptionsMatrix={quoteOptionsMatrix} />
        </Col>
      </Row>
    </div>
  );
};

export default QuoteOptions;

QuoteOptions.propTypes = {
  quoteOptions: arrayOf(
    shape({
      number,
      notified_individuals: number,
      aggregate_limit: number,
      each_claim_retention: number,
      bbr_services_retention: number,
      legal_services_retention: number,
      cyber_extortion_retention: number,
      selected: bool,
      premium: number
    })
  )
};
