import React from 'react'
import s from './Users.module.css'
import userPhoto from './../../img/user.jpg'
import { NavLink } from 'react-router-dom';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.users}>
            <div className={s.users__paginationBtns} >
                {
                    pages.map(item => {
                        return (
                            <div onClick={(e) => { props.setCurrentPage(item); }} className={props.currentPage === item
                                ? `${s.users__paginationBtn} ${s.users__paginationBtnActive}`
                                : s.users__paginationBtn}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
            {
                props.users.map(item =>
                    <div className={s.users__map} key={item.id}>
                        <div className={s.users__follow}>
                            <NavLink to={`/profile/` + item.id} className={s.users__imgLink}>
                                <img className={s.users__img} src={item.photos.small
                                    ? item.photos.small
                                    : item.photos.large
                                        ? item.photos.large
                                        : userPhoto} />
                            </NavLink>
                            {
                                item.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === item.id)}
                                        onClick={() => { props.unfollow(item.id); }}
                                        className={s.users__followBtn}>follow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === item.id)}
                                        onClick={() => { props.follow(item.id); }}
                                        className={s.users__followBtn}>unfollow</button>
                            }
                        </div>
                        <div className={s.users__content}>
                            <div className={s.users__text}>
                                <div className={s.users__fullname}>{item.name}</div>
                                <div className={s.users__status}>{item.status}</div>
                            </div>
                            <div className={s.users__location}>
                                <div className={s.users__country}>{"item.location.country"}</div>
                                <div className={s.users__city}>{"item.location.city"}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default Users;
