// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCEEDED } from './constants';
import {requestTopicsSucceeded, requestTopicsFailed, requestTopicsSuccedded } from './actions';
import { push } from 'react-router-redux';
import selectNavigationContainer from './selectors';
const ec2 = require('ec2-publicip');

export function fetchTopicsfromServer() {
  return ec2.getPublicIP((error, ip) => {
    if (error) {
      console.log(error);
    }
    return fetch(`http://${ip}3000/api/topics`)
      .then(response => response.json())
      .catch(r => console.log('failed', r));
  });
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsfromServer);
    yield put(requestTopicsSuccedded(topics)); 
  } catch (e) {
    yield put(requestTopicsFailed('request failed', e.message));  
  }
}

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  yield put(push(`/topics/${state.topics[0].name}`))

  // if(!state.selectedTopic &&  state.routerLocation === '/') {
  //   yield put(push(`/topics/${state.topics[0].name}`))
  // }
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

export function* selectDefaultSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic);
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}


// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
  selectDefaultSaga
];
