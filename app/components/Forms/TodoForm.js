import React from 'react';
import PropTypes from 'prop-types';

import Wrap from 'components/Wrap';
import Form from 'components/Form';
import FormButton from 'components/Form/FormButton';
import Select from 'components/Select';
import Input from 'components/Input';


const TodoForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      type: formData.get('type'),
      place: formData.get('place'),
    };

    console.log(data)
    
    props.onSubmit(data);
  };

  return (
    <Wrap style={{ marginTop: '10%' }}>
      <Form onSubmit={submitHandler}>
        <Select
          name="type"
          placeholder="Select Type"
          options={[
            { value: 'personal', label: 'Personal' },
            { value: 'business', label: 'Business' },
          ]}
        />
        <Input name="name" type="text" placeholder="What are you going to do?" />
        <Input name="place" type="text" placeholder="Where?" />
        <FormButton>Add Todo</FormButton>

      </Form>
    </Wrap>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default TodoForm;
