import { func, string } from 'prop-types';
import React from 'react';
import { noop } from 'lodash';
import { CheckedPremiumStyles } from './Styles';

const CheckedState = (props) => {
  const { text, onClick } = props;
  return (
    <CheckedPremiumStyles>
      <div
        role='button'
        className='ant-btn ant-btn-primary ant-btn-block'
        onClick={onClick}
        onKeyDown={onClick}
        tabIndex={0}>
        {text}
      </div>
    </CheckedPremiumStyles>
  );
};

CheckedState.defaultProps = {
  onClick: noop
};

CheckedState.propTypes = {
  text: string,
  onClick: func
};

export default CheckedState;
