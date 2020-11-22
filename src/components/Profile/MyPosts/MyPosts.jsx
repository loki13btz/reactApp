import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                new post
        </div>
            <div className={s.posts}>
                <Post message='Hello, how are you' count='10' />
                <Post message='What are you doing?' count='25' />
                <Post />
            </div>
        </div>);
};

export default MyPosts;