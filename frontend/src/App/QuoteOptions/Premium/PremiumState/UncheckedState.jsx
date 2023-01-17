import { func, string } from 'prop-types';
import React from 'react';
import { noop } from 'lodash';
import { UncheckedPremiumStyles } from './Styles';

const UncheckedState = (props) => {
  const { text, onClick } = props;
  return (
    <UncheckedPremiumStyles>
      <div
        role='button'
        className='ant-btn ant-btn-block'
        onClick={onClick}
        onKeyDown={onClick}
        tabIndex={0}>
        {text}
      </div>
    </UncheckedPremiumStyles>
  );
};

UncheckedState.defaultProps = {
  onClick: noop
};

export default UncheckedState;

UncheckedState.propTypes = {
  text: string,
  onClick: func
};
