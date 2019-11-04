import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import history from '../../history';
import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';

class DeleteStream extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;
        // React.fragment shothand -> <> </>
        return (
            <React.Fragment> 
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
            );
    }
    
    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }
        
        return `Are you sure you want to delete the stream with tile: ${this.props.stream.name}`;
    }


    render() {
            return (
                <Modal  title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDisMiss={() => history.push('/')}
                />
            );
    }

}

const mapStateToProp = (state, ownProp) => ({
    stream: state.streams[ownProp.match.params.id]
});

export default connect(mapStateToProp, { deleteStream, fetchStream } )(DeleteStream);