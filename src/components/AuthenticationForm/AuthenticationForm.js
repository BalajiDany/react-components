import React, { Component } from 'react';
import { Typography, message } from 'antd';
import LazyRender from './LazyRender/LazyRender';
import LoginForm from './LoginForm/LoginForm';
import RegisterFrom from './RegisterForm/RegisterForm';
import styles from './AuthenticationForm.module.css';

class AuthenticationForm extends Component {

    constructor(props) {
        super(props);
        // Initialize state.
        this.state = {
            loginError: false,
            doRegister: false,
            doReset: false,
            render: false
        }

        // For Development remove once completed
        setTimeout(() => {
            this.setState({ render: true });
        }, 1000)
    }


    doReset() {
        this.setState({
            doRegister: false,
            doReset: true,
        })
    }

    doRegister() {
        this.setState({
            doRegister: true,
            doReset: false,
        })
    }

    handleLoginSubmit(p) {
        message.error('Invalid E-mail Id and Password');
        this.setState({ loginError: true });
    }

    getResetForm() {
        return (
            <h1>Reset Form</h1>
        );
    }

    getRegisterForm() {
        return (
            <RegisterFrom
                onSubmit={this.handleLoginSubmit.bind(this)} // change the login submit
            />
        );
    };

    getLoginForm() {
        return (
            <LoginForm
                error={this.state.loginError}
                onSubmit={this.handleLoginSubmit.bind(this)}
                doRegister={this.doRegister.bind(this)}
                doReset={this.doReset.bind(this)}
            />
        );
    };

    getForm() {
        if (this.state.doReset) {
            return this.getResetForm();
        } else if (this.state.doRegister) {
            return this.getRegisterForm();
        } else {
            return this.getLoginForm();
        }
    }

    render() {
        return (
            <LazyRender render={this.state.render}>
                <div className={styles.authentication_form}>
                    <Typography.Title level={3}>{this.props.title}</Typography.Title>
                    {this.getForm()}
                </div>
            </LazyRender>
        );
    };
}

export default AuthenticationForm;