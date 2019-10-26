import React from 'react';
import { connect } from 'react-redux';

import { logIn, logOut } from '../../actions/index';

class Login extends React.Component {

    componentDidMount() {
       window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '168047076657-aplslvges6gg20a1o4hsfnvi1lsnk40m.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
           });
       });
    }

    onAuthChange =(isSignedIn) => {
        
        if (isSignedIn) {
            this.props.logIn(this.auth.currentUser.get().getId());
        } else {
            this.props.logOut();
        }
    }

    render() {
        return (<div>Login</div>);
    }

}

const mapStateToProp = (state) => ({
    isSignedIn: state.authReducer.isSignIn
});

export default connect(mapStateToProp, { logIn, logOut })(Login);