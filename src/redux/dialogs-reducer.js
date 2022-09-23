const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  let stateCopy = {
    ...state,
    messages: [...state.messages]
  }

  stateCopy.messages = [...state.messages]

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messages.push({id: '4', message: body});
      state.newMessageBody = '';
      return state;
    default:
        return state;
  }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;
