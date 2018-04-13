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

function getMunicipios(departamentoId) {
  return {type: actions.GET_MUNICIPIOS, departamentoId};
}

function getTipoDocumentos() {
  return {type: actions.GET_TIPO_DOCUMENTOS};
}

function getLocalPartos() {
  return {type: actions.GET_LOCAL_PARTOS};
}

exports.getDepartamentos = getDepartamentos;
exports.getEstablecimientos = getEstablecimientos;
exports.getClasePartos = getClasePartos;
exports.getMunicipios = getMunicipios;
exports.getTipoDocumentos = getTipoDocumentos;
exports.getLocalPartos = getLocalPartos;
