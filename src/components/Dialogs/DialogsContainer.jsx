import { sendMessageCreator } from './../../redux/messagePageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirectComponent from './../../hoc/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (values) => {
            dispatch(sendMessageCreator(values));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs);
