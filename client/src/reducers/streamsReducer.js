import { CREATE_STREAM, STREAM_LIST } from '../actions/type';
import _ from 'lodash';

const INIT_STATE = {};

const streamsReducer = (state = INIT_STATE, action) => {
    if (action.type === CREATE_STREAM) {
        let createdStream = action.payload;
        return { ...state, [createdStream.id]: createdStream };
    }

    switch(action.type) {
        case STREAM_LIST:
            return { ...state,  ..._.mapKeys(action.payload, 'id')};
    }

    return state;
}

export default streamsReducer;