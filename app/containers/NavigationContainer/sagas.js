// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { REQUEST_TOPICS } from './constants';
import {requestTopicsSucceeded, requestTopicsFailed, requestTopicsSuccedded } from './actions';

export function fetchTopicsfromServer() {
  return fetch('http://localhost:3000/api/topics')
  .then(response => response.json())
  .catch(r => console.log('failed', r));
}

function* fetchTopics() {
  console.log('Fetch topics call')
  try {
    const topics = yield call(fetchTopicsfromServer);
    console.log('TOPICS from the server', topics);
    yield put(requestTopicsSuccedded(topics)); 
  } catch (e) {
    yield put(requestTopicsFailed('request failed', e.message));  
  }
  
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
  return;
}

// All sagas to be loaded
export default [
  fetchTopicsSaga
];
