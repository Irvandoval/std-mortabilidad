import * as actions from './const';

function getDepartamentos() {
  return {type: actions.GET_DEPARTAMENTOS};
}

function getEstablecimientos() {
  return {type: actions.GET_ESTABLECIMIENTOS};
}

function getClasePartos() {
  return {type: actions.GET_CLASE_PARTOS};
}
exports.getDepartamentos = getDepartamentos;
exports.getEstablecimientos = getEstablecimientos;
exports.getClasePartos = getClasePartos;
