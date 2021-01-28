import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
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


export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);