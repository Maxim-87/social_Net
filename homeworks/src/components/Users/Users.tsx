import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../images/user.png";
import { UserType} from "../../redux/users-reducer";
import { NavLink } from 'react-router-dom';


type UsersPropsType = {
    users: Array<UserType>
    follow: (arg: number) => void
    unfollow: (arg: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: any
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
                        <NavLink to={'/profile/' + u.id}>
                       <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some((id: number) => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)
                            }}> Unfollow </button>

                            : <button disabled={props.followingInProgress.some((id: number) => id === u.id)} onClick={() => {
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







