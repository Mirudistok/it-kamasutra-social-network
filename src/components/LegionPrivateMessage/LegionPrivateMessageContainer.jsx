import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from './../../redux/legionPrivateMessagePageReducer'
import LegionPrivateMessage from './LegionPrivateMessage'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        privateMessageUser: state.privateMessagePage.privateMessageUser,
        privateMessageDialogs: state.privateMessagePage.privateMessageDialogs,
        messageChange: state.privateMessagePage.messageChange
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClickLegionPrivateMessage: () => {
            dispatch(addPostCreator());
        },
        onChangeLegionPrivateMessage: (text) => {
            dispatch(updateNewPostTextCreator(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LegionPrivateMessage);