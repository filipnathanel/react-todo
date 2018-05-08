import React from 'react';

import Wrap from 'components/Wrap';
import Form from 'components/Form';
import FormButton from 'components/Form/FormButton';
import Select from 'components/Select';
import Input from 'components/Input';


const TodoForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrap>
      <Form onSubmit={submitHandler}>
        <Select
          id="type"
          placeholder="Select Type"
          options={[
            { value: 'personal', label: 'Personal' },
            { value: 'business', label: 'Business' },
          ]}
        />
        <Input id="name" type="text" placeholder="What are you going to do?" />
        <Input id="place" type="text" placeholder="Where?" />
        <FormButton>Add Todo</FormButton>

      </Form>
    </Wrap>
  );
};

export default TodoForm;
