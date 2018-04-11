/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsDef from '../actions/';

import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, departamentos, establecimientos, clasePartos} = this.props;
    return (<Main
      actions={actions}
      departamentos={departamentos}
      establecimientos={establecimientos}
      clasePartos={clasePartos}
      />);
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({ getDepartamentos: PropTypes.func.isRequired }),
  departamentos: PropTypes.arrayOf(PropTypes.object),
  establecimientos: PropTypes.arrayOf(PropTypes.object),
  clasePartos: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  console.log(state)
  const props = {
    departamentos: state.departamentos,
    establecimientos: state.establecimientos,
    clasePartos: state.clasePartos,
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = actionsDef;
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
