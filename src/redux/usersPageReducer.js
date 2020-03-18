import { usersAPI } from './../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [
        // { id: 1, followed: true, fullname: "Age", status: 'Memento mori', location: { country: 'Rom', city: 'Rom' }, photoURL: 'http://img1.joyreactor.cc/pics/post/full/my-little-pony-фэндомы-mlp-art-mlp-OC-5746191.png' },
        // { id: 2, followed: true, fullname: "Mir", status: 'Ab exterioribus ad interiora', location: { country: 'SwRom', city: 'GeeRom' }, photoURL: 'http://img0.joyreactor.cc/pics/post/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-art-%D0%95%D0%B3%D0%B8%D0%BF%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5-%D0%91%D0%BE%D0%B3%D0%B8-%D0%A1%D0%B5%D1%85%D0%BC%D0%B5%D1%82-5748400.png' },
        // { id: 3, followed: false, fullname: "Pipi", status: 'Habent sua fata libelli', location: { country: 'Romsoo', city: 'Romwer' }, photoURL: 'http://img1.joyreactor.cc/pics/post/full/Evelar-%D0%9C%D1%80%D0%B0%D1%87%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-art-%D0%9D%D0%81%D0%A5-5743215.png' },
        // { id: 4, followed: true, fullname: "Ageilaus", status: 'Fit via vi', location: { country: 'RAferom', city: 'Rommosc' }, photoURL: 'http://img1.joyreactor.cc/pics/post/full/cyberpunk-Sci-Fi-art-girl-5746551.jpeg' },
        // { id: 5, followed: false, fullname: "Mirudistok", status: 'Imperare sibi maximum imperium est', location: { country: 'WartRom', city: 'BroRom' }, photoURL: 'http://img0.joyreactor.cc/pics/post/full/ShadeofShinon-Zym-The-Dragon-Prince-%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-5747160.jpeg' },
        // { id: 6, followed: false, fullname: "Ларенсия", status: 'Tempus edax rerum', location: { country: 'Romil', city: 'OloRom' }, photoURL: 'http://img1.joyreactor.cc/pics/post/full/Fantasy-art-%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D0%BE%D0%BF%D0%BE%D1%81%D1%82-namendart-5747795.jpeg' }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userId) {
                        return { ...item, followed: true }
                    }
                    return item;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userId) {
                        return { ...item, followed: false }
                    }
                    return item;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}
export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAc = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageAC = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
}
export const setTotalUsersCountAC = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}
export const setToggleIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const setToggleIsFollowingProgressAC = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setToggleIsFetchingAC(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setToggleIsFetchingAC(false));
                dispatch(setUsersAc(response.items));
                dispatch(setTotalUsersCountAC(response.totalCount));
            });
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setToggleIsFollowingProgressAC(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(setToggleIsFollowingProgressAC(false, userId));
            });
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setToggleIsFollowingProgressAC(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                }
                dispatch(setToggleIsFollowingProgressAC(false, userId));
            });
    }
}

export default usersPageReducer;