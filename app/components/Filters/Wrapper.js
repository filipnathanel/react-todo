import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Wrapper(props) {
  const { className, children } = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};

export default styled(Wrapper)`
  background-color: white;
  display:flex;
`;
