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

import { addTodo, editTodo } from 'containers/TodoPage/actions';
import PageHeader from 'containers/PageHeader';
import TodoForm from 'containers/TodoForm';
import injectReducer from 'utils/injectReducer';
import { getActiveTodo } from 'containers/TodoPage/selectors';
import reducer from 'containers/TodoPage/reducer';

import Wrapper from './Wrapper';


export class AddPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { todo, onSubmitForm } = this.props;

    return (
      <Wrapper>
        <Helmet>
          <title>AddPage</title>
          <meta name="description" content="Description of AddPage" />
        </Helmet>

        <PageHeader title={'Add new todo'} previous={'hehe'} />
        <TodoForm todo={todo} onSubmit={onSubmitForm} />
      </Wrapper>
    );
  }
}

AddPage.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  todo: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

export function mapDispatchToProps(dispatch, props) {
  const addOrEditTodo = props.todo ? editTodo : addTodo;
  return {
    onSubmitForm: (todo) => dispatch(addOrEditTodo(todo)),
  };
}

const mapStateToProps = createStructuredSelector({
  todo: getActiveTodo(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'todos', reducer });

export default compose(
  withReducer,
  withConnect,
)(AddPage);
