import React from 'react';
import s from './PrivateMessageDialogs.module.css'

const PrivateMessageDialogs = (props) => {



    return (
        <div className={s.privateMessageDialogs}>
            <div className={s.privateMessageDialogs__box}>
                <img className={s.privateMessageDialogs__img} src="http://img1.joyreactor.cc/pics/post/%D0%92%D0%B0%D1%81%D1%8F-%D0%9B%D0%BE%D0%B6%D0%BA%D0%B8%D0%BD-artist-%D0%B2%D0%BE%D0%BB%D0%BA%D0%B8-5742977.jpeg" />
                <span>{props.message}</span>
            </div>
        </div>
    )
}

export default PrivateMessageDialogs;