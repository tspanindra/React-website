/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN,
  CANCEL_LOGIN
} from './constants';

export function login(email) {
  return {
    type: LOGIN,
    email
  };
}

export function cancelLogin(email) {
  return {
    type: CANCEL_LOGIN
  };
}

