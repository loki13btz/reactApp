import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreate } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreate(text)); },
        addPost: () => { dispatch(addPostActionCreator()); }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;