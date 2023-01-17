import { element, any, arrayOf, shape } from 'prop-types';
import React from 'react';

import { Row, Col } from 'antd';

export const Column = ({ children }) => <Col span={6}>{children}</Col>;

Column.propTypes = {
  children: element
};

export const Content = ({ content }) => (
  <Column>
    <div>{content}</div>
  </Column>
);

Content.propTypes = {
  content: any
};

export const MatrixLayout = (props) => {
  const { matrixOfProps, Component } = props;

  return (
    <div>
      {matrixOfProps.map((innerArrayProps) => (
        <Row>
          {innerArrayProps.map((itemProps) => (
            <Component {...itemProps} />
          ))}
        </Row>
      ))}
    </div>
  );
};

MatrixLayout.propTypes = {
  Component: element,
  matrixOfProps: arrayOf(shape({}))
};

export const QuoteOptionsRowLayout = ({ first, second }) => (
  <Row>
    <Col span={8}>{first}</Col>
    <Col span={16}>{second}</Col>
  </Row>
);

QuoteOptionsRowLayout.propTypes = {
  first: element,
  second: element
};
