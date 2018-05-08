import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as colors from 'utils/colors';
import { inputStyles } from 'components/Input';

const Option = (props) => {
  const clickHandler = (e) => {
    const value = e.target.getAttribute('value');
    const label = e.target.innerText;
    return props.onClick({ value, label });
  };

  const { label, value, index, className } = props;

  return (<div
    role="menuitem"
    onClick={clickHandler}
    value={value}
    tabIndex={index}
    className={className}
  >{label}</div>
  );
};


Option.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number,
  className: PropTypes.string.isRequired,
};

export default styled(Option)`
  ${inputStyles}
  cursor:pointer;
  margin-bottom: 0;
  color: ${colors.darkBlue};

  &:last-child {
    border-bottom:none;
  }
}
`;
