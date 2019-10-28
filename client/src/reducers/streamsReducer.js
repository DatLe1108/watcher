import { CREATE_STREAM } from '../actions/type';

const INIT_STATE = {};

const streamsReducer = (state = INIT_STATE, action) => {

    if (action.type === CREATE_STREAM) {
        let createdStream = action.payload;
        let streams = state.streams;
        console.log("test");
        console.log(state);
        streams[createdStream.id] = createdStream;
        return { ...state, streams };
    }

    return state;
}

export default streamsReducer;