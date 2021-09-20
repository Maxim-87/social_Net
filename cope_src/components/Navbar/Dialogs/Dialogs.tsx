import React from "react";
import p from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {messageType} from "../../../redux/state";


type DialogsItemType = {
    name: string
    id: number
}
type DialogPropsType = {
    dialogs: Array<DialogsItemType>
    message: Array<messageType>
}

export const Dialogs = (props: DialogPropsType) => {

    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = props.message.map((m) => <Message message={m.message} id={m.id}/>)

    let newMessegeElement = React.createRef<HTMLTextAreaElement>()

    let sendMessege = () => {
        if (newMessegeElement.current) {
            let send = newMessegeElement.current.value
            alert(send)
        }
    }

    return (
        <div className={p.dialogs}>
            <div className={p.dialogsItems}>
                {dialogsElements}
                <textarea ref={newMessegeElement}> </textarea>
                <button onClick={sendMessege}> send messege</button>
                {messageElements}
            </div>
        </div>)
}