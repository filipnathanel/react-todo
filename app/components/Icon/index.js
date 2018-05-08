/**
 * Icon module
 *
 * the svg is loaded by webpack/ svg-sprite-loader
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './icons.svg';

function propsFilter(props) {
  const clone = { ...props };
  delete clone.active;
  return clone;
}

const Icon = (props) => (
  <svg className={props.className} {...propsFilter(props)}>
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string.isRequired,
};

export default styled(Icon)`
  width:20px;
  height:20px;
`;
