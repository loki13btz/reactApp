import React from 'react';
import s from './Users.module.css';
import imeges from './../../img/2.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = props.currentPage - 5 < 1 ? 1 : props.currentPage - 5; i <= props.currentPage + 5 && i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div className={s.item}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}> {p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : imeges} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: { "API-KEY": "235283ad-ee4c-43f3-b627-a58dade149b3" }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    })

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: { "API-KEY": "235283ad-ee4c-43f3-b627-a58dade149b3" }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    })

                            }}>Follow</button>}


                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>

            </div>)
        }
    </div >)
}

export default Users;