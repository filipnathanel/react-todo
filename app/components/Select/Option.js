import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Option = (props) => {
  const clickHandler = (e) => {
    const value = e.target.getAttribute('value');
    const label = e.target.innerText;
    return props.onClick({ value, label });
  };

  const { label, value, index } = props;

  return (<div
    role="menuitem"
    onClick={clickHandler}
    value={value}
    tabIndex={index}
  >{label}</div>
  );
};


Option.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default styled(Option)``;
