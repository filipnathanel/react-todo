import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Wrapper(props) {
  return (
    <div
      role="button"
      className={`${props.className} ${props.active ? 'active' : ''}`}
      onClick={props.onClick}
      ref={props.setRef}
      tabIndex={props.index}
    >
      {Children.toArray(props.children)}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  setRef: PropTypes.func,
  index: PropTypes.number,
};

const StyledWrapper = styled(Wrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: space-between;
  cursor:pointer;
  transition: transform 0.3s;
  padding: 0 3.5%;

  &:focus{
    outline:none;
  }

  &.active{
    transform: translatex(-164px);
  }

`;

export default StyledWrapper;
