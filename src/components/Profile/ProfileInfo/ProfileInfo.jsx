import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from './../../common/Preloader/Preloader'
import Status from './Status/Status'

const profileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="profileInfo">
            <img className={s.profileInfo__img} src="https://c.wallhere.com/photos/d3/bd/space_space_art_landscape_night_digital_art-253272.jpg!d" />
            <div className={s.description__box}>
                <div className={s.profileInfo__avatar}>
                    <img src={props.profile.photos.small ? props.profile.photos.small : props.profile.photos.large ? props.profile.photos.large : `https://simple-fauna.ru/wp-content/uploads/2013/12/manul-1.jpg`} />
                </div>
                <div className={s.profileInfo__content}>
                    <div className={s.profileInfo__title}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.profileInfo__text}>
                        <ul>
                            <li className={s.profileInfo__status}>
                                <Status status={props.status} updateStatus={props.updateStatus} />
                            </li>
                            <li>
                                <ul className={s.profileInfo__contacts}>
                                    Контакты:
                                    <li>Facebook: <a>{props.profile.contacts.facebook}</a></li>
                                    <li>Website: <a>{props.profile.contacts.website}</a></li>
                                    <li>Vk: <a>{props.profile.contacts.vk}</a></li>
                                    <li>Twitter: <a>{props.profile.contacts.twitter}</a></li>
                                    <li>Instagram: <a>{props.profile.contacts.instagram}</a></li>
                                    <li>Youtube: <a>{props.profile.contacts.youtube}</a></li>
                                    <li>Github: <a>{props.profile.contacts.github}</a></li>
                                    <li>MainLink: <a>{props.profile.contacts.mainLink}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profileInfo;