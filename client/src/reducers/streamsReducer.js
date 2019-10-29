import { CREATE_STREAM, STREAM_LIST, STREAM_SINGLE } from '../actions/type';
import _ from 'lodash';

const INIT_STATE = {};

const streamsReducer = (state = INIT_STATE, action) => {

    switch(action.type) {
        case STREAM_LIST:
            return { ...state,  ..._.mapKeys(action.payload, 'id')};
        case STREAM_SINGLE:
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload};
        default: 
            return state;
    }
}

export default streamsReducer;