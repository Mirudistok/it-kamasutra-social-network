import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../img/user.jpg'

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    }

    return (
        

        <div className={s.users}>
            <button onClick={getUsers} >Add Users</button>
            {
                props.users.map(item =>
                    <div className={s.users__map} key={item.id}>
                        <div className={s.users__follow}>
                            <img className={s.users__img} src={item.photos.small != null ? item.photos.small : userPhoto} />
                            {item.followed ?
                                <button onClick={() => { props.unfollow(item.id) }} className={s.users__followBtn}>follow</button> :
                                <button onClick={() => { props.follow(item.id) }} className={s.users__followBtn}>unfollow</button>
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