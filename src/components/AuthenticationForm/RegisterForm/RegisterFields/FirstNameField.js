import React from 'react'
import { Form, Input } from 'antd';

const FirstNameField = (props) => {

    const fieldName = 'First Name';
    const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
    const field = (
        <Input placeholder={fieldName}/>
    );
    const internalError = isFieldTouched('firstName') && getFieldError('firstName');

    return (
        <Form.Item hasFeedback validateStatus={props.error || internalError ? 'error' : ''}>
            {
                getFieldDecorator('firstName', {
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

export default FirstNameField;