import React from 'react';
import { Form, Input, Icon } from 'antd';

const EmailIdField = (props) => {

    const fieldName = 'E-mail Id'
    const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
    const field = (
        <Input
            prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder={fieldName}
        />
    );
    const internalError = isFieldTouched('emailId') && getFieldError('emailId');

    return (
        <Form.Item lable='' validateStatus={props.error || internalError ? 'error' : ''}>
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
                    ],
                })(field)
            }
        </Form.Item>
    );
}

export default EmailIdField;