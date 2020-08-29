import React from 'react';
import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogPageType,} from '../../redux/state';

type PropsType = {
    dialogsPage: DialogPageType
    addMessage: (postMessage: string) => void
    updateNewMessageText: (newMessage: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = ( ) => {
        if (newMessageElement.current) {
            if (newMessageElement.current.value !== '') {
                props.addMessage(newMessageElement.current.value)
            }
        };
    }

    let onMessageChange = () => {
        let text = newMessageElement.current ? newMessageElement.current.value : '';
        props.updateNewMessageText(text)
    }


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}></textarea> <br/>
                <button onClick={addMessage}>Send</button>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs