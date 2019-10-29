import React from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';
import { fetchStream, editStream } from '../../actions';

class EditStream extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onFormSubmit = (formValue) => {
        this.props.editStream(formValue, this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <h1>Edit Stream</h1>
                <StreamForm onSubmit={this.onFormSubmit} initialValues={this.props.stream}/>
            </React.Fragment>
        );
    }

}

const mapStateToProp = (state, ownState) => ({
    stream: state.streams[ownState.match.params.id]
});

export default connect(mapStateToProp, { fetchStream, editStream })(EditStream);