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
  SELECT_TOPIC,
  TOGGLE_DRAWER
} from './constants';

const initialState = fromJS({
  topics : [],
  isDrawerOpen : false,
  selectedTopic: 'About'
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS:
      return state;
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', action.topics);
    case '@@router/LOCATION_CHANGE':
      return state.set('routeLocation', action.payload.pathname);
    case REQUEST_TOPICS_FAILED:
      return state;
    case SELECT_TOPIC:
      return state.set('selectedTopic', action.topic).set('isDrawerOpen', false);
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    default:
      return state;
  }
}

export default navigationContainerReducer;
