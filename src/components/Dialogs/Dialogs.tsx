import React from 'react';
import cl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogPageType} from '../../redux/store';


type PropsType = {
    dialogsPage: DialogPageType
    updateNewMessageText: (newMessage: string) => void
    sendMessage: (newMessageText: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let newMessage = props.dialogsPage.newMessageText

    let addMessage = () => {
        if (newMessageElement.current) {
            if (newMessageElement.current.value !== '') {
                let newMessageText = newMessageElement.current.value
                props.sendMessage(newMessageText);
            }
        }
        ;
    }

    let onMessageChange = () => {
        let newMessage = newMessageElement.current ? newMessageElement.current.value : '';
        props.updateNewMessageText(newMessage)
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange}
                          ref={newMessageElement}
                          value={newMessage}
                          placeholder={'Your message'}>
                </textarea>
                <br/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}


export default Dialogs