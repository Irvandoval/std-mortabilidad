import { GITHUB_USER_FETCH } from './const';

function action(username) {
  return { type: GITHUB_USER_FETCH, username };
}

module.exports = action;
