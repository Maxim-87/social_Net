import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "./auth-reducer";
import {usersReducer} from "./users-reducer";
import {reducer as formReducer} from 'redux-form';
import {appReducer} from "./app-reducer";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
export type RootAppStoreType = ReturnType<typeof reducers>
export let store: Store<RootAppStoreType, any> = createStore(reducers, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.store = store