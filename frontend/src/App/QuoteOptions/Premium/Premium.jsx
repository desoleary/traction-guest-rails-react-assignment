import React, { useState } from 'react';
import { string, bool } from 'prop-types';
import { isNil } from 'lodash';
import PremiumState from './PremiumState';
import { Column } from '../QuoteOptionsLayout';

const Premium = (props) => {
  const { premium } = props;

  const [selected, setSelected] = useState(props.selected);

  const handleClick = (value) => {
    setSelected(value);
  };
  return (
    <Column>
      <PremiumState
        premium={premium}
        enabled={!isNil(premium)}
        selected={selected}
        onClick={() => handleClick(!selected)}
      />
    </Column>
  );
};

Premium.propTypes = {
  premium: string,
  selected: bool
};

export default Premium;
