import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";



type DialogsItemType = {
    name: string
    id: number
}
type DialogPropsType = {
    // dialogs: Array<DialogsItemType>
    // message: Array<messageType>
    // store: Store
    // updateNewMessageBody: any
    // sendMessage: any
}

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
        b: 2
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);



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