/**
 *
 * TodoPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import Header from 'components/Header';
import TodosList from 'components/TodosList';

import { makeSelectTodos } from './selectors';
import reducer from './reducer';
import AddIcon from './AddIcon';

export class TodoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (!this.props.todos) {
      // load todos from localstorage
    }
  }

  render() {
    const { todos } = this.props;

    const todosListProps = {
      todos,
    };

    return (
      <div style={{position:'relative'}}>
        <Helmet>
          <title>TodoPage</title>
          <meta name="description" content="Description of TodoPage" />
        </Helmet>
        <Header/>
        <TodosList {...todosListProps} />
        <Link to="/add">
          <AddIcon name="add" />
        </Link>
      </div>
    );
  }
}

TodoPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todos: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'todos', reducer });

export default compose(
  withReducer,
  withConnect,
)(TodoPage);
