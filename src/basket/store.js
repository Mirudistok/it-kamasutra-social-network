// import profilePageReducer from './profilePageReducer';
// import messagePageReducer from './messagePageReducer';
// import sideBarReducer from './sideBarReducer';
// import legionPrivateMessagePageReducer from './legionPrivateMessagePageReducer';

// let store = {

//     _state: {
//         messagePage: {
//             dialogsDataMes: [
//                 { id: 1, name: "Age" },
//                 { id: 2, name: "Mir" },
//                 { id: 3, name: "Pipi" },
//                 { id: 4, name: "Ageilaus" },
//                 { id: 5, name: "Mirudistok" },
//                 { id: 6, name: "Ларенсия" }
//             ],
//             messagesData: [
//                 { id: 1, message: "to slove" },
//                 { id: 2, message: "to buy" },
//                 { id: 3, message: "to play" },
//                 { id: 4, message: "to want" },
//                 { id: 5, message: "to work" },
//                 { id: 6, message: "to lean" }
//             ],
//             newMessageBody: ""
//         },
//         profilePage: {
//             dialogsData: [
//                 { id: 1, message: "Hi, how are you?", likesCount: 32 },
//                 { id: 2, message: "It's my first post", likesCount: 32 },
//                 { id: 2, message: "It's my second post", likesCount: 72 }
//             ],
//             newPostText: 'Ages wants to become a good programmer'
//         },
//         sidebar: {

//         },
//         privateMessagePage: {
//             privateMessageUser: [
//                 { id: 1, name: "Age" },
//                 { id: 2, name: "Mir" },
//                 { id: 3, name: "Pipi" },
//                 { id: 4, name: "Ageilaus" },
//                 { id: 5, name: "Mirudistok" },
//                 { id: 6, name: "Ларенсия" }
//             ],
//             privateMessageDialogs: [
//                 { id: 1, message: "Сегодня хороший день для программирования!" },
//                 { id: 2, message: "Этот класс ты написал?" },
//                 { id: 3, message: "Я думаю из тебя выйдет хороший программист!" },
//                 { id: 4, message: "Ты сделал красивый сайт!" },
//                 { id: 5, message: "Эта программа работает!" },
//                 { id: 6, message: "Твоя функция работает!" },
//                 { id: 7, message: "Хороший код!" }
//             ],
//             messageChange: '',
//         }

//     },
//     _callSubscriber() { },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {

//         this._state.profilePage = profilePageReducer(this._state.profilePage, action);
//         this._state.messagePage = messagePageReducer(this._state.messagePage, action);
//         this._state.sidebar = sideBarReducer(this._state.sidebar, action);
//         // this._state.privateMessagePage = legionPrivateMessagePageReducer(this._state.privateMessagePage, action);

//         this._callSubscriber();
//     }

// }

// export default store;