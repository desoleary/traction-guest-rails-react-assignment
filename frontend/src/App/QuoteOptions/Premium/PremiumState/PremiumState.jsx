import { number, bool, func } from 'prop-types';
import React from 'react';
import { noop } from 'lodash';
import CheckedState from './CheckedState';
import UncheckedState from './UncheckedState';
import DisabledState from './DisabledState';

const PremiumState = (props) => {
  const { selected, enabled, premium } = props;
  if (!enabled) return <DisabledState />;

  const Widget = selected ? CheckedState : UncheckedState;

  return <Widget text={premium} onClick={props.onClick} />;
};

PremiumState.defaultProps = {
  onClick: noop
};

PremiumState.propTypes = {
  premium: number,
  enabled: bool,
  selected: bool,
  onClick: func
};

export default PremiumState;
