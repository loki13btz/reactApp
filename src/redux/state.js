import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        count: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;