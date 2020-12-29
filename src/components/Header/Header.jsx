import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/7c/45/9e/7c459e56fd8e93ee7b22ad7e7db94a54.png'></img>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>

    );
};

export default Header;