import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { createStream } from '../../actions';

class CreateStream extends React.Component {

    componentDidMount() {
        
    }

    onSubmitButtonClicked = (formValues) => {
        this.props.createStream({...formValues, userId: this.props.userId});
    }

    renderInput({input}) {
        return <input {...input}/>
    }

    render() {

        return (
            <div>
                <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmitButtonClicked)}>
                    <div className="field">
                        <label htmlFor="streamName">Stream name</label>
                        <Field name="name" component={this.renderInput} type="text"/>
                    </div>
                    <div className="field">
                        <label htmlFor="streamDescription">Stream description</label>
                        <Field name="description" component={this.renderInput} type="text"/>
                    </div>
                    <Link className="ui button right floated" to="/">Cancel</Link>
                    <button className="ui button primary right floated" type="submit">Submit</button>
                </form>
            </div>);
    }
}

const mapStateToProp = (state) => ({
    userId: state.auth.userId
});

const holder = connect(mapStateToProp, { createStream } )(CreateStream);
export default reduxForm({ form: 'createStream' })(holder);