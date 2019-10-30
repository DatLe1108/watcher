import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class StreamForm extends React.Component {

    onSubmitButtonClicked = (formValues) => {
        this.props.onSubmit(formValues);
    }

    renderError = ({ touched, error }) => {

        if (touched != false && error) {
            return (
                <div className="ui error message">
                    <p>{error}</p>
                </div>
            );
        } else {
            return null;
        }
        
    }

    renderInput = ({ input, meta, label}) => {
        const className = `field ${meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}/>
                {this.renderError(meta)}
            </div>
        );
    }

    render() {
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmitButtonClicked)}>
                    <Field name="name" label="Stream name" component={this.renderInput}/>
                    <Field name="description" label="Stream Description" component={this.renderInput}/>
                    <Link className="ui button right floated" to="/">Cancel</Link>
                    <button className="ui button primary right floated" type="submit">Submit</button>
                </form>
            </div>);
    }
}

const validate = (formValue) => {
    const errors = {};

    if (!formValue.name) {
        errors.name = 'Please enter stream name';
    }

    if (!formValue.description) {
        errors.description = 'Please enter stream description';
    }

    return errors;
};

export default reduxForm({
    form : 'streamForm',
    validate
})(StreamForm);

