import styled from 'styled-components';

const primaryColour = '#00b04f';
const hoverColour = '#67d68e';
const activeColour = '#006333';
const disabledColour = '#F2F2F2';
const disabledBorderColour = '#ABAFBA';

export const CheckedPremiumStyles = styled.div`
  .ant-btn-primary {
    background-color: ${primaryColour};
    border-color: ${primaryColour};

    :hover,
    :focus {
      background: ${hoverColour};
      border-color: ${hoverColour};
    }

    ::selection,
    :active {
      color: #fff;
      background: ${activeColour};
      border-color: ${activeColour};
    }
  }
`;

export const UncheckedPremiumStyles = styled.div`
  .ant-btn {
    color: ${primaryColour};
    border-color: ${primaryColour};

    :hover,
    :focus {
      color: ${hoverColour};
      border-color: ${hoverColour};
    }

    ::selection,
    :active {
      color: ${activeColour};
      border-color: ${activeColour};
    }
  }
`;

export const DisabledPremiumStyles = styled.div`
  .ant-btn {
    background-color: ${disabledColour};
    border-color: ${disabledBorderColour};
    color: ${disabledBorderColour};

    :hover,
    :focus {
      background-color: ${disabledColour};
      border-color: ${disabledBorderColour};
      color: ${disabledBorderColour};
    }

    ::selection,
    :active {
      background-color: ${disabledColour};
      border-color: ${disabledBorderColour};
      color: ${disabledBorderColour};
    }
  }
`;
