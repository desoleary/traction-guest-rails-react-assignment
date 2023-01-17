import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import { Col, Row, Typography } from 'antd';

import { MatrixLayout } from './QuoteOptionsLayout';
import Premium from './Premium';

const { Text } = Typography;

const Premiums = ({ quoteOptionsMatrix }) => {
  const Title = () => (
    <Row justify='center'>
      <Text strong>Premium</Text>
    </Row>
  );

  const PremiumSelectMatrix = () => (
    <MatrixLayout matrixOfProps={quoteOptionsMatrix} Component={Premium} />
  );

  return (
    <div>
      <Title />
      <Row>
        <Col>
          {' '}
          <div style={{ opacity: 0 }}>n</div>
        </Col>
      </Row>
      <Row>
        <div />
      </Row>
      <PremiumSelectMatrix />
    </div>
  );
};

Premiums.propTypes = {
  quoteOptionsMatrix: arrayOf(
    shape({
      premium: string
    })
  )
};

export default Premiums;
