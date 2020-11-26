import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.item}>
            <div >
                <img src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'></img>
            </div>
            <div className={s.discriptionBlock}>
                ava+discription
            </div>
        </div>);
};

export default ProfileInfo;