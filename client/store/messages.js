import axios from 'axios';
import socket from '../socket';

const GET_MESSAGES = 'GET_MESSAGES';
const GET_MESSAGE = 'GET_MESSAGE'

export function getMessages(messages) {
    const action = {type: GET_MESSAGES, messages};
    return action;
}

export function getMessage(message) {
    const action = {type: GET_MESSAGE, message};
    return action;
}


export function fetchMessages() {

    return function thunk(dispatch) {
        return axios.get('/api/messages')
            .then(res => res.data)
            .then(messages => {
                const action = getMessages(messages);
                dispatch(action);
            });
    }
}

export function postMessage(message) {
    return function thunk(dispatch) {
        return axios.post('/api/messages', message)
            .then(res => res.data)
            .then(newMessage => {
                const action = getMessage(newMessage);
                dispatch(action);
                socket.emit('new-message', newMessage);
            });
    }
}

export default function reducer(previousMessages = [], action) {

    switch (action.type) {
        case GET_MESSAGES:
            return action.messages;

        case GET_MESSAGE:
            return [...previousMessages, action.message];

        default:
            return previousMessages;
    }

}

