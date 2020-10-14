import {ActionTypes} from './redux-store';
import {authAPI} from '../api/api';

export type AuthReducerActionType = ReturnType<typeof setAuthUserData>
export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const SRT_USER_DATA = 'SRT_USER_DATA';

let initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state= initialState, action: ActionTypes) => {
switch (action.type) {
    case SRT_USER_DATA:
        return{
            ...state,
            ...action.data,
            isAuth: true
        }
    default:
        return state
}

};

export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: SRT_USER_DATA, data: {id, login, email}
    } as const;
};

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
}

export default authReducer;