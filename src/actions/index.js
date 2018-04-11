/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
//import githubUserFetch from '../actions/GithubUserFetch.js';
import {getDepartamentos, getEstablecimientos, getClasePartos} from '../actions/Minsal.js';

const actions = { getDepartamentos, getEstablecimientos, getClasePartos };
module.exports = actions;
