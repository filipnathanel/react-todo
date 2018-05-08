import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from './Label';
import Options from './Options';

class Select extends React.PureComponent {

  static defaultProps = {
    placeholder: 'Select Value',
  }

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: '',
      label: '',
    };

    this.optionClickHandler = this.optionClickHandler.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  optionClickHandler({ value, label }) {
    this.setState({ value, label });
    this.toggleOpen();
  }

  toggleOpen() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  render() {
    const { id, options, placeholder } = this.props;
    const { value, label, open } = this.state;
    return (
      <div>
        <Label onClick={this.toggleOpen}>{value.length > 0 ? label : placeholder}</Label>
        <input
          style={{ display: 'none' }}
          type="text"
          id={id}
          value={this.state.value}
        />
        <Options
          options={options}
          onClick={this.optionClickHandler}
          open={open}
        />
      </div>
    );
  }

}

Select.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

export default styled(Select)`
  position: relative;
`;
