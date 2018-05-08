/**
 * TodoListItem
 *
 * Lists the name and actions for a todo item
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ListItem from 'components/ListItem';
import TypeIcon from './TypeIcon';
import ButtonIcon from './ButtonIcon';
import Wrapper from './Wrapper';
import OffscreenMenu from './OffscreenMenu';
import { toggleTodo, removeTodo } from '../TodoPage/actions';

export class TodoListItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.toggleHandler = this.toggleHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.documentClickHandler = this.documentClickHandler.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.documentClickHandler);
  }

  clickHandler() {
    if (!this.state.active) {
      document.addEventListener('click', this.documentClickHandler);
    } else {
      document.removeEventListener('click', this.documentClickHandler);
    }
    this.setState({ active: !this.state.active });
  }


  toggleHandler() {
      this.props.onToggle(this.props.item.id);
  }

  uncompleteHandler() {
    this.props.onUncomplete(this.props.item);
  }

  removeHandler() {
    this.props.onRemove(this.props.item);
  }

  documentClickHandler(e) {
    if (!this.wrapperRef.contains(e.target)) {
      this.setState({ active: false });
      document.removeEventListener('click', this.documentClickHandler);
    }
  }

  render() {
    const item = this.props.item;

    const content = (
      <Wrapper
        onClick={this.clickHandler}
        active={this.state.active}
        setRef={(node) => { this.wrapperRef = node; }}
      >
        <TypeIcon name={item.type} />
        {item.name}
        <OffscreenMenu active={this.state.active} onClick={(e) => { e.stopPropagation(); }}>
          <Link to={`edit/${item.id}`}>
            <ButtonIcon name="edit" />
          </Link>
          <ButtonIcon name="tick" active={item.completed} onClick={this.toggleHandler} />
          <ButtonIcon name="delete" onClick={this.removeHandler} />
        </OffscreenMenu>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.name}`} item={content} />
    );
  }
}

TodoListItem.propTypes = {
  item: PropTypes.object,
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onToggle: (todo) => {
      dispatch(toggleTodo(todo));
    },
    onRemove: (todo) => {
      dispatch(removeTodo(todo));
    },
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect
)(TodoListItem);
