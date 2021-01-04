import React from 'react';
import config from '../config';

import '../Form.css';

class RegisterPage extends React.Component
{
    state = {
        error: '',
        user_name: {
            value: '',
            touched: false,
        },
        full_name: {
            value: '',
            touched: false,
        },
        password: {
            value: '',
            touched: false,
        },
        repeat_password: {
            value: '',
            touched: false
        }
    }

    onUserNameChanged(user_name) {
        this.setState({user_name: {value: user_name, touched: true}})
    }

    isUserNameValid() {
        return this.state.user_name.touched && this.state.user_name.value.length >= 3;
    }

    onFullNameChanged(full_name) {
        this.setState({full_name: {value: full_name, touched: true}})
    }

    isFullNameValid() {
        return this.state.full_name.touched;
    }

    onPasswordChanged(password) {
        this.setState({password: {value: password, touched: true}})
    }

    isPasswordValid() {
        return this.state.password.touched;
    }

    onRepeatPasswordChanged(repeat_password) {
        this.setState({repeat_password: {value: repeat_password, touched: true}})
    }

    isRepeatPasswordValid() {
        return this.state.password.value === this.state.repeat_password.value;
    }

    submit = (e) => {
        e.preventDefault();
        fetch(`${config.API_ENDPOINT}/auth/register`, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({
                user_name: this.state.user_name.value,
                full_name: this.state.full_name.value,
                password: this.state.password.value
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if(data.status !== 0) {
                this.setState({error: data.message});
            } else {
                window.location = "/login";
            }
        });
    }

    render() {
        return (
            <div className="Form">
                <form>
                    {!!this.state.error ? <p>{this.state.error}</p> : ''}
                    <div className="Form__form-control">
                        <label htmlFor="user_name">User Name:</label>
                        <input
                        id="user_name" 
                        onChange={e => this.onUserNameChanged(e.target.value)} 
                        />
                    </div>
                    <div className="Form__form-control">
                        <label htmlFor="full_name">Full Name: </label>
                        <input 
                        id="full_name"
                        onChange={e => this.onFullNameChanged(e.target.value)}
                        />
                    </div>
                    <div className="Form__form-control">
                        <label htmlFor="password">Password: </label>
                        <input 
                            id="password"
                            type="password"
                            onChange={e => this.onPasswordChanged(e.target.value)}
                        />
                    </div>
                    <div className="Form__form-control">
                        <label htmlFor="repeat_password">Repeat Password: </label>
                        <input 
                            id="repeat_password"
                            type="password"
                            onChange={e => this.onRepeatPasswordChanged(e.target.value)}
                        />
                    </div>
                    <div className="Form__form-control">
                        <button disabled={
                            !(
                                this.isUserNameValid() &&
                                this.isFullNameValid() &&
                                this.isPasswordValid() && 
                                this.isRepeatPasswordValid()
                            )
                        }
                        onClick={this.submit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterPage;