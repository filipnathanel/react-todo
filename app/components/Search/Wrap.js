import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wrap from 'components/Wrap';
import * as colors from 'utils/colors';

function Wrapper(props) {
  const { className, children } = props;
  return (
    <div className={className}>
      <Wrap
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {children}
      </Wrap>
    </div>
  );
}

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};

export default styled(Wrapper)`
  background-color: ${colors.darkBlue};
  color:white;
  padding:1em 0;
`;
