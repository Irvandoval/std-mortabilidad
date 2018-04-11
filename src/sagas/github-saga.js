import { takeEvery } from 'redux-saga';
import { call, put, fork} from 'redux-saga/effects';
import request from 'superagent';

function getGitHubUser(username) {
  const url = `https://api.github.com/users/${username}`;
  return request
         .get(url)
         .then(data => data);
}

function* fetchGitHubUser({ username }) {
  const result = yield call(getGitHubUser, username);
  yield put({type: 'GITHUB_USER_FETCH_DONE', result: result.body});
}

function* gitHubSaga() {
  yield* takeEvery('GITHUB_USER_FETCH', fetchGitHubUser);
}

export default function* root() {
  yield [
    fork(gitHubSaga),
  ];
}
