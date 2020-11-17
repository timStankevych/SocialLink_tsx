import {ActionTypes} from './redux-store';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

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

const authReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SRT_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }

};

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SRT_USER_DATA, payload: {id, login, email, isAuth}
    } as const;
};

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
};

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
               let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                dispatch(stopSubmit('login', {_error: message}));
            }
        });
};

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};


export default authReducer;