import React, { PropTypes } from 'react';
import './app.css';
import MortForm from './MortForm';

const AppComponent = ({departamentos,
  actions, establecimientos, clasePartos, municipios, tipoDocumentos, localPartos}) =>
    <MortForm
      getDepartamentos={actions.getDepartamentos}
      getMunicipios={actions.getMunicipios}
      getEstablecimientos={actions.getEstablecimientos}
      getTipoDocumentos={actions.getTipoDocumentos}
      getClasePartos={actions.getClasePartos}
      getLocalPartos={actions.getLocalPartos}
      departamentos={departamentos}
      establecimientos={establecimientos}
      clasePartos={clasePartos}
      municipios={municipios}
      tipoDocumentos={tipoDocumentos}
      localPartos={localPartos}
    />;

AppComponent.propTypes = {
  departamentos: PropTypes.arrayOf(PropTypes.object),
  municipios: PropTypes.arrayOf(PropTypes.object),
  establecimientos: PropTypes.arrayOf(PropTypes.object),
  clasePartos: PropTypes.arrayOf(PropTypes.object),
  localPartos: PropTypes.arrayOf(PropTypes.object),
  tipoDocumentos: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    getDepartamentos: PropTypes.func.isRequired,
    getMunicipios: PropTypes.func.isRequired,
    getEstablecimientos: PropTypes.func.isRequired,
    getClasePartos: PropTypes.func.isRequired,
    getTipoDocumentos: PropTypes.func.isRequired,
    getLocalPartos: PropTypes.func.isRequired,
  }),
};

export default AppComponent;
