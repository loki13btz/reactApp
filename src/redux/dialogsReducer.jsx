const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({ id: 6, message: body });
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;

    }

};


export const addMessageCreator = () => ({ type: 'ADD_MESSAGE' });
export const updateNewMessageBodyCreate = (body) => ({ type: 'UPDATE_NEW_MESSAGE_BODY', body: body })

export default dialogsReducer;