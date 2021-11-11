// import {dialogsPageType} from "./store";

// import {dialogDataType, messageType} from "./store";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

let initialDialogsState = {
    dialogsData: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Margo'},
    ] as Array<any>,
    message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'I am O.K.'}
    ] as Array<any>,
    newMessageBody: "" as string
};

type initDialogsStateType = typeof initialDialogsState

const dialogsReducer = (state = initialDialogsState, action: any): initDialogsStateType => {

    let stateCopy = {
        ...state,
        }

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        stateCopy.newMessageBody = action.body;
        return stateCopy
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        stateCopy.newMessageBody = '';
        stateCopy.message.push({id: 5, message: body})
        return stateCopy;
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: any) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;