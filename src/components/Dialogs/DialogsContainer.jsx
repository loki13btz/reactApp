import React from 'react';
import { connect } from 'react-redux';
import { addMessageCreator, updateNewMessageBodyCreate } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => { dispatch(addMessageCreator()); },
        updateNewMessageBody: (body) => {
            store.dispatch(updateNewMessageBodyCreate(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;