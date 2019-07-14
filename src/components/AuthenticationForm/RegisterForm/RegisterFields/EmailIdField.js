import React from 'react'
import { Form, Input } from 'antd';

const EmailIdField = (props) => {

    const fieldName = 'E-mail Id'
    const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
    const field = (
        <Input placeholder={fieldName}/>
    );
    const internalError = isFieldTouched('emailId') && getFieldError('emailId');

    return (
        <Form.Item validateStatus={props.error || internalError ? 'error' : ''}>
            {
                getFieldDecorator('emailId', {
                    rules: [
                        {
                            type: 'email',
                            message: `Invalid ${fieldName}.`,
                        },
                        {
                            required: true,
                            message: `${fieldName} is required`,
                        },
                        ...(props.validation || [])
                    ],
                })(field)
            }
        </Form.Item>
    );
};

export default EmailIdField;