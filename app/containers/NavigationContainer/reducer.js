/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics : [
    {
      name: 'sample',
      description: 'sample Description'
    },
    {
      name: 'sample',
      description: 'sample Description'
    },
    {
      name: 'sample',
      description: 'sample Description'
    }
  ]
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
