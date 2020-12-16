import React from 'react';
import Preloader from '../../../common/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.item}>
            <div >
                <img src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'></img>
            </div>
            <div className={s.discriptionBlock}>
                <div>
                    <img src={props.profile.photos.small} />
                </div>
                ava+discription
            </div>
        </div>);
};

export default ProfileInfo;