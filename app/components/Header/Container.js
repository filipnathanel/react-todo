import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Container(props) {

  if (props.bgImg) {

  }
  return (
    <div {...props} />
  );
}

Container.proptypes = {
  bgImg: PropTypes.string,
};


export default styled(Container)`
  display: flex;
  position: relative;
`;
