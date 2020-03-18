import React from 'react'
import s from './FormsControl.module.css'


export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={`${s.formControl} ${meta.touched && meta.error && s.formControlError}`} >
            <div>
                <textarea {...input} {...props} />
            </div>
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    return (
        <div className={`${s.formControl} ${meta.touched && meta.error && s.formControlError}`} >
            <div>
                <input {...input} {...props} />
            </div>
            {
                meta.touched && meta.error && <span>{meta.error}</span>
            }
        </div>
    )
}