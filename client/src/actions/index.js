import { LOG_IN,
        LOG_OUT,
        CREATE_STREAM,
        EDIT_STREAM,
        DELETE_STREAM,
        SHOW_STREAM,
        STREAM_LIST,
        STREAM_SINGLE } from './type';
import streamsApi from '../api/streamApi';
import history from '../history';

export const logIn = (userId) => {
    return ({
        type: LOG_IN,
        payload: {
            isSignIn: true,
            userId: userId
        }
    });
};

export const logOut = () => {
    return ({
        type: LOG_OUT,
        payload: {
            isSignIn: false,
            userId: null
        }
    });
};

export const fetchStreams = () => async (dispatch) => {
    let response = await streamsApi.get('/streams');

    dispatch({
        type: STREAM_LIST,
        payload: response.data
    });
};

export const fetchStream = (streamId) => async (dispatch) =>  {
    let response = await streamsApi.get(`/streams/${streamId}`);

    dispatch({
        type: STREAM_SINGLE,
        payload: response.data
    });
};

export const createStream = (stream) => async (dispatch) => {
    let createdStream = await streamsApi.post('/streams', stream);

    dispatch({
        type: CREATE_STREAM,
        payload: createdStream.data
    });

    history.push('/');
};

export const editStream = (stream, streamId) => async (dispatch) => {
    let updatedStream = await streamsApi.patch(`/streams/${streamId}`, stream)

    dispatch({
        type: EDIT_STREAM,
        payload: updatedStream.data
    });

    history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
    const response = await streamsApi.delete(`/streams/${id}`);

    dispatch({
        type: DELETE_STREAM,
        payload: id
    });

    history.push('/');
};

