import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/* actions */
const MODAL_OPEN = "base/modal/MODAL_OPEN";
const MODAL_CLOSE = "base/modal/MODAL_CLOSE";

/* action creators */
export const openModal = createAction(MODAL_OPEN);
export const closeModal = createAction(MODAL_CLOSE);

/* initialState */
const initialState = Map({
    login: Map({
        open: false
    })
});

export default handleActions({
    [MODAL_OPEN] : (state, action) => {
        //modalName 모달을 보여준다
        /*
            {
                modalName,
                data
            }
        */
        const { modalName, data } = action.payload;
        return state.mergeIn([modalName],{
            open: true,
            ...data
        });
    },
    [MODAL_CLOSE] : (state, action) => {
        //modalName 모달을 보여준다
        const modalName = action.payload;
        return state.setIn([modalName, 'open'], false);
    }
}, initialState);