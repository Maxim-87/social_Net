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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id: null, login: null, email: null) => ({type: SET_USER_DATA, data: {id, email, login}} as const)
export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        })
}

export type setUserDataActionType = ReturnType<typeof setAuthUserData>

type ActionsType = setUserDataActionType




