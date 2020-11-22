import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'></img>
            </div>
            <div>
                ava
            <img src=''></img>
            </div>
            <MyPosts />
        </div>);
};

export default Profile;