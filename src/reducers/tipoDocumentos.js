/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {GET_TIPO_DOCUMENTOS_FETCH_DONE} from '../actions/const';

const initialState = [];

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {

    case GET_TIPO_DOCUMENTOS_FETCH_DONE: {
      // Modify next state depending on the action and return it
      return action.result;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
