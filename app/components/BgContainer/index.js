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
    <div style={{ backgroundImage: `url('${props.bg}')` }} className={props.className}>
      {Children.toArray(props.children)}
    </div>
  );
}

BgContainer.propTypes = {
  bg: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const StyledContainer = styled(BgContainer)`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default StyledContainer;
