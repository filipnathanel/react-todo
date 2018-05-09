import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { setVisibilityFilter } from 'containers/TodoPage/actions';
import reducer from 'containers/TodoPage/reducer';
import { selectIsFilterActive } from 'containers/TodoPage/selectors';
import injectReducer from 'utils/injectReducer';

import Button from './Button';

const mapStateToProps = createStructuredSelector({
  active: selectIsFilterActive,
});


function mapDispatchToProps(dispatch, props) {
  return {
    onClick: () => { dispatch(setVisibilityFilter(props.filter)); },
  };
}

const withReducer = injectReducer({ key: 'todos', reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withReducer,
  withConnect,
)(Button);
