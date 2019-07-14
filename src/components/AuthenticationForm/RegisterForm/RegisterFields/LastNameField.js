import React from 'react'
import { Form, Input } from 'antd';

const LastNameField = (props) => {

    const fieldName = 'Last Name';
    const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
    const field = (
        <Input placeholder={fieldName}/>
    );
    const internalError = isFieldTouched('lastName') && getFieldError('lastName');

    return (
        <Form.Item hasFeedback validateStatus={props.error || internalError ? 'error' : ''}>
            {
                getFieldDecorator('lastName', {
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
    );
};

export default LastNameField;