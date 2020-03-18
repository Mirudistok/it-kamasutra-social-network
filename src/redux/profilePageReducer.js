import { usersAPI, profileAPI } from './../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    dialogsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 32 },
        { id: 2, message: "It's my first post", likesCount: 32 },
        { id: 2, message: "It's my second post", likesCount: 72 }
    ],
    profile: null,
    status: '',
}

const profilePageRecuxer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.values,
                likesCount: 0
            }

            return {
                ...state,
                dialogsData: [...state.dialogsData, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
export default profilePageRecuxer;

export const addPostActionCreator = (values) => {
    return {
        type: ADD_POST,
        values
    }
}
const setUserProfileAC = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
const setStatusAC = (status) => ({
    type: SET_STATUS,
    status
})
export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        })
};
export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data));
        })
};
export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        })
};