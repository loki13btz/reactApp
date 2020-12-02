import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';
import { addMessageCreator, updateNewMessageBodyCreate } from './../../redux/dialogsReducer';


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} img src={d.img} />);
    let messagesElement = state.messageData.map(m => <Messages message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageCreator());
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreate(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea placeholder='Enter your message'
                    value={newMessageBody}
                    onChange={onNewMessageChange}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>add message</button>
            </div>
        </div>
    );
};

export default Dialogs;