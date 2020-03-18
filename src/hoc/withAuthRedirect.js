import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return { 
        isAuth: state.auth.isAuth,
    }
}

const withAuthRedirectComponent = (Componetn) => {

    class RedirectComponent extends React.Component {
        render() {

            if (this.props.isAuth === false) return <Redirect to={'/login'} />;

            return <Componetn {...this.props} />
        }
    }
   
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirectComponent;