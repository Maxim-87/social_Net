import React from "react";
import p from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsConstrols";
import {maxlengthCreator, required} from "../../../Utils/validators/validators";
import {maxLength50} from "../../Profile/MyPosts/MyPosts";


type DialogsItemType = {
    name: string
    id: number
}
type DialogPropsType = {
    sendMessage: () => void
    // dialogs: Array<DialogsItemType>
    // message: Array<messageType>
    // dialogsPage: dialogsPageType
    // store: Store
    updateNewMessageBody: (body: any) => void
}

const Dialogs = (props: any) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map((d: any) => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.message.map((m: any) => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={p.dialogs}>
            <div className={p.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={p.message}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<any>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'}
                validate={[required, maxLength50]}/>
            </div>
            <div>
                <button> Send </button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<any>({form: 'DialogAddMessageForm'}) (AddMessageForm)

export default Dialogs