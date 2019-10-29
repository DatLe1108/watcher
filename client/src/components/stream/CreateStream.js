import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class CreateStream extends React.Component {

    onFormSubmit = (formValues) => {
        this.props.createStream({...formValues, userId: this.props.userId});
    }

    render() {
        return (<StreamForm onSubmit={this.onFormSubmit}/>);
    }
}

const mapStateToProp = (state) => ({
    userId: state.auth.userId
});

export default connect(mapStateToProp, { createStream } )(CreateStream)