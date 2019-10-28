import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions';

class CreateStream extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (<div>CreateStream</div>);
    }

    

}

export default connect(null, { createStream } )(CreateStream);