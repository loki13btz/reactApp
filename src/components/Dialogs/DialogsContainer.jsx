import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { addMessageCreator, updateNewMessageBodyCreate } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreate(body));
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;