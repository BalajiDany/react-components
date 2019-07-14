import React from 'react';
import { Form, Button } from 'antd';
import FirstNameField from './RegisterFields/FirstNameField';
import LastNameField from './RegisterFields/LastNameField';
import PhoneNumberField from './RegisterFields/PhoneNumberField';
import EmailIdField from './RegisterFields/EmailIdField';
import PasswordField from './RegisterFields/PasswordField';

const RegisterFrom = (props) => {


    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 10 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };

    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((error, values) => {
            props.onSubmit(values);
        });
    }

    return (
        <Form onSubmit={handleSubmit.bind(this)} style={{ minWidth: '260' }}>
            <FirstNameField error={props.error} form={props.form} />
            <LastNameField error={props.error} form={props.form} />
            <PhoneNumberField error={props.error} form={props.form} />
            <EmailIdField error={props.error} form={props.form} />
            <PasswordField error={props.error} form={props.form} />
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Regiser
            </Button>
        </Form>
    );
};

export default Form.create({ name: "RegisterFrom" })(RegisterFrom);