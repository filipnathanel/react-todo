import styled from 'styled-components';
import NormalInput from 'components/Input';
import { compose } from 'redux';
import { connect } from 'react-redux';
import reducer from 'containers/TodoPage/reducer';
import { setSearch } from 'containers/TodoPage/actions';
import injectReducer from 'utils/injectReducer';

const Input = styled(NormalInput)`
  display: inline-block;
  width:auto;
  vertical-align:middle;
  background:white;
  border-radius:3px;
  padding: 0.66em;
  color: black;
  margin-bottom:0;
`;

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => {
      dispatch(setSearch(e.target.value));
    },
  };
}

const withReducer = injectReducer({ key: 'todos', reducer });
const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withReducer,
  withConnect
)(Input);
