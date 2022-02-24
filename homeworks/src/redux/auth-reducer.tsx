import {authAPI, securetyAPI} from "../Api/Api";
import {Dispatch} from "redux";


export const SET_USER_DATA = 'SET_USER_DATA';
export const GET_CAPTCHA = 'GET_CAPTCHA';

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
    // captchaUrl: null | string
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    // captchaUrl: null
};

export const authReducer = (state: DataStateType = initialState, action: ActionsType):DataStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload, //null, null, null, false
                // isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id: null | number, login: null | string, email: null | string, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const)
// export const getChaptcha = (captchaUrl: null | string,) => ({type: GET_CAPTCHA, payload: {captchaUrl}} as const)
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let res = await authAPI.me()
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
}

export type loginDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const  login = (data: loginDataType) => (dispatch: any) => {
    debugger
    authAPI.login(data)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        })
}

export const  logout = () => (dispatch: Dispatch) => {
    debugger
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

// export const getCaptchaUrl = () => (dispatch: Dispatch) => {
//     securetyAPI.getCaptcha()
//         .then(response => {
//             const captchaUrl = response.data.url
//             dispatch(getChaptcha(captchaUrl))
//         })
// }

export type setUserDataActionType = ReturnType<typeof setAuthUserData>

type ActionsType = setUserDataActionType




