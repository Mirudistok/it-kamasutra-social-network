import { createStore, combineReducers, applyMiddleware } from 'redux';
import profilePageReducer from './profilePageReducer'
import messagePageReducer from './messagePageReducer'
import sideBarReducer from './sideBarReducer'
import legionPrivateMessagePageReducer from './legionPrivateMessagePageReducer'
import usersPageReducer from './usersPageReducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import initialized from './app-reducer'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    sidebar: sideBarReducer,
    privateMessagePage: legionPrivateMessagePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: initialized
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;