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

function getMunicipios(departamentoId) {
  const URL = `https://api.salud.gob.sv/municipios?idDepartamento=${departamentoId}`;
  return request
  .get(URL)
  .then(data => data);
}

function getTipoDocumentos() {
  const URL = 'https://api.salud.gob.sv/tipo_documentos';
  return request
    .get(URL)
    .then(data => data);
}

function getLocalPartos() {
  const URL = 'https://api.salud.gob.sv/local_partos';
  return request
    .get(URL)
    .then(data => data);
}


function* fetchEstablecimientos() {
  const result = yield call(getEstablecimientos);
  yield put({type: actions.GET_ESTABLECIMIENTOS_FETCH_DONE, result: result.body['hydra:member']});
}

function* fetchDepartamentos() {
  const result = yield call(getDepartamentos);
  yield put({type: actions.GET_DEPARTAMENTOS_FETCH_DONE, result: result.body['hydra:member']});
}

function* fetchClasePartos() {
  const result = yield call(getClasePartos);
  yield put({type: actions.GET_CLASE_PARTOS_FETCH_DONE, result: result.body['hydra:member']});
}

function* fetchMunicipios({departamentoId}) {
  const result = yield call(getMunicipios, departamentoId);
  yield put({type: actions.GET_MUNICIPIOS_FETCH_DONE, result: result.body['hydra:member']});
}

function* fetchTipoDocumentos() {
  const result = yield call(getTipoDocumentos);
  yield put({type: actions.GET_TIPO_DOCUMENTOS_FETCH_DONE, result: result.body['hydra:member']});
}

function* fetchLocalPartos() {
  const result = yield call(getLocalPartos);
  yield put({type: actions.GET_LOCAL_PARTOS_FETCH_DONE, result: result.body['hydra:member']});
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

function* getMunicipiosSaga() {
  yield* takeEvery(actions.GET_MUNICIPIOS, fetchMunicipios);
}

function* getTipoDocumentosSaga() {
  yield* takeEvery(actions.GET_TIPO_DOCUMENTOS, fetchTipoDocumentos);
}

function* getLocalPartosSaga() {
  yield* takeEvery(actions.GET_LOCAL_PARTOS, fetchLocalPartos);
}

export default function* root() {
  yield [
    fork(getDepartamentosSaga),
    fork(getEstablecimientosSaga),
    fork(getClasePartosSaga),
    fork(getMunicipiosSaga),
    fork(getTipoDocumentosSaga),
    fork(getLocalPartosSaga),
  ];
}
