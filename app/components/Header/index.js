import React from 'react';
import { FormattedMessage } from 'react-intl';

import BgContainer from 'components/BgContainer';
import FlexContainer from 'components/FlexContainer';
import Wrap from 'components/Wrap';
import H1 from './H1';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <BgContainer bg={Banner}>
        <Wrap>
          <FlexContainer w={2 / 3}>
            <H1><FormattedMessage {...messages.name} /></H1>
          </FlexContainer>
          <FlexContainer w={1 / 3}>
            <FormattedMessage {...messages.personal} />
            <FormattedMessage {...messages.business} />
          </FlexContainer>
        </Wrap>
      </BgContainer>
    );
  }
}

export default Header;
