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
            ]

        },
        profilePage: {
            postsData: [
                { id: 1, message: 'Hello, how are you', count: '10' },
                { id: 2, message: 'What are you doing?', count: '22' }
            ],
            newPostText: ''

        }
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            count: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};









export default store;