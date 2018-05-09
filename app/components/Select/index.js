import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Label from './Label';
import Options from './Options';

class Select extends React.Component {

  static defaultProps = {
    placeholder: 'Select Value',
  }

  static getDerivedStateFromProps(props, prevState) {
    const { defaultValue, options } = props;
    if (defaultValue && defaultValue.length > 0) {
      return {
        value: defaultValue,
        label: options.filter((option) => option.value === defaultValue)[0].label,
      };
    }
    return prevState;
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
    this.documentClickHandler = this.documentClickHandler.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.documentClickHandler);
  }

  optionClickHandler({ value, label }) {
    this.setState({ value, label });
    this.toggleOpen();
  }

  toggleOpen() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));

    if (!this.state.active) {
      document.addEventListener('click', this.documentClickHandler);
    } else {
      document.removeEventListener('click', this.documentClickHandler);
    }
  }

  documentClickHandler(e) {
    if (!this.wrapperRef.contains(e.target)) {
      this.setState({ open: false });
      document.removeEventListener('click', this.documentClickHandler);
    }
  }

  render() {
    const { name, options, placeholder } = this.props;
    const { value, label, open } = this.state;
    return (
      <div style={{ position: 'relative' }} ref={(node) => { this.wrapperRef = node; }}>
        <Label
          open={open}
          onClick={this.toggleOpen}
        >{value.length > 0 ? label : placeholder}</Label>
        <input
          style={{ display: 'none' }}
          type="text"
          name={name}
          defaultValue={this.state.value}
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
  name: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

export default styled(Select)`
  position: relative;
`;
