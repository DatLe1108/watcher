import React from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchStreams();
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
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui items">
                {this.renderListStream()}
            </div>);
    }

}

const mapStateToProp = (state) => ({
    streams: Object.values(state.streams)
});

export default connect(mapStateToProp, { fetchStreams })(StreamList);