import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://cs9.pikabu.ru/post_img/big/2020/03/30/6/1585562132190522557.jpg'></img>
            {props.message}
            <div>
                <span>Like :{props.count} </span>
            </div>
        </div>
    );
};

export default Post;