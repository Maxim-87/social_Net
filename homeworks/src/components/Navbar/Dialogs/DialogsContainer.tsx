import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootAppStoreType} from "../../../redux/redux-store";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";


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

let mapStateToProps = (state: RootAppStoreType) => {
    return {
        dialogsPage: state.dialogsPage,
        b: 2,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
