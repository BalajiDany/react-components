import React from 'react';
import { Form, Input, Icon } from 'antd';

const PasswordField = (props) => {

    const fieldName = 'Password';
    const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
    const field = (
        <Input
            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder={fieldName}
            type='password'
        />
    );
    const internalError = isFieldTouched('password') && getFieldError('password');

    return (
        <Form.Item lable='' validateStatus={props.error || internalError ? 'error' : ''}>
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
    );
};

export default PasswordField;