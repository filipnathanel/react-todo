import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import Wrap from 'components/Wrap';
import Form from 'components/Form';
import FormButton from 'components/Form/FormButton';
import Select from 'components/Select';
import Input from 'components/Input';

class TodoForm extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      type: formData.get('type'),
      place: formData.get('place'),
    };

    if (this.props.todo) {
      data.id = this.props.todo.id;
    }

    if (data.name.length < 1) {
      this.setState({
        error: 'You need to write what you are going to do.',
      });
    } else {
      this.setState({ error: null });
      this.props.onSubmit(data);
      this.props.dispatch(push('/'));
    }
  }

  render() {
    const { todo } = this.props;
    const type = todo ? todo.type : undefined;
    const name = todo ? todo.name : undefined;
    const place = todo ? todo.place : undefined;

    return (
      <Wrap style={{ marginTop: '10%' }}>
        <Form onSubmit={this.submitHandler}>
          <Select
            name="type"
            placeholder="Select Type"
            options={[
              { value: 'personal', label: 'Personal' },
              { value: 'business', label: 'Business' },
            ]}
            defaultValue={type}
          />
          <Input
            name="name"
            type="text"
            placeholder="What are you going to do?"
            defaultValue={name}
          />
          <Input
            name="place"
            type="text"
            placeholder="Where?"
            defaultValue={place}
          />
          {this.state.error}
          <FormButton>{ todo ? 'Edit Todo' : 'Add Todo' }</FormButton>

        </Form>
      </Wrap>
    );
  }

}

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
  dispatch: PropTypes.func,
  todo: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect
)(TodoForm);
