import React from 'react';

import AuthApiService from '../services/auth-api-service';

import '../Form.css';

class LoginPage extends React.Component
{
    state = {
        error: null,
        user_name: {
            value: '',
            touched: false
        },
        password: {
            value: '',
            touched: false
        }
    }

    usernameChanged(user_name) {
        this.setState({user_name: {value: user_name, touched: true}});
    }

    passwordChanged(password) {
        this.setState({password: {value: password, touched: true}});
    }

    validateFields() {
        return (
            this.state.password.touched &&
            this.state.password.value !== "" && 
            this.state.user_name.touched &&
            this.state.user_name.value !== ""
        );
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const user_name = this.state.user_name;
        const password = this.state.password;
    
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
          .then(res => {
            user_name.value = ''
            password.value = ''
            window.location = '/books';
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }

    render() {
        return (
            <div className="Form">
            <h1>Log In</h1>
                {!!this.state.error ? <div className="Form__error">{JSON.stringify(this.state.error)}</div> : ''}
                <form>
                    <div className="Form__form-group">
                        <label htmlFor="user_name">User Name:</label>
                        <input 
                            id="user_name"
                            onChange={e => {this.usernameChanged(e.target.value)}} />
                    </div>
                    <div className="Form__form-group">
                        <label htmlFor="password">Password: </label>
                        <input 
                            id="password"
                            type="password"
                            onChange={e => {this.passwordChanged(e.target.value)}} />
                    </div>
                    <hr />
                    <div className="Form__form-group">
                        <button 
                        disabled={!this.validateFields()}
                        onClick={this.handleSubmitJwtAuth}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;