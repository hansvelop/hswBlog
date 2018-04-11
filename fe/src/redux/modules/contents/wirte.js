import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/* actions */
const CONTETS_CONTEXT = "contents/wirte/CONTEXT";

/* action creators */
export const context = createAction(CONTETS_CONTEXT);

/* initialState */
const initialState = Map({
    context: "### tye11"
});

export default handleActions({
    [CONTETS_CONTEXT] : (state, action) => {
        return state.setIn(['context'], "### tye113232");
    }
}, initialState);