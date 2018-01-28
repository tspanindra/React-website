/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC
} from './constants';

const initialState = fromJS({
  topics : []
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS:
      return state;
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    case REQUEST_TOPICS_FAILED:
      return state;
      case SELECT_TOPIC:
      return state.set('selectedTopic', action.topic);
    default:
      return state;
  }
}

export default navigationContainerReducer;
