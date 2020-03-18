import React from 'react';
import s from './LegionPrivateMessage.module.css'
import PrivateMessageUsers from './PrivateMessageUsers/PrivateMessageUsers';
import PrivateMessageDialogs from './PrivateMessageDialogs/PrivateMessageDialogs';
import {addPostCreator, updateNewPostTextCreator} from './../../redux/legionPrivateMessagePageReducer'

const LegionPrivateMessage = (props) => {


    let privateMessageUsers = props.privateMessageUser.map(item => <PrivateMessageUsers id={item.id} name={item.name} />);
    let privateMessageDialogs = props.privateMessageDialogs.map(item => <PrivateMessageDialogs message={item.message} />);

    const onClickLegionPrivateMessage = () => {
        props.onClickLegionPrivateMessage();
    }

    const onChangeLegionPrivateMessage = (e) => {
        let text = e.target.value;
        props.onChangeLegionPrivateMessage(text);
    }

    return (
        <div className={s.legionPrivateMessage}>
            <div className={s.legionPrivateMessage__box}>
                <div className={s.legionPrivateMessage__user}>
                    <div className={s.legionPrivateMessage__title}>Users</div>
                    {
                        privateMessageUsers
                    }
                </div>
                <div className={s.legionPrivateMessage__message}>
                    <div className={s.legionPrivateMessage__title}>Messages</div>
                    {
                        privateMessageDialogs
                    }
                    <div className={s.legionPrivateMessage__form}>
                        <textarea onChange={onChangeLegionPrivateMessage} value={props.messageChange} placeholder="Enter your message..."></textarea>
                        <button onClick={onClickLegionPrivateMessage} >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LegionPrivateMessage;