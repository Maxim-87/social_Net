import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../images/user.png";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>
    follow: (arg: number) => void
    unfollow: (arg: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}


export let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}
        </div>
        <div>
            {props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> Unfollow </button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}> Follow </button>}
                    </div>
                </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status} </div>
                 </span>
                <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                </span>
            </div>)
            }
        </div>
    </div>
}







