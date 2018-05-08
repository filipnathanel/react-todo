/**
 *
 * BgContainer.js
 *
 * A container for when you wish to apply background-image
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function BgContainer(props) {
  return (
    <div style={{ width: `${props.w * 100}%` }} className={props.className}>
      {Children.toArray(props.children)}
    </div>
  );
}

BgContainer.propTypes = {
  w: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const StyledContainer = styled(BgContainer)`
  display:flex;
`;

export default StyledContainer;
