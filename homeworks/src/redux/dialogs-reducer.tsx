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
};

type initDialogsStateType = typeof initialDialogsState

const dialogsReducer = (state = initialDialogsState, action: any): initDialogsStateType => {

    let stateCopy = {
        ...state,
    }

    if (action.type === SEND_MESSAGE) {
        let body = action.newMessageBody;
        stateCopy.message.push({id: 5, message: body})
        return stateCopy;
    }
    return state;
}

export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;