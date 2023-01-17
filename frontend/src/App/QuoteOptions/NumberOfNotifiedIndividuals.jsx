import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import {
  Column,
  MatrixLayout,
  QuoteOptionsRowLayout
} from './QuoteOptionsLayout';

const NumberOfNotifiedIndividuals = (props) => {
  const { quoteOptionsMatrix } = props;
  const numberOfNotifiedIndividuals = quoteOptionsMatrix.slice(0, 1);

  const Title = () => <div>Number of Notified Individuals</div>;

  const Item = (quoteOption) => (
    <Column>
      <div>{quoteOption.notified_individuals}</div>
    </Column>
  );
  const SelectPanels = () => (
    <MatrixLayout
      matrixOfProps={numberOfNotifiedIndividuals}
      Component={Item}
    />
  );

  return <QuoteOptionsRowLayout first={<Title />} second={<SelectPanels />} />;
};

export default NumberOfNotifiedIndividuals;

NumberOfNotifiedIndividuals.propTypes = {
  quoteOptionsMatrix: arrayOf(
    shape({
      notified_individuals: string
    })
  )
};
