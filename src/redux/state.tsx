import {type} from 'os';

export type MessageType = {
  id: number
  message: string
}
export type NewPostsTextType = string
export type DialogType = {
  id: number
  name: string
}
export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ProfilePageType = {
  posts: Array<PostType>
  newPostsText: NewPostsTextType
}
export type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageText: string
}
export type SidebarType = {}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: SidebarType
}

export type StoreType = {
  _state: RootStateType
  getState: () => RootStateType
  _rerenderEntireTree: () => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof updateNewMessageTextAC>
;

let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "Привет, как дела", likesCount: 10 },
        { id: 1, message: "Что ты такое", likesCount: 88 },
      ],
      newPostsText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Tim" },
        { id: 2, name: "Mary" },
        { id: 3, name: "Fima" },
        { id: 4, name: "Yan" },
        { id: 5, name: "Vovan" },
        { id: 6, name: "Dimych" },
      ],
      messages: [
        { id: 1, message: "Tim привет, а вот и мы" },
        { id: 2, message: "Mary привет, а вот и мы" },
        { id: 3, message: "Fima привет, а вот и мы" },
        { id: 4, message: "Yan привет, а вот и мы" },
        { id: 5, message: "Vovan привет, а вот и мы" },
        { id: 6, message: "Dimych привет, а вот и мы" },
      ],
      newMessageText: '',
    },
    sidebar: {},
  },
  _rerenderEntireTree() {
    console.log('state changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost: PostType = {
        id: new Date().getTime(),
        message: action.newPostsText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostsText = '';
      this._rerenderEntireTree();
    }
    else if (action.type === 'ADD-MESSAGE'){
      let newMessage: MessageType = {
        id: 5,
        message: action.newMessageText,
      }

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._rerenderEntireTree();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostsText = action.newText;
      this._rerenderEntireTree();
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._rerenderEntireTree();
    }
  },
}

export const addPostAC = (newPostText: string) => {
  return {
    type: 'ADD-POST', newPostsText: newPostText
  } as const
};

export const addMessageAC = (newMessageText: string) => {
  return {
    type: 'ADD-MESSAGE', newMessageText: newMessageText
  } as const
};

export const updateNewPostTextAC = (newText: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT', newText: newText
  } as const
};

export const updateNewMessageTextAC = (newMessage: string) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: newMessage
  } as const
};

export default store;