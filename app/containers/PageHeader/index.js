/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BackIcon from './BackIcon';
import Wrap from './Wrap';

export class PageHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrap>
        <Link to="/">
          <BackIcon name="back" />
        </Link>
        {this.props.title}
      </Wrap>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader;
