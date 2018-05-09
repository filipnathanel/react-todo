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
import Filters from 'components/Filters';
import Search from 'components/Search';
import TodosList from 'components/TodosList';

import { makeSelectTodos, makeSelectVisibleTodos } from './selectors';
import reducer from './reducer';
import AddIcon from './AddIcon';

export class TodoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (!this.props.todos) {
      // load todos from localstorage
    }
  }

  render() {
    const { todos, visibleTodos } = this.props;

    const todosListProps = {
      todos: visibleTodos,
    };

    return (
      <div style={{ position: 'relative' }}>
        <Helmet>
          <title>TodoPage</title>
          <meta name="description" content="Description of TodoPage" />
        </Helmet>
        <Header todos={todos} />
        <Search />
        <Filters />
        <TodosList {...todosListProps} />
        <Link to="/add">
          <AddIcon name="add" />
        </Link>
      </div>
    );
  }
}

TodoPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  todos: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
  visibleTodos: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};

const mapStateToProps = createStructuredSelector({
  todos: makeSelectTodos(), // all todos
  visibleTodos: makeSelectVisibleTodos(), // search and filters applied
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
