import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions';

class CreateStream extends React.Component {

    componentDidMount() {
        this.props.createStream({
            name: "hello",
            description: "hihihihi",
            author: "2349879234"
        });
    }

    render() {
        return (<div>CreateStream</div>);
    }

}

export default connect(null, { createStream } )(CreateStream);