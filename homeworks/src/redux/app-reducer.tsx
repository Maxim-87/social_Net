import {authAPI} from "../Api/Api";


export const SET_USER_DATA = 'SET_USER_DATA';

// export type UserType = {
//     id: number
//     photos: {
//         small: null | string
//         large: null | string
//     }
//     followed: boolean
//     name: string
//     status: string | null
//     uniqueUrlName: null | string
// }

export type DataStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean

}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

export const authReducer = (state: DataStateType = initialState, action: ActionsType):DataStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id: null, login: null, email: null, isAuth: boolean) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const)
export const  getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email, isAuth} = response.data.data;
                dispatch(setAuthUserData(id, login, email, false));
            }
        })
}

export type loginDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const  login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        })
}

export const  logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export type setUserDataActionType = ReturnType<typeof setAuthUserData>

type ActionsType = setUserDataActionType




