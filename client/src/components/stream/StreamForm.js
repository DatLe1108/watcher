import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class StreamForm extends React.Component {

    onSubmitButtonClicked = (formValues) => {
        this.props.onSubmit(formValues);
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

export default reduxForm({
    form : 'streamForm'
})(StreamForm);

