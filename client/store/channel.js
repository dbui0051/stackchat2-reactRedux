import axios from 'axios';

const GET_CHANNELS = 'GET_CHANNELS';

export function getChannels(channels) {
    const action = {type: GET_CHANNELS, channels};
    return action;
}

export function fetchChannels() {
    return function thunk(dispatch) {
        return axios.get('/api/channels')
            .then(res => res.data)
            .then(channels => {
                const action = getChannels(channels);
                dispatch(action);
            });
    }
}

