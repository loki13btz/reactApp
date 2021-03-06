import { profileAPI } from "../Api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    postsData: [
        { id: 1, message: 'Hello, how are you', count: '10' },
        { id: 2, message: 'What are you doing?', count: '22' }
    ],
    newPostText: '',
    profile: null

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
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile }
        default:
            return state;

    }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreate = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUsersProfile(data));

    })
}

export default profileReducer;