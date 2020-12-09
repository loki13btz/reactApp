const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Ugen' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Dasha' },
        { id: 4, name: 'Anna' }
    ],

    messageData: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'yo' },
        { id: 3, message: 'what\'s up?' },
        { id: 4, message: 'wtf' }
    ],
    newMessageBody: '',

}
let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            {
                let body = state.newMessageBody;
                return {
                    ...state,
                    newMessageBody: '',
                    messageData: [...state.messageData, { id: 6, message: body }],
                };
            }
        case UPDATE_NEW_MESSAGE_BODY:
            {
                return {
                    ...state,
                    newMessageBody: action.body
                };
            }
        default:
            return state;

    }

};


export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageBodyCreate = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;