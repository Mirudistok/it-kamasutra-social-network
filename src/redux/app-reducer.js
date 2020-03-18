import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form';
import { getAuthUserDataThunkCreator } from './auth-reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}
const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}
export const initializeAppThunkCreator = () => (dispatch) => {
    Promise.all([dispatch(getAuthUserDataThunkCreator())])
        .then(() => {
            dispatch(initializedSuccess());
        })

}

export default appReducer;