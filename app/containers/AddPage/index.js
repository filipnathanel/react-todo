/**
 *
 * AddPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PageHeader from 'containers/PageHeader';
import TodoForm from 'components/Forms/TodoForm';
import injectReducer from 'utils/injectReducer';
import makeSelectAddPage from './selectors';
import reducer from './reducer';


export class AddPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>AddPage</title>
          <meta name="description" content="Description of AddPage" />
        </Helmet>

        <PageHeader title={'Add new thing'} previous={'hehe'} />
        <TodoForm />

      </div>
    );
  }
}

AddPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addpage: makeSelectAddPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(AddPage);
