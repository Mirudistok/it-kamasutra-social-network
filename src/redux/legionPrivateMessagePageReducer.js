const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    privateMessageUser: [
        { id: 1, name: "Age" },
        { id: 2, name: "Mir" },
        { id: 3, name: "Pipi" },
        { id: 4, name: "Ageilaus" },
        { id: 5, name: "Mirudistok" },
        { id: 6, name: "Ларенсия" }
    ],
    privateMessageDialogs: [
        { id: 1, message: "Сегодня хороший день для программирования!" },
        { id: 2, message: "Этот класс ты написал?" },
        { id: 3, message: "Я думаю из тебя выйдет хороший программист!" },
        { id: 4, message: "Ты сделал красивый сайт!" },
        { id: 5, message: "Эта программа работает!" },
        { id: 6, message: "Твоя функция работает!" },
        { id: 7, message: "Хороший код!" }
    ],
    messageChange: '',
}

const legionPrivateMessagePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 37,
                message: state.messageChange
            }
            return {
                ...state,
                privateMessageDialogs: [...state.privateMessageDialogs, newPost],
                messageChange: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                messageChange: action.newText
            }
        default:
            return state;
    }
}


export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default legionPrivateMessagePageReducer;