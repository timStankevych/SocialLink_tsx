import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import profileReducer, {ProfilePageActionTypes} from './profileReducer';
import dialogsReducer, {DialogPageActionTypes} from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer, {UsersPageActionTypes, usersPageType} from './usersReducer';
import authReducer, {AuthReducerActionType, AuthType} from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

export type MessageType = {
    id: number
    message: string
};
export type DialogType = {
    id: number
    name: string
};
export type PostType = {
    id: number
    message: string
    likesCount: number
};
type ProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostsText: string
    profile: ProfileType
    status: string
};
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
};
export type SidebarType = {};
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
    usersPage: usersPageType
    auth: AuthType
    form: any
};

export type DispatchType = (action: ActionTypes) => void


export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: DispatchType
};

export type ActionTypes = ProfilePageActionTypes
    | DialogPageActionTypes
    | UsersPageActionTypes
    | AuthReducerActionType

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;