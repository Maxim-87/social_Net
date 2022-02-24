import {authAPI} from "../Api/Api";
import {getAuthUserData} from "./auth-reducer";
import {Dispatch} from "redux";

export const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';

export type DataStateType = {
    initialized: boolean

}

let initialState = {
    initialized: false
};

export const appReducer = (state: DataStateType = initialState, action: ActionsType):DataStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = ():initializedSuccessAT => ({type: SET_INITIALIZED_SUCCESS})
type initializedSuccessAT = {
    type: 'SET_INITIALIZED_SUCCESS'
}
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })
}


export type initializedSuccessActionType = ReturnType<typeof initializedSuccess>

type ActionsType = initializedSuccessAT




