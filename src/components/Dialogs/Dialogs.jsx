import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={s.active}> Ugen</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.active}> Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.active}> Dasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={s.active}> Anna</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>fghjk</div>
                <div className={s.message}>fghjkm ghj</div>
                <div className={s.message}>fghj hj</div>

            </div>
        </div>
    );
};

export default Dialogs;