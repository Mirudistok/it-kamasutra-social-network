const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsDataMes: [
        { id: 1, name: "Age" },
        { id: 2, name: "Mir" },
        { id: 3, name: "Pipi" },
        { id: 4, name: "Ageilaus" },
        { id: 5, name: "Mirudistok" },
        { id: 6, name: "Ларенсия" }
    ],
    messagesData: [
        { id: 1, message: "to slove" },
        { id: 2, message: "to buy" },
        { id: 3, message: "to play" },
        { id: 4, message: "to want" },
        { id: 5, message: "to work" },
        { id: 6, message: "to lean" }
    ],
}

const messagePageReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.values;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 13, message: body }],
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (values) => {
    return {
        type: SEND_MESSAGE,
        values
    }
}

export default messagePageReducer;