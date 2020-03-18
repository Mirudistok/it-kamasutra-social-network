import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from './../../utils/validators/validators'
import { Textarea } from './../common/FormsControl/FormsControl'


const maxLength10 = maxLengthCreator(10);

const Dialogs = (props) => {

    let messagePage = props.messagePage;

    let dialogsElements = messagePage.dialogsDataMes.map(item => <DialogItem name={item.name} id={item.id} />);
    let messagesElements = messagePage.messagesData.map(item => <Message message={item.message} />);
    let newMessageBody = messagePage.newMessageBody;

    let addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody);
    }

    return (
        <div className="content">
            <div className={s.dialogs}>
                <div className={s.dialog}>
                    {
                        dialogsElements
                    }
                </div>
                <div className={s.messages}>
                    <div>
                        {
                            messagesElements
                        }
                    </div>
                    <div>
                        <AddMessageReduxForm onSubmit={addNewMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={"Enter your message"} component={Textarea} name="newMessageBody"  validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;