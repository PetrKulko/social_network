import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let messagesElements = state.messages.map(message => <Message message={message.message} />);
  let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
  let newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessage();
  }

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.dialogs}>
      <div>
        {dialogsElements}
      </div>
      <div>
        <div>
          {messagesElements}
        </div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
          />
        </div>
        <button onClick={onSendMessageClick}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs;
