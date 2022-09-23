import Dialogs from "../components/Dialogs/Dialogs";
import profileReducer from "./profile-reducer";
import dialogs from "../components/Dialogs/Dialogs";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: "1", message: "Hello", likesCount: "12"},
        {message: "What is your name?", likesCount: "100"}
      ],
      newPostText: "New"
    },
    dialogsPage: {
      dialogs: [
        {id: "1", name: "Nikolay"},
        {id: "2", name: "Vasya"},
        {id: "3", name: "Olya"}
      ],
      messages: [
        {id: "1", message: "Privet"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "By by"}
      ],
      newMessageBody: "TEST"
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

window.store = store;

export default store;
