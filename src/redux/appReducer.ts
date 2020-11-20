import {ActionTypes} from './redux-store';
import {getAuthUserData} from './authReducer';

export type AppReducerActionType = ReturnType<typeof initializetSuccess>
export type AppType = {
    initialized: boolean
}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState: AppType = {
    initialized: false
};

const appReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }

};

export const initializetSuccess = () => {
    return {type: INITIALIZED_SUCCESS} as const;
};

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializetSuccess())
        })
};


export default appReducer;