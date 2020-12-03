import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreate } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreate(text));
                }
                return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                    postsData={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText} />)
            }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;