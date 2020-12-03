import React from 'react';
import { addMessageCreator, updateNewMessageBodyCreate } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageCreator());
    };
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreate(body));
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick} dialogsPage={state} />
    );
};

export default DialogsContainer;