import { number as _number, arrayOf, shape } from 'prop-types';
import React from 'react';

import { Row, Typography } from 'antd';

import { Column, MatrixLayout, Content } from './QuoteOptionsLayout';

const { Text } = Typography;

const retentionTitles = [
  [
    { content: 'Each Claim' },
    { content: 'Breach Response' },
    { content: 'Legal Service' },
    { content: 'Cyber Extortion' }
  ]
];

const numberToRetentionNameMap = {
  0: 'each_claim_retention',
  1: 'bbr_services_retention',
  2: 'legal_services_retention',
  3: 'cyber_extortion_retention'
};

const RetentionItem = (props) => {
  const { number } = props;
  const retentionNameIndex = (number - 1) % 4;
  const retentionName = numberToRetentionNameMap[retentionNameIndex];
  const retention = props[retentionName];

  return (
    <Column>
      <div>{retention || 'N/A'}</div>
    </Column>
  );
};

RetentionItem.propTypes = {
  number: _number
};

const RetentionOptions = ({ quoteOptionsMatrix }) => {
  const Title = () => <Text strong>Retention Options</Text>;

  const TableHeader = () => (
    <MatrixLayout matrixOfProps={retentionTitles} Component={Content} />
  );
  const TableBody = () => (
    <MatrixLayout
      matrixOfProps={quoteOptionsMatrix}
      Component={RetentionItem}
    />
  );

  return (
    <div>
      <Row justify='center'>
        <Title />
      </Row>
      <TableHeader />
      <TableBody />
    </div>
  );
};

RetentionOptions.propTypes = {
  quoteOptionsMatrix: arrayOf(
    shape({
      each_claim_retention: _number,
      bbr_services_retention: _number,
      legal_services_retention: _number,
      cyber_extortion_retention: _number
    })
  )
};

export default RetentionOptions;
