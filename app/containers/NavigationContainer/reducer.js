/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED
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
    case REQUEST_TOPICS:
      return state;
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    case REQUEST_TOPICS_FAILED:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
