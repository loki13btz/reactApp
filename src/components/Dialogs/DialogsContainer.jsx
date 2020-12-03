import React from 'react';
import { addMessageCreator, updateNewMessageBodyCreate } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(addMessageCreator());
                };
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreate(body));
                }

                return (<Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick} dialogsPage={state} />
                );
            }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;