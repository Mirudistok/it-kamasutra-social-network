import React from 'react';
import s from './Private.module.css';
import { NavLink } from 'react-router-dom';




const PrivateMessage = () => {



    return (
        <div className={s.privateMessage}>
            <div className={s.privateMessage__title}>
                <span>Private Message</span>
            </div>
            <NavLink to="/legionMessage" className={s.privateMessage__item} activeClassName={s.active} >L</NavLink>
            <NavLink to="/guildMessage" className={s.privateMessage__item} activeClassName={s.active} >G</NavLink>
            <NavLink to="/warsMessage" className={s.privateMessage__item} activeClassName={s.active} >W</NavLink>
            <NavLink to="/tradeMessage" className={s.privateMessage__item} activeClassName={s.active} >T</NavLink>
        </div>
    )
}

export default PrivateMessage;
