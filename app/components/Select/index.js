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
    const { id, options, placeholder } = this.props;
    const { value, label, open } = this.state;
    return (
      <div ref={(node) => { this.wrapperRef = node }}>
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
