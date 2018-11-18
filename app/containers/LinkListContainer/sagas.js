import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestLinksSucceeded, requestLinksFailed } from './actions';
import { REQUEST_LINKS, START_ADD } from './constants';
import { push } from 'react-router-redux';
const ec2 = require('ec2-publicip');

function fetchLinksFromServer(topicName) {
  return ec2.getPublicIP((error, ip) => {
    if (error) {
      console.log(error);
    }
    return fetch(`http://${ip}:3000/api/topics/${topicName}/links`)
    .then(response => response.json())
  });
}

function* fetchLinks(action) {
  try {
    let links;
    if(action.topicName === 'About') {
      links = yield call(fetchLinksFromServer, action.topicName);
      const expLinks = yield call(fetchLinksFromServer, 'Experience');
      links = links.concat(expLinks);

      console.log(links);
    } else {
      links = yield call(fetchLinksFromServer, action.topicName);
    }
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks)
  return;
}

function* startAdd(action) {
  yield put(push(`/topics/${action.topicName}/add`));
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD, startAdd)
}

// All sagas to be loaded
export default [
  defaultSaga,
  startAddSaga
];
