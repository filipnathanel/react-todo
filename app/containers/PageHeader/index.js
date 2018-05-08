/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import BackIcon from './BackIcon';
import Wrap from './Wrap';

export class PageHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrap>
        <BackIcon name="back" />
        {this.props.title}
      </Wrap>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader;
