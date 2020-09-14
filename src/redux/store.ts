import React from 'react';
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
