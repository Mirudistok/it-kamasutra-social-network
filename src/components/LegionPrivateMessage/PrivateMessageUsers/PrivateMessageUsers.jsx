import React from 'react';
import s from './PrivateMessageUsers.module.css'
import { NavLink } from 'react-router-dom';

const PrivateMessageUsers = (props) => {



    return (
        <div className={s.privateMessageUsers}>
            <NavLink to={`/legionMessage/` + props.id} className={s.privateMessageUsers__box}>
                <img className={s.privateMessageUsers__img} src="http://img0.joyreactor.cc/pics/post/full/%D0%BD%D0%B0%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BB-%D1%81%D0%B0%D0%BC-Imerald_-artist-%D1%8D%D0%B2%D0%B5%D0%BB%D0%B8%D0%BD%D0%B0-5744714.png" />
                <div className={s.privateMessageUsers__name}>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default PrivateMessageUsers;