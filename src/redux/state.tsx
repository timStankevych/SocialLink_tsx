let rerenderEntireTree = () => {
  console.log('state changed')
}

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

let state: RootStateType = {
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
}

export let addPost = () => {
  let newPost: PostType = {
    id: 7,
    message: state.profilePage.newPostsText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostsText = '';
  rerenderEntireTree();
}

export let addMessage = () => {
  let newMessage: MessageType = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  }

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree();
}

export let updateNewPostsText = (newText: string) => {

  state.profilePage.newPostsText = newText;
  rerenderEntireTree();
}

export let updateNewMessageText = (newMessage: string) => {

  state.dialogsPage.newMessageText = newMessage;
  rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
  rerenderEntireTree = observer
}

export default state;