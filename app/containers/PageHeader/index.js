/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import Wrap from './Wrap';

export class PageHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrap>
        <Icon name="edit"></Icon>
      </Wrap>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string,
};

export default PageHeader;
