import { CREATE_STREAM } from '../actions/type';

const INIT_STATE = {};

const streamsReducer = (state = INIT_STATE, action) => {

    if (action.type === CREATE_STREAM) {
        let createdStream = action.payload;
        return { ...state, [createdStream.id]: createdStream };
    }

    return state;
}

export default streamsReducer;