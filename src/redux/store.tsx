import profileReducer, {addPostAC, updateNewPostTextAC} from './profileReducer';
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from './dialogsReducer';
import sidebarReducer from './sidebarReducer';


export type MessageType = {
  id: number
  message: string
};
export type NewPostsTextType = string;
export type DialogType = {
  id: number
  name: string
};
export type PostType = {
  id: number
  message: string
  likesCount: number
};
export type ProfilePageType = {
  posts: Array<PostType>
  newPostsText: NewPostsTextType
};
export type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageText: string
};
export type SidebarType = {};
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: SidebarType
};

export type StoreType = {
  _state: RootStateType
  getState: () => RootStateType
  _rerenderEntireTree: () => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionTypes) => void
};

export type ActionTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof updateNewMessageTextAC>
;

// let store: StoreType = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 0, message: "Привет, как дела", likesCount: 10 },
//         { id: 1, message: "Что ты такое", likesCount: 88 },
//       ],
//       newPostsText: '',
//     },
//     dialogsPage: {
//       dialogs: [
//         { id: 1, name: "Tim" },
//         { id: 2, name: "Mary" },
//         { id: 3, name: "Fima" },
//         { id: 4, name: "Yan" },
//         { id: 5, name: "Vovan" },
//         { id: 6, name: "Dimych" },
//       ],
//       messages: [
//         { id: 1, message: "Tim привет, а вот и мы" },
//         { id: 2, message: "Mary привет, а вот и мы" },
//       ],
//       newMessageText: '',
//     },
//     sidebar: {},
//   },
//   _rerenderEntireTree() {
//     console.log('state changed')
//   },
//   getState() {
//     return this._state
//   },
//   subscribe(observer) {
//     this._rerenderEntireTree = observer
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//     this._rerenderEntireTree();
//   },
// };
