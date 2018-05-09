import React from 'react';
import BgContainer from 'components/BgContainer';
import FlexContainer from 'components/FlexContainer';
import Wrap from 'components/Wrap';
import H1 from './H1';
import Banner from './banner.jpg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <BgContainer bg={Banner}>
        <Wrap>
          <FlexContainer w={2 / 3}>
            <H1>Your Todos</H1>
          </FlexContainer>
        </Wrap>
      </BgContainer>
    );
  }
}

export default Header;
