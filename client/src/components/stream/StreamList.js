import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin({ id, userId }) {
        
        if (this.props.currentUser === userId) {
            return (
                <div>
                    <Link to={`/stream/delete/${id}`} className="ui right floated button red">Delete</Link>
                    <Link to={`/stream/edit/${id}`}className="ui right floated button primary">Edit</Link>
                </div>
            ); 
        }

        return null;
    }

    renderListStream() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <div className="header">{stream.name}</div>
                        <div className="description">{stream.description}</div>
                    </div>
                    {this.renderAdmin(stream)}
                </div>
            );
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Stream List</h1>
                <div className="ui divided items">
                    {this.renderListStream()}
                </div>
                <div className="ui divider"></div>  
                <div>
                    <Link className="ui button primary right floated" to="/stream/create">Create stream</Link>
                </div>
            </React.Fragment>
            );
    }

}

const mapStateToProp = (state) => ({
    streams: Object.values(state.streams),
    currentUser: state.auth.userId
});

export default connect(mapStateToProp, { fetchStreams })(StreamList);