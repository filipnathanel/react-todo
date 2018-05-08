import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Option from './Option';

const Options = (props) => {
  const elements = props.options.map((option, i) => (
    <Option
      key={option.value}
      onClick={props.onClick}
      value={option.value}
      label={option.label}
      index={i}
    />
  ));

  return <div className={props.className} role="menu">{elements}</div>;
};


Options.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default styled(Options)`
    position: absolute;
    left: 0;
    top: 2.6em;
    background-color:white;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
    min-width:300px;
    width:100%;
    padding: 0 0.5em;
    transition: opacity 0.18s, transform 0.18s;
    transform:translateY(3px);
    opacity:${({ open }) => open ? '1' : '0'};;
    pointer-events: ${({ open }) => open ? 'auto' : 'none'};
    z-index: 2;
    box-shadow: 0px 2px 14px rgba(0,0,0,0.5);
`;
