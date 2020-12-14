const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, message: 'Hello, how are you', count: '10' },
        { id: 2, message: 'What are you doing?', count: '22' }
    ],
    newPostText: ''

}
let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    count: 0
                }

                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                };
            }
        case UPDATE_NEW_POST_TEXT:
            {
                return {
                    ...state,
                    newPostText: action.newText
                };
            }
        default:
            return state;

    }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreate = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;