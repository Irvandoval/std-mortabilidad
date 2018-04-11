import React, { PropTypes } from 'react';
import './app.css';
import MortForm from './MortForm';

const AppComponent = ({departamentos, actions, establecimientos, clasePartos}) =>
  <MortForm
    getDepartamentos={actions.getDepartamentos}
    getEstablecimientos={actions.getEstablecimientos}
    getClasePartos={actions.getClasePartos}
    departamentos={departamentos}
    establecimientos={establecimientos}
    clasePartos={clasePartos}
  />;

AppComponent.propTypes = {
  departamentos: PropTypes.arrayOf(PropTypes.object),
  establecimientos: PropTypes.arrayOf(PropTypes.object),
  clasePartos: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    getDepartamentos: PropTypes.func.isRequired,
    getEstablecimientos: PropTypes.func.isRequired,
    getClasePartos: PropTypes.func.isRequired,
  }),
};

export default AppComponent;
