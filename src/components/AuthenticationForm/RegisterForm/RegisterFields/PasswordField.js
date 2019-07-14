import React from 'react'
import { Form, Input } from 'antd';

const PasswordField = (props) => {

    const fieldName = 'Password';
    const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
    const field = (
        <Input.Password placeholder={fieldName}/>
    );
    const internalError = isFieldTouched('password') && getFieldError('password');

    return (
        <div>
            <Form.Item hasFeedback validateStatus={props.error || internalError ? 'error' : ''}>
                {
                    getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: `${fieldName} is required.`
                            },
                            ...(props.validation || [])
                        ]
                    })(field)
                }
            </Form.Item>
            <Form.Item hasFeedback validateStatus={props.error || internalError ? 'error' : ''}>
                {
                    getFieldDecorator('confirmPassword', {
                        rules: [
                            {
                                required: true,
                                message: `Confirm ${fieldName} is required.`
                            },
                            ...(props.validation || [])
                        ]
                    })(field)
                }
            </Form.Item>
        </div>
    );
};

export default PasswordField;