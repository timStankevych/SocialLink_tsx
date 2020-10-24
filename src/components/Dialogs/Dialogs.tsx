import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogPageType} from '../../redux/redux-store';
import {Field, reduxForm} from 'redux-form';


type PropsType = {
    dialogsPage: DialogPageType
    updateNewMessageText: (newMessage: string) => void
    sendMessage: (newMessageText: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    };

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;