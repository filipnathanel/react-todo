import { createSelector } from 'reselect';

/**
 * Direct selector to the addPage state domain
 */
const selectAddPageDomain = (state) => state.get('addPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddPage
 */

const makeSelectAddPage = () => createSelector(
  selectAddPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectAddPage;
export {
  selectAddPageDomain,
};
