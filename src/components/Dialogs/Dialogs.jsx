import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} img src={d.img} />);
    let messagesElement = props.state.messageData.map(m => <Messages message={m.message} />);

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>add message</button>
            </div>
        </div>
    );
};

export default Dialogs;