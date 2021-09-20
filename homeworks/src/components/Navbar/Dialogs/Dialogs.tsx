import React from "react";
import p from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsPageType,} from "../../../redux/store"


type DialogsItemType = {
    name: string
    id: number
}
type DialogPropsType = {
    sendMessage: () => void
    // dialogs: Array<DialogsItemType>
    // message: Array<messageType>
    dialogsPage: dialogsPageType
    // store: Store
    updateNewMessageBody: (body: any) => void
}

export const Dialogs = (props: DialogPropsType) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.message.map((m) => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;
    //let newMessageBody = props.store._state.dialogsPage.newMessageBody;
    // let newMessegeElement = React.createRef<HTMLTextAreaElement>()
    // let sendMessege = () => {
    //     if (newMessegeElement.current) {
    //         let send = newMessegeElement.current.value
    //         alert(send)
    //     }
    // }
    // const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         onSendMessageClick()
    //     }
    // }

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={p.dialogs}>
            <div className={p.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={p.message}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}> Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/*<textarea ref={newMessegeElement}> </textarea>*/
}
{/*</div>*/
}
{/*<div>*/
}
{/*<button onClick={sendMessege}> Send messege</button>*/
}
{/*</div>*/
}
{/*{messageElements}*/
}