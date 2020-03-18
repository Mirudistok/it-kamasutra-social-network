import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from './../../utils/validators/validators.js'
import { Input } from './../common/FormsControl/FormsControl'
import { loginThunkCreator, logoutThunkCreator } from './../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import s from './../common/FormsControl/FormsControl.module.css'

const maxLength40 = maxLengthCreator(40);

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={`Email`} component={Input} name={"email"} validate={[required, maxLength40]} />
                </div>
                <div>
                    <Field type="password" placeholder={`Password`} component={Input} name={"password"} validate={[required, maxLength40]} />
                </div>
                <div>
                    <Field type="checkbox" component={"input"} name={"rememberMe"} /> Remember me
                </div>
                { props.error && <div className={s.formSummaryError}>
                    {props.error}
                 </div>
                }
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxFrom = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={`/profile`} />
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxFrom onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    login: loginThunkCreator,
    logout: logoutThunkCreator
})(Login);