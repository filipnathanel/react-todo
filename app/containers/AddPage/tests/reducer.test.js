
import { fromJS } from 'immutable';
import addPageReducer from '../reducer';

describe('addPageReducer', () => {
  it('returns the initial state', () => {
    expect(addPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
