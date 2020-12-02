import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
    _state: {
        dialogsPage: {
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

        },
        profilePage: {
            postsData: [
                { id: 1, message: 'Hello, how are you', count: '10' },
                { id: 2, message: 'What are you doing?', count: '22' }
            ],
            newPostText: ''

        }
    },
    _callSubscriber() { },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

};




export default store;