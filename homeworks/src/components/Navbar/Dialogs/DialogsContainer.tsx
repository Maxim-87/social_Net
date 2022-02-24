import React, {ComponentType} from "react";
import {sendMessageCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RootAppStoreType} from "../../../redux/redux-store";
import {withAuthRedirect} from "../../../hoc/WithAuthRedirect";


type DialogsItemType = {
    name: string
    id: number
}
type DialogPropsType = {}

let mapStateToProps = (state: RootAppStoreType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
