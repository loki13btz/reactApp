import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';



const DialogsItem = (props) => {

    let adds = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={adds} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;