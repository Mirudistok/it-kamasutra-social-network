import React from 'react'
import s from './Preloader.module.css'
import preloader from './../../../img/Spinner-1s-200px.svg'

const Preloader = (props) => {


    return <img src={preloader} className={s.preloader} />
}

export default Preloader;