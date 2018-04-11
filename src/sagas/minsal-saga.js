import { takeEvery } from 'redux-saga';
import { call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/const';
import request from 'superagent';

function getDepartamentos() {
  const URL = 'https://api.salud.gob.sv/departamentos?idPais=68';
  return request
        .get(URL)
        .then(data => data);
}

function getEstablecimientos() {
  const URL = 'https://api.salud.gob.sv/establecimientos?pagina=1&elementosPorPagina=2000"';
  return request
    .get(URL)
    .then(data => data);
}

function getClasePartos() {
  const URL = 'https://api.salud.gob.sv/clase_partos';
  return request
    .get(URL)
    .then(data => data);
}

function* fetchEstablecimientos() {
  const result = yield call(getEstablecimientos);
  yield put({type: 'GET_ESTABLECIMIENTOS_FETCH_DONE', result: result.body['hydra:member']});
}

function* fetchDepartamentos() {
  const result = yield call(getDepartamentos);
  yield put({type: actions.GET_DEPARTAMENTOS_FETCH_DONE, result: result.body['hydra:member']});
}

function* fetchClasePartos() {
  const result = yield call(getClasePartos);
  yield put({type: actions.GET_CLASE_PARTOS_FETCH_DONE, result: result.body['hydra:member']});
}

function* getEstablecimientosSaga() {
  yield* takeEvery(actions.GET_ESTABLECIMIENTOS, fetchEstablecimientos);
}

function* getDepartamentosSaga() {
  yield* takeEvery(actions.GET_DEPARTAMENTOS, fetchDepartamentos);
}

function* getClasePartosSaga() {
  yield* takeEvery(actions.GET_CLASE_PARTOS, fetchClasePartos);
}

export default function* root() {
  yield [
    fork(getDepartamentosSaga),
    fork(getEstablecimientosSaga),
    fork(getClasePartosSaga),
  ];
}
