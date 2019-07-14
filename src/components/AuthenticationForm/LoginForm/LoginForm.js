import React from 'react';
import { Form, Button } from 'antd';
import EmailIdField from './LoginFields/EmailIdField';
import PasswordField from './LoginFields/PasswordField';
import RememberMeField from './LoginFields/RememberMeField';

const LoginForm = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((error, values) => {
            props.onSubmit(values);
        });
    }

    return (
        <Form onSubmit={handleSubmit.bind(this)} style={{ maxWidth: '260px' }}>
            <EmailIdField error={props.error} form={props.form} ></EmailIdField>
            <PasswordField error={props.error} form={props.form} ></PasswordField>
            <RememberMeField form={props.form} >
                <Button type="link" onClick={props.doReset} style={{ float: 'right' }}>
                    Forgot password
                </Button>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Log in
                </Button>
                <div style={{ float: 'left' }}>
                    Not Registered?
                {" "}
                    <Button type="link" onClick={props.doRegister}>
                        Create Account
                    </Button>
                </div>
            </RememberMeField>
        </Form>
    );
};

export default Form.create({ name: "LoginForm" })(LoginForm);