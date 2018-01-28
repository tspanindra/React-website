/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED
} from './constants';

const initialState = fromJS({
  links: [
    {
      description: 'This is the link description',
      url: 'https://github.com/facebook/react',
      topicName: 'links',
      id: 'fake'
    }
  ]
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEEDED:
      return state.set('links', action.links)
    default:
      return state;
  }
}

export default linkListContainerReducer;
